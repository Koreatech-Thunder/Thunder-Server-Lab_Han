export interface UserUpdateDto {
    name?:string;
    introduction?:string;
    temperature?:number;
    hashtags?: [number];
}