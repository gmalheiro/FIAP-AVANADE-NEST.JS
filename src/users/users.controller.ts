import { Body, Controller, Post, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDTO } from './dto/createUser.dto';


@Controller('users')
export default class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // criar
  @Post()
  create(@Body() req: CreateUserDTO) {
    return this.usersService.create();
  }
  // listar todos
  @Get()
  findAll() {
    return this.usersService.findAll();
  }
  // listar um
  @Get(':id')
  findOne(@Param(':id') id: string){
    return this.usersService.findOne(+id);
  }
  // atualizar

  // deletar
}