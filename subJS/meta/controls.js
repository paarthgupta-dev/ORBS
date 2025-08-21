import { OrbitControls } from 'https://cdn.skypack.dev/three-stdlib@2.8.5/controls/OrbitControls';
import{camera} from "./camera.js";
import{renderer} from "./renderer.js";

export const controls = new OrbitControls(camera,renderer.domElement);
controls.target.set(0,0,0); //always looks at origin
controls.dampingEffect= 0.05; //dampness of controls
controls.enableDamping=true;//start is not dampened but end is

controls.enablePan=false;  //control click movement disabled
controls.enableZoom=false;

controls.maxPolarAngle=0.875+0.05;
controls.minPolarAngle=0.875-0.075;


const softness = 0.2; 

if (controls.getPolarAngle() < controls.minPolarAngle) {
    const diff = controls.minPolarAngle - controls.getPolarAngle();
    controls.spherical.phi += diff * softness;
} 
else if (controls.getPolarAngle() > controls.maxPolarAngle) {
    const diff = controls.maxPolarAngle - controls.getPolarAngle();
    controls.spherical.phi += diff * softness;
}