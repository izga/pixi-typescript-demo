import * as PIXI from 'pixi.js';
import { Background } from './background';
import { Character } from './character';

export class GameScene {
    public gameContainer: PIXI.Container;
    public background: Background;
    public character: Character;

    constructor() {
        this.gameContainer = new PIXI.Container();
        console.log("GameScene created");

        this.background = new Background();
        this.character = new Character();

        this.gameContainer.addChild(this.background.getDisplay() as PIXI.DisplayObject);
        this.gameContainer.addChild(this.character.getDisplay() as PIXI.DisplayObject);
        this.resize(window.innerWidth, window.innerHeight);

    }


    public resize(width: number, height: number): void {
        if (this.character.getDisplay().height >= (height - 40) && width < height) {
            this.character.getDisplay().scale.set(height / this.character.getDisplay().height);
        } else {
            this.character.getDisplay().scale.set(0.6, 0.6);
        }
        if (width < height) {
            this.character.getDisplay().y = height / 2;
            this.background.getDisplay().scale.set(2);
        } else {
            this.character.getDisplay().y = height / 1.15;
            this.background.getDisplay().scale.set(1);
        }
        this.character.getDisplay().x = width / 2 - 40;
    }


    public getDisplay() {
        return this.gameContainer;
    }
}