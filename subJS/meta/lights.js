import {AmbientLight,PointLight}
    from 'https://cdn.skypack.dev/three@0.137';

import * as CONST from "../constants.js";

export const ambientLight = new AmbientLight(CONST.ambientLightColor,0.2);
export const light = new PointLight(CONST.pointLightColor, 80, 200 );

light.position.set(10, 20,10);

light.castShadow = true;
light.shadow.mapSize.width = 2048;
light.shadow.mapSize.height = 2048;
light.shadow.camera.near= 0.5;
light.shadow.camera.far = 500;