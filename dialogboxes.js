/*
*alert: Popup olarak istenilen uyarı mesajı verilir.
*prompt: Kullanıcıdan input alınır.,
?Kullanıcıdan alınan değerler her zaman string döner.
*confirm
*/

alert("İsleminize devam etmeden önce kaydetmelisiniz.");
let isim = prompt("İsminizi giriniz:");
console.log(isim);
let sonuc = confirm("Silmek istediğinize emin misiniz.");
console.log(sonuc);