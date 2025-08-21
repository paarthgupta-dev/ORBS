import  SimplexNoise  
    from 'https://cdn.skypack.dev/simplex-noise@3.0.0';

import {tileToPosition} from "./tilePlacement.js";
import {makeHex} from './geometries.js';
const lowX=-15;
const highX=+15;
const lowY=-15;
const highY=+15;

//did this so that hexagons arent underwater
let min=1.1;
let max=11;

export function level(){

    let simplex = new SimplexNoise();
    for(let i=lowX; i <=highX;i++){
        for(let j=lowY; j <=highY;j++){
            
            let position=tileToPosition(i,j);
            if(position.length()>16){continue;} 
            
            let noise= (simplex.noise2D(i * 0.2, j * 0.2) + 1) * 0.5;
            let height = min + noise * (max - min);
            makeHex(height,position);
        }
    }
}level();