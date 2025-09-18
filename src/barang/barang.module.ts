import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BarangService } from './barang.service';
import { BarangController } from './barang.controller';
import { Barang } from './barang.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Barang])],
  providers: [BarangService],
  controllers: [BarangController],
})
export class BarangModule {}
