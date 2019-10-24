---
title: JSON Transformation with Jolt
date: "2019-10-25"
template: "post"
draft: false
slug: "/catetan/json-transformation-with-jolt/"
category: "Library"
tags:
  - "Jolt Transformation"
  - "Jolt Specification"
  - "Java"
  - "JSON"
description: "Jolt is a Java based “JSON to JSON” transformation library. However, the fact that it is Java based is irrelevant to us as transformations aren’t done in Java, but rather in Jolt’s own transformation definition format. This is the main purpose of Jolt: To be able to transform JSON without being bound to a language other than JSON. Although if Jolt’s built-in transformation operations aren’t enough for your purposes, it’s easy to extend them using the Java library."
---

## What is Jolt

Jolt is a Java based “JSON to JSON” transformation library. However, the fact that it is Java based is irrelevant to us as transformations aren’t done in Java, but rather in Jolt’s own transformation definition format. This is the main purpose of Jolt: To be able to transform JSON without being bound to a language other than JSON. Although if Jolt’s built-in transformation operations aren’t enough for your purposes, it’s easy to extend them using the Java library. [[source](https://apinizer.com/json-transformation-with-jolt/)]

## Jolt Specification

A **Jolt Specification** is a JSON structure that contains two root elements: operation (string): **shift, sort, cardinality, modify-default-beta, modify-overwrite-beta, modify-define-beta, or remove**. spec (JSON): A set of key/value pairs of the form {“input-side search”: “output-side transformation”}. [[source](https://community.cloudera.com/t5/Community-Articles/Jolt-quick-reference-for-Nifi-Jolt-Processors/ta-p/244350)]

## Awal mula

Singkat cerita saya sedang mencoba API Gateway [Gravitee](https://gravitee.io/). Pada menu *Design* terdapat *JSON to JSON Transformation Gravitee Policy* yang mana merupakan sebuah fungsi untuk merubah (override) konten JSON dari suatu request atau response ke bentuk JSON yang lain (diinginkan).

Nah. Untuk merubah bentuk JSON ke bentuk JSON yang lain, fungsi tersebut di atas menggunakan **JOLT specification**.

## Contoh implementasi

Untuk memudahkan dalam mencoba atau bereksperimen dengan JOLT specification ini silahkan buka [https://jolt-demo.appspot.com/]().

Misalkan berikut ini adalah response JSON yang saya dapat dari suatu API (anggap ini sebagai JSON Input):

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    "message": "Data Submitted",
    "code": 0,
    "params": {
      "data": [
        {
          "produk": "Kopi Liong",
          "harga": 1500
        }
      ]
    }
  }
}
```

Tapi saya menginginkan (JSON Output) format JSON yang lebih sederhana, misalkan sebagai berikut:

```JSON
{
   "produk": "Kopi Liong",
   "harga": 1500
}
```

Maka JSON specification-nya adalah sebagai berikut:

```json
[
  {
    "operation": "shift",
    "spec": {
      "result": {
        "params": {
          "data": {
            "*": {
              "*": "&"
            }
          }
        }
      }
    }
  }
]
```

![jolt-spec-01.png](/media/jolt-spec-01.png)

Kemudian, misalkan dari  response JSON yang saya dapat dari suatu API di atas berubah bentuk menjadi:

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "error": {
    "message": "Data Not Found!",
    "code": 404
  }
}
```

Maka dengan JOLT specification di atas apa output yang dihasilkan? Outputnya adalah `null`.

![jolt-spec-02.png](/media/jolt-spec-02.png)

Tapi bagaimana jika saya ingin (misalkan) mendapatkan pesan error-nya? Apakah bisa? Jawabnnya adalah: bisa! Gunakan JOLT specification berikut:

```json
[
  {
    "operation": "shift",
    "spec": {
      "result": {
        "params": {
          "data": {
            "*": {
              "*": "&"
            }
          }
        }
      },
      "error": {
        "message": "error"
      }
    }
  }
]
```

![jolt-spec-03.png](/media/jolt-spec-03.png)

<u>*Source:*</u>
- [https://apinizer.com/json-transformation-with-jolt/]()
- [https://community.cloudera.com/t5/Community-Articles/Jolt-quick-reference-for-Nifi-Jolt-Processors/ta-p/244350]()
- [Jolt Transform Demo](https://jolt-demo.appspot.com/)
