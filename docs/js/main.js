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
    return GameObject;
}());
var Enemies = (function (_super) {
    __extends(Enemies, _super);
    function Enemies(x, y) {
        var _this = _super.call(this, "enemies", document.getElementById("container"), x, y, 50, 50) || this;
        _this.x = x;
        _this.y = y;
        _this.width = 50;
        _this.height = 50;
        _this.hp = 1;
        _this.dir = 1;
        return _this;
    }
    Enemies.prototype.move = function () {
        this.x += this.dir;
    };
    Enemies.prototype.shoot = function () {
    };
    Enemies.prototype.shift_down = function () {
        this.y += 25;
        this.dir *= -1;
    };
    return Enemies;
}(GameObject));
var Fleets = (function () {
    function Fleets() {
        this.aliens = new Array;
        this.add_aliens();
    }
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
    Fleets.prototype.add_aliens = function () {
        this.aliensx = this.aliens_number();
        this.aliensy = this.aliens_row();
        for (var i = 0; i < this.aliensy; i++) {
            for (var n = 0; n < this.aliensx; n++) {
                this.aliens.push(new Enemies(n * 80, i * 60));
            }
        }
    };
    Fleets.prototype.update = function () {
        var edge = false;
        for (var i = 0; i < this.aliens.length; i++) {
            this.aliens[i].move();
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
    return Fleets;
}());
var Stage = (function (_super) {
    __extends(Stage, _super);
    function Stage(x, y) {
        return _super.call(this, "background", document.getElementById("container"), x, y, 800, 600) || this;
    }
    Stage.prototype.update = function () {
        this.y += 0.5;
        if (this.y > 600) {
            this.y = -599;
        }
    };
    return Stage;
}(GameObject));
var Game = (function () {
    function Game() {
        var _this = this;
        this.bg1 = new Stage(0, 0);
        this.bg2 = new Stage(0, -599);
        this.player = new Player();
        this.fleet = new Fleets();
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
        this.bg1.update();
        this.bg2.update();
        this.fleet.update();
        requestAnimationFrame(function () { return _this.gameLoop(); });
    };
    return Game;
}());
window.addEventListener("load", function () {
    new Game();
});
var Player = (function (_super) {
    __extends(Player, _super);
    function Player() {
        var _this = _super.call(this, "player", document.getElementById("container"), 400, 540, 50, 50) || this;
        _this.hp = 3;
        return _this;
    }
    Player.prototype.move = function () {
    };
    Player.prototype.shoot = function () {
    };
    return Player;
}(GameObject));
//# sourceMappingURL=main.js.map