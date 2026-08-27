 import { moonType } from "./moonType";
 
 
 
 export type planetType = {
    id: number;
    name: string;
    description: string;
    type: string;
    moons: moonType[];
  };