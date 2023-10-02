let arabalar = ["bmw", "toyota","reno", "mercedes", "porche"];
let arabalar2 = ["hyundai", "tofas"]
// array'in sonuna değer ekler ve eleman sayısını döner.
arabalar.push("opel");
console.log(arabalar);
// array'in başına değer ekler ve eleman sayısını döner.
arabalar.unshift("hyundai")
console.log(arabalar)
// sondaki elemanı siler ve silinen elemanı döner.
arabalar.pop();
console.log(arabalar);
// baştaki elemanı siler ve silinen elemanı döner.
arabalar.shift();
console.log(arabalar)
// eleman eklemek ve eleman silmek için kullanılır.
arabalar.splice(0,0,"hyundai");
console.log(arabalar);
arabalar.splice(1,2); // kaçıncı indexten başlayacağını ve kaç eleman silineceğini belirtir.
console.log(arabalar)
// tostring ile veri string'e çevrilir.
arabalarString = arabalar.toString()
console.log(typeof arabalarString)
console.log(arabalarString)
// join diziyi string'e çevirir, araya istenilen harf sembol konulur.
let stringArabalar = arabalar.join("-");
console.log(stringArabalar)
// concat ile diziler birleştirilir.
let birlesmisDizi = arabalar.concat(arabalar2)
console.log(birlesmisDizi)
// slice ile dizi istenilen bir yerden bölünüp yeni bir dizi oluştrulabilir.
console.log(arabalar);
let ayriDizi = arabalar.slice(2);
console.log(ayriDizi);
// length ile dizinin değer sayısına ulaşılır.
console.log(arabalar.length);
// reverse ile dizi ters çevrilir.
arabalar.reverse();
console.log(arabalar);
// split
let isimler = "Enes,ali,mahmut"
let isimlerDizi = isimler.split(",")
console.log(typeof isimlerDizi)
console.log(isimlerDizi)
// indexof aranılan eleman var ise bulunduğu index değerini yok ise -1 döner.
let isim=isimlerDizi.indexOf("ali")
let isim2 = isimlerDizi.indexOf("Hasan")
console.log(isim)
console.log(isim2)
// includes. Dizi içinde değerin var olup olmadığı sorgulanır. Boolean döner.
let sonuc = arabalar.includes("reno")
console.log(sonuc)


// Ürün bulma uygulaması

let urun1 = {
    isim: "Iphone 11",
    kategori: "Teknoloji",
    fiyat: 25
}
let urun2 = {
    isim: "Iphone 12",
    kategori: "Teknoloji",
    fiyat: 30
}
let urun3 = {
    isim: "Biscolota",
    kategori: "Gida",
    fiyat: 1
}
let urun4 = {
    isim: "Kitap",
    kategori: "Kültür Sanat",
    fiyat: 3
}

let urunler = [urun1,urun2,urun3,urun4];
let filtreliUrunler = [];
let urunIsmi = prompt("Bir ürün ismi giriniz: ");



function getFiltreliUrunler(urunler){
    urunler.forEach(function(urun){
        if(urun.isim.toUpperCase().includes(urunIsmi.toUpperCase(),0)){
            filtreliUrunler.push(urun)
        }
    })
}

function filtreliUrunleriYazdir(urunler){
    urunler.forEach(function(urun){
        console.log("--------------------")
        console.log("I  " + urun.isim + "  I  " + urun.fiyat + "  I  " + urun.kategori);
        console.log("--------------------")
    })
}

getFiltreliUrunler(urunler);
filtreliUrunleriYazdir(filtreliUrunler);


let dizi = [];

for (i=1; i<=5; i++){
    for(j=1; j<=5; j++){
        dizi.push(i+""+j);
    }
}
console.log(dizi)