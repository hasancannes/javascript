function yazdir(){
    console.log("Hasan");
}

yazdir()

// Yazılan methodlar(fonksiyonlar) nerede tanımlanırsa tanımlansın kodun her yerinde altında veya üstünde çağırılabilir.

function yazdir2(isim,soyisim){
    console.log(isim + " " + soyisim);
}

yazdir2("hasan", "can");

cube(5)

function cube(sayi){
    console.log(sayi*sayi*sayi);
}

// return ile fonksiyon içindeki bir değer sonradan kullanılabilir. Fonksiyonun değer dönmesi sağlanır.
// Geriye değer döndürmeyen method'lara void denir.
function square(sayi){
    let sonuc = sayi*sayi;
    return sonuc;
}

let sonucReturn = square(10);

console.log(sonucReturn);
