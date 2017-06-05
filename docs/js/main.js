var GameObject = (function () {
    function GameObject(tag, elm, x, y, width, height) {
        this.div = document.createElement(tag);
        elm.appendChild(this.div);
    }
    GameObject.prototype.draw = function () {
        this.div.style.transform = "translate(" + this.x + "px," + this.y + "px)";
    };
    return GameObject;
}());
var Stage = (function () {
    function Stage(x, y) {
        this.x = x;
        this.y = y;
        var container = document.getElementById("container");
        this.div = document.createElement("bg");
        container.appendChild(this.div);
        this.div.style.transform = "translate(" + this.x + "px," + this.y + "px)";
    }
    Stage.prototype.update = function () {
        this.y += 0.5;
        if (this.y > 800) {
            this.y = -800;
        }
    };
    Stage.prototype.draw = function () {
        this.div.style.transform = "translate(" + this.x + "px," + this.y + "px)";
    };
    return Stage;
}());
var Game = (function () {
    function Game() {
        var _this = this;
        this.bg1 = new Stage(0, 0);
        this.bg2 = new Stage(0, -800);
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
        this.bg1.draw();
        requestAnimationFrame(function () { return _this.gameLoop(); });
    };
    return Game;
}());
window.addEventListener("load", function () {
    new Game();
});
//# sourceMappingURL=main.js.map