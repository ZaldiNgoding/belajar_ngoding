let nilai = 70;

// if (nilai >= 80 ) {console.log('lulus')}
// else if (nilai >= 60){console.log('tidak lulus')}
// else {console.log('mati aja')}

if (nilai >= 80 && nilai <=100){nilai = 'A';

}else if (nilai < 80 && nilai >= 70){
    nilai = 'B';}
else if (nilai < 70 && nilai >= 50 ){nilai = 'C'}
else { nilai = 'D'}
console.log(nilai)

//&& and,|| or,! not

nilai = 70
console.log(nilai)
let banding = nilai >= 80 && nilai <= 100;
console.log(banding,'&&')
let banding2 = nilai == 80 || nilai == 100;
console.log(banding2,'||') 
let banding3 = nilai != 50 
console.log(banding3, '!=')

//apa bedanya == dengan ===

let x = 50; //tipe data number
let y = '50'; //tipe data string

let banding4 = x == y;
console.log (banding4, '==')
let banding5 = x === y;
console.log (banding5, '===')

//if Bersarang

let number = 5;
if (number > 50){
    if (number % 2 === 0){
        console.log('lebih besar daripada lima puluh dan genap')
    }else{console.log('lebih besa dari lima puluh dan ganjil')

    }
}else{
    if (number % 2 === 0){
        console.log('lebih kecil dari lima puluh dan genap ')
    }else {console.log('lebih kecil dari lima puluh dan ganjil')}
}