import { PostBaseResponseDto } from "../interfaces/common/PostBaseResponseDto";
import { UserCreateDto } from "../interfaces/user/UserCreateDto";
import { UserUpdateDto } from "../interfaces/user/UserUpdateDto";
import { UserResponseDto } from "../interfaces/user/UserResponseDto";
import User from '../models/User';

const createUser = async(userCreateDto: UserCreateDto):Promise<PostBaseResponseDto>=>{
    try {
        const user = new User({
            name: userCreateDto.name,
            hashtags: userCreateDto.hashtags,
        });

        await user.save();

        const data = {
            _id: user._id
        };

        return data;
    } catch(error) {
        console.log(error);
        throw error;
    }
}

const updateUser = async(userId: string, userUpdateDto: UserUpdateDto)=>{
    try {
        const updateUser ={
            name: userUpdateDto.name,
            introduction: userUpdateDto.introduction,
            temperature: userUpdateDto.temperature,
            hashtags: userUpdateDto.hashtags,
        };

        await User.findByIdAndUpdate(userId, updateUser);
    } catch(error) {
        console.log(error);
        throw error;
    }
}

const findUserById = async(userId: string)=>{
    try {
        const user : UserResponseDto | null = await User.findById(userId);

        return user;
    } catch(error) {
        console.log(error);
        throw error;
    }
}

const deleteUser = async(userId: string)=>{
    try {
        await User.findByIdAndDelete(userId);
    } catch(error) {
        console.log(error);
        throw error;
    }
}

export default {
    createUser,
    updateUser,
    findUserById,
    deleteUser
}