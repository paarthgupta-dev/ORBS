import {Mesh,CylinderGeometry,MeshPhysicalMaterial}
    from 'https://cdn.skypack.dev/three@0.137';
import * as CONST from "../constants.js";

export let mapFloorSide = new Mesh(

        new CylinderGeometry(19.5,20.5,CONST.MAX_HEIGHT*0.15,50),
        new MeshPhysicalMaterial({

            color:CONST.mapFloorSideColor
        })
    );
    mapFloorSide.receiveShadow=false;
    mapFloorSide.position.set(0,(CONST.MAX_HEIGHT*0.03),0);