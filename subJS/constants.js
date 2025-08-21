import{Color} from  'https://cdn.skypack.dev/three@0.137';

//hex colors
export const grassColor= new Color("rgb(15, 88, 15)");
export const dirtColor=new Color("rgb(122, 79, 39)");
export const dirt2Color= new Color("rgb(11, 77, 158)");
export const sandColor= new Color("rgb(198, 170, 117)");
export const stoneColor= new Color("rgb(75, 77, 77)");

//object colors
export const treeColor=new Color("rgb(11, 66, 11)");

//map colors
export const sceneBackgroundColor= new Color("rgb(255, 238, 204)");
export const oceanColor=new Color("rgb(20, 128, 179)");
export const mapFloorSideColor=new Color("rgb(127, 45, 45)");

//light colors
export const pointLightColor=new Color("rgb(255, 203, 142)"). convertSRGBToLinear().convertSRGBToLinear();
export const ambientLightColor=new Color("rgb(255, 255, 255)");

//heights
export const MAX_HEIGHT=10;
export const STONE_HEIGHT = MAX_HEIGHT * 0.8;
export const DIRT_HEIGHT = MAX_HEIGHT * 0.7;
export const GRASS_HEIGHT = MAX_HEIGHT * 0.5;
export const SAND_HEIGHT = MAX_HEIGHT * 0.31;
export const DIRT2_HEIGHT = MAX_HEIGHT * 0;