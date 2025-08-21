import {Mesh,CylinderGeometry,MeshPhysicalMaterial}
    from 'https://cdn.skypack.dev/three@0.137';
import * as CONST from "../constants.js";

export let oceanContainer= new Mesh(
        new CylinderGeometry(19,20,CONST.MAX_HEIGHT*0.15,50,true),
        new MeshPhysicalMaterial({
            color:CONST.oceanColor
        })
    );
    oceanContainer.receiveShadow=false;
    oceanContainer.position.set(0,(CONST.MAX_HEIGHT*0.05),0);
    