# NestJS Product CRUD with MySQL

Project ini adalah implementasi CRUD untuk **Barang** dan **Kategori** menggunakan **NestJS** dan **MySQL**, termasuk fitur **bulk delete** dan response dengan format standar (`statusCode`, `message`, `data`).

---

## 1. Requirement

* Node.js >= 18.x
* MySQL Server
* NestJS CLI
* Postman (untuk testing endpoint)

---

## 2. Install Project

```bash
# Install NestJS CLI jika belum
npm i -g @nestjs/cli

# Buat project baru
nest new nest-product
cd nest-product

# Install dependencies
npm install @nestjs/typeorm typeorm mysql2
```

---

## 3. Setup Database MySQL

### 3.1 Buat database

```sql
CREATE DATABASE product;
USE product;
```

### 3.2 Buat tabel `kategori`

```sql
CREATE TABLE kategori (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nama_kategori VARCHAR(255) NOT NULL
);

-- Tambahkan contoh data kategori
INSERT INTO kategori (nama_kategori) VALUES 
('Elektronik'), ('Makanan'), ('Pakaian');
```

### 3.3 Buat tabel `barang`

```sql
CREATE TABLE barang (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nama_barang VARCHAR(255) NOT NULL,
    kategori_id INT NOT NULL,
    stok INT NOT NULL,
    kelompok_barang VARCHAR(255),
    harga DECIMAL(10,2) NOT NULL,
    FOREIGN KEY (kategori_id) REFERENCES kategori(id)
);
```

---

## 4. Konfigurasi TypeORM

Edit `src/app.module.ts`:

```ts
TypeOrmModule.forRoot({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'password', // ganti sesuai MySQL kamu
  database: 'product',
  entities: [Barang, Kategori],
  synchronize: true, // buat tabel otomatis (hanya dev)
})
```

---

## 5. Menjalankan Server

```bash
npm run start:dev
```

Server akan berjalan di: `http://localhost:3000`.

---

## 6. Endpoint

### Kategori

| Method | URL            | Keterangan          |
| ------ | -------------- | ------------------- |
| GET    | /kategori      | List semua kategori |
| GET    | /kategori/\:id | Detail kategori     |

### Barang

| Method | URL                 | Keterangan                         |
| ------ | ------------------- | ---------------------------------- |
| GET    | /barang             | List semua barang beserta kategori |
| GET    | /barang/\:id        | Detail barang                      |
| POST   | /barang             | Tambah barang                      |
| PUT    | /barang/\:id        | Edit barang                        |
| DELETE | /barang/\:id        | Hapus barang                       |
| POST   | /barang/bulk-delete | Hapus beberapa barang sekaligus    |

---

## 7. Format Response

Semua endpoint mengembalikan format standar:

```json
{
  "statusCode": 200,
  "message": "Pesan sukses",
  "data": [...]
}
```

---

## 8. Postman Collection

Kamu bisa import Postman collection JSON berikut untuk langsung mencoba semua endpoint:

* CRUD Kategori & Barang
* Bulk Delete Barang
* Semua response menggunakan format standar

---

## 9. Fitur Frontend (Opsional)

* **List Barang**: kolom Nama, Stok, Harga
* **Detail Barang**: modal/bottomsheet
* **Form Tambah Barang**:

  * Nama Barang (input text)
  * Kategori (dropdown dari tabel kategori)
  * Stok (number)
  * Kelompok Barang (dropdown statis)
  * Harga (number / format rupiah)
* **Edit Barang**
* **Hapus Barang**
* **Bulk Delete**: pilih beberapa barang menggunakan checkbox

---
