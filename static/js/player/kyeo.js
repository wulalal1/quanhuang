import { Player } from "/static/js/player/base.js";
import { GIF } from "/static/js/utils/gif.js";
export class Kyeo extends Player{
    constructor(root,info){
        super(root,info);
        this.init_animations();
    }
    init_animations(){
        let outer = this;
        let offsets = [0,-22,-22,-100,0,0,0];
        for(let i=0;i<7;i++){
            let gif = new GIF();
            gif.load(`/static/images/player/Kyeo/${i}.gif`);
            this.animations.set(i,{
                gif:gif,//gif
                frame_cnt:0,//多少帧
                frame_rate:5,//每秒 帧率
                offset_y:offsets[i],//y轴偏移
                loaded:false,//是否加载完成
                scale:2,//缩放
            });
            gif.onload = function(){
                let obj = outer.animations.get(i);
                obj.frame_cnt = gif.frames.length;
                obj.loaded = true;
                if(i === 1 || i === 2){
                    obj.offset_y = -20;
                }
                else if(i === 3){
                    obj.offset_y = -100;
                    obj.frame_rate = 10;
                }
            }
        }
    }
}