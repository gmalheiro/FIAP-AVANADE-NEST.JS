import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  async create(): Promise<string> {
    return 'Usuario criado';
  }
  async findAll() : Promise<string> {
    return 'Lista de usuarios';
  }

  async findOne(id: number) : Promise<string> {
    return `Usuario ${id}`;
  }

}
