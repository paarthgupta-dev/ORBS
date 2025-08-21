import{scene} from "./subJS/meta/scene.js";
import{camera} from "./subJS/meta/camera.js";
import{renderer} from "./subJS/meta/renderer.js";
import{controls} from "./subJS/meta/controls.js";

import { dirt2LightsLoc } from "./subJS/meta/scene.js";
import { light } from "./subJS/meta/lights.js";

const lll=light.intensity;
renderer.setAnimationLoop(()=>{


  if(dirt2LightsLoc.length===3){light.intensity=15;}
  else{light.intensity=lll;}

  controls.update();//need to call this every frame if damping or auto rotate is used
  renderer.render(scene,camera);
  
});
// Stop trackpad scroll and zoom
function blockWheel(e) {e.preventDefault();}
window.addEventListener('wheel', blockWheel, { passive: false });
