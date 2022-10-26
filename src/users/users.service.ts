import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  async userLogin(user: string) {
    console.log(user);
  }
}
