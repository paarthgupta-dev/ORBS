import {WebGLRenderer,ACESFilmicToneMapping,sRGBEncoding,PCFSoftShadowMap}
    from  'https://cdn.skypack.dev/three@0.137';

export const renderer = new WebGLRenderer({antialias:true});

//very important for full display quality
renderer.setPixelRatio(window.devicePixelRatio/2);
renderer.setSize(window.innerWidth, window.innerHeight);
//renderer.setSize(innerWidth,innerHeight);

renderer.toneMapping=ACESFilmicToneMapping;
renderer.outputEncoding=sRGBEncoding;

renderer.physicallyCorrectLights =true;
renderer.shadowMap.enabled=true;
renderer.shadowMap.type=PCFSoftShadowMap;
document.body.appendChild(renderer.domElement);