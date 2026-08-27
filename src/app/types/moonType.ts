 import { planetType } from "./planetType";
 
 
 export type moonType = {
    id: number;
    name: string;
    description: string;
    type: string;
    planet: planetType;
  };