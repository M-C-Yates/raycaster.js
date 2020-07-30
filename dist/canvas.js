"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Canvas = /** @class */ (function () {
    function Canvas(canvas, context) {
        var _this = this;
        this.canvasScale = 2;
        this.Init = function () {
            var dpr = window.devicePixelRatio;
            _this.canvas.width = _this.canvasWidth * dpr;
            _this.canvas.height = _this.canvasHeight * dpr;
            _this.context.scale(_this.canvasScale, _this.canvasScale);
            _this.canvas.width = _this.Scale(_this.canvasWidth);
            _this.canvas.height = _this.Scale(_this.canvasHeight);
            _this.context.lineCap = "round";
            _this.context.lineJoin = "round";
            _this.context.lineWidth = 1;
            _this.context.fillStyle = "#000000";
            console.log(canvas.width);
            _this.context.fillRect(250, 250, 500, 500);
        };
        this.Scale = function (x) { return x * _this.canvasScale; };
        this.canvas = canvas;
        this.context = context;
        this.canvasWidth = canvas.width;
        this.canvasHeight = canvas.height;
    }
    return Canvas;
}());
exports.default = Canvas;
