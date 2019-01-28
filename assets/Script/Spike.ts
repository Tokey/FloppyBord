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

 

    @property(cc.Integer)
    speed:number =100;

    @property(cc.Integer)
    xPosLimit:number=-45;
    @property(cc.Integer)
    xPosMax:number=-900;
    
    yPos:number;
    score:number;
    flagg:boolean;

    @property(cc.AudioSource)
    point:any;
    start () {
        this.yPos= Math.floor(Math.random()*298 -8);
        this.flagg=true;
    }

     update (dt) {
        this.node.setPosition(this.node.position.x -=this.speed*dt,this.yPos,0);

        if(this.node.position.x<=this.xPosLimit)
        {this.node.setPosition(this.xPosMax,this.yPos,0);
            this.yPos= Math.floor(Math.random()*298 -8);
            this.flagg=true;
        }

        if(Math.floor(this.node.position.x) >= 586 && Math.floor(this.node.position.x) <= 589 && this.flagg){
            this.flagg=false;
        this.score=cc.sys.localStorage.getItem("Score")
        this.score++;
        cc.sys.localStorage.setItem("Score", this.score);
            this.point.play();
        if(cc.sys.localStorage.getItem("HighScore")< this.score)
        cc.sys.localStorage.setItem("HighScore", this.score);
    }
        
     }
}
