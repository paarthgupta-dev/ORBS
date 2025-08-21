import * as CONST from "../../constants.js";
import { Group } from 'https://cdn.skypack.dev/three@0.137';
import { hexMesh } from "./hexaMesh.js";
import { dirtGeo, dirt2Geo, grassGeo, sandGeo, stoneGeo, treeGeo } from "./geometries.js";

export function createMeshGroup() {
    const group = new Group();

    group.add(hexMesh(stoneGeo, CONST.stoneColor));
    group.add(hexMesh(grassGeo, CONST.grassColor));
    group.add(hexMesh(dirt2Geo, CONST.dirt2Color));
    group.add(hexMesh(dirtGeo, CONST.dirtColor));
    group.add(hexMesh(sandGeo, CONST.sandColor));
    group.add(hexMesh(treeGeo, CONST.treeColor));

    return group;
}