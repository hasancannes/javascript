let kurs = "Modern Web Geliştirme Kursu";
let tarih = "2023"
// charAt belirtilen indexteki karakteri döner.
let karakter = kurs.charAt(5);
console.log(karakter);
// concat ile iki string ifade birleştirilebilir.
let sonuc = kurs.concat(" ", tarih);
console.log(sonuc);
//indexof ile belirtilen karakterin indexi döner.
let index = kurs.indexOf("W");
console.log(index)
//touppercase & tolowercase
let sonuc2 = kurs.toLocaleLowerCase();
let sonuc3 = kurs.toLocaleUpperCase();
console.log(sonuc2 + " "+ sonuc3);

//trim ile başlangıç ve bitişteki space'ler temizlenir.
let trimmed = kurs.trim();
console.log(trimmed);

//slice ile string belirtilen indexlerde parçalanabilir.
console.log(kurs.slice(22,28));
//substring, slice ile aynıdır.
console.log(kurs.substring(0,6));
//replace ile string içindeki bir kelime/harf değiştirilebilir.
console.log(kurs.replace("Modern","Güncel"));
// Split ile string belirtilen karaktere göre parçalanıp, array elde edilebilir.
let dizi = kurs.split(" ");
console.log(dizi);
//startswith ile kelimenin başlangıcı kontrol edilir.
console.log(kurs.startsWith("M"));
//endswith ile kelimenin sonu kontrol edilir.
console.log(kurs.endsWith("Kursu"));

