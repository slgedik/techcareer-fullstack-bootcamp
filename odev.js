// Örnek-4: Aşağıdaki örnekleri math ile çözelim ?
// -5.9 sayıyının aşağıdaki işlemleri yaptıralım ?
let sayi = -5.9;
// 1-mutlak değeri alsın 5.9
sayi = Math.abs(sayi);
console.log(sayi);
// 2-yuvarlama yapsın  6.0
sayi = Math.ceil(sayi);
console.log(sayi);
// 3-karesini alsın 36.00
sayi = Math.pow(sayi, 2);
console.log(sayi);
// 4-karekök alsın 6.0
sayi = Math.sqrt(sayi);
console.log(sayi);
// 5-yuvarlama yapsın 6.0
sayi = Math.round(sayi);
console.log(sayi);
// 6-)çıkan sonucu 5 bölsün 6/5=1
sayi = sayi / 5;
console.log(Math.floor(sayi));
// 7-) iki sayı arasından karşılaştırma yapsın en küçüğünü alsın ve 1 ve 5
let kucukSayi = Math.min(1, 5);
console.log(kucukSayi);
// 8-) küçük sayı eğer tekse 3 eklesin çiftse 5 eklesin
if (kucukSayi % 2 == 0) {
  kucukSayi += 5;
} else {
  kucukSayi += 3;
}
console.log(kucukSayi);
// Örnek-5 : kullanıcı tarafından girilen bir sayıyı negatif mi pozitif mi olduğu ekran yazdıran algoritma ?
// NOT: cast kullalım ?
sayi = Number(prompt('bir sayi giriniz : '));
if (sayi < 0) {
  console.log('Negatif');
} else {
  console.log('pozitif');
}

// Örnek-6 : kullanıcı tarafından password ve repassword alalım sonrasında bu iki değeri karşılaştırma yapalım
var pwd = prompt('Password : ');
var pwd2 = prompt('Repassword : ');
if (pwd === pwd2) {
  console.log('şifreler aynı');
} else {
  console.log('şifreler farklı');
}

// eğer aynı girilirse aynı veri yoksa birbirine uymadı yazan algoritma yapalım

// kullanıcı tarafından girilen bir kelimenin (prompt)
let userData = prompt('Lütfen bir şeyler yazınız');
// S-1) Kaç karakterlidir ? (length)
console.log(userData.length);
// S-2) boşluklar alınarak Kaç karakterlidir ? (trim)
console.log(userData.trim().length);
// S-3) bütün kelimeyi küçük harfle göstermek ? (toLowerCase())
console.log(userData.toLocaleLowerCase());
// S-4) bütün kelimeyi büyük harfle göstermek ? (toUpperCase())
console.log(userData.toUpperCase());
// S-5) Kullanıcıdan alınan ilk kelimeyle , "javascript" kelimeyle değiştirin. (replace, substring, indexOf)
var indexNum = userData.indexOf(' ');
console.log(indexNum);
if (indexNum !== -1) {
  var ilkKelime = userData.substring(0, indexNum);
  var yeniMetin = userData.replace(ilkKelime, 'javascript');
  console.log(yeniMetin);
} else {
  console.log('Metin içinde boşluk karakteri bulunamadı.');
}

// console.log(userData.replace("xxxxxxx"),"javascript");
// console.log(userData.replace(userData.substring(0,userData.indexOf(" ")),"javascript"));
// S-6) yazdığınız kelimede "javascript ile mi başlıyor" ? (startsWith())

//console.log(userData.startsWith('javascript'));
// S-7) yazdığınız kelimede "javascript ile mi bitiyor" ? (endsWith())

//console.log(userData.endsWith('javascript'));

// S-8) ilk harf nedir  ? (charAt())
console.log(userData.charAt(0));
// S-9) girdiğiniz kelimenin sonuna "-ben js öğreniyorum" (concat())
console.log(userData.concat('-ben js öğreniyorum'));
// S-10) girdiğiniz 0 ile 4 arasındaki indexi ekranda gösterin? (subString())
console.log(userData.substring(0, 4));

// ÖDEV:
// Kullanıcı tarafından girilen bir sayının negatif mi, pozitif mi ? bunu yazan JS code yazınız.
// (Dikkat: normal  function ile yazınız)
let oddEvenCalculator = function () {
  let number = prompt('Bir Sayı Giriniz');
  if (number % 2 == 0) {
    //çift sayı
    console.log(number + ' çift sayıdır');
  } else {
    console.log(number + ' tek sayıdır');
  }
};
//oddEvenCalculator()

// Kullanıcı tarafından girilen bir sayının tek mi, çift mi olduğunu yazan JS code yazınız.
// (Dikkat:anonymous function ve ternary ile yazınız).

var number = Number(prompt('Bir sayı girin:'));
var sonuc = (function (sayi) {
  return sayi % 2 === 0 ? 'Çift sayı' : 'Tek sayı';
})(parseInt(number));

console.log(sonuc);

// Kullanıcıdan alınan sayıya göre Haftanın günlerini switch-case ile JS code yazınız?
// Örneğin: kullanıcı 1 girdi: 1=pazartesi yazacak
var number = Number(prompt('Bir sayı girin:'));
switch (number) {
  case 1:
    console.log('Pazartesi');
    break;
  case 2:
    console.log('Salı');
    break;
  case 3:
    console.log('Çarşamba');
    break;
  case 4:
    console.log('Perşembe');
    break;
  case 5:
    console.log('Cuma');
    break;
  case 6:
    console.log('Cumartesi');
    break;
  case 7:
    console.log('Pazar');
    break;

  default:
    console.log('haftanın günleri dışında');
    break;
}

// ÖDEV
// kullanıcıdan aldığımız isim soyisim (boşluk var)
// ilk karakter göstersin sonraki kelimeleri masking (maskeleme yapsın)
// eğer kullanıcı isim ve soyisimi ilk karakteri küçük girmişse büyük olsun mutlaka
// Hamit Mızrak
// H**** MIZ***
// ipucu: charAt, substring, indexOf, döngü, karar mekanizma

function maskName(inputName) {
  if (!inputName) {
    console.log('Lütfen geçerli bir isim soyisim girin.');
    return;
  }

  // İlk harfi büyük yapalım
  var indexNum = inputName.indexOf(' ');
  var replaceStr;
  for (let i = 1; i < indexNum; i++) {
    inputName = inputName.replace(inputName.substring(i, i + 1), '*');
  }
  for (let j = indexNum + 2; j < inputName.length; j++) {
    inputName = inputName.replace(inputName.substring(j, j + 1), '*');
  }
  inputName =
    inputName.charAt(0).toUpperCase() +
    inputName.substring(1, indexNum + 1) +
    inputName.charAt(indexNum + 1).toUpperCase() +
    inputName.substring(indexNum + 2, inputName.length);
  console.log(inputName);
}

const fullName = prompt('Lütfen adınızı ve soyadınızı girin (örnek: Hamit Mızrak):');
maskName(fullName);
