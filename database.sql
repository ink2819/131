drop database if exists my_first_db;

create database my_first_db;



\c my_first_db

CREATE TABLE "genres" (
  "id" serial,
  "name" varchar,
  PRIMARY KEY ("id")
);

CREATE TABLE "book_users" (
  "id" serial,
  "user_id" Int,
  "book_id" Int,
  "read_status" varchar,
  PRIMARY KEY ("id")
);

CREATE INDEX "CCK" ON  "book_users" ("user_id", "book_id");

CREATE TABLE "books" (
  "id" serial,
  "title" varchar,
  "genre_id" int,
  "publishing_year" Int,
  PRIMARY KEY ("id"),
  CONSTRAINT "FK_books.id"
    FOREIGN KEY ("id")
      REFERENCES "genres"("id")
);

CREATE TABLE "users" (
  "id" serial,
  "name" varchar,
  "email" varchar,
  "password" varchar,
  "salt" varchar,
  PRIMARY KEY ("id")
);

CREATE TABLE "authors" (
  "id" serial,
  "first_name" varchar,
  "last_name" varchar,
  PRIMARY KEY ("id")
);

CREATE TABLE "authors_books" (
  "id" serial,
  "author_id" Int,
  "book_id" Int,
  PRIMARY KEY ("id"),
  CONSTRAINT "fk_author_id"
    FOREIGN KEY ("author_id")
      REFERENCES "authors"("id"),
  CONSTRAINT "fk_book_id"
    FOREIGN KEY ("book_id")
      REFERENCES "books"("id")
);

CREATE TABLE "comments" (
  "id" serial,
  "user_id" Int,
  "book_id" Int,
  "comment" varchar,
  "created_at" timestamp,
  PRIMARY KEY ("id")
);
