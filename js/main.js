/* if, else, else if */
/*let a = 46;
let b = 10;
let c = 55;
let d = 21;*/
/*if (a == 45 && b == 10 && c == 55 && d == 21){
    console.log("Qiymatlarning hammasi to'g'ri")
}
else{
    console.log("Qiymatlardan kamida bittasi noto'g'ri")
}*/
/*if (a == 46 || b == 10 || c == 55 || d == 21){
    console.log("Javoblardan kamida bittasi to'g'ri")
}
else{
    console.log("Javoblarning hammasi noto'g'ri")
}*/
/*
if (a == 41){
    console.log("Ular teng!")
}
else {
    console.log("Ular teng emas")
}
if (b == 11){
    console.log("They are same!")
}
else {
    console.log("They are not same!")
}
if (c == 32){
    console.log("c kichik!")
}
else {
    console.log("c katta")
}
if (d == 11){
    console.log("d kichik")
}
else {
    console.log("d katta")
}
*/
/* JS data types: undefined, boolean, object */
/*let soz; undefined type*/
/*let rost = true; boolean type*/
/*let rost = 45==45?true:false; boolean type*/ /* if va else ning ixchamlashtirilgan varianti  */
/*let arrayObject = [45,78, "text", true, false,"js"]*/
/*let oddiyObject = {ism: "Sardor", familiya: "Ikromov", yoshi: 16};*/
/* Functions in JS */
/*
console.log(oddiyObject);*/
/*
let savatcha =[12,"text"];
if (savatcha.length == 0){
    document.write("Savatchaning ichida" +savatcha.length+ "dona ma'lumot bor")
}
else {
    document.write("Savatchaning ichida" +savatcha.length+ "dona ma'lumot bor")
}
function savatchaniTekshir(){
    alert("Saytimizga xush kelibsiz")
}
savatchaniTekshir()*/
/* Date in JS */
let sana = new Date();
let yil = sana.getFullYear();
let oy = sana.getMonth();
let kun = sana.getDate();
let haftaKuni = sana.getDay();
let kunlar = ["Yakshanba","Dushanba","Seshanba","Chorshanba","Payshanba","Juma","Shanba"]
let oylar = ["yanvar","fevral","mart","aprel","may", "iyun","iyul","avgust","sebtabr","oktabr","noyabr","dekabr"]
document.write("Bugun " + yil + " -yil " + oylar[oy] + " oyining " + kun + " - kuni. Haftaning " + kunlar[haftaKuni] +" - kuni")