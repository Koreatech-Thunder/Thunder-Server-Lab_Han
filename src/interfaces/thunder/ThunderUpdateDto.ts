export interface ThunderUpdateDto {
    title?:string;
    dDay?:string;
    meetTime?:string;
    content?:string;
    hashtags?:number[];
    hostId?:string;//id<Object>
    players?:string[];//id<Object>
    limitPlayerCount?:number;
}