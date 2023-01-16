/**
 * 
 * @route POST / thunder 
 * @desc Create Thunder
 * @access Public 
 */
import express, {Request, Response} from 'express';
import { ThunderCreateDto } from "../interfaces/thunder/ThunderCreateDto";
import { ThunderUpdateDto } from "../interfaces/thunder/ThunderUpdateDto";
import { ThunderResponseDto } from "../interfaces/thunder/ThunderResponseDto";
import {PostBaseResponseDto} from "../interfaces/common/PostBaseResponseDto";
import statusCode from "../modules/statusCode";
import message from "../modules/message";
import ThunderService from "../services/ThunderService";
import util from "../modules/util";

const createThunder = async(req:Request, res: Response):Promise<void> => {
    const thunderCreateDto: ThunderCreateDto = req.body;

    try {
        const data: PostBaseResponseDto = await ThunderService.createThunder(thunderCreateDto);

        res.status(statusCode.CREATED).send(util.success(data));       
    } catch (error) {
        console.log(error);
        res.status(statusCode.INTERNAL_SERVER_ERROR).send(
            util.fail(
                statusCode.INTERNAL_SERVER_ERROR,
                message.INTERNAL_SERVER_ERROR,
                )
            ); 
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
        res.status(statusCode.INTERNAL_SERVER_ERROR).send(
            util.fail(
                statusCode.INTERNAL_SERVER_ERROR,
                message.INTERNAL_SERVER_ERROR,
                )
            ); 
    }
}
/**
 * 
 * @route GET / thunder/:thunderId 
 * @desc Get Thunder
 * @access Public 
 */
const findThunderById = async(req:Request, res: Response):Promise<void> => {
    const {thunderId} = req.params;

    try {
        const data : ThunderResponseDto[] | null = await ThunderService.findThunderById(thunderId);

        res.status(statusCode.OK).send(util.success(data));     
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
        res.status(statusCode.INTERNAL_SERVER_ERROR).send(
            util.fail(
                statusCode.INTERNAL_SERVER_ERROR,
                message.INTERNAL_SERVER_ERROR,
                )
            ); 
    }
}

export default {
    createThunder,
    updateThunder,
    findThunderById,
    deleteThunder
}