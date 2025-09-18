// import { Controller, Get, Param } from '@nestjs/common';
// import { KategoriService } from './kategori.service';

// @Controller('kategori')
// export class KategoriController {
//   constructor(private readonly kategoriService: KategoriService) {}

//   @Get()
//   findAll() {
//     return this.kategoriService.findAll();
//   }

//   @Get(':id')
//   findOne(@Param('id') id: string) {
//     return this.kategoriService.findOne(+id);
//   }
// }

import { Controller, Get, Param, HttpStatus } from '@nestjs/common';
import { KategoriService } from './kategori.service';

@Controller('kategori')
export class KategoriController {
  constructor(private readonly kategoriService: KategoriService) {}

  @Get()
  async findAll() {
    const data = await this.kategoriService.findAll();
    return {
      statusCode: HttpStatus.OK,
      message: 'Data kategori berhasil diambil',
      data,
    };
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const data = await this.kategoriService.findOne(+id);
    return {
      statusCode: HttpStatus.OK,
      message: `Detail kategori dengan ID ${id} berhasil diambil`,
      data,
    };
  }
}
