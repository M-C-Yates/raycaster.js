class Canvas {
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  canvasWidth: number;
  canvasHeight: number;
  canvasScale: number = 2;

  constructor(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) {
    this.canvas = canvas;
    this.context = context;

    this.canvasWidth = canvas.width;
    this.canvasHeight = canvas.height;
  }

  Init = () => {
    let dpr = window.devicePixelRatio;
    this.canvas.width = this.canvasWidth * dpr;
    this.canvas.height = this.canvasHeight * dpr;

    this.context.scale(this.canvasScale, this.canvasScale);
    this.canvas.width = this.Scale(this.canvasWidth);
    this.canvas.height = this.Scale(this.canvasHeight);

    this.context.lineCap = "round";
    this.context.lineJoin = "round";
    this.context.lineWidth = 1;
    this.context.fillStyle = "#000000";
    console.log(canvas.width);

    this.context.fillRect(250, 250, 500, 500);
  };

  Scale = (x: number) => x * this.canvasScale;
}

export default Canvas;
