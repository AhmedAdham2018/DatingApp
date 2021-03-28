import { Photo } from "./photo";

export interface Member {
    id: number;
    username: string;
    gender: string;
    age: number;
    photoUrl: string;
    knownAs: string;
    createdAt: Date;
    lastActive: Date;
    introduction: string;
    lookingFor: string;
    interests: string;
    city: string;
    country: string;
    photos: Photo[];
}
  
