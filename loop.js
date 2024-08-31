//looping numeric for dasar

// for(let i=0;i < 5 ; i++)
//     console.log(i)

//looping numeric for dasar + percobaan syntax break

// for(let i=0;i <= 10 ; i+=1)
//     {                                        //gunakan kurung {} jika mau menggunakan break dan disatukan dengan console.log output
//     if(i === 8) {break;
//     }
//     console.log(i);
// }

//looping for menggunakan +=2 agar output loncat 2

// for(let i=1;i < 10 ; i+=2){
//     if(i === 7){break}    
//     console.log(i)
// }

//penggunaan looping for dan fitur .length
const name = "Probe"
for(let i = 0;i < name.length;i+=1) 
console.log(name[i]);
console.log("total huruf dari nama " + name + " : "+ name.length);

//aplikasi lain dari penggunaan .length

const menu =["Jasuke","Boba","Midog","Kopi","Telur Ceplok","Dada Ayam"]
for(let i = 0 ;i < menu.length;i++){
    console.log("List Menu :")
    console.log("menu "+ (i+1) + " : " + menu[i])}
