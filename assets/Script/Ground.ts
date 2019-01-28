
const { ccclass, property } = cc._decorator;

@ccclass
export default class Ground extends cc.Component {

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    @property(cc.Integer)
    speed: number = 100;

    @property(cc.Integer)
    xPosLimit: number = -45;
    @property(cc.Integer)
    xPosMax: number = 900;
    @property(cc.Integer)
    yPos: number = -250;

    start() {

    }

    update(dt) {
        this.node.setPosition(this.node.position.x -= this.speed * dt, this.yPos, 0);

        if (this.node.position.x <= this.xPosLimit)
            this.node.setPosition(this.xPosMax, this.yPos, 0);

    }
}
