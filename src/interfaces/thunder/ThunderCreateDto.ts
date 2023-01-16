export interface ThunderCreateDto {
    title:string;
    dDay:string;
    meetTime:string;
    content:string;
    hashtags:number[];
    hostId:string;//id<Object>
    limitPlayerCount:number;
}