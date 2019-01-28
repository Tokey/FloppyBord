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

    dy:number = 50;

    @property(cc.Node)
    canvas:any;

    @property(cc.AudioSource)
     wing:any;
     @property(cc.AudioSource)
     hit:any;
    
    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.canvas.on(cc.Node.EventType.MOUSE_DOWN,(e:cc.Event.EventMouse)=>
        {       
            if(this.node.position.y<609){
                this.dy= (-450);
                this.wing.play();}
                
        }
        
        );

        
    }

    start () {
       /// cc.director.getCollisionManager().enabledDebugDraw = true;
        cc.director.getCollisionManager().enabled = true;
       /// cc.director.getCollisionManager().enabledDrawBoundingBox = true;
        cc.sys.localStorage.setItem("Score", 0);

    }

    update (dt) {
        
        this.node.setPosition(this.node.position.x,this.node.position.y -this.dy*dt)
        this.dy+=1000*dt;
            
        
    }


    onCollisionEnter(other, self) {
        
        this.hit.play();
        this.node.setPosition(this.node.position.x,this.node.position.y);
        this.dy=0;
        cc.director.loadScene("GameOver");
        
    }

    

    

  
}
