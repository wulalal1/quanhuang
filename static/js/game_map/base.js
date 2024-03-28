import {AcGameObject} from '/static/js/ac_game_object/base.js';
import { Controller } from '/static/js/controller/base.js';
 export class GameMap extends AcGameObject {
    constructor(root) {
        super();
        this.root = root;
        this.$canvas = $('<canvas width="1280px" height="768px" tabindex=0></canvas>');
        this.ctx = this.$canvas[0].getContext('2d');
        this.root.$kof.append(this.$canvas);
        this.$canvas.focus();
        this.controller = new Controller(this.$canvas);
        this.root.$kof.append($(`<div class="kof-head">
        <div class="kof-head-hp-0"><div><div></div></div></div>
        <div class="kof-head-timer">60</div>
        <div class="kof-head-hp-1"><div><div></div></div></div>
    </div>`));
    this.time_left = 60000;//单位:ms
    this.$timer = this.root.$kof.find(".kof-head-timer");
    }
    start(){ //开始
        
    }
    update(){ //更新
        this.time_left -= this.timedelta;
        if(this.time_left < 0){ 
            this.time_left = 0;
            let [a,b] = this.root.players;
            if(a.status !== 6 && b.status !== 6){
                a.status = 6;
                b.status = 6;
                a.frame_current_cnt = b.frame_current_cnt = 0;
                a.vx = b.vx = 0;
            }
        }
        if(this.time_left < 0){
            this.time_left = 0;
        }
        this.$timer.text(parseInt(this.time_left/1000));
        this.render();
    }
    render(){ //渲染
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        // this.ctx.fillStyle = '#000000';
        // this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    }
}
