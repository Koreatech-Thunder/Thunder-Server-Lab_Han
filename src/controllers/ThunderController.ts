/**
 * 
 * @route POST / thunder 
 * @desc Create Thunder
 * @access Public 
 */
import express, {Request, response, Response} from 'express';
import { ThunderCreateDto } from "../interfaces/thunder/ThunderCreateDto";
import { ThunderUpdateDto } from "../interfaces/thunder/ThunderUpdateDto";
import { ThunderResponseDto } from "../interfaces/thunder/ThunderResponseDto";
import {PostBaseResponseDto} from "../interfaces/common/PostBaseResponseDto";
import statusCode from "../modules/statusCode";
import ThunderService from "../services/ThunderService";

const createThunder = async(req:Request, res: Response):Promise<void> => {
    const thunderCreateDto: ThunderCreateDto = req.body;//key:value

    try {//data is _id(IdObject)
        const data: PostBaseResponseDto = await ThunderService.createThunder(thunderCreateDto);

        res.status(statusCode.CREATED).send(data);       
    } catch (error) {
        console.log(error);
        res.status(statusCode.INTERNAL_SERVER_ERROR).send(); 
    }
}
/**
 * 
 * @route PUT / thunder/:thunderId 
 * @desc Update Thunder
 * @access Public 
 */
const updateThunder = async(req:Request, res: Response):Promise<void> => {
    const thunderUpdateDto: ThunderUpdateDto = req.body;
    const {thunderId} = req.params;

    try {
        await ThunderService.updateThunder(thunderId, thunderUpdateDto);

        res.status(statusCode.NO_CONTENT).send();     
    } catch (error) {
        console.log(error);
        res.status(statusCode.INTERNAL_SERVER_ERROR).send(); 
    }
}
/**
 * 
 * @route GET / thunder/:thunderId 
 * @desc Get Thunder
 * @access Public 
 */
const findThunderById = async(req:Request, res: Response):Promise<void> => {
    const {thunderId} = req.params;//정보 중에 thunderId만 추출

    try {
        const data : ThunderResponseDto | null = await ThunderService.findThunderById(thunderId);

        res.status(statusCode.OK).send(data);     
    } catch (error) {
        console.log(error);
        res.status(statusCode.INTERNAL_SERVER_ERROR).send(); 
    }
}
/**
 * 
 * @route GET / thunder/:thunderId 
 * @desc Get Thunder
 * @access Public 
 */
const findThunderAll = async(req:Request, res: Response):Promise<void> => {
    
    try {
        const data : ThunderResponseDto[] | null = await ThunderService.findThunderAll();

        res.status(statusCode.OK).send(data);     
    } catch (error) {
        console.log(error);
        res.status(statusCode.INTERNAL_SERVER_ERROR).send(); 
    }
}
/**
 * 
 * @route GET / thunder/hashtags?hashtag=
 * @desc Get Thunder
 * @access Public 
 */
const findThunderByHashtag = async(req:Request, res: Response):Promise<void> => {
    const hashtag = req.query.hashtag;//정보 중에 특정 hashtag 추출 ex) "singing"
    if(!hashtag) {
        response.status(404).json({error: "hashtag not found"});
        return ;
    }
    if ( typeof hashtag !== "string" ) {
        response.status(500).json({ error: 'Invalid hashtag' });
        return;
      }
    try {
        const data : ThunderResponseDto[] | null = await ThunderService.findThunderByHashtag(hashtag);

        res.status(statusCode.OK).send(data);     
    } catch (error) {
        console.log(error);
        res.status(statusCode.INTERNAL_SERVER_ERROR).send(); 
    }
}
/**
 * 
 * @route DELETEE / thunder/:thunderId 
 * @desc Delete Thunder
 * @access Public 
 */
const deleteThunder = async(req:Request, res: Response):Promise<void> => {
    const {thunderId} = req.params;

    try {
        await ThunderService.deleteThunder(thunderId);

        res.status(statusCode.NO_CONTENT).send();
    } catch (error) {
        console.log(error);
        res.status(statusCode.INTERNAL_SERVER_ERROR).send(); 
    }
}

export default {
    createThunder,
    updateThunder,
    findThunderById,
    deleteThunder,
    findThunderAll,
    findThunderByHashtag
}