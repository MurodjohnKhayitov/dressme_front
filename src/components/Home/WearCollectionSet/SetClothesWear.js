import React, { useState } from 'react'
import Slider from "react-slick";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { addBag, adidas, checkFalse, checkTrue, Liked, nextInfo, star, statusFalse } from '../../../assets/imgs';
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
export default function SetClothesWear() {


    const [productList, setProductList] = useState([
        {
            id: 1,
            category_name: "Business", 
            category: [
                { id: 1, name: "Business Wear (Man)", market: "Patek Business Wear" }
            ],
            headWear: [
                { id: 1, product_id: 1, name: "Головной убор", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "50000", currensy: "UZB", active: true, head_wear_img: "https://images.uzum.uz/cf0llhivtie1lhbgpdq0/t_product_540_high.jpg#1679979817097" },
                { id: 2, product_id: 2, name: "Головной убор", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "10000", currensy: "UZB", active: true, head_wear_img: "https://images.uzum.uz/cftf79vhj8j9g698gbbg/t_product_540_high.jpg#1679979817050" },
                { id: 3, product_id: 3, name: "Головной убор", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "25000", currensy: "UZB", active: false, head_wear_img: "https://images.uzum.uz/cft1g4vhgiov1qid0vmg/t_product_540_high.jpg#1679979817063" },
                { id: 4, product_id: 4, name: "Головной убор", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "30000", currensy: "UZB", active: true, head_wear_img: "https://images.uzum.uz/cfodt77hgiov1qiced4g/t_product_540_high.jpg#1679979817205" },
                { id: 5, product_id: 5, name: "Головной убор", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "45000", currensy: "UZB", active: true, head_wear_img: "https://images.uzum.uz/cfof77nhgiov1qicem8g/t_product_540_high.jpg#1679979817243" },
                { id: 6, product_id: 6, name: "Головной убор", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "5000", currensy: "UZB", active: false, head_wear_img: "https://images.uzum.uz/cggr0vfg49devoabrpcg/original.jpg" },
                { id: 7, product_id: 7, name: "Головной убор", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "70000", currensy: "UZB", active: true, head_wear_img: "https://images.uzum.uz/cggr0ong49devoabrpb0/original.jpg" },
                { id: 8, product_id: 8, name: "Головной убор", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "100000", currensy: "UZB", active: false, head_wear_img: "https://images.uzum.uz/cfrot37hj8j9g698anjg/t_product_540_high.jpg#1679979896400" },
                { id: 9, product_id: 9, name: "Головной убор", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "170000", currensy: "UZB", active: true, head_wear_img: "https://images.uzum.uz/cfs5nmvhgiov1qict4a0/t_product_540_high.jpg#1679979896386" },
                { id: 10, product_id: 10, name: "Головной убор", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "15000", currensy: "UZB", active: false, head_wear_img: "https://images.uzum.uz/cgct0dvhgiov1qif5450/t_product_540_high.jpg#1679979896266" },
                { id: 11, product_id: 11, name: "Головной убор", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "60000", currensy: "UZB", active: false, head_wear_img: "https://images.uzum.uz/cfs5nr7g49devoa91atg/t_product_540_high.jpg#1679979896338" },
            ],
            outWear: [
                { id: 1, product_id: 1, name: "Верхняя одежда", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "50000", currensy: "UZB", active: true, out_wear_img: "https://footbolka.ru/images/polo01.jpg" },
                { id: 2, product_id: 2, name: "Верхняя одежда", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "10000", currensy: "UZB", active: true, out_wear_img: "https://footbolka.ru/images/reebakpolocher.jpg" },
                { id: 3, product_id: 3, name: "Верхняя одежда", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "25000", currensy: "UZB", active: false, out_wear_img: "https://footbolka.ru/images/manevry.jpg" },
                { id: 4, product_id: 4, name: "Верхняя одежда", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "30000", currensy: "UZB", active: true, out_wear_img: "https://footbolka.ru/images/maskahockey.jpg" },
                { id: 5, product_id: 5, name: "Верхняя одежда", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "45000", currensy: "UZB", active: true, out_wear_img: "https://footbolka.ru/images/bg/drinkingfortwocolorbg.jpg" },
                { id: 6, product_id: 6, name: "Верхняя одежда", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "5000", currensy: "UZB", active: false, out_wear_img: "https://footbolka.ru/data/products/mens/luchdhiyrabotnikvsehvremen.jpg" },
                { id: 7, product_id: 7, name: "Верхняя одежда", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "70000", currensy: "UZB", active: true, out_wear_img: "https://footbolka.ru/data/products/womens/dobrayamamazaykang.jpg" },
                { id: 8, product_id: 8, name: "Верхняя одежда", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "100000", currensy: "UZB", active: true, out_wear_img: "https://footbolka.ru/data/products/womens/zaykamamulya22.jpg" },
                { id: 9, product_id: 9, name: "Верхняя одежда", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "170000", currensy: "UZB", active: false, out_wear_img: "https://footbolka.ru/data/products/paired/paarlelstich23.jpg" },
                { id: 10, product_id: 10, name: "Верхняя одежда", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "15000", currensy: "UZB", active: true, out_wear_img: "https://footbolka.ru/images/otlichnodopolnyaemdrugdruga.jpg" },
                { id: 11, product_id: 11, name: "Верхняя одежда", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "60000", currensy: "UZB", active: false, out_wear_img: "https://footbolka.ru/data/products/paired/muzskoeslovozakon.jpg" },
            ],
            underWear: [
                { id: 1, product_id: 1, name: "Нижняя одежда", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "50000", currensy: "UZB", active: true, under_wear_img: "https://media2.bulavka.uz/0cezA4z29ZiKE7ZCX1qxouIj2bU=/fit-in/220x260/products/pRvsHFqkNU/input.jpeg" },
                { id: 2, product_id: 2, name: "Нижняя одежда", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "10000", currensy: "UZB", active: true, under_wear_img: "https://media2.bulavka.uz/-qpTOv7NnOJRTTk1YqnpVd5gfgM=/fit-in/220x260/products/wwiUrjgBxk/input.jpeg" },
                { id: 3, product_id: 3, name: "Нижняя одежда", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "25000", currensy: "UZB", active: false, under_wear_img: "https://media2.bulavka.uz/ZAa8A6kujnBJwPyHXzSEcXCLx98=/fit-in/220x260/products/pIXPtM9tgh/input.jpeg" },
                { id: 4, product_id: 4, name: "Нижняя одежда", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "30000", currensy: "UZB", active: true, under_wear_img: "https://media2.bulavka.uz/71_EEfnARwQIgW3K8dSD9ybppSc=/fit-in/220x260/products/41R5CkQzZ7/input.jpeg" },
                { id: 5, product_id: 5, name: "Нижняя одежда", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "45000", currensy: "UZB", active: true, under_wear_img: "https://media2.bulavka.uz/KovnEKgqv3WEbgB43d3Dc-alSvU=/fit-in/220x260/products/vKQ4o04dvh/input.jpeg" },
                { id: 6, product_id: 6, name: "Нижняя одежда", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "5000", currensy: "UZB", active: false, under_wear_img: "https://media2.bulavka.uz/IDeEQQUpyYkcwn_T1C6ueaSUg4M=/fit-in/220x260/products/BLmmUeomNx/input.jpeg" },
                { id: 7, product_id: 7, name: "Нижняя одежда", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "70000", currensy: "UZB", active: true, under_wear_img: "https://media2.bulavka.uz/QU3fgFkNQ5cPdZ-m-pCAqnTJ_p8=/fit-in/220x260/products/NwPLo2vh8Q/input.jpeg" },
                { id: 8, product_id: 8, name: "Нижняя одежда", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "100000", currensy: "UZB", active: true, under_wear_img: "https://media2.bulavka.uz/uAzXwiQ3Ao6UEaf48hdyBXz3chY=/fit-in/220x260/products/siNjbqW6pC/input.jpeg" },
                { id: 9, product_id: 9, name: "Нижняя одежда", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "170000", currensy: "UZB", active: true, under_wear_img: "https://media2.bulavka.uz/BHUw5s95Guw9PHJ7vAZ-LN2xvQU=/fit-in/220x260/products/fIZSH1miVV/input.jpeg" },
                { id: 10, product_id: 10, name: "Нижняя одежда", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "15000", currensy: "UZB", active: false, under_wear_img: "https://media2.bulavka.uz/oatbQUK_ZbR_O-gyuK2UbiAvy7c=/fit-in/220x260/products/95MmbDorcl/input.jpeg" },
                { id: 11, product_id: 11, name: "Нижняя одежда", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "60000", currensy: "UZB", active: true, under_wear_img: "https://media2.bulavka.uz/n2ONxTq1dRKI5iVe251tM93ujAk=/fit-in/220x260/products/87NlIBsImK/input.jpeg" },
            ],
            legWear: [
                { id: 1, product_id: 1, name: "Обувь", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "50000", currensy: "UZB", active: true, leg_wear_img: "https://media2.bulavka.uz/1McaHjgNe3-t8IC1AKKYjqygy9I=/fit-in/220x260/products/EewQZSMtek/input.jpeg" },
                { id: 2, product_id: 2, name: "Обувь", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "10000", currensy: "UZB", active: true, leg_wear_img: "https://media2.bulavka.uz/95WLiuSkfGPO7Ud-EntV3rBlND0=/fit-in/220x260/products/ziGKjMSsT1/input.jpeg" },
                { id: 3, product_id: 3, name: "Обувь", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "25000", currensy: "UZB", active: true, leg_wear_img: "https://media2.bulavka.uz/1iux1_FWBL_iWPQ0RO2QNfa7peg=/fit-in/220x260/products/VQbnAHvknA/input.jpeg" },
                { id: 4, product_id: 4, name: "Обувь", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "30000", currensy: "UZB", active: false, leg_wear_img: "https://media2.bulavka.uz/RFew38-74XBt1cCgnQcKPF04bYA=/fit-in/220x260/products/IiEcGXZ8Wi/input.jpeg" },
                { id: 5, product_id: 5, name: "Обувь", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "45000", currensy: "UZB", active: true, leg_wear_img: "https://media2.bulavka.uz/zBVb53A_wjeBdZCcZrHOmuavYNg=/fit-in/220x260/products/IjwTXr69jd/input.jpeg" },
                { id: 6, product_id: 6, name: "Обувь", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "5000", currensy: "UZB", active: true, leg_wear_img: "https://media2.bulavka.uz/dR-bahFmY_MNyHYSWa5XDWRipmc=/fit-in/220x260/products/npGPJc5LTt/input.jpeg" },
                { id: 7, product_id: 7, name: "Обувь", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "70000", currensy: "UZB", active: true, leg_wear_img: "https://media2.bulavka.uz/RNdFDFUAITY-jqJL-r5NAblm6ZQ=/fit-in/220x260/products/3dru0BRvr2/input.jpeg" },
                { id: 8, product_id: 8, name: "Обувь", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "100000", currensy: "UZB", active: true, leg_wear_img: "https://media2.bulavka.uz/RNdFDFUAITY-jqJL-r5NAblm6ZQ=/fit-in/220x260/products/3dru0BRvr2/input.jpeg" },
                { id: 9, product_id: 9, name: "Обувь", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "170000", currensy: "UZB", active: false, leg_wear_img: "https://media2.bulavka.uz/RNdFDFUAITY-jqJL-r5NAblm6ZQ=/fit-in/220x260/products/3dru0BRvr2/input.jpeg" },
                { id: 10, product_id: 10, name: "Обувь", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "15000", currensy: "UZB", active: true, leg_wear_img: "https://media2.bulavka.uz/RNdFDFUAITY-jqJL-r5NAblm6ZQ=/fit-in/220x260/products/3dru0BRvr2/input.jpeg" },
                { id: 11, product_id: 11, name: "Обувь", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "60000", currensy: "UZB", active: true, leg_wear_img: "https://media2.bulavka.uz/RNdFDFUAITY-jqJL-r5NAblm6ZQ=/fit-in/220x260/products/3dru0BRvr2/input.jpeg" },
            ],
            Accessory: [
                { id: 1, product_id: 1, name: "Аксессуары", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "50000", currensy: "UZB", active: true, accessor_wear_img: "https://images.uzum.uz/cg2rk7vhj8j9g6996uug/t_product_540_high.jpg#1679984645572" },
                { id: 2, product_id: 2, name: "Аксессуары", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "10000", currensy: "UZB", active: true, accessor_wear_img: "https://images.uzum.uz/cfkc7j925kualhm8do3g/t_product_540_high.jpg#1679984645565" },
                { id: 3, product_id: 3, name: "Аксессуары", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "25000", currensy: "UZB", active: true, accessor_wear_img: "https://images.uzum.uz/cfgekqkvutv7dbm9495g/t_product_540_high.jpg#1679984817021" },
                { id: 4, product_id: 4, name: "Аксессуары", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "30000", currensy: "UZB", active: true, accessor_wear_img: "https://images.uzum.uz/cfouijfg49devoa8jq7g/t_product_540_high.jpg#1679984817028" },
                { id: 5, product_id: 5, name: "Аксессуары", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "45000", currensy: "UZB", active: true, accessor_wear_img: "https://images.uzum.uz/cfkeofvhgiopn8lc6jm0/t_product_540_high.jpg#1679984817201" },
                { id: 6, product_id: 6, name: "Аксессуары", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "5000", currensy: "UZB", active: true, accessor_wear_img: "https://images.uzum.uz/cg5k8onhj8j9g699iqc0/t_product_540_high.jpg#1679984817328" },
                { id: 7, product_id: 7, name: "Аксессуары", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "70000", currensy: "UZB", active: true, accessor_wear_img: "https://images.uzum.uz/cfro5rvhgiov1qics48g/t_product_540_high.jpg#1679984867685" },
                { id: 8, product_id: 8, name: "Аксессуары", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "100000", currensy: "UZB", active: true, accessor_wear_img: "https://images.uzum.uz/cfigp2h25kualhm87jcg/t_product_540_high.jpg#1679984867714" },
                { id: 9, product_id: 9, name: "Аксессуары", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "170000", currensy: "UZB", active: true, accessor_wear_img: "https://images.uzum.uz/cf19e8gv1htd23akr5a0/t_product_540_high.jpg#1679984867772" },
                { id: 10, product_id: 10, name: "Аксессуары", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "15000", currensy: "UZB", active: true, accessor_wear_img: "https://images.uzum.uz/cgcqktvg49devoab8of0/t_product_540_high.jpg#1679984868477" },
                { id: 11, product_id: 11, name: "Аксессуары", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "60000", currensy: "UZB", active: true, accessor_wear_img: "https://images.uzum.uz/cgfhtfnhj8j9g69avkag/t_product_540_high.jpg#1679984914878" },
            ],
        },
        {
            id: 2,
            category_name: "Muslim",
            category: [
                { id: 1, name: "Business Wear (Man)", market: "Patek Business Wear" }
            ],
            headWear: [
                { id: 1, product_id: 1, name: "Головной убор", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "50000", currensy: "UZB", active: true, head_wear_img: "https://images.uzum.uz/cf0llhivtie1lhbgpdq0/t_product_540_high.jpg#1679979817097" },
                { id: 2, product_id: 2, name: "Головной убор", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "10000", currensy: "UZB", active: true, head_wear_img: "https://images.uzum.uz/cftf79vhj8j9g698gbbg/t_product_540_high.jpg#1679979817050" },
                { id: 3, product_id: 3, name: "Головной убор", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "25000", currensy: "UZB", active: true, head_wear_img: "https://images.uzum.uz/cft1g4vhgiov1qid0vmg/t_product_540_high.jpg#1679979817063" },
                { id: 4, product_id: 4, name: "Головной убор", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "30000", currensy: "UZB", active: true, head_wear_img: "https://images.uzum.uz/cfodt77hgiov1qiced4g/t_product_540_high.jpg#1679979817205" },
                { id: 5, product_id: 5, name: "Головной убор", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "45000", currensy: "UZB", active: true, head_wear_img: "https://images.uzum.uz/cfof77nhgiov1qicem8g/t_product_540_high.jpg#1679979817243" },
                { id: 6, product_id: 6, name: "Головной убор", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "5000", currensy: "UZB", active: true, head_wear_img: "https://images.uzum.uz/cggr0vfg49devoabrpcg/original.jpg" },
                { id: 7, product_id: 7, name: "Головной убор", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "70000", currensy: "UZB", active: true, head_wear_img: "https://images.uzum.uz/cggr0ong49devoabrpb0/original.jpg" },
                { id: 8, product_id: 8, name: "Головной убор", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "100000", currensy: "UZB", active: true, head_wear_img: "https://images.uzum.uz/cfrot37hj8j9g698anjg/t_product_540_high.jpg#1679979896400" },
                { id: 9, product_id: 9, name: "Головной убор", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "170000", currensy: "UZB", active: true, head_wear_img: "https://images.uzum.uz/cfs5nmvhgiov1qict4a0/t_product_540_high.jpg#1679979896386" },
                { id: 10, product_id: 10, name: "Головной убор", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "15000", currensy: "UZB", active: true, head_wear_img: "https://images.uzum.uz/cgct0dvhgiov1qif5450/t_product_540_high.jpg#1679979896266" },
                { id: 11, product_id: 11, name: "Головной убор", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "60000", currensy: "UZB", active: true, head_wear_img: "https://images.uzum.uz/cfs5nr7g49devoa91atg/t_product_540_high.jpg#1679979896338" },
            ],
            outWear: [
                { id: 1, product_id: 1, name: "Верхняя одежда", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "50000", currensy: "UZB", active: true, out_wear_img: "https://footbolka.ru/images/polo01.jpg" },
                { id: 2, product_id: 2, name: "Верхняя одежда", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "10000", currensy: "UZB", active: true, out_wear_img: "https://footbolka.ru/images/reebakpolocher.jpg" },
                { id: 3, product_id: 3, name: "Верхняя одежда", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "25000", currensy: "UZB", active: true, out_wear_img: "https://footbolka.ru/images/manevry.jpg" },
                { id: 4, product_id: 4, name: "Верхняя одежда", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "30000", currensy: "UZB", active: true, out_wear_img: "https://footbolka.ru/images/maskahockey.jpg" },
                { id: 5, product_id: 5, name: "Верхняя одежда", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "45000", currensy: "UZB", active: true, out_wear_img: "https://footbolka.ru/images/bg/drinkingfortwocolorbg.jpg" },
                { id: 6, product_id: 6, name: "Верхняя одежда", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "5000", currensy: "UZB", active: true, out_wear_img: "https://footbolka.ru/data/products/mens/luchdhiyrabotnikvsehvremen.jpg" },
                { id: 7, product_id: 7, name: "Верхняя одежда", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "70000", currensy: "UZB", active: true, out_wear_img: "https://footbolka.ru/data/products/womens/dobrayamamazaykang.jpg" },
                { id: 8, product_id: 8, name: "Верхняя одежда", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "100000", currensy: "UZB", active: true, out_wear_img: "https://footbolka.ru/data/products/womens/zaykamamulya22.jpg" },
                { id: 9, product_id: 9, name: "Верхняя одежда", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "170000", currensy: "UZB", active: true, out_wear_img: "https://footbolka.ru/data/products/paired/paarlelstich23.jpg" },
                { id: 10, product_id: 10, name: "Верхняя одежда", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "15000", currensy: "UZB", active: true, out_wear_img: "https://footbolka.ru/images/otlichnodopolnyaemdrugdruga.jpg" },
                { id: 11, product_id: 11, name: "Верхняя одежда", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "60000", currensy: "UZB", active: true, out_wear_img: "https://footbolka.ru/data/products/paired/muzskoeslovozakon.jpg" },
            ],
            underWear: [
                { id: 1, product_id: 1, name: "Нижняя одежда", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "50000", currensy: "UZB", active: true, under_wear_img: "https://media2.bulavka.uz/0cezA4z29ZiKE7ZCX1qxouIj2bU=/fit-in/220x260/products/pRvsHFqkNU/input.jpeg" },
                { id: 2, product_id: 2, name: "Нижняя одежда", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "10000", currensy: "UZB", active: true, under_wear_img: "https://media2.bulavka.uz/-qpTOv7NnOJRTTk1YqnpVd5gfgM=/fit-in/220x260/products/wwiUrjgBxk/input.jpeg" },
                { id: 3, product_id: 3, name: "Нижняя одежда", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "25000", currensy: "UZB", active: true, under_wear_img: "https://media2.bulavka.uz/ZAa8A6kujnBJwPyHXzSEcXCLx98=/fit-in/220x260/products/pIXPtM9tgh/input.jpeg" },
                { id: 4, product_id: 4, name: "Нижняя одежда", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "30000", currensy: "UZB", active: true, under_wear_img: "https://media2.bulavka.uz/71_EEfnARwQIgW3K8dSD9ybppSc=/fit-in/220x260/products/41R5CkQzZ7/input.jpeg" },
                { id: 5, product_id: 5, name: "Нижняя одежда", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "45000", currensy: "UZB", active: true, under_wear_img: "https://media2.bulavka.uz/KovnEKgqv3WEbgB43d3Dc-alSvU=/fit-in/220x260/products/vKQ4o04dvh/input.jpeg" },
                { id: 6, product_id: 6, name: "Нижняя одежда", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "5000", currensy: "UZB", active: true, under_wear_img: "https://media2.bulavka.uz/IDeEQQUpyYkcwn_T1C6ueaSUg4M=/fit-in/220x260/products/BLmmUeomNx/input.jpeg" },
                { id: 7, product_id: 7, name: "Нижняя одежда", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "70000", currensy: "UZB", active: true, under_wear_img: "https://media2.bulavka.uz/QU3fgFkNQ5cPdZ-m-pCAqnTJ_p8=/fit-in/220x260/products/NwPLo2vh8Q/input.jpeg" },
                { id: 8, product_id: 8, name: "Нижняя одежда", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "100000", currensy: "UZB", active: true, under_wear_img: "https://media2.bulavka.uz/uAzXwiQ3Ao6UEaf48hdyBXz3chY=/fit-in/220x260/products/siNjbqW6pC/input.jpeg" },
                { id: 9, product_id: 9, name: "Нижняя одежда", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "170000", currensy: "UZB", active: true, under_wear_img: "https://media2.bulavka.uz/BHUw5s95Guw9PHJ7vAZ-LN2xvQU=/fit-in/220x260/products/fIZSH1miVV/input.jpeg" },
                { id: 10, product_id: 10, name: "Нижняя одежда", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "15000", currensy: "UZB", active: true, under_wear_img: "https://media2.bulavka.uz/oatbQUK_ZbR_O-gyuK2UbiAvy7c=/fit-in/220x260/products/95MmbDorcl/input.jpeg" },
                { id: 11, product_id: 11, name: "Нижняя одежда", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "60000", currensy: "UZB", active: true, under_wear_img: "https://media2.bulavka.uz/n2ONxTq1dRKI5iVe251tM93ujAk=/fit-in/220x260/products/87NlIBsImK/input.jpeg" },
            ],
            legWear: [
                { id: 1, product_id: 1, name: "Обувь", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "50000", currensy: "UZB", active: true, leg_wear_img: "https://media2.bulavka.uz/1McaHjgNe3-t8IC1AKKYjqygy9I=/fit-in/220x260/products/EewQZSMtek/input.jpeg" },
                { id: 2, product_id: 2, name: "Обувь", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "10000", currensy: "UZB", active: true, leg_wear_img: "https://media2.bulavka.uz/95WLiuSkfGPO7Ud-EntV3rBlND0=/fit-in/220x260/products/ziGKjMSsT1/input.jpeg" },
                { id: 3, product_id: 3, name: "Обувь", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "25000", currensy: "UZB", active: true, leg_wear_img: "https://media2.bulavka.uz/1iux1_FWBL_iWPQ0RO2QNfa7peg=/fit-in/220x260/products/VQbnAHvknA/input.jpeg" },
                { id: 4, product_id: 4, name: "Обувь", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "30000", currensy: "UZB", active: true, leg_wear_img: "https://media2.bulavka.uz/RFew38-74XBt1cCgnQcKPF04bYA=/fit-in/220x260/products/IiEcGXZ8Wi/input.jpeg" },
                { id: 5, product_id: 5, name: "Обувь", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "45000", currensy: "UZB", active: true, leg_wear_img: "https://media2.bulavka.uz/zBVb53A_wjeBdZCcZrHOmuavYNg=/fit-in/220x260/products/IjwTXr69jd/input.jpeg" },
                { id: 6, product_id: 6, name: "Обувь", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "5000", currensy: "UZB", active: true, leg_wear_img: "https://media2.bulavka.uz/dR-bahFmY_MNyHYSWa5XDWRipmc=/fit-in/220x260/products/npGPJc5LTt/input.jpeg" },
                { id: 7, product_id: 7, name: "Обувь", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "70000", currensy: "UZB", active: true, leg_wear_img: "https://media2.bulavka.uz/RNdFDFUAITY-jqJL-r5NAblm6ZQ=/fit-in/220x260/products/3dru0BRvr2/input.jpeg" },
                { id: 8, product_id: 8, name: "Обувь", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "100000", currensy: "UZB", active: true, leg_wear_img: "https://media2.bulavka.uz/RNdFDFUAITY-jqJL-r5NAblm6ZQ=/fit-in/220x260/products/3dru0BRvr2/input.jpeg" },
                { id: 9, product_id: 9, name: "Обувь", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "170000", currensy: "UZB", active: true, leg_wear_img: "https://media2.bulavka.uz/RNdFDFUAITY-jqJL-r5NAblm6ZQ=/fit-in/220x260/products/3dru0BRvr2/input.jpeg" },
                { id: 10, product_id: 10, name: "Обувь", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "15000", currensy: "UZB", active: true, leg_wear_img: "https://media2.bulavka.uz/RNdFDFUAITY-jqJL-r5NAblm6ZQ=/fit-in/220x260/products/3dru0BRvr2/input.jpeg" },
                { id: 11, product_id: 11, name: "Обувь", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "60000", currensy: "UZB", active: true, leg_wear_img: "https://media2.bulavka.uz/RNdFDFUAITY-jqJL-r5NAblm6ZQ=/fit-in/220x260/products/3dru0BRvr2/input.jpeg" },
            ],
            Accessory: [
                { id: 1, product_id: 1, name: "Аксессуары", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "50000", currensy: "UZB", active: true, accessor_wear_img: "https://images.uzum.uz/cg2rk7vhj8j9g6996uug/t_product_540_high.jpg#1679984645572" },
                { id: 2, product_id: 2, name: "Аксессуары", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "10000", currensy: "UZB", active: true, accessor_wear_img: "https://images.uzum.uz/cfkc7j925kualhm8do3g/t_product_540_high.jpg#1679984645565" },
                { id: 3, product_id: 3, name: "Аксессуары", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "25000", currensy: "UZB", active: true, accessor_wear_img: "https://images.uzum.uz/cfgekqkvutv7dbm9495g/t_product_540_high.jpg#1679984817021" },
                { id: 4, product_id: 4, name: "Аксессуары", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "30000", currensy: "UZB", active: true, accessor_wear_img: "https://images.uzum.uz/cfouijfg49devoa8jq7g/t_product_540_high.jpg#1679984817028" },
                { id: 5, product_id: 5, name: "Аксессуары", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "45000", currensy: "UZB", active: true, accessor_wear_img: "https://images.uzum.uz/cfkeofvhgiopn8lc6jm0/t_product_540_high.jpg#1679984817201" },
                { id: 6, product_id: 6, name: "Аксессуары", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "5000", currensy: "UZB", active: true, accessor_wear_img: "https://images.uzum.uz/cg5k8onhj8j9g699iqc0/t_product_540_high.jpg#1679984817328" },
                { id: 7, product_id: 7, name: "Аксессуары", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "70000", currensy: "UZB", active: true, accessor_wear_img: "https://images.uzum.uz/cfro5rvhgiov1qics48g/t_product_540_high.jpg#1679984867685" },
                { id: 8, product_id: 8, name: "Аксессуары", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "100000", currensy: "UZB", active: true, accessor_wear_img: "https://images.uzum.uz/cfigp2h25kualhm87jcg/t_product_540_high.jpg#1679984867714" },
                { id: 9, product_id: 9, name: "Аксессуары", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "170000", currensy: "UZB", active: true, accessor_wear_img: "https://images.uzum.uz/cf19e8gv1htd23akr5a0/t_product_540_high.jpg#1679984867772" },
                { id: 10, product_id: 10, name: "Аксессуары", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "15000", currensy: "UZB", active: true, accessor_wear_img: "https://images.uzum.uz/cgcqktvg49devoab8of0/t_product_540_high.jpg#1679984868477" },
                { id: 11, product_id: 11, name: "Аксессуары", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "60000", currensy: "UZB", active: true, accessor_wear_img: "https://images.uzum.uz/cgfhtfnhj8j9g69avkag/t_product_540_high.jpg#1679984914878" },
            ],


        },
        {
            id: 3,
            category_name: "Muslim",
            category: [
                { id: 1, name: "Muslim Wear (Man)", market: "Patek Student Wear" }
            ],
            headWear: [
                { id: 1, product_id: 1, name: "Головной убор", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "50000", currensy: "UZB", active: true, head_wear_img: "https://images.uzum.uz/cf0llhivtie1lhbgpdq0/t_product_540_high.jpg#1679979817097" },
                { id: 2, product_id: 2, name: "Головной убор", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "10000", currensy: "UZB", active: true, head_wear_img: "https://images.uzum.uz/cftf79vhj8j9g698gbbg/t_product_540_high.jpg#1679979817050" },
                { id: 3, product_id: 3, name: "Головной убор", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "25000", currensy: "UZB", active: true, head_wear_img: "https://images.uzum.uz/cft1g4vhgiov1qid0vmg/t_product_540_high.jpg#1679979817063" },
                { id: 4, product_id: 4, name: "Головной убор", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "30000", currensy: "UZB", active: true, head_wear_img: "https://images.uzum.uz/cfodt77hgiov1qiced4g/t_product_540_high.jpg#1679979817205" },
                { id: 5, product_id: 5, name: "Головной убор", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "45000", currensy: "UZB", active: true, head_wear_img: "https://images.uzum.uz/cfof77nhgiov1qicem8g/t_product_540_high.jpg#1679979817243" },
                { id: 6, product_id: 6, name: "Головной убор", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "5000", currensy: "UZB", active: true, head_wear_img: "https://images.uzum.uz/cggr0vfg49devoabrpcg/original.jpg" },
                { id: 7, product_id: 7, name: "Головной убор", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "70000", currensy: "UZB", active: true, head_wear_img: "https://images.uzum.uz/cggr0ong49devoabrpb0/original.jpg" },
                { id: 8, product_id: 8, name: "Головной убор", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "100000", currensy: "UZB", active: true, head_wear_img: "https://images.uzum.uz/cfrot37hj8j9g698anjg/t_product_540_high.jpg#1679979896400" },
                { id: 9, product_id: 9, name: "Головной убор", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "170000", currensy: "UZB", active: true, head_wear_img: "https://images.uzum.uz/cfs5nmvhgiov1qict4a0/t_product_540_high.jpg#1679979896386" },
                { id: 10, product_id: 10, name: "Головной убор", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "15000", currensy: "UZB", active: true, head_wear_img: "https://images.uzum.uz/cgct0dvhgiov1qif5450/t_product_540_high.jpg#1679979896266" },
                { id: 11, product_id: 11, name: "Головной убор", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "60000", currensy: "UZB", active: true, head_wear_img: "https://images.uzum.uz/cfs5nr7g49devoa91atg/t_product_540_high.jpg#1679979896338" },
            ],
            outWear: [
                { id: 1, product_id: 1, name: "Верхняя одежда", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "50000", currensy: "UZB", active: true, out_wear_img: "https://footbolka.ru/images/polo01.jpg" },
                { id: 2, product_id: 2, name: "Верхняя одежда", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "10000", currensy: "UZB", active: true, out_wear_img: "https://footbolka.ru/images/reebakpolocher.jpg" },
                { id: 3, product_id: 3, name: "Верхняя одежда", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "25000", currensy: "UZB", active: true, out_wear_img: "https://footbolka.ru/images/manevry.jpg" },
                { id: 4, product_id: 4, name: "Верхняя одежда", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "30000", currensy: "UZB", active: true, out_wear_img: "https://footbolka.ru/images/maskahockey.jpg" },
                { id: 5, product_id: 5, name: "Верхняя одежда", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "45000", currensy: "UZB", active: true, out_wear_img: "https://footbolka.ru/images/bg/drinkingfortwocolorbg.jpg" },
                { id: 6, product_id: 6, name: "Верхняя одежда", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "5000", currensy: "UZB", active: true, out_wear_img: "https://footbolka.ru/data/products/mens/luchdhiyrabotnikvsehvremen.jpg" },
                { id: 7, product_id: 7, name: "Верхняя одежда", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "70000", currensy: "UZB", active: true, out_wear_img: "https://footbolka.ru/data/products/womens/dobrayamamazaykang.jpg" },
                { id: 8, product_id: 8, name: "Верхняя одежда", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "100000", currensy: "UZB", active: true, out_wear_img: "https://footbolka.ru/data/products/womens/zaykamamulya22.jpg" },
                { id: 9, product_id: 9, name: "Верхняя одежда", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "170000", currensy: "UZB", active: true, out_wear_img: "https://footbolka.ru/data/products/paired/paarlelstich23.jpg" },
                { id: 10, product_id: 10, name: "Верхняя одежда", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "15000", currensy: "UZB", active: true, out_wear_img: "https://footbolka.ru/images/otlichnodopolnyaemdrugdruga.jpg" },
                { id: 11, product_id: 11, name: "Верхняя одежда", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "60000", currensy: "UZB", active: true, out_wear_img: "https://footbolka.ru/data/products/paired/muzskoeslovozakon.jpg" },
            ],
            underWear: [
                { id: 1, product_id: 1, name: "Нижняя одежда", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "50000", currensy: "UZB", active: true, under_wear_img: "https://media2.bulavka.uz/0cezA4z29ZiKE7ZCX1qxouIj2bU=/fit-in/220x260/products/pRvsHFqkNU/input.jpeg" },
                { id: 2, product_id: 2, name: "Нижняя одежда", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "10000", currensy: "UZB", active: true, under_wear_img: "https://media2.bulavka.uz/-qpTOv7NnOJRTTk1YqnpVd5gfgM=/fit-in/220x260/products/wwiUrjgBxk/input.jpeg" },
                { id: 3, product_id: 3, name: "Нижняя одежда", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "25000", currensy: "UZB", active: true, under_wear_img: "https://media2.bulavka.uz/ZAa8A6kujnBJwPyHXzSEcXCLx98=/fit-in/220x260/products/pIXPtM9tgh/input.jpeg" },
                { id: 4, product_id: 4, name: "Нижняя одежда", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "30000", currensy: "UZB", active: true, under_wear_img: "https://media2.bulavka.uz/71_EEfnARwQIgW3K8dSD9ybppSc=/fit-in/220x260/products/41R5CkQzZ7/input.jpeg" },
                { id: 5, product_id: 5, name: "Нижняя одежда", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "45000", currensy: "UZB", active: true, under_wear_img: "https://media2.bulavka.uz/KovnEKgqv3WEbgB43d3Dc-alSvU=/fit-in/220x260/products/vKQ4o04dvh/input.jpeg" },
                { id: 6, product_id: 6, name: "Нижняя одежда", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "5000", currensy: "UZB", active: true, under_wear_img: "https://media2.bulavka.uz/IDeEQQUpyYkcwn_T1C6ueaSUg4M=/fit-in/220x260/products/BLmmUeomNx/input.jpeg" },
                { id: 7, product_id: 7, name: "Нижняя одежда", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "70000", currensy: "UZB", active: true, under_wear_img: "https://media2.bulavka.uz/QU3fgFkNQ5cPdZ-m-pCAqnTJ_p8=/fit-in/220x260/products/NwPLo2vh8Q/input.jpeg" },
                { id: 8, product_id: 8, name: "Нижняя одежда", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "100000", currensy: "UZB", active: true, under_wear_img: "https://media2.bulavka.uz/uAzXwiQ3Ao6UEaf48hdyBXz3chY=/fit-in/220x260/products/siNjbqW6pC/input.jpeg" },
                { id: 9, product_id: 9, name: "Нижняя одежда", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "170000", currensy: "UZB", active: true, under_wear_img: "https://media2.bulavka.uz/BHUw5s95Guw9PHJ7vAZ-LN2xvQU=/fit-in/220x260/products/fIZSH1miVV/input.jpeg" },
                { id: 10, product_id: 10, name: "Нижняя одежда", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "15000", currensy: "UZB", active: true, under_wear_img: "https://media2.bulavka.uz/oatbQUK_ZbR_O-gyuK2UbiAvy7c=/fit-in/220x260/products/95MmbDorcl/input.jpeg" },
                { id: 11, product_id: 11, name: "Нижняя одежда", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "60000", currensy: "UZB", active: true, under_wear_img: "https://media2.bulavka.uz/n2ONxTq1dRKI5iVe251tM93ujAk=/fit-in/220x260/products/87NlIBsImK/input.jpeg" },
            ],
            legWear: [
                { id: 1, product_id: 1, name: "Обувь", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "50000", currensy: "UZB", active: true, leg_wear_img: "https://media2.bulavka.uz/1McaHjgNe3-t8IC1AKKYjqygy9I=/fit-in/220x260/products/EewQZSMtek/input.jpeg" },
                { id: 2, product_id: 2, name: "Обувь", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "10000", currensy: "UZB", active: true, leg_wear_img: "https://media2.bulavka.uz/95WLiuSkfGPO7Ud-EntV3rBlND0=/fit-in/220x260/products/ziGKjMSsT1/input.jpeg" },
                { id: 3, product_id: 3, name: "Обувь", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "25000", currensy: "UZB", active: true, leg_wear_img: "https://media2.bulavka.uz/1iux1_FWBL_iWPQ0RO2QNfa7peg=/fit-in/220x260/products/VQbnAHvknA/input.jpeg" },
                { id: 4, product_id: 4, name: "Обувь", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "30000", currensy: "UZB", active: true, leg_wear_img: "https://media2.bulavka.uz/RFew38-74XBt1cCgnQcKPF04bYA=/fit-in/220x260/products/IiEcGXZ8Wi/input.jpeg" },
                { id: 5, product_id: 5, name: "Обувь", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "45000", currensy: "UZB", active: true, leg_wear_img: "https://media2.bulavka.uz/zBVb53A_wjeBdZCcZrHOmuavYNg=/fit-in/220x260/products/IjwTXr69jd/input.jpeg" },
                { id: 6, product_id: 6, name: "Обувь", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "5000", currensy: "UZB", active: true, leg_wear_img: "https://media2.bulavka.uz/dR-bahFmY_MNyHYSWa5XDWRipmc=/fit-in/220x260/products/npGPJc5LTt/input.jpeg" },
                { id: 7, product_id: 7, name: "Обувь", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "70000", currensy: "UZB", active: true, leg_wear_img: "https://media2.bulavka.uz/RNdFDFUAITY-jqJL-r5NAblm6ZQ=/fit-in/220x260/products/3dru0BRvr2/input.jpeg" },
                { id: 8, product_id: 8, name: "Обувь", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "100000", currensy: "UZB", active: true, leg_wear_img: "https://media2.bulavka.uz/RNdFDFUAITY-jqJL-r5NAblm6ZQ=/fit-in/220x260/products/3dru0BRvr2/input.jpeg" },
                { id: 9, product_id: 9, name: "Обувь", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "170000", currensy: "UZB", active: true, leg_wear_img: "https://media2.bulavka.uz/RNdFDFUAITY-jqJL-r5NAblm6ZQ=/fit-in/220x260/products/3dru0BRvr2/input.jpeg" },
                { id: 10, product_id: 10, name: "Обувь", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "15000", currensy: "UZB", active: true, leg_wear_img: "https://media2.bulavka.uz/RNdFDFUAITY-jqJL-r5NAblm6ZQ=/fit-in/220x260/products/3dru0BRvr2/input.jpeg" },
                { id: 11, product_id: 11, name: "Обувь", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "60000", currensy: "UZB", active: true, leg_wear_img: "https://media2.bulavka.uz/RNdFDFUAITY-jqJL-r5NAblm6ZQ=/fit-in/220x260/products/3dru0BRvr2/input.jpeg" },
            ],
            Accessory: [
                { id: 1, product_id: 1, name: "Аксессуары", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "50000", currensy: "UZB", active: true, accessor_wear_img: "https://images.uzum.uz/cg2rk7vhj8j9g6996uug/t_product_540_high.jpg#1679984645572" },
                { id: 2, product_id: 2, name: "Аксессуары", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "10000", currensy: "UZB", active: true, accessor_wear_img: "https://images.uzum.uz/cfkc7j925kualhm8do3g/t_product_540_high.jpg#1679984645565" },
                { id: 3, product_id: 3, name: "Аксессуары", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "25000", currensy: "UZB", active: true, accessor_wear_img: "https://images.uzum.uz/cfgekqkvutv7dbm9495g/t_product_540_high.jpg#1679984817021" },
                { id: 4, product_id: 4, name: "Аксессуары", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "30000", currensy: "UZB", active: true, accessor_wear_img: "https://images.uzum.uz/cfouijfg49devoa8jq7g/t_product_540_high.jpg#1679984817028" },
                { id: 5, product_id: 5, name: "Аксессуары", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "45000", currensy: "UZB", active: true, accessor_wear_img: "https://images.uzum.uz/cfkeofvhgiopn8lc6jm0/t_product_540_high.jpg#1679984817201" },
                { id: 6, product_id: 6, name: "Аксессуары", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "5000", currensy: "UZB", active: true, accessor_wear_img: "https://images.uzum.uz/cg5k8onhj8j9g699iqc0/t_product_540_high.jpg#1679984817328" },
                { id: 7, product_id: 7, name: "Аксессуары", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "70000", currensy: "UZB", active: true, accessor_wear_img: "https://images.uzum.uz/cfro5rvhgiov1qics48g/t_product_540_high.jpg#1679984867685" },
                { id: 8, product_id: 8, name: "Аксессуары", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "100000", currensy: "UZB", active: true, accessor_wear_img: "https://images.uzum.uz/cfigp2h25kualhm87jcg/t_product_540_high.jpg#1679984867714" },
                { id: 9, product_id: 9, name: "Аксессуары", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "170000", currensy: "UZB", active: true, accessor_wear_img: "https://images.uzum.uz/cf19e8gv1htd23akr5a0/t_product_540_high.jpg#1679984867772" },
                { id: 10, product_id: 10, name: "Аксессуары", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "15000", currensy: "UZB", active: true, accessor_wear_img: "https://images.uzum.uz/cgcqktvg49devoab8of0/t_product_540_high.jpg#1679984868477" },
                { id: 11, product_id: 11, name: "Аксессуары", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "60000", currensy: "UZB", active: true, accessor_wear_img: "https://images.uzum.uz/cgfhtfnhj8j9g69avkag/t_product_540_high.jpg#1679984914878" },
            ],


        },
        {
            id: 2,
            category_name: "Student",
            category: [
                { id: 1, name: "Student Wear (Man)", market: "Patek Student Wear" }
            ],
            headWear: [
                { id: 1, product_id: 1, name: "Головной убор", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "50000", currensy: "UZB", active: true, head_wear_img: "https://images.uzum.uz/cf0llhivtie1lhbgpdq0/t_product_540_high.jpg#1679979817097" },
                { id: 2, product_id: 2, name: "Головной убор", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "10000", currensy: "UZB", active: true, head_wear_img: "https://images.uzum.uz/cftf79vhj8j9g698gbbg/t_product_540_high.jpg#1679979817050" },
                { id: 3, product_id: 3, name: "Головной убор", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "25000", currensy: "UZB", active: true, head_wear_img: "https://images.uzum.uz/cft1g4vhgiov1qid0vmg/t_product_540_high.jpg#1679979817063" },
                { id: 4, product_id: 4, name: "Головной убор", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "30000", currensy: "UZB", active: true, head_wear_img: "https://images.uzum.uz/cfodt77hgiov1qiced4g/t_product_540_high.jpg#1679979817205" },
                { id: 5, product_id: 5, name: "Головной убор", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "45000", currensy: "UZB", active: true, head_wear_img: "https://images.uzum.uz/cfof77nhgiov1qicem8g/t_product_540_high.jpg#1679979817243" },
                { id: 6, product_id: 6, name: "Головной убор", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "5000", currensy: "UZB", active: true, head_wear_img: "https://images.uzum.uz/cggr0vfg49devoabrpcg/original.jpg" },
                { id: 7, product_id: 7, name: "Головной убор", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "70000", currensy: "UZB", active: true, head_wear_img: "https://images.uzum.uz/cggr0ong49devoabrpb0/original.jpg" },
                { id: 8, product_id: 8, name: "Головной убор", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "100000", currensy: "UZB", active: true, head_wear_img: "https://images.uzum.uz/cfrot37hj8j9g698anjg/t_product_540_high.jpg#1679979896400" },
                { id: 9, product_id: 9, name: "Головной убор", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "170000", currensy: "UZB", active: true, head_wear_img: "https://images.uzum.uz/cfs5nmvhgiov1qict4a0/t_product_540_high.jpg#1679979896386" },
                { id: 10, product_id: 10, name: "Головной убор", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "15000", currensy: "UZB", active: true, head_wear_img: "https://images.uzum.uz/cgct0dvhgiov1qif5450/t_product_540_high.jpg#1679979896266" },
                { id: 11, product_id: 11, name: "Головной убор", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "60000", currensy: "UZB", active: true, head_wear_img: "https://images.uzum.uz/cfs5nr7g49devoa91atg/t_product_540_high.jpg#1679979896338" },
            ],
            outWear: [
                { id: 1, product_id: 1, name: "Верхняя одежда", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "50000", currensy: "UZB", active: true, out_wear_img: "https://footbolka.ru/images/polo01.jpg" },
                { id: 2, product_id: 2, name: "Верхняя одежда", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "10000", currensy: "UZB", active: true, out_wear_img: "https://footbolka.ru/images/reebakpolocher.jpg" },
                { id: 3, product_id: 3, name: "Верхняя одежда", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "25000", currensy: "UZB", active: true, out_wear_img: "https://footbolka.ru/images/manevry.jpg" },
                { id: 4, product_id: 4, name: "Верхняя одежда", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "30000", currensy: "UZB", active: true, out_wear_img: "https://footbolka.ru/images/maskahockey.jpg" },
                { id: 5, product_id: 5, name: "Верхняя одежда", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "45000", currensy: "UZB", active: true, out_wear_img: "https://footbolka.ru/images/bg/drinkingfortwocolorbg.jpg" },
                { id: 6, product_id: 6, name: "Верхняя одежда", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "5000", currensy: "UZB", active: true, out_wear_img: "https://footbolka.ru/data/products/mens/luchdhiyrabotnikvsehvremen.jpg" },
                { id: 7, product_id: 7, name: "Верхняя одежда", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "70000", currensy: "UZB", active: true, out_wear_img: "https://footbolka.ru/data/products/womens/dobrayamamazaykang.jpg" },
                { id: 8, product_id: 8, name: "Верхняя одежда", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "100000", currensy: "UZB", active: true, out_wear_img: "https://footbolka.ru/data/products/womens/zaykamamulya22.jpg" },
                { id: 9, product_id: 9, name: "Верхняя одежда", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "170000", currensy: "UZB", active: true, out_wear_img: "https://footbolka.ru/data/products/paired/paarlelstich23.jpg" },
                { id: 10, product_id: 10, name: "Верхняя одежда", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "15000", currensy: "UZB", active: true, out_wear_img: "https://footbolka.ru/images/otlichnodopolnyaemdrugdruga.jpg" },
                { id: 11, product_id: 11, name: "Верхняя одежда", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "60000", currensy: "UZB", active: true, out_wear_img: "https://footbolka.ru/data/products/paired/muzskoeslovozakon.jpg" },
            ],
            underWear: [
                { id: 1, product_id: 1, name: "Нижняя одежда", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "50000", currensy: "UZB", active: true, under_wear_img: "https://media2.bulavka.uz/0cezA4z29ZiKE7ZCX1qxouIj2bU=/fit-in/220x260/products/pRvsHFqkNU/input.jpeg" },
                { id: 2, product_id: 2, name: "Нижняя одежда", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "10000", currensy: "UZB", active: true, under_wear_img: "https://media2.bulavka.uz/-qpTOv7NnOJRTTk1YqnpVd5gfgM=/fit-in/220x260/products/wwiUrjgBxk/input.jpeg" },
                { id: 3, product_id: 3, name: "Нижняя одежда", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "25000", currensy: "UZB", active: true, under_wear_img: "https://media2.bulavka.uz/ZAa8A6kujnBJwPyHXzSEcXCLx98=/fit-in/220x260/products/pIXPtM9tgh/input.jpeg" },
                { id: 4, product_id: 4, name: "Нижняя одежда", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "30000", currensy: "UZB", active: true, under_wear_img: "https://media2.bulavka.uz/71_EEfnARwQIgW3K8dSD9ybppSc=/fit-in/220x260/products/41R5CkQzZ7/input.jpeg" },
                { id: 5, product_id: 5, name: "Нижняя одежда", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "45000", currensy: "UZB", active: true, under_wear_img: "https://media2.bulavka.uz/KovnEKgqv3WEbgB43d3Dc-alSvU=/fit-in/220x260/products/vKQ4o04dvh/input.jpeg" },
                { id: 6, product_id: 6, name: "Нижняя одежда", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "5000", currensy: "UZB", active: true, under_wear_img: "https://media2.bulavka.uz/IDeEQQUpyYkcwn_T1C6ueaSUg4M=/fit-in/220x260/products/BLmmUeomNx/input.jpeg" },
                { id: 7, product_id: 7, name: "Нижняя одежда", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "70000", currensy: "UZB", active: true, under_wear_img: "https://media2.bulavka.uz/QU3fgFkNQ5cPdZ-m-pCAqnTJ_p8=/fit-in/220x260/products/NwPLo2vh8Q/input.jpeg" },
                { id: 8, product_id: 8, name: "Нижняя одежда", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "100000", currensy: "UZB", active: true, under_wear_img: "https://media2.bulavka.uz/uAzXwiQ3Ao6UEaf48hdyBXz3chY=/fit-in/220x260/products/siNjbqW6pC/input.jpeg" },
                { id: 9, product_id: 9, name: "Нижняя одежда", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "170000", currensy: "UZB", active: true, under_wear_img: "https://media2.bulavka.uz/BHUw5s95Guw9PHJ7vAZ-LN2xvQU=/fit-in/220x260/products/fIZSH1miVV/input.jpeg" },
                { id: 10, product_id: 10, name: "Нижняя одежда", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "15000", currensy: "UZB", active: true, under_wear_img: "https://media2.bulavka.uz/oatbQUK_ZbR_O-gyuK2UbiAvy7c=/fit-in/220x260/products/95MmbDorcl/input.jpeg" },
                { id: 11, product_id: 11, name: "Нижняя одежда", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "60000", currensy: "UZB", active: true, under_wear_img: "https://media2.bulavka.uz/n2ONxTq1dRKI5iVe251tM93ujAk=/fit-in/220x260/products/87NlIBsImK/input.jpeg" },
            ],
            legWear: [
                { id: 1, product_id: 1, name: "Обувь", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "50000", currensy: "UZB", active: true, leg_wear_img: "https://media2.bulavka.uz/1McaHjgNe3-t8IC1AKKYjqygy9I=/fit-in/220x260/products/EewQZSMtek/input.jpeg" },
                { id: 2, product_id: 2, name: "Обувь", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "10000", currensy: "UZB", active: true, leg_wear_img: "https://media2.bulavka.uz/95WLiuSkfGPO7Ud-EntV3rBlND0=/fit-in/220x260/products/ziGKjMSsT1/input.jpeg" },
                { id: 3, product_id: 3, name: "Обувь", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "25000", currensy: "UZB", active: true, leg_wear_img: "https://media2.bulavka.uz/1iux1_FWBL_iWPQ0RO2QNfa7peg=/fit-in/220x260/products/VQbnAHvknA/input.jpeg" },
                { id: 4, product_id: 4, name: "Обувь", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "30000", currensy: "UZB", active: true, leg_wear_img: "https://media2.bulavka.uz/RFew38-74XBt1cCgnQcKPF04bYA=/fit-in/220x260/products/IiEcGXZ8Wi/input.jpeg" },
                { id: 5, product_id: 5, name: "Обувь", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "45000", currensy: "UZB", active: true, leg_wear_img: "https://media2.bulavka.uz/zBVb53A_wjeBdZCcZrHOmuavYNg=/fit-in/220x260/products/IjwTXr69jd/input.jpeg" },
                { id: 6, product_id: 6, name: "Обувь", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "5000", currensy: "UZB", active: true, leg_wear_img: "https://media2.bulavka.uz/dR-bahFmY_MNyHYSWa5XDWRipmc=/fit-in/220x260/products/npGPJc5LTt/input.jpeg" },
                { id: 7, product_id: 7, name: "Обувь", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "70000", currensy: "UZB", active: true, leg_wear_img: "https://media2.bulavka.uz/RNdFDFUAITY-jqJL-r5NAblm6ZQ=/fit-in/220x260/products/3dru0BRvr2/input.jpeg" },
                { id: 8, product_id: 8, name: "Обувь", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "100000", currensy: "UZB", active: true, leg_wear_img: "https://media2.bulavka.uz/RNdFDFUAITY-jqJL-r5NAblm6ZQ=/fit-in/220x260/products/3dru0BRvr2/input.jpeg" },
                { id: 9, product_id: 9, name: "Обувь", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "170000", currensy: "UZB", active: true, leg_wear_img: "https://media2.bulavka.uz/RNdFDFUAITY-jqJL-r5NAblm6ZQ=/fit-in/220x260/products/3dru0BRvr2/input.jpeg" },
                { id: 10, product_id: 10, name: "Обувь", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "15000", currensy: "UZB", active: true, leg_wear_img: "https://media2.bulavka.uz/RNdFDFUAITY-jqJL-r5NAblm6ZQ=/fit-in/220x260/products/3dru0BRvr2/input.jpeg" },
                { id: 11, product_id: 11, name: "Обувь", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "60000", currensy: "UZB", active: true, leg_wear_img: "https://media2.bulavka.uz/RNdFDFUAITY-jqJL-r5NAblm6ZQ=/fit-in/220x260/products/3dru0BRvr2/input.jpeg" },
            ],
            Accessory: [
                { id: 1, product_id: 1, name: "Аксессуары", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "50000", currensy: "UZB", active: true, accessor_wear_img: "https://images.uzum.uz/cg2rk7vhj8j9g6996uug/t_product_540_high.jpg#1679984645572" },
                { id: 2, product_id: 2, name: "Аксессуары", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "10000", currensy: "UZB", active: true, accessor_wear_img: "https://images.uzum.uz/cfkc7j925kualhm8do3g/t_product_540_high.jpg#1679984645565" },
                { id: 3, product_id: 3, name: "Аксессуары", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "25000", currensy: "UZB", active: true, accessor_wear_img: "https://images.uzum.uz/cfgekqkvutv7dbm9495g/t_product_540_high.jpg#1679984817021" },
                { id: 4, product_id: 4, name: "Аксессуары", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "30000", currensy: "UZB", active: true, accessor_wear_img: "https://images.uzum.uz/cfouijfg49devoa8jq7g/t_product_540_high.jpg#1679984817028" },
                { id: 5, product_id: 5, name: "Аксессуары", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "45000", currensy: "UZB", active: true, accessor_wear_img: "https://images.uzum.uz/cfkeofvhgiopn8lc6jm0/t_product_540_high.jpg#1679984817201" },
                { id: 6, product_id: 6, name: "Аксессуары", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "5000", currensy: "UZB", active: true, accessor_wear_img: "https://images.uzum.uz/cg5k8onhj8j9g699iqc0/t_product_540_high.jpg#1679984817328" },
                { id: 7, product_id: 7, name: "Аксессуары", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "70000", currensy: "UZB", active: true, accessor_wear_img: "https://images.uzum.uz/cfro5rvhgiov1qics48g/t_product_540_high.jpg#1679984867685" },
                { id: 8, product_id: 8, name: "Аксессуары", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "100000", currensy: "UZB", active: true, accessor_wear_img: "https://images.uzum.uz/cfigp2h25kualhm87jcg/t_product_540_high.jpg#1679984867714" },
                { id: 9, product_id: 9, name: "Аксессуары", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "170000", currensy: "UZB", active: true, accessor_wear_img: "https://images.uzum.uz/cf19e8gv1htd23akr5a0/t_product_540_high.jpg#1679984867772" },
                { id: 10, product_id: 10, name: "Аксессуары", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "15000", currensy: "UZB", active: true, accessor_wear_img: "https://images.uzum.uz/cgcqktvg49devoab8of0/t_product_540_high.jpg#1679984868477" },
                { id: 11, product_id: 11, name: "Аксессуары", gender: "Male", quality: "semi-original", composition: "cotton 100%", wear_size: "51", make_country: "china", amount: "60000", currensy: "UZB", active: true, accessor_wear_img: "https://images.uzum.uz/cgfhtfnhj8j9g69avkag/t_product_540_high.jpg#1679984914878" },
            ],


        },

    ])

    const NextArrow = (props) => {
        const { onClick } = props;
        return (
            <div className={`absolute right-[36px] top-[25%] z-10 text-center cursor-pointer no-underline  w-8 h-8 flex items-center justify-center  rounded-full bg-btnBgColor duration-200 border border-solid border-searchBgColor	`}
                onClick={onClick}>
                <GrFormNext size={15} />
            </div>
        );
    };

    const PrevArrow = (props) => {
        const { onClick } = props;
        return (
            <div className={`absolute left-[36px] top-[25%] z-10 text-center cursor-pointer no-underline  w-8 h-8 flex items-center justify-center rounded-full bg-btnBgColor duration-200 border border-solid border-searchBgColor	`}
                onClick={onClick}>
                <GrFormPrevious size={15} />
            </div>
        );
    };
    const NextArrow1 = (props) => {
        const { onClick } = props;
        return (
            <div className={`absolute right-[36px] top-[40%] z-10 text-center cursor-pointer no-underline  w-8 h-8 flex items-center justify-center  rounded-full bg-btnBgColor duration-200 border border-solid border-searchBgColor	`}
                onClick={onClick}>
                <GrFormNext size={15} />
            </div>
        );
    };

    const PrevArrow1 = (props) => {
        const { onClick } = props;
        return (
            <div className={`absolute left-[36px] top-[40%] z-10 text-center cursor-pointer no-underline  w-8 h-8 flex items-center justify-center rounded-full bg-btnBgColor duration-200 border border-solid border-searchBgColor	`}
                onClick={onClick}>
                <GrFormPrevious size={15} />
            </div>
        );
    };
    const NextArrowshoesWear = (props) => {
        const { onClick } = props;
        return (
            <div className={`absolute right-[36px] top-[25%] z-10 text-center cursor-pointer no-underline  w-8 h-8 flex items-center justify-center  rounded-full bg-btnBgColor duration-200 border border-solid border-searchBgColor	`}
                onClick={onClick}>
                <GrFormNext size={15} />
            </div>
        );
    };

    const PrevArrowshoesWear = (props) => {
        const { onClick } = props;
        return (
            <div className={`absolute left-[36px] top-[25%] z-10 text-center cursor-pointer no-underline  w-8 h-8 flex items-center justify-center rounded-full bg-btnBgColor duration-200 border border-solid border-searchBgColor	`}
                onClick={onClick}>
                <GrFormPrevious size={15} />
            </div>
        );
    };
    const NextArrowAccessory = (props) => {
        const { onClick } = props;
        return (
            <div className={`absolute right-[8px] top-[25%] z-10 text-center cursor-pointer no-underline  w-8 h-8 flex items-center justify-center  rounded-full bg-btnBgColor duration-200 border border-solid border-searchBgColor	`}
                onClick={onClick}>
                <GrFormNext size={15} />
            </div>
        );
    };

    const PrevArrowAccessory = (props) => {
        const { onClick } = props;
        return (
            <div className={`absolute left-[8px] top-[25%] z-10 text-center cursor-pointer no-underline  w-8 h-8 flex items-center justify-center rounded-full bg-btnBgColor duration-200 border border-solid border-searchBgColor	`}
                onClick={onClick}>
                <GrFormPrevious size={15} />
            </div>
        );
    };

    const [getSliderId, setGetSliderId] = useState({
        headWearId: 1,
        headWearPrice: 0,

        outWearId: 1,
        outWearPrice: 0,

        underWearId: 1,
        underWearPrice: 0,

        legWearId: 1,
        legWearPrice: 0,

        accessoryId: 1,
        accessoryPrice: 0
    })


    let headWear = {
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        infinite: true,
        fade: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        dots: false,
        afterChange: current => setGetSliderId({ ...getSliderId, headWearId: current + 1 })
    };

    let outWear = {
        nextArrow: <NextArrow1 />,
        prevArrow: <PrevArrow1 />,
        infinite: true,
        fade: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        dots: false,
        afterChange: current => setGetSliderId({ ...getSliderId, outWearId: current + 1 })
    };
    let underWear = {
        nextArrow: <NextArrow1 />,
        prevArrow: <PrevArrow1 />,
        infinite: true,
        fade: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        dots: false,
        afterChange: current => setGetSliderId({ ...getSliderId, underWearId: current + 1 })
    };
    let legWear = {
        nextArrow: <NextArrowshoesWear />,
        prevArrow: <PrevArrowshoesWear />,
        infinite: true,
        fade: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        dots: false,
        afterChange: current => setGetSliderId({ ...getSliderId, legWearId: current + 1 })
    };
    let Accessory = {
        nextArrow: <NextArrowAccessory />,
        prevArrow: <PrevArrowAccessory />,
        infinite: true,
        fade: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        dots: false,
        afterChange: current => setGetSliderId({ ...getSliderId, accessoryId: current + 1 })
    };

    return (
        <div className='w-full box-border	 h-fit flex justify-between gap-y-5 flex-wrap  '>
            {
                productList?.map(producListMap => {
                    return (
                        <div key={producListMap?.id} className='w-[630px] h-[480px] flex overflow-hidden border border-searchBgColor rounded-lg '>
                            <div className='w-[360px] border-r bg-white border-searchBgColor'>
                                {/* Head wear */}

                                <div className='w-full h-full flex  flex-wrap content-center gap-y-1	  justify-center '>
                                    <div className="w-full h-fit">
                                        <Slider {...headWear} className={`w-full h-[60px] `}>
                                            {
                                                producListMap?.headWear?.map(item => {
                                                    return (
                                                        <div key={item?.id} className={` !w-[192px] box-border  ml-[84px] flex items-center justify-center h-[60px] rounded-lg overflow-hidden border border-searchBgColor bg-btnBgColor`}>
                                                            <div className='w-full h-full data'>
                                                                <img className='w-[100px]  h-full m-auto' src={item?.head_wear_img} alt="head_wear_img" />
                                                            </div>
                                                            <div className={`absolute top-1 px-1 flex ${!item?.active ? "justify-between" : "justify-end"}  w-[190px] `}>
                                                                {
                                                                    !item?.active ? <div className='w-[24px] h-[24px] cursor-pointer border border-searchBgColor bg-white rounded flex items-center justify-center'>
                                                                        <img src={statusFalse} alt="statusFalse" />
                                                                    </div> : null
                                                                }
                                                                <div className='w-[24px] h-[24px] cursor-pointer border border-searchBgColor bg-white rounded flex items-center justify-center'>
                                                                    <img src={Liked} alt="Liked" />
                                                                </div>
                                                            </div>
                                                            <div className='absolute duration-200  bottom-1 px-1 mb-[6px] w-[190px]  flex justify-end  '>
                                                                <div className='w-[24px] h-[24px] cursor-pointer border border-searchBgColor data-hover:bg-red-500 bg-white rounded flex items-center justify-center'>
                                                                    <img src={nextInfo} alt="nextInfo" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </Slider>
                                    </div>
                                    <div className="w-full h-fit">
                                        <Slider {...outWear} className={`w-full h-[148px]`}>
                                            {
                                                producListMap?.outWear.map(item => {
                                                    return (
                                                        <div key={item?.id} className={`!w-[192px] flex justify-center items-center  ml-[84px] h-[148px] rounded-lg overflow-hidden border border-searchBgColor bg-btnBgColor`}>
                                                            <div className='w-full h-full'>
                                                                <img className=' h-full m-auto' src={item?.out_wear_img} alt="out_wear_img" />
                                                            </div>
                                                            <div className={`absolute top-1 px-1 flex ${!item?.active ? "justify-between" : "justify-end"}  w-[190px] `}>
                                                                {
                                                                    !item?.active ? <div className='w-[24px] h-[24px] cursor-pointer border border-searchBgColor bg-white rounded-lg flex items-center justify-center'>
                                                                        <img src={statusFalse} alt="" />
                                                                    </div> : null
                                                                }
                                                                <div className='w-[24px] h-[24px] cursor-pointer border border-searchBgColor bg-white rounded-lg flex items-center justify-center'>
                                                                    <img src={Liked} alt="" />
                                                                </div>
                                                            </div>
                                                            <div className='absolute duration-200  bottom-1 px-1 mb-[6px] w-[190px]  flex justify-end'>
                                                                <div className='w-[24px] h-[24px]     cursor-pointer border border-searchBgColor bg-white rounded-lg flex items-center justify-center'>
                                                                    <img src={nextInfo} alt="nextInfo" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </Slider>
                                    </div>
                                    <div className="w-full h-fit">
                                        <Slider {...underWear} className={`w-full h-[168px]`}>
                                            {
                                                producListMap?.underWear.map(item => {
                                                    return (
                                                        <div key={item?.id} className={`!w-[192px] flex justify-center items-center   ml-[84px] h-[168px] rounded-lg overflow-hidden border border-searchBgColor bg-btnBgColor`}>
                                                            <div className='w-full h-full'>
                                                                <img className=' h-full m-auto' src={item?.under_wear_img} alt="under_wear_img" />
                                                            </div>
                                                            <div className={`absolute top-1 px-1 flex ${!item?.active ? "justify-between" : "justify-end"}  w-[190px] `}>
                                                                {
                                                                    !item?.active ? <div className='w-[24px] h-[24px] cursor-pointer border border-searchBgColor bg-white rounded flex items-center justify-center'>
                                                                        <img src={statusFalse} alt="" />
                                                                    </div> : null
                                                                }
                                                                <div className='w-[24px] h-[24px] cursor-pointer border border-searchBgColor bg-white rounded flex items-center justify-center'>
                                                                    <img src={Liked} alt="" />
                                                                </div>
                                                            </div>
                                                            <div className='absolute duration-200  bottom-1 px-1 mb-[6px] w-[190px]  flex justify-end'>
                                                                <div className='w-[24px] h-[24px]     cursor-pointer border border-searchBgColor bg-white rounded flex items-center justify-center'>
                                                                    <img src={nextInfo} alt="nextInfo" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </Slider>
                                    </div>
                                    <div className="w-full h-fit">
                                        <Slider {...legWear} className={`w-full h-[60px]`}>
                                            {
                                                producListMap?.legWear.map(item => {
                                                    return (
                                                        <div key={item?.id} className={`!w-[192px] flex justify-center items-center  ml-[84px] h-[60px] rounded-lg overflow-hidden border border-searchBgColor bg-btnBgColor`}>
                                                            <div className='w-full h-full'>
                                                                <img className=' h-full m-auto' src={item?.leg_wear_img} alt="leg_wear_img" />
                                                            </div>
                                                            <div className={`absolute top-1 px-1 flex ${!item?.active ? "justify-between" : "justify-end"}  w-[190px] `}>
                                                                {
                                                                    !item?.active ? <div className='w-[24px] h-[24px] cursor-pointer border border-searchBgColor bg-white rounded flex items-center justify-center'>
                                                                        <img src={statusFalse} alt="" />
                                                                    </div> : null
                                                                }
                                                                <div className='w-[24px] h-[24px] cursor-pointer border border-searchBgColor bg-white rounded flex items-center justify-center'>
                                                                    <img src={Liked} alt="" />
                                                                </div>
                                                            </div>
                                                            <div className='absolute duration-200  bottom-1 px-1 mb-[6px] w-[190px]  flex justify-end'>
                                                                <div className='w-[24px] h-[24px]     cursor-pointer border border-searchBgColor bg-white rounded flex items-center justify-center'>
                                                                    <img src={nextInfo} alt="nextInfo" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </Slider>
                                    </div>

                                </div>

                            </div>
                            <div className='w-[270px] flex flex-wrap content-between bg-white'>
                                {
                                    producListMap?.category.map(item => {
                                        return (
                                            <div key={item?.id} className='w-full h-[76px] border-b border-searchBgColor p-4'>
                                                <div className='not-italic font-AeonikProRegular text-sm leading-4 text-gray-500'>Набор: <span className='not-italic font-AeonikProMedium text-base text-black ml-2'>{item?.name}</span></div>
                                                <div className='not-italic font-AeonikProRegular text-sm leading-4 text-gray-500'>Магазин: <span className='not-italic font-AeonikProMedium text-base text-black ml-2'>{item?.market}</span></div>
                                            </div>
                                        )
                                    })
                                }

                                <div className='w-full h-[212px] flex flex-wrap content-between border-b border-searchBgColor p-4'>
                                    {
                                        producListMap?.headWear.filter(e => e.product_id == getSliderId.headWearId).map(item => {
                                            return (
                                                <>
                                                    {
                                                        item?.active ?
                                                            <div key={item?.id} className='w-full flex justify-between items-center'>
                                                                <div className='flex items-center'>
                                                                    <span><img src={checkTrue} alt="checkTrue" /></span>
                                                                    <span className='not-italic font-AeonikProRegular text-sm leading-4 text-setTexOpacity ml-2'>{item?.name}</span></div>
                                                                <div>
                                                                    <span className='not-italic font-AeonikProMedium text-base leading-4 text-right text-black'>{item?.amount}</span>
                                                                </div>
                                                            </div> :
                                                            <div className='w-full flex justify-between items-center'>
                                                                <div className='flex items-center'>
                                                                    <span><img src={checkFalse} alt="checkTrue" /></span>
                                                                    <span className='not-italic font-AeonikProRegular text-sm leading-4 text-setTexOpacity ml-2'>{item?.name}</span></div>
                                                                <div>
                                                                    <span className='not-italic font-AeonikProMedium line-through	 text-base leading-4 text-right text-setTexOpacity'>{item?.amount}</span>
                                                                </div>
                                                            </div>
                                                    }
                                                </>
                                            )
                                        })
                                    }
                                    {
                                        producListMap?.outWear.filter(e => e.product_id == getSliderId.outWearId).map(item => {
                                            return (
                                                <>
                                                    {
                                                        item?.active ?
                                                            <div key={item?.id} className='w-full flex justify-between items-center'>
                                                                <div className='flex items-center'>
                                                                    <span><img src={checkTrue} alt="checkTrue" /></span>
                                                                    <span className='not-italic font-AeonikProRegular text-sm leading-4 text-setTexOpacity ml-2'>{item?.name}</span></div>
                                                                <div>
                                                                    <span className='not-italic font-AeonikProMedium text-base leading-4 text-right text-black'>{item?.amount}</span>
                                                                </div>
                                                            </div> :
                                                            <div className='w-full flex justify-between items-center'>
                                                                <div className='flex items-center'>
                                                                    <span><img src={checkFalse} alt="checkTrue" /></span>
                                                                    <span className='not-italic font-AeonikProRegular text-sm leading-4 text-setTexOpacity ml-2'>{item?.name}</span></div>
                                                                <div>
                                                                    <span className='not-italic font-AeonikProMedium line-through	 text-base leading-4 text-right text-setTexOpacity'>{item?.amount}</span>
                                                                </div>
                                                            </div>
                                                    }
                                                </>
                                            )
                                        })
                                    }
                                    {
                                        producListMap?.underWear.filter(e => e.product_id == getSliderId.underWearId).map(item => {
                                            return (
                                                <>
                                                    {
                                                        item?.active ?
                                                            <div key={item?.id} className='w-full flex justify-between items-center'>
                                                                <div className='flex items-center'>
                                                                    <span><img src={checkTrue} alt="checkTrue" /></span>
                                                                    <span className='not-italic font-AeonikProRegular text-sm leading-4 text-setTexOpacity ml-2'>{item?.name}</span></div>
                                                                <div>
                                                                    <span className='not-italic font-AeonikProMedium text-base leading-4 text-right text-black'>{item?.amount}</span>
                                                                </div>
                                                            </div> :
                                                            <div className='w-full flex justify-between items-center'>
                                                                <div className='flex items-center'>
                                                                    <span><img src={checkFalse} alt="checkTrue" /></span>
                                                                    <span className='not-italic font-AeonikProRegular text-sm leading-4 text-setTexOpacity ml-2'>{item?.name}</span></div>
                                                                <div>
                                                                    <span className='not-italic font-AeonikProMedium line-through	 text-base leading-4 text-right text-setTexOpacity'>{item?.amount}</span>
                                                                </div>
                                                            </div>
                                                    }
                                                </>
                                            )
                                        })
                                    }
                                    {
                                        producListMap?.legWear.filter(e => e.product_id == getSliderId.legWearId).map(item => {
                                            return (
                                                <>
                                                    {
                                                        item?.active ?
                                                            <div key={item?.id} className='w-full flex justify-between items-center'>
                                                                <div className='flex items-center'>
                                                                    <span><img src={checkTrue} alt="checkTrue" /></span>
                                                                    <span className='not-italic font-AeonikProRegular text-sm leading-4 text-setTexOpacity ml-2'>{item?.name}</span></div>
                                                                <div>
                                                                    <span className='not-italic font-AeonikProMedium text-base leading-4 text-right text-black'>{item?.amount}</span>
                                                                </div>
                                                            </div> :
                                                            <div className='w-full flex justify-between items-center'>
                                                                <div className='flex items-center'>
                                                                    <span><img src={checkFalse} alt="checkTrue" /></span>
                                                                    <span className='not-italic font-AeonikProRegular text-sm leading-4 text-setTexOpacity ml-2'>{item?.name}</span></div>
                                                                <div>
                                                                    <span className='not-italic font-AeonikProMedium line-through	 text-base leading-4 text-right text-setTexOpacity'>{item?.amount}</span>
                                                                </div>
                                                            </div>
                                                    }
                                                </>
                                            )
                                        })
                                    }
                                    {
                                        producListMap?.Accessory.filter(e => e.product_id == getSliderId.accessoryId).map(item => {
                                            return (
                                                <>
                                                    {
                                                        item?.active ?
                                                            <div key={item?.id} className='w-full flex justify-between items-center'>
                                                                <div className='flex items-center'>
                                                                    <span><img src={checkTrue} alt="checkTrue" /></span>
                                                                    <span className='not-italic font-AeonikProRegular text-sm leading-4 text-setTexOpacity ml-2'>{item?.name}</span></div>
                                                                <div>
                                                                    <span className='not-italic font-AeonikProMedium text-base leading-4 text-right text-black'>{item?.amount}</span>
                                                                </div>
                                                            </div> :
                                                            <div className='w-full flex justify-between items-center'>
                                                                <div className='flex items-center'>
                                                                    <span><img src={checkFalse} alt="checkTrue" /></span>
                                                                    <span className='not-italic font-AeonikProRegular text-sm leading-4 text-setTexOpacity ml-2'>{item?.name}</span></div>
                                                                <div>
                                                                    <span className='not-italic font-AeonikProMedium line-through	 text-base leading-4 text-right text-setTexOpacity'>{item?.amount}</span>
                                                                </div>
                                                            </div>
                                                    }
                                                </>
                                            )
                                        })
                                    }



                                </div>
                                <div className='w-full h-[104px] flex items-center border-b border-searchBgColor '>
                                    <div className="w-full h-fit ">
                                        <Slider {...Accessory} className={`w-full h-[72px]`}>
                                            {
                                                producListMap?.Accessory.map(item => {
                                                    return (
                                                        <div key={item?.id} className={`!w-[174px] flex items-center justify-center ml-[48px] h-[72px] rounded-lg overflow-hidden border border-searchBgColor bg-btnBgColor`}>
                                                            {/* <img className='w-[100px] h-full 	 m-auto' src={item?.accessor_wear_img} alt="" /> */}
                                                            <div className='w-full h-full'>
                                                                <img className='w-[100px] h-full m-auto' src={item?.accessor_wear_img} alt="accessor_wear_img" />
                                                            </div>
                                                            <div className={`absolute top-1 px-1 flex ${!item?.active ? "justify-between" : "justify-end"}  w-[174px] `}>
                                                                {
                                                                    !item?.active ? <div className='w-[24px] h-[24px] cursor-pointer border border-searchBgColor bg-white rounded flex items-center justify-center'>
                                                                        <img src={statusFalse} alt="" />
                                                                    </div> : null
                                                                }
                                                                <div className='w-[24px] h-[24px] cursor-pointer border border-searchBgColor bg-white rounded flex items-center justify-center'>
                                                                    <img src={Liked} alt="" />
                                                                </div>
                                                            </div>
                                                            <div className='absolute duration-200  bottom-1 px-1 mb-[6px] w-[174px]  flex justify-end'>
                                                                <div className='w-[24px] h-[24px]     cursor-pointer border border-searchBgColor bg-white rounded flex items-center justify-center'>
                                                                    <img src={nextInfo} alt="nextInfo" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </Slider>
                                    </div>

                                </div>
                                <div className='w-full h-[88px] pt-4 pl-4 pr-2 pb-2  flex flex-wrap content-between'>
                                    <div className='flex w-full justify-between items-center'>
                                        <div className='flex'>
                                            <span className='mr-[6px] flex  items-center'>
                                                <img src={star} alt="star" /></span>
                                            <span className='not-italic font-AeonikProMedium text-base leading-4 text-black'>2.5 <span className='mr-1 not-italic font-AeonikProRegular text-xs leading-3 text-setTexOpacity'>(20 голосов)</span></span>
                                        </div>
                                        <div className='w-[100px] h-[24px]  rounded bg-setButtonColor flex items-center justify-center'>
                                            <span className='not-italic flex  items-center font-AeonikProRegular text-center text-black text-[10px]'>
                                                Страница набора
                                            </span>
                                        </div>
                                    </div>
                                    <div className='flex items-center w-full justify-between'>
                                        <div >
                                            <span className='not-italic font-AeonikProMedium text-2xl leading-7 text-setPriceRed mr-[6px]'>828000</span>
                                            <span className='not-italic font-AeonikProRegular line-through	 text-sm leading-4 text-setTexOpacity'>828000</span>
                                        </div>
                                        <div className='w-[36px] h-[36px] rounded bg-btnBgColor flex items-center justify-center'>
                                            <img src={addBag} alt="addbag" />
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div >
                    )
                })
            }


            {/* 
            <div className='w-[630px] h-[480px] border border-searchBgColor rounded-lg '>
                <div>
                    <p>  getSliderId.headWearId: <strong>{getSliderId.headWearId}</strong></p>
                    <p>  getSliderId.outWearId: <strong>{getSliderId.outWearId}</strong></p>
                    <p>  getSliderId.underWearId: <strong>{getSliderId.underWearId}</strong></p>
                    <p>  getSliderId.legWearId: <strong>{getSliderId.legWearId}</strong></p>
                    <p>  getSliderId.accessoryId: <strong>{getSliderId.accessoryId}</strong></p>
                </div>
            </div> */}
            <div className='w-full h-fit flex items-center justify-center mt-14'>
                <div className='w-[760px] h-[60px] cursor-pointer not-italic font-AeonikProMedium text-base leading-4 text-center text-black flex items-center justify-center rounded-lg border border-searchBgColor bg-btnBgColor'>
                    Показать ещё 12 наборов
                </div>

            </div>

        </div >
    )
}
