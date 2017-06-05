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
var Stage = (function (_super) {
    __extends(Stage, _super);
    function Stage(x, y) {
        return _super.call(this, "bg", document.getElementById("container"), x, y, 800, 600) || this;
    }
    Stage.prototype.update = function () {
        this.y += 0.5;
        if (this.y > 800) {
            this.y = -800;
        }
    };
    return Stage;
}(GameObject));
var Game = (function () {
    function Game() {
        var _this = this;
        this.bg1 = new Stage(0, 0);
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