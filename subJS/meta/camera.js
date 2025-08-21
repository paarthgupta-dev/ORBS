import {PerspectiveCamera}
    from 'https://cdn.skypack.dev/three@0.137';

export const camera = new PerspectiveCamera(45,innerWidth/innerHeight,0.1,1000);
camera.position.set(-17,31,33);