import {Scene}
    from 'https://cdn.skypack.dev/three@0.137';

import * as CONST from "../constants.js";
import {ambientLight,light} from "./lights.js"
import{oceanContainer} from "../map/ocean.js";
import{mapFloorSide} from "../map/base.js";
import {dirt2Lights} from "../map/hexCal/geometries.js";
import { resetWorld } from '../map/hexCal/geometries.js';
import { level } from '../map/hexCal/worldGen.js';
export const scene = new Scene();
scene.background= CONST.sceneBackgroundColor;

import{createMeshGroup} from "../map/hexCal/hexColo.js";

export let hexGroup = createMeshGroup();

scene.add(hexGroup);
scene.add(oceanContainer,mapFloorSide);
scene.add(light,ambientLight);

export let dirt2LightsLoc = [];
dirt2Lights.forEach(stuff => {
    dirt2LightsLoc.push(stuff);
});


dirt2LightsLoc.forEach(stuff => {
    scene.add(stuff);
});

import { Raycaster, Vector2 } from 'https://cdn.skypack.dev/three@0.137';
import { camera } from './camera.js';
const raycaster = new Raycaster();
const mouse = new Vector2();

// Listen for clicks
window.addEventListener('mousedown', onClick, false);

export let lightsClicked = 0;

let audioContext = null;
const audioBuffers = {}; 

async function loadSound(type) {
    if (!audioContext) {
        audioContext = new AudioContext();
    }

    let url;
    if (type === 0) url = './assets/sounds/water.mp3';
    else if (type === 1) url = './assets/sounds/wood.mp3';
    else if (type === 2) url = './assets/sounds/fire.mp3';

    if (!url) return;

    // Only load if not already cached
    if (!audioBuffers[type]) {
        const response = await fetch(url);
        const arrayBuffer = await response.arrayBuffer();
        const buffer = await audioContext.decodeAudioData(arrayBuffer);
        audioBuffers[type] = buffer;
    }
}

// preload all
[0, 1, 2].forEach(t => loadSound(t));

function playSound(type) {
    if (!audioBuffers[type]) return;

    const source = audioContext.createBufferSource();
    source.buffer = audioBuffers[type];
    source.connect(audioContext.destination);
    source.start(0);
}

import { type } from '../map/hexCal/geometries.js';
setTimeout(() => loadSound(type), 500);


let redCollect=0;
let yellowCollect=0;
let blueCollect=0;

function onClick(event) {

    // Convert mouse position to normalized device coordinates (-1 to +1)
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    // Raycast from camera through mouse position
    raycaster.setFromCamera(mouse, camera);

    // Find intersections with all spheres
    const intersects = raycaster.intersectObjects(dirt2LightsLoc);

    if (intersects.length > 0) {
        
        console.clear();
        if(type===0){blueCollect++;}
            else if(type===1){yellowCollect++;}
            else if(type===2){redCollect++;}

        console.log("water : "+blueCollect);
        console.log("sand : "+yellowCollect);
        console.log("fire : "+redCollect);

        playSound(type);
        const clickedSphereClick = intersects[0].object;

        scene.remove(clickedSphereClick);
        scene.remove(clickedSphereClick.userData.linkedSphere);
        scene.remove(clickedSphereClick.userData.linkedLight);

        lightsClicked++;
        //console.log(lightsClicked);

        dirt2LightsLoc = dirt2LightsLoc.filter(obj => {
            return obj !== clickedSphereClick &&
                obj !== clickedSphereClick.userData.linkedSphere &&
                obj !== clickedSphereClick.userData.linkedLight;
        });
    }
    if (dirt2LightsLoc.length === 0) {
        //console.log("Array is empty");
        resetWorld();
        level();
        dirt2Lights.forEach(lightObj => scene.add(lightObj));
        dirt2Lights.forEach(stuff => {
            dirt2LightsLoc.push(stuff);
            scene.add(stuff); 
        });

        const newGroup = createMeshGroup();
        hexGroup=newGroup;
        scene.add(hexGroup);
    }   
    
}

