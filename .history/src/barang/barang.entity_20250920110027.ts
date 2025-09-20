import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Kategori } from '../kategori/kategori.entity';

@Entity()
export class Barang {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nama_barang: string;

  @Column()
  kategori_id: number;

  @Column()
  stok: number;

  @Column({ nullable: true })
  kelompok_barang: string;

  @Column()
  harga: number;

  @ManyToOne(() => Kategori, kategori => kategori.barang)
  @JoinColumn({ name: 'kategori_id' })
  kategori: Kategori;
}
