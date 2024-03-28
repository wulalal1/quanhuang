import {GameMap} from '/static/js/game_map/base.js'
import { Kyeo } from '/static/js/player/kyeo.js';
class KOF{
    constructor(id){
        this.$kof = $('#' + id);
       this.game_map = new GameMap(this);
       this.players = [
        new Kyeo(this,{
            id:0,
            x:70,
            y:0,
            width: 120,
            height: 200,
            color:'blue',
        }),
        new Kyeo(this,{
            id:1,
            x:1000,
            y:0,
            width: 120,
            height: 200,
            color:'red',
        })
       ];
    }
}
export{
    KOF
}