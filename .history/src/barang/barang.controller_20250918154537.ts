import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { BarangService } from './barang.service';
import { Barang } from './barang.entity';

@Controller('barang')
export class BarangController {
  constructor(private readonly barangService: BarangService) {}

  @Post()
  create(@Body() barang: Partial<Barang>) {
    return this.barangService.create(barang);
  }

  @Get()
  findAll() {
    return this.barangService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.barangService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() barang: Partial<Barang>) {
    return this.barangService.update(+id, barang);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.barangService.remove(+id);
  }
}
