/**
 * 
 * @route POST / user 
 * @desc Create User
 * @access Public 
 */
import express, {Request, Response} from 'express';
import { UserCreateDto } from "../interfaces/user/UserCreateDto";
import { UserUpdateDto } from "../interfaces/user/UserUpdateDto";
import { UserResponseDto } from "../interfaces/user/UserResponseDto";
import {PostBaseResponseDto} from "../interfaces/common/PostBaseResponseDto";
import statusCode from "../modules/statusCode";
import message from "../modules/message";
import UserService from "../services/UserService";
import util from "../modules/util";

const createUser = async(req:Request, res: Response):Promise<void> => {
    const userCreateDto: UserCreateDto = req.body;

    try {
        const data: PostBaseResponseDto = await UserService.createUser(userCreateDto);

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
 * @route PUT / user/:userId 
 * @desc Update User
 * @access Public 
 */
const updateUser = async(req:Request, res: Response):Promise<void> => {
    const userUpdateDto: UserUpdateDto = req.body;
    const {userId} = req.params;

    try {
        await UserService.updateUser(userId, userUpdateDto);

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
 * @route GET / user/:userId 
 * @desc Get User
 * @access Public 
 */
const findUserById = async(req:Request, res: Response):Promise<void> => {
    const {userId} = req.params;

    try {
        const data: UserResponseDto | null = await UserService.findUserById(userId);

        res.status(statusCode.OK).send(data);     
    } catch (error) {
        console.log(error);
        res.status(statusCode.INTERNAL_SERVER_ERROR).send(); 
    }
}
/**
 * 
 * @route DELETEE / user/:userId 
 * @desc Delete User
 * @access Public 
 */
const deleteUser = async(req:Request, res: Response):Promise<void> => {
    const {userId} = req.params;

    try {
        await UserService.deleteUser(userId);

        res.status(statusCode.NO_CONTENT).send();
    } catch (error) {
        console.log(error);
        res.status(statusCode.INTERNAL_SERVER_ERROR).send(); 
    }
}

export default {
    createUser,
    updateUser,
    findUserById,
    deleteUser
}