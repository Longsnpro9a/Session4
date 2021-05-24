//---- Bai 1:
/*
const listProducts =
[
    {
        id:1
        ,Name: "Xiaomi portable charger 20000mah"
        ,Brand: "Xiaomi"
        ,Price: 428
        ,Color: "White"
        ,Category: "Charger"
    },

    {
        id:2
        ,Name: "VSmart Active 1"
        ,Brand: "VSmart"
        ,Price: 5487
        ,Color: "Black"
        ,Category: "Phone"
    },

    {
        id:3
        ,Name: "IPhone X"
        ,Brand: "Apple"
        ,Price: 21490
        ,Color: "Gray"
        ,Category: "Phone" 
    },

    {
        id:4
        ,Name: "Samsung Galaxy A9"
        ,Brand: "Samsung"
        ,Price: 8490
        ,Color: "Blue"
        ,Category: "Phone" 
    }
]
*/

//---- 1.1:Print/log name and price of all the products out:
/*
for(let i=0; i<listProducts.length; ++i)
{
    console.log(`--------------------------------`);
    console.log(`#Name: ${listProducts[i].Name}`);
    console.log(`Price: ${listProducts[i].Price}`);
}
*/

//---- 1.2:Write a script printing/logging out the products with their number,
//         then print/logging out the details of a product with its position entered by users
/*
let idInput=Number(prompt(`Enter id: `));
let check=0;
for(let i=0; i<listProducts.length; ++i)
    {
        if(listProducts[i].id==idInput)
            {
                console.clear();
                console.log(`Name: ${listProducts[i].Name}`);
                console.log(`Brand: ${listProducts[i].Brand}`);
                console.log(`Price: ${listProducts[i].Price}`);
                console.log(`Color: ${listProducts[i].Color}`);
                console.log(`Category: ${listProducts[i].Category}`);
                ++check;
            }
    }
if(check==0)
    {
        console.log(`Not found !!!!`);
    }
*/

//---- 1.3:Write a script printing/logging out the products based on category input by users
// let categoryInput=(prompt(`Enter Category: `));
// for(let i=0; i<listProducts.length; ++i)
//     {
//         if(listProducts[i].Category==categoryInput)
//             {
//                 console.log(`--------------------------------`);
//                 console.log(`Name: ${listProducts[i].Name}`);
//                 console.log(`Price: ${listProducts[i].Price}`);
//             }
//     }

//---- 1.4:Add providers to each product
//         And printing/logging out all of the products
/*
listProducts[0].Providers="Phukienzero dientuccc";
listProducts[1].Providers="Tgdd";
listProducts[2].Providers="Tgdd";
listProducts[3].Providers="Tgdd";
for(let i=0; i<listProducts.length; ++i)
{
    console.log(`#${listProducts[i].id}. ${listProducts[i].Name}
    Price: ${listProducts[i].Price}
    Providers: ${listProducts[i].Providers}`);
}
*/

//---- 1.5:(Optional) Search the products based on the wanted provider entered by users,
//        if you need more directions, find the hints at the end of this homework
/*
var providersInput=prompt(`Enter Providers: `);
console.clear();
let checkkk=0;
let newProducts=[];
for(let i=0; i<listProducts.length; ++i)
    {
        if(listProducts[i].Providers==providersInput)
        {
            newProducts.push(listProducts[i]);
            checkkk++;
        }
            
    }
        if(checkkk==0)
        {
            alert(`Not found !!!!`);
        }
for(let i=0; i<newProducts.length; ++i)
        {
            console.log(`--------------------------------`);
            console.log(`Name: ${newProducts[i].Name}`);
            console.log(`Brand: ${newProducts[i].Brand}`);
            console.log(`Price: ${newProducts[i].Price}`);
            console.log(`Color: ${newProducts[i].Color}`);
            console.log(`Category: ${newProducts[i].Category}`);
            console.log(`Providers: ${newProducts[i].Providers}`);
        }
*/

//---- Bài 2:
/*
const process = 
[
    {   
        id: 1,
        Name: 'HTML',
        Complete: false
    },

    {   
        id: 2,
        Name: 'CSS',
        Complete: false
    },

    {   
        id: 3,
        Name: 'Basic of javascript',
        Complete: false
    },
    
    {   
        id: 4,
        Name: 'Node Pakage Manager (nps)',
        Complete: false
    },

    {   
        id: 5,
        Name: 'Git',
        Complete: false
    }
]
console.clear();
var sayHi = 'Hi there, this is your learning tasks to front-end developer career:';
console.log(sayHi);
*/

//---- 2.1:
/*
 for (let i = 0; i < process.length; ++i)
 {
    console.log(`${i+1}.  ${process[i].Name}
    Complete: ${process[i].Complete}`);
 };
*/

 //---- 2.2+2.3+2.4+2.5:

while(true)
{
    let input = prompt(`Enter your command (New, Delete, Update, Complete):  `);
    
     if(input==='New')
    {
        process.push
        ({
            id: process.length +1
            ,Name: prompt(`Enter Name: `)
            ,Complete: prompt(`Enter Complete: `)
        });
        console.clear();
        console.log(sayHi);
        for (let i = 0; i < process.length; ++i)
        {
            console.log(`${i+1}.${process[i].Name}
            \n  Complete: ${process[i].Complete}`);
        };
    }
    else if(input==='Delete')
    {
        let idInput=Number(prompt(`Enter id: `));
        let check=0;
        for(let i=0; i<process.length; ++i)
        {
            if(process[i].id==idInput)
            {
                delete(process[i]);   
                check=i;
            }
        }
        if(check==0)
            {
                alert(`Not found !!!!`)
            }
        console.clear();
        console.log(sayHi);
        for (let i = 0; i < process.length; ++i)
        {
            console.log(`${i+1}.${process[i].Name}
            \n  Complete: ${process[i].Complete}`);
        };
    }        
    else if(input==='Update')
    {
        let idInput=Number(prompt(`Enter id: `));
        let check=0;
        for(let i=0; i<process.length; ++i)
        {
            if(process[i].id==idInput)
            {
                process[i].Name=prompt(`New Name: `);
                process[i].Complete=prompt(`New Complete: `);
                check=i;
            }
        }
        if(check==0)
            {
                alert(`Not found !!!!`)
            }
        console.clear();
        console.log(sayHi);
        for (let i = 0; i < process.length; ++i)
        {
            console.log(`${i+1}.${process[i].Name}
            \n  Complete: ${process[i].Complete}`);
        };
    }
    else if(input==='Complete')
    {
        let idInput=Number(prompt(`Enter id: `));
        let check=0;
        for(let i=0; i<process.length; ++i)
        {
            if(process[i].id==idInput)
            {
                process[i].Complete=true;
                check=i;
            }
        }
        if(check==0)
            {
                alert(`Not found !!!!`)
            }
        console.clear();
        console.log(sayHi);
        for (let i = 0; i < process.length; ++i)
        {
            console.log(`${i+1}.${process[i].Name}
            \n  Complete: ${process[i].Complete}`);
        };
    }
    else if(input==='Exit')
    {
        break;
    }
    else
    {
        console.log(`Enter your command (New, Delete, Update, Complete):  `);
    }

}        