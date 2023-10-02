// ? var ile tanımlanan değişkenler global harici "function scope" olarak tanuımlanır. Bu yüzden bellekte çok fazla yer kaplar.
// ! var ile aynı değişken adından değer tanımlanabilir ama son oluşturulan değer kullanılır.


// ? let/const: block scope özelliğine sahiptir.
// ! let/const ile aynı değişken isminde değer kullanılamaz.

// * Let & Const Farkı: const = sabit, değişmez (constant)

const a = 20;
a= 15; //hata alırız.

let b= 25;
b=10;

// ! const ile bir obje tanımlandığında, obje değiştirilemez ama obje içerisindeki parametrelerin değerleri değiştirilebilir.

const user = {
    username : "hasan",
    password : "can35"
}

user = {age : 25} // hata alırız.
user.username = "hasancan" //success döner.