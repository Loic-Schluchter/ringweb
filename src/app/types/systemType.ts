import { SpeciesTypes } from "@/components/SystemCard";
import { governmentType } from "./governmentType";

export type systemType = {
  id: number;
  name: string;
  slug: string;
  description: string;
  status: string
  species: SpeciesTypes
  stars: number
  government: governmentType[]

};