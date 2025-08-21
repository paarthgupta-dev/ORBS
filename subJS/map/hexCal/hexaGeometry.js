import {CylinderGeometry}
    from 'https://cdn.skypack.dev/three@0.137';

export function hexGeometry(height,position){

    let geo= new CylinderGeometry(1,1,height,6,1,false);
    geo.translate(position.x,height/2,position.y);

    return geo;
}