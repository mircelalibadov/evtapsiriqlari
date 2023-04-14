"use strict";

// let eded=10;
// let cem = 0;
// let hasil=1;
// for (let i = 1; i <= eded; i++) {
//   cem = cem + i;
//   hasil=hasil*i
//   console.log(" i ededleri;", i);
//   console.log("cem;", cem);
//   console.log("hasili;", hasil)
// }
// let eded=10
// let cem=0;
// for(let i=1; i<10; i++){
// if(i % 2==0){
//     cem=cem+i
//     console.log(`${i} bu cut ededdir`)

// }

// }
// console.log(cem)

// let i=1

// // while(i<10){
// //     console.log(i);
// //     i++
// // }

// do{
//     console.log(i)
//     i++
// }while(i<8)

// let n=1000

// for(let i=0; i<n; i++){
//   if(i%3==0){
//   console.log(i)
//   }
// }

// let cem=0
// let arr=[1,2,5,8,77,56]
// for(let i=0;  i<arr.length; i++){
// cem=cem+arr[i]

// }
// console.log(cem)

//arr hakda

// let telebesiyahisi=["hesen","namiq","necef"]
// console.log(telebesiyahisi)
// console.log(telebesiyahisi[2])

// telebesiyahisi[3]="elmin"
// console.log(telebesiyahisi)

// let telebesiyahisi=["hesen","namiq","necef",["312",[548]] ]
// console.log(telebesiyahisi)
// console.log(telebesiyahisi[3])
// console.log(telebesiyahisi[3][0])
// console.log(telebesiyahisi[3][0][1])
// telebesiyahisi[5]="subhan"
// console.log(telebesiyahisi)
// telebesiyahisi.push("celal")
// console.log(telebesiyahisi)
// telebesiyahisi.pop()
// console.log(telebesiyahisi)
// telebesiyahisi.shift()
// console.log(telebesiyahisi)
// telebesiyahisi.unshift("cahangir")
// console.log(telebesiyahisi)

// IF FOR ID

// let arr=[2,8,11,-3,55,6,"Azerbaycan",true,12,346,"Masalli","limon",2,9,177]
// console.log(arr);
// arr.pop()
// console.log(arr)
// arr.unshift(false)
// console.log(arr)
// arr.unshift(5)
// console.log(arr)
// arr.pop()
// console.log(arr)

// let arr = [2, 9, 45, -5, 12, -4, 180];
// console.log(arr)

// for(let i=0;i<arr.length; i++ ){
//     if(arr[i]>0)
//      {console.log(arr[i])}
// }

// for(let i=0;i<arr.length; i++ ){
//     if(arr[i]<0)
//      {console.log(arr[i])}
// }

// for(let i=0;i<arr.length; i++ ){
//     if(arr[i]>0 && arr[i]%2==0)
//      {console.log(arr[i])}
// }

// for(let i=0;i<arr.length; i++ ){
//     if(arr[i]<0 && arr[i]%2!=0)
//      {console.log(arr[i])}
// }

// let cem = 0;
// for (let i = 0; i < arr.length; i++) {
//   cem = cem + arr[i];

// }
// console.log(cem);
// let cem=0

///////obj

// const obj = {
//   name: "un",
//   price: 12,
//   stock: 100,
// };
// console.log(obj.name);
// console.log(obj.price);
// console.log(obj.stock);

// console.log(obj["name"]);
// console.log(obj["price"]);
// console.log(obj["stock"]);

// let myinput = prompt("deyer daxil edin");
// console.log(obj[myinput]);
// delete obj.name;

// obj.price=15
// console.log(obj);

// const obj = {
//     name: "un",
//     price: 12,
//     stock: 100,
//     name:"salamlar"
//   };
//   console.log(obj)


////////////////////////////////id

// const arr = [
//     {
//       id: 4,
//       supplierId: 2,
//       categoryId: 3,
//       quantityPerUnit: "48 - 6 oz jars",
//       unitPrice: 22,
//       unitsInStock: 53,
//       unitsOnOrder: 0,
//       reorderLevel: 0,
//       discontinued: true,
//       name: "Chef Anton's Cajun Seasoning",
//       supplier: {},
//       category: {
//         id: 3,
//         description: "Desserts candies and sweet breads",
//         name: "Confections",
//       },
//     },
//     {
//       id: 5,
//       supplierId: 2,
//       categoryId: 2,
//       quantityPerUnit: "36 boxes",
//       unitPrice: 21.35,
//       unitsInStock: 0,
//       unitsOnOrder: 0,
//       reorderLevel: 0,
//       discontinued: true,
//       name: "Chef Anton's Gumbo Mix",
//     },
//     {
//       id: 6,
//       supplierId: 3,
//       categoryId: 2,
//       quantityPerUnit: "12 - 8 oz jars",
//       unitPrice: 25,
//       unitsInStock: 120,
//       unitsOnOrder: 0,
//       reorderLevel: 25,
//       discontinued: false,
//       name: "Grandma's Boysenberry Spread",
//     },
//     {
//       id: 7,
//       supplierId: 3,
//       categoryId: 7,
//       quantityPerUnit: "12 - 1 lb pkgs.",
//       unitPrice: 30,
//       unitsInStock: 15,
//       unitsOnOrder: 0,
//       reorderLevel: 10,
//       discontinued: false,
//       name: "Uncle Bob's Organic Dried Pears",
//     },
//     {
//       id: 8,
//       supplierId: 3,
//       categoryId: 2,
//       quantityPerUnit: "12 - 12 oz jars",
//       unitPrice: 40,
//       unitsInStock: 6,
//       unitsOnOrder: 0,
//       reorderLevel: 0,
//       discontinued: false,
//       name: "Northwoods Cranberry Sauce",
//     },
//     {
//       id: 9,
//       supplierId: 4,
//       categoryId: 6,
//       quantityPerUnit: "18 - 500 g pkgs.",
//       unitPrice: 97,
//       unitsInStock: 29,
//       unitsOnOrder: 0,
//       reorderLevel: 0,
//       discontinued: true,
//       name: "Mishi Kobe Niku",
//     },
//     {
//       id: 10,
//       supplierId: 4,
//       categoryId: 8,
//       quantityPerUnit: "12 - 200 ml jars",
//       unitPrice: 31,
//       unitsInStock: 31,
//       unitsOnOrder: 0,
//       reorderLevel: 0,
//       discontinued: false,
//       name: "Ikura",
//     },
//     {
//       id: 2,
//       supplierId: 1,
//       categoryId: 1,
//       quantityPerUnit: "24 - 12 oz bottles",
//       unitPrice: 19,
//       unitsInStock: 17,
//       unitsOnOrder: 40,
//       reorderLevel: 25,
//       discontinued: false,
//       name: "Chang",
//     },
//     {
//       id: 3,
//       supplierId: 1,
//       categoryId: 2,
//       quantityPerUnit: "12 - 550 ml bottles",
//       unitPrice: 10,
//       unitsInStock: 13,
//       unitsOnOrder: 70,
//       reorderLevel: 25,
//       discontinued: false,
//       name: "Aniseed Syrup",
//     },
//     {
//       id: 11,
//       supplierId: 5,
//       categoryId: 2,
//       quantityPerUnit: "1 kg pkg.",
//       unitPrice: 21,
//       unitsInStock: 22,
//       unitsOnOrder: 30,
//       reorderLevel: 30,
//       discontinued: false,
//       name: "Queso Cabrales 2",
//       supplier: {
//         id: 5,
//         companyName: "Cooperativa de Quesos 'Las Cabras'",
//         contactName: "Antonio del Valle Saavedra",
//         contactTitle: "Export Administrator",
//         address: {
//           street: "Calle del Rosal 4",
//           city: "Oviedo",
//           region: "Asturias",
//           postalCode: 33007,
//           country: "Spain",
//           phone: "(98) 598 76 54",
//         },
//       },
//       category: {
//         id: 4,
//         description: "Cheeses",
//         name: "Dairy Products",
//       },
//     },
//     {
//       id: 12,
//       supplierId: 5,
//       categoryId: 4,
//       quantityPerUnit: "10 - 500 g pkgs.",
//       unitPrice: 38,
//       unitsInStock: 86,
//       unitsOnOrder: 0,
//       reorderLevel: 0,
//       discontinued: false,
//       name: "Queso Manchego La Pastora",
//     },
//     {
//       id: 13,
//       supplierId: 6,
//       categoryId: 8,
//       quantityPerUnit: "2 kg box",
//       unitPrice: 6,
//       unitsInStock: 24,
//       unitsOnOrder: 0,
//       reorderLevel: 5,
//       discontinued: false,
//       name: "Konbu",
//     },
//     {
//       id: 14,
//       supplierId: 6,
//       categoryId: 7,
//       quantityPerUnit: "40 - 100 g pkgs.",
//       unitPrice: 23.25,
//       unitsInStock: 35,
//       unitsOnOrder: 0,
//       reorderLevel: 0,
//       discontinued: false,
//       name: "Tofu",
//     },
//     {
//       id: 15,
//       supplierId: 6,
//       categoryId: 2,
//       quantityPerUnit: "24 - 250 ml bottles",
//       unitPrice: 15.5,
//       unitsInStock: 39,
//       unitsOnOrder: 0,
//       reorderLevel: 5,
//       discontinued: false,
//       name: "Genen Shouyu",
//     },
//   ];

//   for(let i=0;i<arr.length;i++){
//    if(arr[i].unitPrice>20){
//     console.log(arr[i]);
//    }

//   }

// let max=arr[0]

// for(let i=0;i<arr.length;i++){
// if(max.unitPrice<arr[i].unitPrice)
// max=arr[i]
// }
// console.log(max)
                /////////1
/////////verilmis arrayda proptan daxil etdiyimiz namede ilk hwrflwr olani ekrana cixarsin
//////function
// function cemy(x,y) {
//   let cem=x+y
//   // console.log("cem","=" ,cem)
//   return cem
// }
// console.log(cemy(3,5))
        /////////////////2
// function ferq(x,y){
//   let cixmaq=x-y
//   return cixmaq
// }
// console.log(ferq(3,5))
//////////////3
// function hasil(x,y){
// let vurma=x*y
// return vurma

// }
// console.log(hasil(10,7))
////////////////4
// function nisbet(x,y){
//   let bolme=x/y
//   return bolme
  
//   }
  // console.log(nisbet(10,5))
            ///////////5
// function muqayise(x,y){
// if(x>y){
//   return(`${x} boyukdur${y}`)
// }else if(x<y){
//   return(`${y} boyukdur${x}`)
// }else{
//   return(`${y} beraberdir${x}`)
// }
// }
// console.log(muqayise(5,4))

/////////////6
// function daxiledilen(){
// const obj={
//   ad:"MirCelal",
//   soyad:"Ibadov",
// }
// return obj

// }
// console.log(daxiledilen())

//////////////7
// function daxiledilen(){
// const arr=[2,5,6,7,10,]
// return arr
// }
// console.log(daxiledilen())
//////////////9
// const arr=[2,5,-6,-7,10]
// let max=arr[0]
// function daxiledeilen(){
// for(let i=0;i<arr.length;i++){
//   if(max<arr[i]){
//     max=arr[i]
//   }
// }
// return max
// }
// console.log(daxiledeilen())
/////10