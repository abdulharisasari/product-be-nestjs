import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Barang } from '../barang/barang.entity';

@Entity()
export class Kategori {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nama_kategori: string;

  @OneToMany(() => Barang, barang => barang.kategori)
  barang: Barang[];
}
