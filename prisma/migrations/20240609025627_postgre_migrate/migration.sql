-- CreateTable
CREATE TABLE "account" (
    "id" VARCHAR(191) NOT NULL,
    "userid" VARCHAR(191) NOT NULL,
    "type" VARCHAR(191) NOT NULL,
    "provider" VARCHAR(191) NOT NULL,
    "provideraccountid" VARCHAR(191) NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" INTEGER,
    "token_type" VARCHAR(191),
    "scope" VARCHAR(191),
    "id_token" TEXT,
    "session_state" VARCHAR(191),

    CONSTRAINT "account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "album" (
    "id_album" SERIAL NOT NULL,
    "nama_album" CHAR(50) NOT NULL,
    "slug_album" CHAR(50) NOT NULL,
    "foto" TEXT NOT NULL,
    "created_by" CHAR(20) NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "modified_by" CHAR(20),
    "modified_at" TIMESTAMPTZ(6),

    CONSTRAINT "album_pkey" PRIMARY KEY ("id_album")
);

-- CreateTable
CREATE TABLE "bank" (
    "id_bank" SERIAL NOT NULL,
    "nama_bank" VARCHAR(100) NOT NULL,
    "atas_nama" VARCHAR(100) NOT NULL,
    "norek" VARCHAR(100) NOT NULL,
    "logo" VARCHAR(100) NOT NULL,

    CONSTRAINT "bank_pkey" PRIMARY KEY ("id_bank")
);

-- CreateTable
CREATE TABLE "company" (
    "id_company" SERIAL NOT NULL,
    "company_name" VARCHAR(100) NOT NULL,
    "company_desc" TEXT NOT NULL,
    "company_address" TEXT NOT NULL,
    "company_maps" TEXT NOT NULL,
    "company_phone" CHAR(30) NOT NULL,
    "company_phone2" CHAR(30) NOT NULL,
    "company_fax" CHAR(30) NOT NULL,
    "company_email" CHAR(30) NOT NULL,
    "foto" TEXT NOT NULL,
    "foto_type" CHAR(10) NOT NULL,
    "created" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "modified" TIMESTAMPTZ(6),
    "created_by" CHAR(50) NOT NULL,
    "modified_by" CHAR(50) NOT NULL,

    CONSTRAINT "company_pkey" PRIMARY KEY ("id_company")
);

-- CreateTable
CREATE TABLE "diskon" (
    "id" SERIAL NOT NULL,
    "harga" INTEGER NOT NULL,

    CONSTRAINT "diskon_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "event" (
    "id_event" SERIAL NOT NULL,
    "nama_event" VARCHAR(100) NOT NULL,
    "slug_event" VARCHAR(100),
    "deskripsi" TEXT,
    "kategori" INTEGER,
    "foto" TEXT,
    "foto_type" CHAR(10),
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" CHAR(50) NOT NULL,
    "modified_at" TIMESTAMPTZ(6),
    "modified_by" CHAR(50) NOT NULL,

    CONSTRAINT "event_pkey" PRIMARY KEY ("id_event")
);

-- CreateTable
CREATE TABLE "foto" (
    "id_foto" SERIAL NOT NULL,
    "album_id" INTEGER NOT NULL,
    "nama_foto" CHAR(100) NOT NULL,
    "slug_foto" CHAR(100) NOT NULL,
    "foto" TEXT NOT NULL,
    "created_by" CHAR(20) NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "modified_by" CHAR(20) NOT NULL,
    "modified_at" TIMESTAMPTZ(6),

    CONSTRAINT "foto_pkey" PRIMARY KEY ("id_foto")
);

-- CreateTable
CREATE TABLE "jam" (
    "id" SERIAL NOT NULL,
    "jam" VARCHAR(50) NOT NULL,
    "is_available" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "jam_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "kategori" (
    "id_kategori" SERIAL NOT NULL,
    "nama_kategori" VARCHAR(20) NOT NULL,
    "slug_kat" VARCHAR(20) NOT NULL,
    "created_by" CHAR(50) NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "modified_by" CHAR(50) NOT NULL,
    "modified_at" TIMESTAMPTZ(6),

    CONSTRAINT "kategori_pkey" PRIMARY KEY ("id_kategori")
);

-- CreateTable
CREATE TABLE "kontak" (
    "id_kontak" SERIAL NOT NULL,
    "nama_kontak" CHAR(50) NOT NULL,
    "nohp" CHAR(50) NOT NULL,
    "created_by" CHAR(50) NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "modified_by" CHAR(50) NOT NULL,
    "modified_at" TIMESTAMPTZ(6),

    CONSTRAINT "kontak_pkey" PRIMARY KEY ("id_kontak")
);

-- CreateTable
CREATE TABLE "kota" (
    "id_kota" INTEGER NOT NULL,
    "provinsi_id" INTEGER NOT NULL,
    "nama_kota" VARCHAR(100) NOT NULL
);

-- CreateTable
CREATE TABLE "lapangan" (
    "id_lapangan" SERIAL NOT NULL,
    "nama_lapangan" VARCHAR(100) NOT NULL,
    "jenis_lapangan" VARCHAR(50),
    "harga" INTEGER NOT NULL,
    "foto" TEXT NOT NULL,
    "created_by" VARCHAR(50) NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "modified_by" VARCHAR(50) NOT NULL,
    "modified_at" TIMESTAMPTZ(6),
    "status_lapangan" INTEGER,

    CONSTRAINT "lapangan_pkey" PRIMARY KEY ("id_lapangan")
);

-- CreateTable
CREATE TABLE "login_attempts" (
    "id" SERIAL NOT NULL,
    "ip_address" VARCHAR(15) NOT NULL,
    "login" VARCHAR(100) NOT NULL,
    "time" INTEGER,

    CONSTRAINT "login_attempts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "page" (
    "id_page" SERIAL NOT NULL,
    "judul_page" VARCHAR(50) NOT NULL,
    "judul_seo" VARCHAR(50) NOT NULL,
    "isi_page" TEXT NOT NULL,
    "gambar" TEXT NOT NULL,

    CONSTRAINT "page_pkey" PRIMARY KEY ("id_page")
);

-- CreateTable
CREATE TABLE "post" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(191) NOT NULL,
    "createdat" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    "updatedat" TIMESTAMPTZ(3) NOT NULL,
    "createdby" VARCHAR(191) NOT NULL,

    CONSTRAINT "post_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "provinsi" (
    "id_provinsi" INTEGER NOT NULL,
    "nama_provinsi" VARCHAR(50) NOT NULL
);

-- CreateTable
CREATE TABLE "session" (
    "id" VARCHAR(191) NOT NULL,
    "sessiontoken" VARCHAR(191) NOT NULL,
    "userid" VARCHAR(191) NOT NULL,
    "expires" TIMESTAMPTZ(3) NOT NULL,

    CONSTRAINT "session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "slider" (
    "id_slider" SERIAL NOT NULL,
    "no_urut" INTEGER NOT NULL,
    "nama_slider" VARCHAR(100) NOT NULL,
    "link" VARCHAR(100) NOT NULL,
    "foto" TEXT NOT NULL,
    "foto_type" CHAR(10) NOT NULL,
    "foto_size" INTEGER NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" CHAR(50) NOT NULL,
    "modified_at" TIMESTAMPTZ(6),
    "modified_by" CHAR(50) NOT NULL,

    CONSTRAINT "slider_pkey" PRIMARY KEY ("id_slider")
);

-- CreateTable
CREATE TABLE "subscriber" (
    "id_subscriber" SERIAL NOT NULL,
    "email" CHAR(20) NOT NULL,
    "status" INTEGER NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "subscriber_pkey" PRIMARY KEY ("id_subscriber")
);

-- CreateTable
CREATE TABLE "transaksi" (
    "id_trans" SERIAL NOT NULL,
    "id_invoice" CHAR(100) NOT NULL,
    "id_lapangan" INTEGER NOT NULL,
    "user_id" VARCHAR(191) NOT NULL,
    "subtotal" INTEGER NOT NULL,
    "diskon" INTEGER NOT NULL,
    "grand_total" INTEGER NOT NULL,
    "deadline" TIMESTAMPTZ(6) NOT NULL,
    "catatan" TEXT NOT NULL,
    "status" INTEGER NOT NULL,
    "created_date" DATE NOT NULL,
    "created_time" TIME(6) NOT NULL,
    "updatedat" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "transaksi_pkey" PRIMARY KEY ("id_trans")
);

-- CreateTable
CREATE TABLE "transaksi_detail" (
    "id_transdet" SERIAL NOT NULL,
    "trans_id" INTEGER NOT NULL,
    "lapangan_id" INTEGER NOT NULL,
    "tanggal" DATE NOT NULL,
    "jam_mulai" TIME(6),
    "durasi" INTEGER NOT NULL,
    "jam_selesai" TIME(6),
    "harga_jual" INTEGER NOT NULL,
    "total" INTEGER NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "transaksi_detail_pkey" PRIMARY KEY ("id_transdet")
);

-- CreateTable
CREATE TABLE "user" (
    "id" VARCHAR(191) NOT NULL,
    "name" VARCHAR(191),
    "email" VARCHAR(191),
    "emailverified" TIMESTAMPTZ(3),
    "image" VARCHAR(191),
    "role" VARCHAR(191),

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "username" VARCHAR(100) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "email" VARCHAR(100) NOT NULL,
    "phone" VARCHAR(20),
    "provinsi" INTEGER,
    "kota" INTEGER,
    "address" TEXT NOT NULL,
    "usertype" INTEGER NOT NULL,
    "active" BOOLEAN,
    "photo" TEXT,
    "photo_type" VARCHAR(10),
    "ip_address" VARCHAR(45) NOT NULL,
    "salt" VARCHAR(255),
    "activation_code" VARCHAR(40),
    "forgotten_password_code" VARCHAR(40),
    "forgotten_password_time" INTEGER,
    "remember_code" VARCHAR(40),
    "last_login" INTEGER,
    "created_on" INTEGER NOT NULL,
    "modified" TIMESTAMPTZ(6),

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users_group" (
    "id_group" SERIAL NOT NULL,
    "name_group" CHAR(20) NOT NULL,

    CONSTRAINT "users_group_pkey" PRIMARY KEY ("id_group")
);

-- CreateTable
CREATE TABLE "verificationtoken" (
    "identifier" VARCHAR(191) NOT NULL,
    "token" VARCHAR(191) NOT NULL,
    "expires" TIMESTAMPTZ(3) NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "account_provider_provideraccountid_key" ON "account"("provider", "provideraccountid");

-- CreateIndex
CREATE INDEX "post_name_idx" ON "post"("name");

-- CreateIndex
CREATE UNIQUE INDEX "session_sessiontoken_key" ON "session"("sessiontoken");

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "verificationtoken_token_key" ON "verificationtoken"("token");

-- CreateIndex
CREATE UNIQUE INDEX "verificationtoken_identifier_token_key" ON "verificationtoken"("identifier", "token");

-- AddForeignKey
ALTER TABLE "account" ADD CONSTRAINT "account_userid_fkey" FOREIGN KEY ("userid") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "foto" ADD CONSTRAINT "foto" FOREIGN KEY ("album_id") REFERENCES "album"("id_album") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "post" ADD CONSTRAINT "post_createdby_fkey" FOREIGN KEY ("createdby") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "session" ADD CONSTRAINT "session_userid_fkey" FOREIGN KEY ("userid") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transaksi" ADD CONSTRAINT "transaksiFK" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transaksi_detail" ADD CONSTRAINT "transaksiDetail_FK_1" FOREIGN KEY ("trans_id") REFERENCES "transaksi"("id_trans") ON DELETE CASCADE ON UPDATE CASCADE;
