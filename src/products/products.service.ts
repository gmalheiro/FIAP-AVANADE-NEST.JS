import { Injectable } from '@nestjs/common';
import { UpdateProductDTO } from './dto/updateProduct.dto';

@Injectable()
export  class ProductsService {
  async create(): Promise<string> {
    return 'Produto criado com sucesso!';
  }

  async findAll(): Promise<string> {
    return 'Lista de produtos!';
  }

  async findOne(id: number): Promise<string> {
    return `produto ${id}!`;
  }

  async update(id: number, req: UpdateProductDTO): Promise<string> {
    return `Usuário ${id} atualizado com sucesso!`;
  }
}