import * as PIXI from 'pixi.js';

export class Background {
    public backgrund: PIXI.Sprite;
    public groupContainer: PIXI.Container;
    constructor() {
        this.backgrund = PIXI.Sprite.from('./assets/bg.jpg');
        this.groupContainer = new PIXI.Container();
        this.groupContainer.addChild(this.backgrund);
        console.log("Background created");
    }

    public getDisplay() {
        return this.groupContainer;
    }
}