import { PostBaseResponseDto } from "../interfaces/common/PostBaseResponseDto";
import { ThunderCreateDto } from "../interfaces/thunder/ThunderCreateDto";
import { ThunderUpdateDto } from "../interfaces/thunder/ThunderUpdateDto";
import { ThunderResponseDto } from "../interfaces/thunder/ThunderResponseDto";
import Thunder from '../models/Thunder';

const createThunder = async(thunderCreateDto: ThunderCreateDto):Promise<PostBaseResponseDto>=>{
    try {
        const thunder = new Thunder({
            title: thunderCreateDto.title,
            dDay: thunderCreateDto.dDay,
            meetTime: thunderCreateDto.meetTime,
            hashtags: thunderCreateDto.hashtags,
            content: thunderCreateDto.content,
            hostId: thunderCreateDto.hostId,
            limitPlayerCount: thunderCreateDto.limitPlayerCount
        });

        await thunder.save();

        const data = {
            _id: thunder._id
        };

        return data;
    } catch(error) {
        console.log(error);
        throw error;
    }
}

const updateThunder = async(thunderId: string, thunderUpdateDto: ThunderUpdateDto)=>{
    try {
        const updateThunder ={
            title: thunderUpdateDto.title,
            dDay: thunderUpdateDto.dDay,
            meetTime: thunderUpdateDto.meetTime,
            hashtags: thunderUpdateDto.hashtags,
            content: thunderUpdateDto.content,
            host: thunderUpdateDto.hostId,
            players: thunderUpdateDto.players,
            limitPlayerCount: thunderUpdateDto.limitPlayerCount
        };

        await Thunder.findByIdAndUpdate(thunderId, updateThunder);
    } catch(error) {
        console.log(error);
        throw error;
    }
}

const findThunderById = async(thunderId: string)=>{
    try {
        const thunder : ThunderResponseDto[] | null = await Thunder.findById(thunderId);

        return thunder;
    } catch(error) {
        console.log(error);
        throw error;
    }
}

const deleteThunder = async(thunderId: string)=>{
    try {
        await Thunder.findByIdAndDelete(thunderId);
    } catch(error) {
        console.log(error);
        throw error;
    }
}

export default {
    createThunder,
    updateThunder,
    findThunderById,
    deleteThunder
}