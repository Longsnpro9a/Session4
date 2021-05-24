// let obj={
//     key: "value"
//     ,keyy: "vaalue"
// };
// console.table(obj);
// console.log(obj.key);
// obj.key="November";
// console.log(obj.key);
// let sTamgiac =function(a,b,h)
// {
//     return ((a+b)*h)/2;
// };
// let giaithua = function(n)
// {
//     let sum=1;
//     for(let i=1; i<=n; ++i)
//     {
//         sum*=i;
//     }
//     return sum;
// };
// let sum = function(a,b)
// {
//     return a+b;
// };
// console.log(sTamgiac(4,5,6));
// console.log(giaithua(5));
// console.log(sum(10,99));
// const phoneNumber =
// [
//     {
//         id: 1
//         ,name: 'Long'
//         ,phone: 09363566173
//     },

//     {
//         id: 2
//         ,name: 'Thanh'
//         ,phone: 08363566173
//     }
// ]
// while(true)
// {
//     let input = prompt(`Enter C/R/U/D: `);
//     if (input==='R')
//     {
//         for(let i=0; i<phoneNumber.length; ++i)
//         {
//             alert(`${phoneNumber[i].id}---${phoneNumber[i].name}===${phoneNumber[i].phone}`)
//         }
//     }
//     else if(input==='C')
//     {
//         phoneNumber.push
//         ({
//             id: phoneNumber.length +1
//             ,name: prompt(`Enter name: `)
//             ,phone: Number(prompt(`Enter phoneNumber: `))
//         });
//     }
//     else if(input==='U')
//     {
//         let idInput=Number(prompt(`Enter id: `));
//         let check=0;
//         for(let i=0; i<phoneNumber.length; ++i)
//         {
//             if(phoneNumber[i].id==idInput)
//             {
//                 phoneNumber[i].name=prompt(`New name: `);
//                 phoneNumber[i].phone=prompt(`New phone: `);
//                 check=i;
//             }
//         }
//         if(check==0)
//             {
//                 alert(`Not found !!!!`)
//             }
//     }
//     else if(input==='D')
//     {
//         let idInput=Number(prompt(`Enter id: `));
//         let check=0;
//         for(let i=0; i<phoneNumber.length; ++i)
//         {
//             if(phoneNumber[i].id==idInput)
//             {
//                 delete(phoneNumber[i]);   
//                 check=i;
//             }
//         }
//         if(check==0)
//             {
//                 alert(`Not found !!!!`)
//             }
//     }
//     else
//     {
//         console.log(`C/R/U/D???????????`);
//     }

// }
