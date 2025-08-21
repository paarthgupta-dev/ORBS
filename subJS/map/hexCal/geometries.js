import {BoxGeometry,PointLight,Mesh,SphereGeometry,MeshBasicMaterial}
    from 'https://cdn.skypack.dev/three@0.137';
import * as CONST from "../../constants.js"

export let dirtGeo= new BoxGeometry(0,0,0);
export let dirt2Geo= new BoxGeometry(0,0,0);
export let grassGeo= new BoxGeometry(0,0,0);
export let sandGeo= new BoxGeometry(0,0,0);
export let stoneGeo= new BoxGeometry(0,0,0);
export let treeGeo= new BoxGeometry(0,0,0);



import { mergeBufferGeometries } from 'https://cdn.skypack.dev/three-stdlib@2.8.5/utils/BufferGeometryUtils';
import{hexGeometry} from "./hexaGeometry.js";
import { tree } from '../tree.js';
import { dirt2LightsLoc } from '../../meta/scene.js';
export let dirt2Lights = [];

export let totalLights = 0;

let choices = [0,1,2];//2 stone,1 sand, 0 water
export let type = choices[Math.floor(Math.random() * choices.length)];


export function makeHex(height,position){

    
    let geo= hexGeometry(height,position);

    //used for non tex initial geo//hexagonGeometries= mergeBufferGeometries([hexagonGeometries,geo]);//which to add and what to add
    //megre buffer appends new geometries on the same mesh (hexagonGeometries)

    if(height>CONST.STONE_HEIGHT){
        stoneGeo= mergeBufferGeometries([geo,stoneGeo]);
        if(type===2){let prob=0;

    if(dirt2Lights.length<6){prob=prob;}
    else{prob=0.95;}
    if (Math.random() > prob) { // 10% chance
        let light = new PointLight("rgb(255, 136, 136)", 1.5, 300); // color, intensity, distance
        

        // The top of the hex is at height / 2 above 0, so place light there + small offset
        light.position.set(position.x, height + 1, position.y);

        let sphere = new Mesh(
            new SphereGeometry(0.2, 8, 8),
            new MeshBasicMaterial({color: "rgb(217, 16, 16)"})
            
        );
        sphere.position.copy(light.position);
        let sphereClick = new Mesh(
            new SphereGeometry(0.7, 8, 8),
            new MeshBasicMaterial({
                color: "rgb(214, 134, 134)",
                transparent: true,
                opacity: 0.4
                })
            
        );
        sphereClick.position.copy(light.position);

        sphereClick.userData.linkedSphere = sphere;
        sphereClick.userData.linkedLight = light;

        dirt2Lights.push(sphereClick);
        dirt2Lights.push(sphereClick.userData.linkedSphere);
        dirt2Lights.push(sphereClick.userData.linkedLight);
        
        totalLights++;
        //console.log(totalLights+" "+type);
        
    }}
    }else if(height>CONST.DIRT_HEIGHT){
        dirtGeo= mergeBufferGeometries([geo,dirtGeo]);
        
        if(Math. random () > 0.8) {
            treeGeo = mergeBufferGeometries([treeGeo, tree(height, position)]);
        }
    }else if(height>CONST.GRASS_HEIGHT){
        grassGeo= mergeBufferGeometries([geo,grassGeo]);
    }else if(height>CONST.SAND_HEIGHT){
        sandGeo= mergeBufferGeometries([geo,sandGeo]);
        if(type===1){let prob=0;
    //
    if(dirt2Lights.length<6){prob=prob;}
    else{prob=0.975;}
    if (Math.random() > prob) { 
        let light = new PointLight("rgb(240, 139, 92)", 1, 300); // color, intensity, distance

        light.position.set(position.x, height + 1, position.y);

        let sphere = new Mesh(
            new SphereGeometry(0.2, 8, 8),
            new MeshBasicMaterial({color: "rgb(214, 127, 12)"})
            
        );
        sphere.position.copy(light.position);
        let sphereClick = new Mesh(
            new SphereGeometry(0.7, 8, 8),
            new MeshBasicMaterial({
                color: "rgb(212, 100, 59)",
                transparent: true,
                opacity: 0.4
                })
            
        );
        sphereClick.position.copy(light.position);

        sphereClick.userData.linkedSphere = sphere;
        sphereClick.userData.linkedLight = light;

        dirt2Lights.push(sphereClick);
        dirt2Lights.push(sphereClick.userData.linkedSphere);
        dirt2Lights.push(sphereClick.userData.linkedLight);
        
        totalLights++;
        //console.log(totalLights+" "+type);
        
    }}
    }
    else if (height > CONST.DIRT2_HEIGHT) {
    dirt2Geo = mergeBufferGeometries([geo, dirt2Geo]);

    if(type===0){let prob=0;
    //
    if(dirt2Lights.length<6){prob=prob;}
    else{prob=0.9;}
    if (Math.random() > prob) { // 10% chance
        let light = new PointLight("rgb(255, 174, 136)", 0.5, 300); // color, intensity, distance
        
        light.position.set(position.x, height + 1, position.y);

        let sphere = new Mesh(
            new SphereGeometry(0.2, 8, 8),
            new MeshBasicMaterial({color: "#ffcc88"})
            
        );
        sphere.position.copy(light.position);
        let sphereClick = new Mesh(
            new SphereGeometry(0.7, 8, 8),
            new MeshBasicMaterial({
                color: "#ffcc88",
                transparent: true,
                opacity: 0.2
                })
            
        );
        sphereClick.position.copy(light.position);

        sphereClick.userData.linkedSphere = sphere;
        sphereClick.userData.linkedLight = light;

        dirt2Lights.push(sphereClick);
        dirt2Lights.push(sphereClick.userData.linkedSphere);
        dirt2Lights.push(sphereClick.userData.linkedLight);
        
        totalLights++;
        //console.log(totalLights+" "+type);
        
    }}
}

}

import { scene } from '../../meta/scene.js';
import { hexGroup } from '../../meta/scene.js';
export function resetWorld() {

    dirtGeo = new BoxGeometry(0,0,0);
    dirt2Geo = new BoxGeometry(0,0,0);
    grassGeo = new BoxGeometry(0,0,0);
    sandGeo = new BoxGeometry(0,0,0);
    stoneGeo = new BoxGeometry(0,0,0);
    treeGeo = new BoxGeometry(0,0,0);

    dirt2LightsLoc.length = 0;
    dirt2Lights.length = 0;
    totalLights = 0;

    type = choices[Math.floor(Math.random() * choices.length)];

    scene.remove(hexGroup);

    
}

