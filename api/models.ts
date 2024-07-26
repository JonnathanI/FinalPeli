// src/utils/models.ts
export interface Film {
  id: number;
  title: string;
  director: string;
  capital: number;
  duration: number;
  releaseYear: string;
  genre: string;
  language:string;
  synopsis:string;
}

export interface Scene {
  id: number;
  description: string;
  minutes: number;
  location: string;
  dateShot:string;
  actorsInvolved:string;
  filmId: number;
}

export interface Character {
  id: number;
  description: string;
  cost: number;
  name: string;
  rol: string;
  sceneId:number;
}
