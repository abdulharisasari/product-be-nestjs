import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BarangModule } from './barang/barang.module';
import { KategoriModule } from './kategori/kategori.module';
import { Barang } from './barang/barang.entity';
import { Kategori } from './kategori/kategori.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',    
      password: 'GDeFQeFppAVjBvQknsjLZZTTYPfYqSHe',
      database: 'railway',
      entities: [Barang, Kategori],
      synchronize: true,   
    }),
    BarangModule,
    KategoriModule,
  ],
})
export class AppModule {}
