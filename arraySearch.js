const items =[12,14,15,6,735,676,574,734];

// for(i=0;i<items.length; i++){
//     console.log(items[i]);
// }

for(const item of items)
{
   // console.log(item);

}

const products =[
    {id:124, name: "xiaomi mobile s2", price:32000},
    {id:125, name:"Dell laptop", price:520000},
    {id:126, name:"sumsung mobile 32s", price:430000},
    {id:127, name:"Asus mobile", price:860000},
    {id:128, name:"mobile 32s", price:60000},
    {id:129, name:"nokia Mobile old", price:240000},
    {id:130, name:"Lenovo gaming laptop", price:130000},
]

// for(const product of products){
//     console.log(product);
// }

function productSearch(products,search)
{
    const item =[];
    for(const product of products)
    {
        // console.log(product.name.includes(search));
        if(product.name.toLowerCase().includes(search.toLowerCase())){
            item.push(product);
        }
    }

    return item;

}

const result = productSearch(products,"nokia");
console.log(result);