import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Barang } from './barang.entity';

@Injectable()
export class BarangService {
  constructor(
    @InjectRepository(Barang)
    private barangRepository: Repository<Barang>,
  ) {}

  create(barang: Partial<Barang>) {
    const newBarang = this.barangRepository.create(barang);
    return this.barangRepository.save(newBarang);
  }

  findAll() {
    return this.barangRepository.find({ relations: ['kategori'] });
  }

  findOne(id: number) {
    return this.barangRepository.findOne({ where: { id }, relations: ['kategori'] });
  }

  async update(id: number, barang: Partial<Barang>) {
    await this.barangRepository.update(id, barang);
    return this.findOne(id);
  }

  remove(id: number) {
    return this.barangRepository.delete(id);
  }

  async bulkDelete(ids: number[]) {
   return this.barangRepository.delete(ids);
 }

}
