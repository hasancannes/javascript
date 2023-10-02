var degiskenIsmi = 10;
console.log(degiskenIsmi);

// ? global scope. Her yerden erişilebilir.
var a = 5;

while(a<10){
    console.log(a);
    a= a+1;
}

// ? function scope. Fonksiyon içinde tanımlanarak kullanılır. Dışardan çağrılamaz.

function method1(){
    var sayi=20;
    console.log(sayi)
}

method1()

// ! console.log(sayi) undefined hatası alırız çünkü sayi = function scope olarak tanımlandı.

// ? Block Scope. for-while-if gibi fonksiyonların içinde tanımlanan değerler block scope olarak değerlendirilir. Bu blockların içinde kullanılabilir.

function method2(){
    if(true){
        var b=10; //block scope
    }
    while(true){
        pass
    }
    for(let i =0; i<=10; i++){

    }
}