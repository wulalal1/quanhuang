let AC_GAME_OBJECT = [];
class AcGameObject{
    constructor(){
        AC_GAME_OBJECT.push(this);
        this.timedelta = 0;
        this.has_called_start = false; //确保start只执行一次

    }
    start(){ //初始执行一次
        
    }
    update(){ //每一帧执行一次

    }
    destory(){ //删除当前对象
        for(let i in AC_GAME_OBJECT){
            if(AC_GAME_OBJECT[i] === this){
                AC_GAME_OBJECT.splice(i,1);
                break;
            }
        }
    }  
}
let last_timestamp;
let AC_GAME_OBJECT_FRAME = (timestamp) =>{ //当前函数执行时刻
        for(let obj of AC_GAME_OBJECT){
            if(!obj.has_called_start){
                obj.has_called_start = true;
            }else{
                obj.timedelta = timestamp - last_timestamp;
                obj.update();
            }
        }
    last_timestamp = timestamp;
    requestAnimationFrame(AC_GAME_OBJECT_FRAME);
}
requestAnimationFrame(AC_GAME_OBJECT_FRAME); //开始游戏循环
export {
    AcGameObject
}
