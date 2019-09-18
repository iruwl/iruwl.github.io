---
title: Fungsi row_to_json PostgreSQL
date: "2019-09-18"
template: "post"
draft: false
slug: "/catetan/fungsi-row-to-json-postgresql/"
category: "Database"
tags:
  - "Postgresql"
  - "row_to_json"
description: "Merupakan fungsi bawaan database PostgreSQL 9.2 dan versi selanjutnya yang dapat menghasikan format JSON dengan menjalankan sebuah query."
---

Merupakan fungsi bawaan database [PostgreSQL 9.2](https://www.postgresql.org/docs/9.2/functions-json.html) dan versi selanjutnya yang dapat menghasikan format JSON dengan menjalankan sebuah query.

## Fungsi row\_to\_json

Function|Description|Example|Example Result
--------|-----------|-------|--------------
row_to_json(record [, pretty_bool])|Returns the row as a JSON object. Line feeds will be added between level-1 elements if pretty_bool is true.|row_to_json(row(1,'foo'))|{"f1":1,"f2":"foo"}

## Contoh Penggunaan

**# Tabel author**

```plaintext
 id | name
----+-------
  1 | Jaka
  2 | Ahmad
  3 | Putri
  4 | Dani
(4 rows)
```

**# Tabel books**

```plaintext
 id | author_id |     title
----+-----------+---------------
  1 |         1 | Buku Jaka v1
  2 |         1 | Buku Jaka v2
  3 |         2 | Buku Ahmad v1
  4 |         4 | Buku Putri v1
  5 |         4 | Buku Putri v2
  6 |         4 | Buku Putri v3
  7 |         4 | Buku Putri v4
(7 rows)
````

### - Merubah setiap *row* (baris) menjadi *json object*

**Query:**

```sql
select row_to_json(author) as json from author;
```

**Hasil:**

```plaintext
        json
-------------------------
 {"id":1,"name":"Jaka"}
 {"id":2,"name":"Ahmad"}
 {"id":3,"name":"Putri"}
 {"id":4,"name":"Dani"}
(4 rows)
```

### - Merubah setiap *row* (baris) menjadi *json object* lalu memasukannya ke dalam *array*

**Query:**

```sql
select array_to_json(array_agg(baris)) as json
from (
  select id, name from author
) baris;
```
**Hasil:**

```plaintext
                                              json
-------------------------------------------------------------------------------------------------
 [{"id":1,"name":"Jaka"},{"id":2,"name":"Ahmad"},{"id":3,"name":"Putri"},{"id":4,"name":"Dani"}]
(1 row)
```

**Format:**

```json
[{
	"id": 1,
	"name": "Jaka"
}, {
	"id": 2,
	"name": "Ahmad"
}, {
	"id": 3,
	"name": "Putri"
}, {
	"id": 4,
	"name": "Dani"
}]
```

### - Contoh yang lebih kompleks

**Query:**

```sql
select row_to_json(baris) as json
from (
  select name as author, (
    select array_to_json(array_agg(j))
    from (
      select title
      from books
      where books.author_id=author.id
    ) j
  ) as books
  from author
  where id=4
) baris;
```
**Hasil:**

```plaintext
                                                                json
-------------------------------------------------------------------------------------------------------------------------------------
 {"author":"Dani","books":[{"title":"Buku Putri v1"},{"title":"Buku Putri v2"},{"title":"Buku Putri v3"},{"title":"Buku Putri v4"}]}
(1 row)
```

**Format:**

```json
{
	"author": "Dani",
	"books": [{
		"title": "Buku Putri v1"
	}, {
		"title": "Buku Putri v2"
	}, {
		"title": "Buku Putri v3"
	}, {
		"title": "Buku Putri v4"
	}]
}
```

## Referensi

- [blog.bigbinary.com](https://blog.bigbinary.com/2018/05/29/generating-json-using-postgresql-json-function.html)
- [hashrocket.com](https://hashrocket.com/blog/posts/faster-json-generation-with-postgresql)