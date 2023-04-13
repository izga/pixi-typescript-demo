import 'pixi-spine';

import * as PIXI from 'pixi.js';
import { Spine } from 'pixi-spine';

export class Character {
    public animation?: Spine;
    public groupContainer: PIXI.Container;

    constructor() {
        this.groupContainer = new PIXI.Container();

        PIXI.Assets.load("./assets/raptor-pro.json").then((resource) => {
            this.animation = new Spine(resource.spineData);
            this.animation.scale.set(0.6, 0.6);
            this.groupContainer.addChild(this.animation);

            this.animation.stateData.setMix('walk', 'jump', 0.2);
            this.animation.stateData.setMix('jump', 'walk', 0.4);

            this.animation?.state.setAnimation(0, 'walk', true);
            this.animation?.update(0.016);
        });

        console.log("Character created");
    }


    public startAnimation(animationName: string, loop: boolean) {
        this.animation?.state.setAnimation(0, animationName, loop);
        this.animation?.state.addAnimation(0, 'walk', true, 0);
    }

    public getDisplay() {
        return this.groupContainer;
    }
}