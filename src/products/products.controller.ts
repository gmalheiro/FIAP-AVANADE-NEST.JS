import {
    Body,
    Controller,
    Post,
    Get,
    Param,
    ParseUUIDPipe,
    Patch,
    Delete,
  } from '@nestjs/common';
  import { ProductsService } from './products.service';
 import  { UpdateProductDTO } from './dto/updateProduct.dto';
 import  { CreateProductDTO } from './dto/createProduct.dto'; 
  @Controller('products')
  export  class ProductsController {
    constructor(private readonly productService: ProductsService) {}
  
    // criar
    @Post()
    create(@Body() req: CreateProductDTO) {
      return this.productService.create();
    }
    // listar todos  localhost:3000/users
    @Get()
    findAll() {
      return this.productService.findAll();
    }
    // listar um  localhost:3000/users/1
    @Get(':id')
    findOne(@Param('id', ParseUUIDPipe) id: number) {
      return this.productService.findOne(id);
    }
    // atualizar
    @Patch(':id')
    update(@Param('id', ParseUUIDPipe) id: number, @Body() req: UpdateProductDTO) {
      return this.productService.update(id, req);
    }
    // deletar
    @Delete(':id')
    delete(@Param('id', ParseUUIDPipe) id: number) {
      return this.productService.delete(id);
    }
  }
