"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var canvas_1 = __importDefault(require("./canvas"));
var canvas = document.getElementById("canvas");
if (canvas === null) {
    throw new Error("Cannot find canvas");
}
var context = canvas.getContext("2d");
var renderer = new canvas_1.default(canvas, context);
renderer.Init();
