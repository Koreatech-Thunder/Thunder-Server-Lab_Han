import mongoose from "mongoose";

export interface ThunderCreateDto {
    title:string;
    deadline:string;
    content:string;
    hashtags:string[];
    limitMembersCnt:number;
}