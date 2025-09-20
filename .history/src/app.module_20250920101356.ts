// import { Module } from '@nestjs/common';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { BarangModule } from './barang/barang.module';
// import { KategoriModule } from './kategori/kategori.module';
// import { Barang } from './barang/barang.entity';
// import { Kategori } from './kategori/kategori.entity';

// @Module({
//   imports: [
//     TypeOrmModule.forRoot({
//       type: 'mysql',
//       host: 'localhost',
//       port: 3306,
//       username: 'root',    
//       password: '',
//       database: 'product',
//       entities: [Barang, Kategori],
//       synchronize: true,   
//     }),
//     BarangModule,
//     KategoriModule,
//   ],
// })
// export class AppModule {}



import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { BarangModule } from './barang/barang.module';
import { KategoriModule } from './kategori/kategori.module';
import { Barang } from './barang/barang.entity';
import { Kategori } from './kategori/kategori.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), // load .env / Railway env
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.MYSQLHOST,
      port: parseInt(process.env.MYSQLPORT || '3306', 10),
      username: process.env.MYSQLUSER,
      password: process.env.MYSQLPASSWORD,
      database: process.env.MYSQLDATABASE,
      entities: [Barang, Kategori],
      synchronize: true,
    }),
    BarangModule,
    KategoriModule,
  ],
})
export class AppModule {}
