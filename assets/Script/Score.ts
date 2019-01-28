// Learn TypeScript:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property(cc.Label)
    hlabel: cc.Label = null;


    score:string;
    hs:string;
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    @property(cc.AudioSource)
    woosh:any;

    start () {
        this.score=cc.sys.localStorage.getItem("Score");
        this.hs=cc.sys.localStorage.getItem("HighScore");
        if(this.hs==null)
        cc.sys.localStorage.setItem("HighScore", 0);
        this.woosh.play();

    }

     update (dt) {

        this.score=cc.sys.localStorage.getItem("Score");
        this.label.string = "SCORE = "+this.score;
        this.hs=cc.sys.localStorage.getItem("HighScore");
        this.hlabel.string = "HIGHSCORE = "+this.hs;
     }
}
