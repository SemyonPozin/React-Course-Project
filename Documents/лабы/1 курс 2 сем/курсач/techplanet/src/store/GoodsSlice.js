import { createSlice } from "@reduxjs/toolkit";

let c=0;

const goods=[
    {
      name: "Apple iPhone 15 Pro 128GB",
      brend: "Apple",
      price: 4599,
      img: "https://alloplus.by/upload/iblock/05b/f08cdopkaoi5smbsxdl80wpqqb1vuywr.jpg",
      show: true,
      inStock: true,
      picture: "",
      addToOrder: true,
      new: true,
      discount: 0,
      countToBuy: 1,
      category: "phones",
      charactertics: [{name: "Разрешение экрана", desc: "1080x2400"}, {name: "Встроенная память", desc: "128 ГБ"}, {name: "Камера", desc: "50 Мп"}, {name: "Операционная система", desc: "IOS"}],
      id: Math.floor(Math.random() * 1000)+"g"+Math.floor(Math.random() * 1000),
      description: "Доступен в 8 (4+4) ядерном исполнении с тактовой частотой процессора 2 800 МГц и поддержкой сим-карт формата Nano-sim."+
+"Также  устройство обладает ярким экраном в 6.67 дюйма с разрешением 1080x2400, и двумя камерами 50 Мп и 13 Мп, которые порадуют качественными фото и видео. Быстрый процессор Qualcomm Snapdragon 685  и графический ускоритель Adreno 610 позволят решать любые задачи пользователя.",
      key: c++,
    },
    {
      name: "Samsung Galaxy A35 8GB/256GB",
      brend: "Samsung",
      price: 1529,
      img: "https://alloplus.by/upload/iblock/b6b/nlq3zgfvzdg7dkqm6ov35p7vwav0qiyz.jpg",
      show: true,
      inStock: true,
      picture: "",
      addToOrder: true,
      new: false,
      discount: 20,
      countToBuy: 1,
      category: "phones",
      charactertics: [{name: "Разрешение экрана", desc: "1080x2400"}, {name: "Встроенная память", desc: "128 ГБ"}, {name: "Камера", desc: "50 Мп"}, {name: "Операционная система", desc: "Android"}],
      id: Math.floor(Math.random() * 1000)+"g"+Math.floor(Math.random() * 1000),
      description: "Доступен в 8 (4+4) ядерном исполнении с тактовой частотой процессора 2 800 МГц и поддержкой сим-карт формата Nano-sim."+
+"Также  устройство обладает ярким экраном в 6.67 дюйма с разрешением 1080x2400, и двумя камерами 50 Мп и 13 Мп, которые порадуют качественными фото и видео. Быстрый процессор Qualcomm Snapdragon 685  и графический ускоритель Adreno 610 позволят решать любые задачи пользователя.",
      key: c++,
    },
    {
      name: "HONOR Magic6 Pro 12GB/512GB",
      brend: "Honor",
      price: 3899,
      img: "https://alloplus.by/upload/iblock/fe7/3ng9q1sr9mz0pm4gx7xet84uwn74glfz.png",
      show: true,
      inStock: true,
      picture: "",
      addToOrder: true,
      new: false,
      discount: 0,
      countToBuy: 1,
      category: "phones",
      charactertics: [{name: "Разрешение экрана", desc: "1080x2400"}, {name: "Встроенная память", desc: "128 ГБ"}, {name: "Камера", desc: "50 Мп"}, {name: "Операционная система", desc: "Android"}],
      id: Math.floor(Math.random() * 1000)+"g"+Math.floor(Math.random() * 1000),
      description: "Доступен в 8 (4+4) ядерном исполнении с тактовой частотой процессора 2 800 МГц и поддержкой сим-карт формата Nano-sim."+
+"Также  устройство обладает ярким экраном в 6.67 дюйма с разрешением 1080x2400, и двумя камерами 50 Мп и 13 Мп, которые порадуют качественными фото и видео. Быстрый процессор Qualcomm Snapdragon 685  и графический ускоритель Adreno 610 позволят решать любые задачи пользователя.",
      key: c++,
    },
    {
      name: "Apple iPhone 14 128GB",
      brend: "Apple",
      price: 2899,
      img: "https://alloplus.by/upload/iblock/11a/2fnk3n9xrkkdmz0xutk7kfku0an42nr8.jpg",
      show: true,
      inStock: true,
      picture: "",
      addToOrder: true,
      new: false,
      discount: 0,
      countToBuy: 1,
      category: "phones",
      charactertics: [{name: "Разрешение экрана", desc: "1080x2400"}, {name: "Встроенная память", desc: "128 ГБ"}, {name: "Камера", desc: "50 Мп"}, {name: "Операционная система", desc: "IOS"}],
      id: Math.floor(Math.random() * 1000)+"g"+Math.floor(Math.random() * 1000),
      description: "Доступен в 8 (4+4) ядерном исполнении с тактовой частотой процессора 2 800 МГц и поддержкой сим-карт формата Nano-sim."+
+"Также  устройство обладает ярким экраном в 6.67 дюйма с разрешением 1080x2400, и двумя камерами 50 Мп и 13 Мп, которые порадуют качественными фото и видео. Быстрый процессор Qualcomm Snapdragon 685  и графический ускоритель Adreno 610 позволят решать любые задачи пользователя.",
      key: c++,
    },
    {
      name: "Samsung Galaxy S24 8GB/256GB",
      brend: "Samsung",
      price: 3519,
      img: "https://alloplus.by/upload/iblock/a56/19c6e66ky1jz4j1n13txg2nuwqqbw81b.jpg",
      show: true,
      inStock: true,
      picture: "",
      addToOrder: true,
      new: false,
      discount: 0,
      countToBuy: 1,
      category: "phones",
      charactertics: [{name: "Разрешение экрана", desc: "1080x2400"}, {name: "Встроенная память", desc: "128 ГБ"}, {name: "Камера", desc: "50 Мп"}, {name: "Операционная система", desc: "Android"}],
      id: Math.floor(Math.random() * 1000)+"g"+Math.floor(Math.random() * 1000),
      description: "Доступен в 8 (4+4) ядерном исполнении с тактовой частотой процессора 2 800 МГц и поддержкой сим-карт формата Nano-sim."+
+"Также  устройство обладает ярким экраном в 6.67 дюйма с разрешением 1080x2400, и двумя камерами 50 Мп и 13 Мп, которые порадуют качественными фото и видео. Быстрый процессор Qualcomm Snapdragon 685  и графический ускоритель Adreno 610 позволят решать любые задачи пользователя.",
      key: c++,
    },
    {
      name: "Samsung Galaxy A05s 4GB/128GB",
      brend: "Samsung",
      price: 549,
      img: "https://alloplus.by/upload/resize_cache/iblock/de4/400_400_140cd750bba9870f18aada2478b24840a/ky39ucvb42btnlzmp3j66d6tlkcesghl.jpg",
      show: true,
      inStock: true,
      picture: "",
      addToOrder: true,
      new: false,
      discount: 0,
      countToBuy: 1,
      category: "phones",
      charactertics: [{name: "Разрешение экрана", desc: "1080x2400"}, {name: "Встроенная память", desc: "128 ГБ"}, {name: "Камера", desc: "50 Мп"}, {name: "Операционная система", desc: "Android"}],
      id: Math.floor(Math.random() * 1000)+"g"+Math.floor(Math.random() * 1000),
      description: "Доступен в 8 (4+4) ядерном исполнении с тактовой частотой процессора 2 800 МГц и поддержкой сим-карт формата Nano-sim."+
+"Также  устройство обладает ярким экраном в 6.67 дюйма с разрешением 1080x2400, и двумя камерами 50 Мп и 13 Мп, которые порадуют качественными фото и видео. Быстрый процессор Qualcomm Snapdragon 685  и графический ускоритель Adreno 610 позволят решать любые задачи пользователя.",
      key: c++,
    }, 
    {
      name: "Samsung Galaxy A15 6GB/128GB",
      brend: "Samsung",
      price: 709,
      img: "https://alloplus.by/upload/iblock/2f8/3cc4zpy0reyb3cxlsffgwq8ffyejde0j.jpg",
      show: true,
      inStock: true,
      picture: "",
      addToOrder: true,
      new: false,
      discount: 0,
      countToBuy: 1,
      category: "phones",
      charactertics: [{name: "Разрешение экрана", desc: "1080x2400"}, {name: "Встроенная память", desc: "128 ГБ"}, {name: "Камера", desc: "50 Мп"}, {name: "Операционная система", desc: "Android"}],
      id: Math.floor(Math.random() * 1000)+"g"+Math.floor(Math.random() * 1000),
      description: "Доступен в 8 (4+4) ядерном исполнении с тактовой частотой процессора 2 800 МГц и поддержкой сим-карт формата Nano-sim."+
+"Также  устройство обладает ярким экраном в 6.67 дюйма с разрешением 1080x2400, и двумя камерами 50 Мп и 13 Мп, которые порадуют качественными фото и видео. Быстрый процессор Qualcomm Snapdragon 685  и графический ускоритель Adreno 610 позволят решать любые задачи пользователя.",
      key: c++,
    },
    {
      name: "Samsung Galaxy A34 8GB/128GB",
      brend: "Samsung",
      price: 1049,
      img: "https://alloplus.by/upload/iblock/ae3/wxkv9nknkd1fi0o6jljmafeivb9mnsm9.jpg",
      show: true,
      inStock: true,
      picture: "",
      addToOrder: true,
      new: true,
      discount: 0,
      countToBuy: 1,
      category: "phones",
      charactertics: [{name: "Разрешение экрана", desc: "1080x2400"}, {name: "Встроенная память", desc: "128 ГБ"}, {name: "Камера", desc: "50 Мп"}, {name: "Операционная система", desc: "Android"}],
      id: Math.floor(Math.random() * 1000)+"g"+Math.floor(Math.random() * 1000),
      key: c++,
      description: "Доступен в 8 (4+4) ядерном исполнении с тактовой частотой процессора 2 800 МГц и поддержкой сим-карт формата Nano-sim."+
+"Также  устройство обладает ярким экраном в 6.67 дюйма с разрешением 1080x2400, и двумя камерами 50 Мп и 13 Мп, которые порадуют качественными фото и видео. Быстрый процессор Qualcomm Snapdragon 685  и графический ускоритель Adreno 610 позволят решать любые задачи пользователя.",
    },
    {
      name: "Samsung Galaxy A25 6GB/128GB",
      brend: "Samsung",
      price: 949,
      img: "https://alloplus.by/upload/iblock/c82/22el0fqvmn3z8ivx8x090jwv3yuun7ya.jpg",
      show: true,
      inStock: true,
      picture: "",
      addToOrder: true,
      new: false,
      discount: 0,
      countToBuy: 8,
      category: "phones",
      charactertics: [{name: "Разрешение экрана", desc: "1080x2400"}, {name: "Встроенная память", desc: "128 ГБ"}, {name: "Камера", desc: "50 Мп"}, {name: "Операционная система", desc: "Android"}],
      id: Math.floor(Math.random() * 1000)+"g"+Math.floor(Math.random() * 1000),
      description: "Доступен в 8 (4+4) ядерном исполнении с тактовой частотой процессора 2 800 МГц и поддержкой сим-карт формата Nano-sim."+
+"Также  устройство обладает ярким экраном в 6.67 дюйма с разрешением 1080x2400, и двумя камерами 50 Мп и 13 Мп, которые порадуют качественными фото и видео. Быстрый процессор Qualcomm Snapdragon 685  и графический ускоритель Adreno 610 позволят решать любые задачи пользователя.",
      key: c++,
    },
    {
      name: "Infinix Hot 40i 8GB/256GB ",
      brend: "Infinix",
      price: 559,
      img: "https://alloplus.by/upload/resize_cache/iblock/4a5/400_400_140cd750bba9870f18aada2478b24840a/9d69xtorcn4abxrh1lwael8ejby41yp6.png",
      show: true,
      inStock: true,
      picture: "",
      addToOrder: true,
      new: false,
      discount: 0,
      countToBuy: 1,
      category: "phones",
      charactertics: [{name: "Разрешение экрана", desc: "1080x2400"}, {name: "Встроенная память", desc: "128 ГБ"}, {name: "Камера", desc: "50 Мп"}, {name: "Операционная система", desc: "Android"}],
      id: Math.floor(Math.random() * 1000)+"g"+Math.floor(Math.random() * 1000),
      description: "Доступен в 8 (4+4) ядерном исполнении с тактовой частотой процессора 2 800 МГц и поддержкой сим-карт формата Nano-sim."+
+"Также  устройство обладает ярким экраном в 6.67 дюйма с разрешением 1080x2400, и двумя камерами 50 Мп и 13 Мп, которые порадуют качественными фото и видео. Быстрый процессор Qualcomm Snapdragon 685  и графический ускоритель Adreno 610 позволят решать любые задачи пользователя.",
      key: c++,
    },
    {
      name: "Realme C67 8GB/256GB",
      brend: "Realme",
      price: 799,
      img: "https://alloplus.by/upload/resize_cache/iblock/c28/400_400_140cd750bba9870f18aada2478b24840a/7m23k45dc9q3dlti4hj6o73e3gimuyum.jpg",
      show: true,
      inStock: true,
      picture: "",
      addToOrder: true,
      new: true,
      discount: 0,
      countToBuy: 1,
      category: "phones",
      charactertics: [{name: "Разрешение экрана", desc: "1080x2400"}, {name: "Встроенная память", desc: "128 ГБ"}, {name: "Камера", desc: "50 Мп"}, {name: "Операционная система", desc: "Android"}],
      id: Math.floor(Math.random() * 1000)+"g"+Math.floor(Math.random() * 1000),
      description: "Доступен в 8 (4+4) ядерном исполнении с тактовой частотой процессора 2 800 МГц и поддержкой сим-карт формата Nano-sim."+
+"Также  устройство обладает ярким экраном в 6.67 дюйма с разрешением 1080x2400, и двумя камерами 50 Мп и 13 Мп, которые порадуют качественными фото и видео. Быстрый процессор Qualcomm Snapdragon 685  и графический ускоритель Adreno 610 позволят решать любые задачи пользователя.",
      key: c++,
    },
    {
      name: "Realme Note 50 4GB/128GB",
      brend: "Realme",
      price: 399,
      img: "https://alloplus.by/upload/resize_cache/iblock/f2c/400_400_140cd750bba9870f18aada2478b24840a/q15r1n9a1o94yrx3op1w3j229zz13b2b.jpg",
      show: true,
      inStock: true,
      picture: "",
      addToOrder: true,
      new: false,
      discount: 10,
      countToBuy: 1,
      category: "phones",
      charactertics: [{name: "Разрешение экрана", desc: "1080x2400"}, {name: "Встроенная память", desc: "128 ГБ"}, {name: "Камера", desc: "50 Мп"}, {name: "Операционная система", desc: "Android"}],
      id: Math.floor(Math.random() * 1000)+"g"+Math.floor(Math.random() * 1000),
      description: "Доступен в 8 (4+4) ядерном исполнении с тактовой частотой процессора 2 800 МГц и поддержкой сим-карт формата Nano-sim."+
+"Также  устройство обладает ярким экраном в 6.67 дюйма с разрешением 1080x2400, и двумя камерами 50 Мп и 13 Мп, которые порадуют качественными фото и видео. Быстрый процессор Qualcomm Snapdragon 685  и графический ускоритель Adreno 610 позволят решать любые задачи пользователя.",
      key: c++,
    },
    {
      name: "Xiaomi Redmi A3 128GB 4GB",
      brend: "Xiaomi",
      price: 399,
      img: "https://alloplus.by/upload/resize_cache/iblock/845/400_400_140cd750bba9870f18aada2478b24840a/cnv2wh1wp6ncpvepicw7x1y0xuqbiwdn.jpg",
      show: true,
      inStock: true,
      picture: "",
      addToOrder: true,
      new: false,
      discount: 0,
      countToBuy: 1,
      category: "phones",
      charactertics: [{name: "Разрешение экрана", desc: "1080x2400"}, {name: "Встроенная память", desc: "128 ГБ"}, {name: "Камера", desc: "50 Мп"}, {name: "Операционная система", desc: "Android"}],
      id: Math.floor(Math.random() * 1000)+"g"+Math.floor(Math.random() * 1000),
      description: "Доступен в 8 (4+4) ядерном исполнении с тактовой частотой процессора 2 800 МГц и поддержкой сим-карт формата Nano-sim."+
+"Также  устройство обладает ярким экраном в 6.67 дюйма с разрешением 1080x2400, и двумя камерами 50 Мп и 13 Мп, которые порадуют качественными фото и видео. Быстрый процессор Qualcomm Snapdragon 685  и графический ускоритель Adreno 610 позволят решать любые задачи пользователя.",
      key: c++,
    },
    {
      name: "Honor X8b 8GB/128GB",
      brend: "Honor",
      price: 749,
      img: "https://alloplus.by/upload/resize_cache/iblock/cd6/400_400_140cd750bba9870f18aada2478b24840a/4sm7ydfj4shmpd2g53bju1q1kp42iltk.png",
      show: true,
      inStock: true,
      picture: "",
      addToOrder: true,
      new: true,
      discount: 0,
      countToBuy: 1,
      category: "phones",
      charactertics: [{name: "Разрешение экрана", desc: "1080x2400"}, {name: "Встроенная память", desc: "128 ГБ"}, {name: "Камера", desc: "50 Мп"}, {name: "Операционная система", desc: "Android"}],
      id: Math.floor(Math.random() * 1000)+"g"+Math.floor(Math.random() * 1000),
      description: "Доступен в 8 (4+4) ядерном исполнении с тактовой частотой процессора 2 800 МГц и поддержкой сим-карт формата Nano-sim."+
+"Также  устройство обладает ярким экраном в 6.67 дюйма с разрешением 1080x2400, и двумя камерами 50 Мп и 13 Мп, которые порадуют качественными фото и видео. Быстрый процессор Qualcomm Snapdragon 685  и графический ускоритель Adreno 610 позволят решать любые задачи пользователя.",
      key: c++,
    },
    {
      name: "Xiaomi 14 512GB 12GB",
      brend: "Xiaomi",
      price: 3449,
      img: "https://alloplus.by/upload/resize_cache/iblock/d91/400_400_140cd750bba9870f18aada2478b24840a/fvm4awa5ou7sh7bee0yhau0e2zzdg3n3.jpg",
      show: true,
      inStock: true,
      picture: "",
      addToOrder: true,
      new: true,
      discount: 0,
      countToBuy: 1,
      category: "phones",
      charactertics: [{name: "Разрешение экрана", desc: "1080x2400"}, {name: "Встроенная память", desc: "128 ГБ"}, {name: "Камера", desc: "50 Мп"}, {name: "Операционная система", desc: "Android"}],
      id: Math.floor(Math.random() * 1000)+"g"+Math.floor(Math.random() * 1000),
      description: "Доступен в 8 (4+4) ядерном исполнении с тактовой частотой процессора 2 800 МГц и поддержкой сим-карт формата Nano-sim."+
+"Также  устройство обладает ярким экраном в 6.67 дюйма с разрешением 1080x2400, и двумя камерами 50 Мп и 13 Мп, которые порадуют качественными фото и видео. Быстрый процессор Qualcomm Snapdragon 685  и графический ускоритель Adreno 610 позволят решать любые задачи пользователя.",
      key: c++,
    },
    {
      name: "Xiaomi Redmi Note 13 Pro 512GB 12GB",
      brend: "Xiaomi",
      price: 1449,
      img: "https://alloplus.by/upload/resize_cache/iblock/987/400_400_140cd750bba9870f18aada2478b24840a/qlvprnw3ta02x0uvf524l0xczlexdzok.jpg",
      show: true,
      inStock: true,
      picture: "",
      addToOrder: true,
      new: false,
      discount: 0,
      countToBuy: 1,
      category: "phones",
      charactertics: [{name: "Разрешение экрана", desc: "1080x2400"}, {name: "Встроенная память", desc: "128 ГБ"}, {name: "Камера", desc: "50 Мп"}, {name: "Операционная система", desc: "Android"}],
      id: Math.floor(Math.random() * 1000)+"g"+Math.floor(Math.random() * 1000),
      description: "Доступен в 8 (4+4) ядерном исполнении с тактовой частотой процессора 2 800 МГц и поддержкой сим-карт формата Nano-sim."+
+"Также  устройство обладает ярким экраном в 6.67 дюйма с разрешением 1080x2400, и двумя камерами 50 Мп и 13 Мп, которые порадуют качественными фото и видео. Быстрый процессор Qualcomm Snapdragon 685  и графический ускоритель Adreno 610 позволят решать любые задачи пользователя.",
      key: c++,
    },
    {
      name: "POCO M6 Pro 512GB 12GB",
      brend: "Poco",
      price: 1199,
      img: "https://alloplus.by/upload/resize_cache/iblock/e9e/400_400_140cd750bba9870f18aada2478b24840a/j5hl78ypa27dohupssuyzze6ila7teeb.jpg",
      show: true,
      inStock: true,
      picture: "",
      addToOrder: true,
      new: false,
      discount: 10,
      countToBuy: 1,
      category: "phones",
      charactertics: "",
      id: Math.floor(Math.random() * 1000)+"g"+Math.floor(Math.random() * 1000),
      description: "Доступен в 8 (4+4) ядерном исполнении с тактовой частотой процессора 2 800 МГц и поддержкой сим-карт формата Nano-sim."+
+"Также  устройство обладает ярким экраном в 6.67 дюйма с разрешением 1080x2400, и двумя камерами 50 Мп и 13 Мп, которые порадуют качественными фото и видео. Быстрый процессор Qualcomm Snapdragon 685  и графический ускоритель Adreno 610 позволят решать любые задачи пользователя.",
      key: c++,
    },
    {
      name: "Xiaomi Redmi 13C 128GB 4GB",
      brend: "Xiaomi",
      price: 399,
      img: "https://alloplus.by/upload/resize_cache/iblock/670/400_400_140cd750bba9870f18aada2478b24840a/dd9e7in114rnybww1ytb9s4h9kq6j1xl.jpg",
      show: true,
      inStock: true,
      picture: "",
      addToOrder: true,
      new: false,
      discount: 0,
      countToBuy: 1,
      category: "phones",
      charactertics: [{name: "Разрешение экрана", desc: "1080x2400"}, {name: "Встроенная память", desc: "128 ГБ"}, {name: "Камера", desc: "50 Мп"}, {name: "Операционная система", desc: "Android"}],
      id: Math.floor(Math.random() * 1000)+"g"+Math.floor(Math.random() * 1000),
      description: "Доступен в 8 (4+4) ядерном исполнении с тактовой частотой процессора 2 800 МГц и поддержкой сим-карт формата Nano-sim."+
+"Также  устройство обладает ярким экраном в 6.67 дюйма с разрешением 1080x2400, и двумя камерами 50 Мп и 13 Мп, которые порадуют качественными фото и видео. Быстрый процессор Qualcomm Snapdragon 685  и графический ускоритель Adreno 610 позволят решать любые задачи пользователя.",
      key: c++,
    },
    {
      name: "Honor X7b 8GB/128GB",
      brend: "Honor",
      price: 649,
      img: "https://alloplus.by/upload/resize_cache/iblock/098/400_400_140cd750bba9870f18aada2478b24840a/8874uarwj03js9dtzhlc136c7gx9z7v8.jpg",
      show: true,
      inStock: true,
      picture: "",
      addToOrder: true,
      new: false,
      discount: 0,
      countToBuy: 1,
      category: "phones",
      charactertics: [{name: "Разрешение экрана", desc: "1080x2400"}, {name: "Встроенная память", desc: "128 ГБ"}, {name: "Камера", desc: "50 Мп"}, {name: "Операционная система", desc: "Android"}],
      id: Math.floor(Math.random() * 1000)+"g"+Math.floor(Math.random() * 1000),
      key: c++,
      description: "Доступен в 8 (4+4) ядерном исполнении с тактовой частотой процессора 2 800 МГц и поддержкой сим-карт формата Nano-sim."+
+"Также  устройство обладает ярким экраном в 6.67 дюйма с разрешением 1080x2400, и двумя камерами 50 Мп и 13 Мп, которые порадуют качественными фото и видео. Быстрый процессор Qualcomm Snapdragon 685  и графический ускоритель Adreno 610 позволят решать любые задачи пользователя.",
    },
    {
      name: "Xiaomi 13T 256GB 12GB",
      brend: "Xiaomi",
      price: 1999,
      img: "https://alloplus.by/upload/resize_cache/iblock/651/400_400_140cd750bba9870f18aada2478b24840a/t3oaxa4401m89q1na9osqqi110pztytm.jpg",
      show: true,
      inStock: true,
      picture: "",
      addToOrder: true,
      new: false,
      discount: 5,
      countToBuy: 1,
      category: "phones",
      charactertics: [{name: "Разрешение экрана", desc: "1080x2400"}, {name: "Встроенная память", desc: "128 ГБ"}, {name: "Камера", desc: "50 Мп"}, {name: "Операционная система", desc: "Android"}],
      id: Math.floor(Math.random() * 1000)+"g"+Math.floor(Math.random() * 1000),
      key: c++,
      description: "Доступен в 8 (4+4) ядерном исполнении с тактовой частотой процессора 2 800 МГц и поддержкой сим-карт формата Nano-sim."+
+"Также  устройство обладает ярким экраном в 6.67 дюйма с разрешением 1080x2400, и двумя камерами 50 Мп и 13 Мп, которые порадуют качественными фото и видео. Быстрый процессор Qualcomm Snapdragon 685  и графический ускоритель Adreno 610 позволят решать любые задачи пользователя.",
    },
    {
      name: "Honor Pad X9 4GB/128GB (5301AGJC)",
      brend: "Honor",
      price: 799,
      img: "https://alloplus.by/upload/resize_cache/iblock/9cc/400_400_140cd750bba9870f18aada2478b24840a/wqxwqiigm2y7yuj78pne1cmsz8izxjm6.jpg",
      show: true,
      inStock: true,
      picture: "",
      addToOrder: true,
      new: false,
      discount: 0,
      countToBuy: 1,
      category: "tablets",
      charactertics: [{name: "Разрешение экрана", desc: "1080x2400"}, {name: "Встроенная память", desc: "128 ГБ"}, {name: "Камера", desc: "50 Мп"}, {name: "Операционная система", desc: "Android"}],
      id: Math.floor(Math.random() * 1000)+"g"+Math.floor(Math.random() * 1000),
      key: c++,
      description: "Доступен в 8 (4+4) ядерном исполнении с тактовой частотой процессора 2 800 МГц и поддержкой сим-карт формата Nano-sim."+
+"Также  устройство обладает ярким экраном в 6.67 дюйма с разрешением 1080x2400, и двумя камерами 50 Мп и 13 Мп, которые порадуют качественными фото и видео. Быстрый процессор Qualcomm Snapdragon 685  и графический ускоритель Adreno 610 позволят решать любые задачи пользователя.",
    },
    {
      name: "Xiaomi Redmi Pad 3GB/64GB EU",
      brend: "Xiaomi",
      price: 699,
      img: "https://alloplus.by/upload/resize_cache/iblock/b45/400_400_140cd750bba9870f18aada2478b24840a/edoyf15zbwefyt635x8qwwkzbo8ux4yg.jpg",
      show: true,
      inStock: true,
      picture: "",
      addToOrder: true,
      new: false,
      discount: 10,
      countToBuy: 1,
      category: "tablets",
      charactertics: [{name: "Разрешение экрана", desc: "1080x2400"}, {name: "Встроенная память", desc: "128 ГБ"}, {name: "Камера", desc: "50 Мп"}, {name: "Операционная система", desc: "Android"}],
      id: Math.floor(Math.random() * 1000)+"g"+Math.floor(Math.random() * 1000),
      key: c++,
      description: "Доступен в 8 (4+4) ядерном исполнении с тактовой частотой процессора 2 800 МГц и поддержкой сим-карт формата Nano-sim."+
+"Также  устройство обладает ярким экраном в 6.67 дюйма с разрешением 1080x2400, и двумя камерами 50 Мп и 13 Мп, которые порадуют качественными фото и видео. Быстрый процессор Qualcomm Snapdragon 685  и графический ускоритель Adreno 610 позволят решать любые задачи пользователя.",
    },
    {
      name: "Realme Pad 6GB/128GB (RMP2103)",
      brend: "Realme",
      price: 779,
      img: "https://alloplus.by/upload/resize_cache/iblock/116/400_400_140cd750bba9870f18aada2478b24840a/6dqxdlp43vpbs3ezebuo14gc2cvv1p2n.png",
      show: true,
      inStock: true,
      picture: "",
      addToOrder: true,
      new: false,
      discount: 0,
      countToBuy: 1,
      category: "tablets",
      charactertics: [{name: "Разрешение экрана", desc: "1080x2400"}, {name: "Встроенная память", desc: "128 ГБ"}, {name: "Камера", desc: "50 Мп"}, {name: "Операционная система", desc: "Android"}],
      id: Math.floor(Math.random() * 1000)+"g"+Math.floor(Math.random() * 1000),
      key: c++,
      description: "Доступен в 8 (4+4) ядерном исполнении с тактовой частотой процессора 2 800 МГц и поддержкой сим-карт формата Nano-sim."+
+"Также  устройство обладает ярким экраном в 6.67 дюйма с разрешением 1080x2400, и двумя камерами 50 Мп и 13 Мп, которые порадуют качественными фото и видео. Быстрый процессор Qualcomm Snapdragon 685  и графический ускоритель Adreno 610 позволят решать любые задачи пользователя.",
    },
    {
      name: "Blackview Tab 9 WiFi 6GB/256GB",
      brend: "Blackview",
      price: 699,
      img: "https://alloplus.by/upload/resize_cache/iblock/116/400_400_140cd750bba9870f18aada2478b24840a/6dqxdlp43vpbs3ezebuo14gc2cvv1p2n.png",
      show: true,
      inStock: true,
      picture: "",
      addToOrder: true,
      new: false,
      discount: 0,
      countToBuy: 1,
      category: "tablets",
      charactertics: [{name: "Разрешение экрана", desc: "1080x2400"}, {name: "Встроенная память", desc: "128 ГБ"}, {name: "Камера", desc: "50 Мп"}, {name: "Операционная система", desc: "Android"}],
      id: Math.floor(Math.random() * 1000)+"g"+Math.floor(Math.random() * 1000),
      key: c++,
      description: "Доступен в 8 (4+4) ядерном исполнении с тактовой частотой процессора 2 800 МГц и поддержкой сим-карт формата Nano-sim."+
+"Также  устройство обладает ярким экраном в 6.67 дюйма с разрешением 1080x2400, и двумя камерами 50 Мп и 13 Мп, которые порадуют качественными фото и видео. Быстрый процессор Qualcomm Snapdragon 685  и графический ускоритель Adreno 610 позволят решать любые задачи пользователя.",
    },
    {
      name: "Наушники Marshall Major IV",
      brend: "Marshall",
      price: 345,
      img: "https://imgproxy.onliner.by/7SaHNAdoW_BWqbx2YAK_hCHqX-zL2lPt8__Q5FhSET4/w:170/h:250/f:jpg/aHR0cHM6Ly9jb250/ZW50Lm9ubGluZXIu/YnkvY2F0YWxvZy9k/ZXZpY2Uvb3JpZ2lu/YWwvY2FlNzJkYWZm/NzZhZDc0YzdhMjlj/MmY2NGJjYThiYTIu/anBlZw",
      show: true,
      inStock: true,
      picture: "",
      addToOrder: true,
      new: false,
      discount: 0,
      countToBuy: 1,
      category: "headphones",
      charactertics: [{name: "Тип интерфейса", desc: "bluetooth"}, {name: "ударопрочность", desc: "IP54"}, {name: "Управление наушниками", desc: "сенсорное"}, {name: "Микрофон", desc: "встроенный в корпус"}],
      id: Math.floor(Math.random() * 1000)+"g"+Math.floor(Math.random() * 1000),
      key: c++,
      description: "беспроводные наушники с микрофоном, накладные, портативные, съёмный аудиокабель, Bluetooth 5.0, 20-20000 Гц, быстрая зарядка, время работы 80 ч",
    },
    {
      name: "Наушники Marshall Major V",
      brend: "Marshall",
      price: 545,
      img: "https://imgproxy.onliner.by/reh5WMWuOam0tRq4NrmMtwlyJkfu_Mr2_72q13ixSYo/w:170/h:250/f:jpg/aHR0cHM6Ly9jb250/ZW50Lm9ubGluZXIu/YnkvY2F0YWxvZy9k/ZXZpY2Uvb3JpZ2lu/YWwvN2Q3ZmQwNGM5/ZWE3YzRlOTlhYWRm/MWQxNGQyNGYzNDgu/anBn",
      show: true,
      inStock: true,
      picture: "",
      addToOrder: true,
      new: false,
      discount: 0,
      countToBuy: 1,
      category: "headphones",
      charactertics: [{name: "Тип интерфейса", desc: "bluetooth"}, {name: "ударопрочность", desc: "IP54"}, {name: "Управление наушниками", desc: "сенсорное"}, {name: "Микрофон", desc: "встроенный в корпус"}],
      id: Math.floor(Math.random() * 1000)+"g"+Math.floor(Math.random() * 1000),
      key: c++,
      description: "беспроводные наушники с микрофоном, накладные, портативные, съёмный аудиокабель, Bluetooth 5.0, 20-20000 Гц, быстрая зарядка, время работы 80 ч",
    },
    {
      name: "Наушники Apple AirPods 4",
      brend: "Apple",
      price: 816,
      img: "https://imgproxy.onliner.by/TqBzbz_Lz7RXSByFWXGC32LK_JcrZrpCBPR2kKnErxQ/w:170/h:250/f:jpg/aHR0cHM6Ly9jb250/ZW50Lm9ubGluZXIu/YnkvY2F0YWxvZy9k/ZXZpY2Uvb3JpZ2lu/YWwvN2FiNmM5MGMy/Mjk3MWRkMDNjZTY4/NWI2MzBlNTkxMmQu/anBn",
      show: true,
      inStock: true,
      picture: "",
      addToOrder: true,
      new: false,
      discount: 0,
      countToBuy: 1,
      category: "headphones",
      charactertics: [{name: "Тип интерфейса", desc: "bluetooth"}, {name: "ударопрочность", desc: "IP54"}, {name: "Управление наушниками", desc: "сенсорное"}, {name: "Микрофон", desc: "встроенный в корпус"}],
      key: c++,
      description: "беспроводные наушники с микрофоном, накладные, портативные, съёмный аудиокабель, Bluetooth 5.0, 20-20000 Гц, быстрая зарядка, время работы 80 ч",
    },
    {
      name: "Наушники Apple AirPods 2 Pro",
      brend: "Apple",
      price: 889,
      img: "https://imgproxy.onliner.by/tZfL2gSIlxpAQjLrxge-ds37CsEcQGu_A3truPRytQQ/w:170/h:250/f:jpg/aHR0cHM6Ly9jb250/ZW50Lm9ubGluZXIu/YnkvY2F0YWxvZy9k/ZXZpY2Uvb3JpZ2lu/YWwvNGU3MWJkNWZh/MWU0OTcyNmE2MmM0/ZDc2MmIyNzQwMzku/anBn",
      show: true,
      inStock: true,
      picture: "",
      addToOrder: true,
      new: false,
      discount: 0,
      countToBuy: 1,
      category: "headphones",
      charactertics: [{name: "Тип интерфейса", desc: "bluetooth"}, {name: "ударопрочность", desc: "IP54"}, {name: "Управление наушниками", desc: "сенсорное"}, {name: "Микрофон", desc: "встроенный в корпус"}],
      key: c++,
      description: "беспроводные наушники с микрофоном, накладные, портативные, съёмный аудиокабель, Bluetooth 5.0, 20-20000 Гц, быстрая зарядка, время работы 80 ч",
    },
    {
      name: "Наушники Hoco W35 Max",
      brend: "Hoco",
      price: 56,
      img: "https://imgproxy.onliner.by/1nEQeotEQ-sMy-zNA-qKhUHDFz_hTHkO3pkriF5e3fw/w:170/h:250/f:jpg/aHR0cHM6Ly9jb250/ZW50Lm9ubGluZXIu/YnkvY2F0YWxvZy9k/ZXZpY2Uvb3JpZ2lu/YWwvZmRjMTdjNjhk/MzFjZTUwY2VmMTMw/MGExY2FiY2E5ZTQu/anBn",
      show: true,
      inStock: true,
      picture: "",
      addToOrder: true,
      new: false,
      discount: 0,
      countToBuy: 1,
      category: "headphones",
      charactertics: [{name: "Тип интерфейса", desc: "bluetooth"}, {name: "ударопрочность", desc: "IP54"}, {name: "Управление наушниками", desc: "сенсорное"}, {name: "Микрофон", desc: "встроенный в корпус"}],
      key: c++,
      description: "беспроводные наушники с микрофоном, накладные, портативные, съёмный аудиокабель, Bluetooth 5.0, 20-20000 Гц, быстрая зарядка, время работы 80 ч",
    },
    {
      name: "Наушники Philips TAH4205BK/00",
      brend: "Philips",
      price: 96,
      img: "https://imgproxy.onliner.by/Orr7MkN8hLfW9FdpqpNRz4OEiXrdTsaYYVM9mY4lhBY/w:170/h:250/f:jpg/aHR0cHM6Ly9jb250/ZW50Lm9ubGluZXIu/YnkvY2F0YWxvZy9k/ZXZpY2Uvb3JpZ2lu/YWwvMzRjNjI1MDRm/ZjE0NTQzMDA3NTc3/MTQzNTljNzAwMWEu/anBlZw",
      show: true,
      inStock: true,
      picture: "",
      addToOrder: true,
      new: false,
      discount: 0,
      countToBuy: 1,
      category: "headphones",
      charactertics: [{name: "Тип интерфейса", desc: "bluetooth"}, {name: "ударопрочность", desc: "IP54"}, {name: "Управление наушниками", desc: "сенсорное"}, {name: "Микрофон", desc: "встроенный в корпус"}],
      key: c++,
      description: "беспроводные наушники с микрофоном, накладные, портативные, съёмный аудиокабель, Bluetooth 5.0, 20-20000 Гц, быстрая зарядка, время работы 80 ч",
    },
    {
      name: "Наушники Philips TAT2139BK/00",
      brend: "Philips",
      price: 100,
      img: "https://imgproxy.onliner.by/MAoFa3F_4Zu-dkaJSih_bhk0QPh4fZ5bAhFB0HzQqU0/w:170/h:250/f:jpg/aHR0cHM6Ly9jb250/ZW50Lm9ubGluZXIu/YnkvY2F0YWxvZy9k/ZXZpY2Uvb3JpZ2lu/YWwvMmQzYTI5ZmEw/NTU3YTU5Y2FlZDVh/NzAwZTU0YzZjNWEu/anBn",
      show: true,
      inStock: true,
      picture: "",
      addToOrder: true,
      new: false,
      discount: 0,
      countToBuy: 1,
      category: "headphones",
      charactertics: [{name: "Тип интерфейса", desc: "bluetooth"}, {name: "ударопрочность", desc: "IP54"}, {name: "Управление наушниками", desc: "сенсорное"}, {name: "Микрофон", desc: "встроенный в корпус"}],
      key: c++,
      description: "беспроводные наушники с микрофоном, накладные, портативные, съёмный аудиокабель, Bluetooth 5.0, 20-20000 Гц, быстрая зарядка, время работы 80 ч",
    },
    {
      name: "Умные часы Apple Watch Series 9 41 мм",
      brend: "Apple",
      price: 1000,
      img: "https://imgproxy.onliner.by/Vo-ZgIEAD3AGh1JIh3IG3gktqJMod9YwDiPAFhohXfg/w:170/h:250/f:jpg/aHR0cHM6Ly9jb250/ZW50Lm9ubGluZXIu/YnkvY2F0YWxvZy9k/ZXZpY2Uvb3JpZ2lu/YWwvNTgyYjNkNDcx/NGFiZjdjNTY1YTkw/OTYxMWM1ZTlmZjEu/anBn",
      show: true,
      inStock: true,
      picture: "",
      addToOrder: true,
      new: false,
      discount: 0,
      countToBuy: 1,
      category: "accessories",
      charactertics: [{name: "Подключение к смартфону", desc: "bluetooth"}, {name: "Объем встроенной памяти", desc: "64 Гб"}, {name: "Цвет ремешка", desc: "черный"}, {name: "Материал ремешка", desc: "силикон"}],
      key: c++,
      description: "синхронизация с iOS, экран AMOLED, поддержка SIM-карты: нет, пульсометр, измерение кислорода в крови, ЭКГ, AOD, GPS, Bluetooth 5.3, корпус: металл (алюминий)...",
    },
    {
      name: "Умные часы Apple Watch Series 10 46 мм",
      brend: "Apple",
      price: 1849,
      img: "https://imgproxy.onliner.by/WQrL1T_zta8c2ehTm6hotUQn8cYqmTcFKQMIgVs_KKo/w:170/h:250/f:jpg/aHR0cHM6Ly9jb250/ZW50Lm9ubGluZXIu/YnkvY2F0YWxvZy9k/ZXZpY2Uvb3JpZ2lu/YWwvMTEwNTE1OGMz/MDUyNGZmNDIzMjcw/YTliZGI0MzUwYjEu/anBn",
      show: true,
      inStock: true,
      picture: "",
      addToOrder: true,
      new: false,
      discount: 0,
      countToBuy: 1,
      category: "accessories",
      charactertics: [{name: "Подключение к смартфону", desc: "bluetooth"}, {name: "Объем встроенной памяти", desc: "64 Гб"}, {name: "Цвет ремешка", desc: "черный"}, {name: "Материал ремешка", desc: "силикон"}],
      key: c++,
      description: "синхронизация с iOS, экран AMOLED, поддержка SIM-карты: нет, пульсометр, измерение кислорода в крови, ЭКГ, AOD, GPS, Bluetooth 5.3, корпус: металл (алюминий)...",
    },
    {
      name: "Умные часы Xiaomi Redmi Watch 5 Active",
      brend: "Xiaomi",
      price: 140,
      img: "https://imgproxy.onliner.by/BBkUbmwZP0veyGy1JkVz7ZULo7vo10omKSGKq-yZSb4/w:170/h:250/f:jpg/aHR0cHM6Ly9jb250/ZW50Lm9ubGluZXIu/YnkvY2F0YWxvZy9k/ZXZpY2Uvb3JpZ2lu/YWwvNTY0MjIxMjk0/ZGVmOGQxYjg0ODlh/ODFmODU5YzY4ZDMu/anBn",
      show: true,
      inStock: true,
      picture: "",
      addToOrder: true,
      new: false,
      discount: 0,
      countToBuy: 1,
      category: "accessories",
      charactertics: [{name: "Подключение к смартфону", desc: "bluetooth"}, {name: "Объем встроенной памяти", desc: "64 Гб"}, {name: "Цвет ремешка", desc: "черный"}, {name: "Материал ремешка", desc: "силикон"}],
      key: c++,
      description: "синхронизация с iOS, экран AMOLED, поддержка SIM-карты: нет, пульсометр, измерение кислорода в крови, ЭКГ, AOD, GPS, Bluetooth 5.3, корпус: металл (алюминий)...",
    },
  ]

const GoodsSlice=createSlice({
    name: "goods",
    initialState: {
        goods: []
    },
    reducers: {
      setGoods: (state, action)=>{
        const temp=new Array();
        for(const item of action.payload){
          temp.push(item);
        }
        return {...state, goods: temp}
      }
    }
});

export const {setGoods}=GoodsSlice.actions;
export default GoodsSlice.reducer;