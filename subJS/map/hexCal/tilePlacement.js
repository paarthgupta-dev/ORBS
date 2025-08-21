import{Vector2} from  'https://cdn.skypack.dev/three@0.137';

export function tileToPosition(tileX,tileY){

    //each tile tile layer is odd(in y direction) we offset the x tile to the right a lil bit
    return new Vector2((tileX + (tileY % 2) * 0.5) * 2.0, tileY * 1.535);
    //1.77 is the gap between hexagons (all around)  (now 2 for better edges)
    //1.535 is the gap between y levels only
}