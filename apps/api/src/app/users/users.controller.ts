import { Controller, Post, Body, Get, Delete, Param, Patch } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

  constructor(private readonly userService: UsersService) {
  }

  @Post('register')
  async useRegister(
    @Body('userName') userName: string,
    @Body('email') email: string,
    @Body('password') password: string,
    @Body('profileImg') profileImg: string
  ) {
    const generatedId = await this.userService.insertUser(userName, email, password, profileImg);
    return {id: generatedId};
  }

  @Get()
  getAllUsers() {
    const users = this.userService.getAllUsers();
    return users;
  }

    @Get(':id')
    getUserById(@Param('id') userId: string) {
      const user = this.userService.getUserById(userId);
      return user;
    }

    @Patch(':id')
    async updateUser(
      @Param('id') userId: string,
      @Body('userName') userName: string,
      @Body('email') email: string,
      @Body('password') password: string,
      @Body('profileImg') profileImg: string
    ) {
        await this.userService.updateUser(userId, userName, email, password, profileImg);
        return null;
    }

  @Delete(':id')
  async removeUser(@Param('id') userId: string) {
    await this.userService.deleteUser(userId);
    return null;
  }
}
