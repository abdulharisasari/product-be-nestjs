
import { Controller, Get, Post, Put, Delete, Body, Param, HttpStatus } from '@nestjs/common';
import { BarangService } from './barang.service';
import { Barang } from './barang.entity';

@Controller('barang')
export class BarangController {
  constructor(private readonly barangService: BarangService) {}

  // @Post()
  // async create(@Body() barang: Partial<Barang>) {
  //   const data = await this.barangService.create(barang);
  //   return {
  //     statusCode: HttpStatus.CREATED,
  //     message: 'Barang berhasil ditambahkan',
  //     data,
  //   };
  // }

  @Post()
  async create(@Body() barang: Partial<Barang>) {
  // pastikan price jadi int
  if (barang.harga !== undefined) {
    barang.harga = parseInt(barang.harga as any, 10);
  }

  const data = await this.barangService.create(barang);
  return {
    statusCode: HttpStatus.CREATED,
    message: 'Barang berhasil ditambahkan',
    data,
  };
}

  @Get()
  async findAll() {
    const data = await this.barangService.findAll();
    return {
      statusCode: HttpStatus.OK,
      message: 'Data barang berhasil diambil',
      data,
    };
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const data = await this.barangService.findOne(+id);
    return {
      statusCode: HttpStatus.OK,
      message: `Detail barang dengan ID ${id} berhasil diambil`,
      data,
    };
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() barang: Partial<Barang>) {
    const data = await this.barangService.update(+id, barang);
    return {
      statusCode: HttpStatus.OK,
      message: `Barang dengan ID ${id} berhasil diperbarui`,
      data,
    };
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    await this.barangService.remove(+id);
    return {
      statusCode: HttpStatus.OK,
      message: `Barang dengan ID ${id} berhasil dihapus`,
    };
  }

 @Post('bulk-delete')
  async bulkDelete(@Body('ids') ids: number[]) {
    await this.barangService.bulkDelete(ids);
    return {
      statusCode: HttpStatus.OK,
      message: `Berhasil menghapus ${ids.length} barang`,
    };
  }
}
