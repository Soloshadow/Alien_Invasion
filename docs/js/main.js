var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Action;
(function (Action) {
    var MoveLeft = (function () {
        function MoveLeft(p) {
            this.player = p;
        }
        MoveLeft.prototype.action = function () {
            if (this.player.x >= 0) {
                this.player.x -= this.player.speed;
            }
        };
        return MoveLeft;
    }());
    Action.MoveLeft = MoveLeft;
    var MoveRight = (function () {
        function MoveRight(p) {
            this.player = p;
        }
        MoveRight.prototype.action = function () {
            if (this.player.x + this.player.width <= 800) {
                this.player.x += this.player.speed;
            }
        };
        return MoveRight;
    }());
    Action.MoveRight = MoveRight;
    var Idle = (function () {
        function Idle(p) {
            this.player = p;
        }
        Idle.prototype.action = function () {
        };
        return Idle;
    }());
    Action.Idle = Idle;
    var Attack = (function () {
        function Attack(c) {
            this.player = c;
        }
        Attack.prototype.action = function () {
            while (this.player.ammo) {
                this.player.bullets.push(new Bullets(this.player.x + this.player.width / 2, this.player.y, this.player.bulletSpeed));
                this.player.ammo = false;
            }
        };
        return Attack;
    }());
    Action.Attack = Attack;
})(Action || (Action = {}));
var GameObject = (function () {
    function GameObject(tag, elm, x, y, width, height) {
        this.div = document.createElement(tag);
        elm.appendChild(this.div);
        this.div.style.width = width + "px";
        this.div.style.height = height + "px";
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.draw();
    }
    GameObject.prototype.draw = function () {
        this.div.style.transform = "translate(" + this.x + "px," + this.y + "px)";
    };
    GameObject.prototype.update = function () {
    };
    return GameObject;
}());
var Bullets = (function (_super) {
    __extends(Bullets, _super);
    function Bullets(x, y, s) {
        var _this = _super.call(this, "bullets", document.getElementById("container"), x, y, 5, 10) || this;
        _this.x = x;
        _this.y = y;
        _this.bulletSpeed = s;
        return _this;
    }
    Bullets.prototype.update = function () {
        this.y += 1 * this.bulletSpeed;
    };
    return Bullets;
}(GameObject));
var Enemies = (function (_super) {
    __extends(Enemies, _super);
    function Enemies(x, y, s, subscribe) {
        var _this = _super.call(this, "enemies", document.getElementById("container"), x, y, 50, 50) || this;
        subscribe.subscribe(_this);
        _this.x = x;
        _this.y = y;
        _this.width = 50;
        _this.height = 50;
        _this.hp = 1;
        _this.points = 1;
        _this.speed = s;
        return _this;
    }
    Enemies.prototype.notify = function (s) {
        this.speed *= s;
        console.log("test");
    };
    Enemies.prototype.shift_down = function () {
        this.y += 25;
        this.speed *= -1;
    };
    return Enemies;
}(GameObject));
var Fleets = (function () {
    function Fleets(s) {
        this.aliens = new Array;
        this.observers = new Array();
        this.add_aliens(s);
        console.log(s);
    }
    Fleets.prototype.move = function () {
        for (var i = 0; i < this.aliens.length; i++) {
            this.aliens[i].x += this.aliens[i].speed;
        }
    };
    Fleets.prototype.aliens_number = function () {
        var available_space = 800 / 50;
        var alien_numb = available_space / 2;
        return alien_numb;
    };
    Fleets.prototype.aliens_row = function () {
        var available_height = 400 / 50;
        var rows = available_height / 2;
        return rows;
    };
    Fleets.prototype.add_aliens = function (s) {
        this.aliensx = this.aliens_number();
        this.aliensy = this.aliens_row();
        for (var i = 0; i < this.aliensy; i++) {
            for (var n = 0; n < this.aliensx; n++) {
                this.aliens.push(new Enemies(n * 80, 50 + (i * 60), s, this));
            }
        }
    };
    Fleets.prototype.sendNotifications = function (s) {
        for (var _i = 0, _a = this.observers; _i < _a.length; _i++) {
            var o = _a[_i];
            o.notify(s);
        }
    };
    Fleets.prototype.update = function () {
        var edge = false;
        this.move();
        for (var i = 0; i < this.aliens.length; i++) {
            this.aliens[i].draw();
            if (this.aliens[i].x + 50 >= 800) {
                edge = true;
            }
            else if (this.aliens[i].x <= 0) {
                edge = true;
            }
        }
        if (edge) {
            for (var j = 0; j < this.aliens.length; j++) {
                this.aliens[j].shift_down();
            }
        }
    };
    Fleets.prototype.subscribe = function (o) {
        this.observers.push(o);
    };
    Fleets.prototype.unsubscribe = function (o) {
    };
    return Fleets;
}());
var Keys;
(function (Keys) {
    Keys[Keys["LEFT"] = 37] = "LEFT";
    Keys[Keys["RIGHT"] = 39] = "RIGHT";
    Keys[Keys["SPACE"] = 32] = "SPACE";
})(Keys || (Keys = {}));
var Stage = (function (_super) {
    __extends(Stage, _super);
    function Stage(x, y) {
        var _this = _super.call(this, "background", document.getElementById("container"), x, y, 800, 600) || this;
        _this.speed = 0.5;
        return _this;
    }
    Stage.prototype.update = function () {
        this.y += this.speed;
        if (this.y > 600) {
            this.y = -599;
        }
    };
    return Stage;
}(GameObject));
var Game = (function () {
    function Game() {
        var _this = this;
        this.gameobject = new Array();
        this.gamespeed = 1;
        this.score = 0;
        this.mulitplier = 1;
        this.bg1 = new Stage(0, 0);
        this.bg2 = new Stage(0, -599);
        this.player = new Player();
        this.fleet = new Fleets(this.gamespeed);
        this.gameobject.push(this.bg1, this.bg2, this.player);
        requestAnimationFrame(function () { return _this.gameLoop(); });
    }
    Game.getInstance = function () {
        if (!Game.instance) {
            Game.instance = new Game();
        }
        return Game.instance;
    };
    Game.prototype.gameLoop = function () {
        var _this = this;
        var dead = false;
        for (var _i = 0, _a = this.gameobject; _i < _a.length; _i++) {
            var g = _a[_i];
            g.update();
            g.draw();
        }
        this.fleet.update();
        for (var i = 0; i < this.player.bullets.length; i++) {
            this.player.bullets[i].update();
            this.player.bullets[i].draw();
            if (this.player.bullets[i].y < -10) {
                this.player.bullets[i].div.remove();
                var s = this.player.bullets.indexOf(this.player.bullets[i]);
                if (i != -1) {
                    this.player.bullets.splice(s, 1);
                }
            }
            for (var j = 0; j < this.fleet.aliens.length; j++) {
                if (this.fleet.aliens[j].y + this.fleet.aliens[j].height >= 600) {
                    dead = true;
                    var endDiv = document.getElementById("gameover");
                    endDiv.innerHTML = "Game Over<br>Score: " + Math.round(this.score) + "<br>Refresh page to restart ";
                    TweenLite.to(endDiv, 3, { x: 0, y: 100, ease: Bounce.easeOut });
                }
            }
            for (var n = 0; n < this.fleet.aliens.length; n++) {
                var obj1 = this.player.bullets[i];
                var obj2 = this.fleet.aliens[n];
                if (obj1 != null && obj2 != null) {
                    if (Util.checkCollision(obj1, obj2)) {
                        this.fleet.aliens[n].hp -= 1;
                        this.fleet.sendNotifications(1.001);
                        if (this.fleet.aliens[n].hp < 1) {
                            this.score += (this.fleet.aliens[n].points * this.mulitplier);
                            var scoreDiv = document.getElementById("score");
                            scoreDiv.innerHTML = "Score: " + Math.round(this.score);
                            this.mulitplier *= 1.1;
                            this.fleet.aliens[n].div.remove();
                            var e = this.fleet.aliens.indexOf(this.fleet.aliens[n]);
                            if (i != -1) {
                                this.fleet.aliens.splice(e, 1);
                            }
                        }
                        this.player.bullets[i].div.remove();
                        var s = this.player.bullets.indexOf(this.player.bullets[i]);
                        if (i != -1) {
                            this.player.bullets.splice(s, 1);
                        }
                    }
                }
            }
        }
        for (var i = 0; i < this.fleet.aliens.length; i++) {
            var obj1 = this.player;
            var obj2 = this.fleet.aliens[i];
            if (Util.checkCollision(obj1, obj2)) {
                dead = true;
                var endDiv = document.getElementById("gameover");
                endDiv.innerHTML = "Game Over<br>Score: " + Math.round(this.score) + "<br>Refresh page to restart ";
                TweenLite.to(endDiv, 3, { x: 0, y: 100, ease: Bounce.easeOut });
            }
        }
        if (this.fleet.aliens.length == 0) {
            this.gamespeed *= 1.1;
            this.fleet = new Fleets(this.gamespeed);
        }
        if (!dead) {
            requestAnimationFrame(function () { return _this.gameLoop(); });
        }
    };
    return Game;
}());
window.addEventListener("load", function () {
    var btn = document.getElementById("start");
    TweenLite.to(btn, 3, { x: 0, y: 300, ease: Bounce.easeOut });
    btn.addEventListener("click", function () {
        Game.getInstance();
        btn.remove();
    });
});
var Player = (function (_super) {
    __extends(Player, _super);
    function Player() {
        var _this = _super.call(this, "player", document.getElementById("container"), 400, 540, 50, 50) || this;
        _this.bullets = new Array();
        _this.speed = 5;
        _this.bulletSpeed = -5;
        _this.ammo = true;
        _this.callback = function (e) { return _this.onKeyDown(e); };
        window.addEventListener("keydown", _this.callback);
        window.addEventListener("keyup", function (e) { return _this.onKeyUp(e); });
        _this.state = new Action.Idle(_this);
        return _this;
    }
    Player.prototype.onKeyDown = function (e) {
        if (e.keyCode === Keys.LEFT) {
            this.state = new Action.MoveLeft(this);
        }
        if (e.keyCode === Keys.RIGHT) {
            this.state = new Action.MoveRight(this);
        }
        if (e.keyCode === Keys.SPACE) {
            this.state = new Action.Attack(this);
        }
    };
    Player.prototype.onKeyUp = function (e) {
        this.state = new Action.Idle(this);
        this.ammo = true;
    };
    Player.prototype.update = function () {
        this.state.action();
    };
    return Player;
}(GameObject));
var Util = (function () {
    function Util() {
    }
    Util.checkCollision = function (obj1, obj2) {
        return (obj1.x < obj2.x + obj2.width &&
            obj1.x + obj1.width > obj2.x &&
            obj1.y < obj2.y + obj2.height &&
            obj1.height + obj1.y > obj2.y);
    };
    return Util;
}());
//# sourceMappingURL=main.js.map