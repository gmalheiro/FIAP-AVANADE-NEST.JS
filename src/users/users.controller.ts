import { Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export default class UsersController {
  constructor(private readonly usersService: UsersService) {}

  //Create
  @Post()
  create() {
    return this.usersService.create();
  }
  // Read all

  // Read one

  // Update

  // Delete
}
