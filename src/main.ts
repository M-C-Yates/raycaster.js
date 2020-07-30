import Canvas from "./canvas";

let canvas = document.getElementById("canvas") as HTMLCanvasElement;
if (canvas === null) {
  throw new Error("Cannot find canvas");
}

let context = canvas.getContext("2d") as CanvasRenderingContext2D;

let renderer = new Canvas(canvas, context);

renderer.Init();
