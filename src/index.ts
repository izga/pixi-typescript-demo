import * as PIXI from "pixi.js";
import { GameScene } from "./gameScene";

export const app = new PIXI.Application<HTMLCanvasElement>({
    width: window.innerWidth - 20,
    height: window.innerHeight - 20,
});

export const gameScene = new GameScene();

app.stage.addChild(gameScene.getDisplay());

window.addEventListener("resize", () => {
    app.renderer.resize(window.innerWidth, window.innerHeight);
    gameScene.resize(window.innerWidth, window.innerHeight);
});

window.addEventListener("pointerdown", () => {
    gameScene.character.startAnimation('jump', false);
});

document.body.appendChild(app.view);