import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './user.model';
import {InjectModel} from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  private users: User[] = [];

  constructor(@InjectModel('User') private readonly userModel: Model<User>) {
  }

  async insertUser(userName: string, email: string, password: string, profileImg: string) {
    const newUser = new this.userModel({
      userName: userName,
      email: email,
      profileImg: profileImg,
      password: password});

    const result = await newUser.save();
    return result.id as string;
  }

  async getAllUsers() {
    const users = await this.userModel.find().exec();
    return users.map( user => ({id: user.id, userName: user.userName, email: user.email, profileImg: user.profileImg}));
  }

  async getUserById (id: string) {
    const user = await this.findUserById(id);
    return {id: user.id, userName: user.userName, email: user.email, profileImg: user.profileImg};
  }

  async updateUser (userId: string, userName: string, email: string, password: string, profileImg: string) {
    const updatedUser = await this.findUserById(userId);
    if(userName) {
      updatedUser.userName = userName
    }
    if(email) {
      updatedUser.email = email
    }
    if(password) {
      updatedUser.password = password
    }
    if(profileImg) {
      updatedUser.profileImg = profileImg
    }

    updatedUser.save();
  }

  async deleteUser(id: string) {
    const result = await this.userModel.deleteOne({ _id: id }).exec();
    if(result.n === 0) {
      throw new NotFoundException('user doesnt exist');
    }
  }

  private async findUserById(id: string): Promise<User> {
    let user;
    try {
      user = await this.userModel.findById(id).exec();
    } catch (error) {
      throw new NotFoundException('user doesnt exist');
    }
    if(!user) {
      throw new NotFoundException('user doesnt exist');
    }
    return user;
  }
}
