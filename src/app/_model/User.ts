import { Photo } from './photo';

export interface User {
    id: number;
    username: string;
    KnowAs?: string;
    interests: string;
    age: number;
    gender: string;
    created: Date;
    lastActive: Date;
    photourl: string;
    city: string;
    country: string;
    introduction?: string;
    lookingFor?: string;
    photos?: Photo[];
}
