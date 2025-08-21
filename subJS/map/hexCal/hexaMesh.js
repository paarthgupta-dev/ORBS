import {Mesh,MeshPhysicalMaterial}
    from 'https://cdn.skypack.dev/three@0.137';

export function hexMesh(geo,color){

    let material=new MeshPhysicalMaterial({

        flatShading:true,
        color:color
    });

    let mesh= new Mesh(geo,material);

    mesh.castShadow=true;
    mesh.receiveShadow=true;
    return mesh;
}