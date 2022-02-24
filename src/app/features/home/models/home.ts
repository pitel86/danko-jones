import { Image } from './../../../shared/models/shared';


export interface Hero{
    img: Image;
    description: string;
}

export interface Main{
    title: string;
    img: Image;
    text: string;
}

export interface Gallery{
    title: string,
    image: Image
}
