let productNameInput = document.getElementById('productNameInput'); 
let productCategoryInput = document.getElementById('productCategoryInput');
let productPriceInput = document.getElementById('productPriceInput');
let productDiscountInput = document.getElementById('productDiscountInput');
let productQuantityInput = document.getElementById('productQuantityInput');
let productDescriptionInput = document.getElementById('productDescriptionInput');
let add_btn = document.getElementById('add_btn');
let UpdateBtn = document.getElementById('UpdateBtn');
let searchInput = document.getElementById('searchInput');
  
// localStorage

if(localStorage.getItem('product')){
    productArr =  JSON.parse(localStorage.getItem('product'))
    displayProduct();
}

// addproduct

let productArr = [] ;
 add_btn.addEventListener('click' , 
    function addproduct() {
        let products = {
            name : productNameInput.value ,
            category : productCategoryInput.value,
            price : productPriceInput.value,
            discount : productDiscountInput.value,
            quantity : productQuantityInput.value,
            description : productDescriptionInput.value
        }
    
        productArr.push(products);
    
      console.log(productArr);
    
      displayProduct();
      clearinputs();
    }
)



localStorage.setItem('produte' , JSON.stringify(productArr));

// displayProduct

function displayProduct(){
    let contanier = '';
    for( let i = 0 ; i<productArr.length ; i++){
    contanier += `
         <tr>
                <td>${productArr[i].name}</td>
                <td>${productArr[i].category}</td>
                <td>${productArr[i].price}</td>
                <td>${productArr[i].discount}</td>
                <td>${productArr[i].quantity}</td>
                <td>${productArr[i].description}</td>
               <td><button class="fas fa-pen-to-square btn btn-success" onclick="setItem(${i})">Update</button></td>
        <td><button class="fas fa-xmark btn btn-danger" onclick = "deleteproduct(${i})"> Delete</button></td>
            </tr>
    `
    }

    document.querySelector('.showdata').innerHTML = contanier;
}

// deleteproduct

function deleteproduct(productindex){
productArr.splice(`${productindex} `,1)
displayProduct();
}

// clearinputs

function clearinputs(){
    productNameInput.value ='';
    productCategoryInput.value ='';
    productPriceInput.value ='';
    productDiscountInput.value ='';
    productQuantityInput.value ='';
    productDescriptionInput.value ='';
}

//SearchInput
   

function SearchInput(term){
    let contanier = '';
    for( let i = 0 ; i<productArr.length ; i++){
        if(productArr[i].name.includes(term)){
    contanier += `
         <tr>
                <td>${productArr[i].name}</td>
                <td>${productArr[i].category}</td>
                <td>${productArr[i].price}</td>
                <td>${productArr[i].discount}</td>
                <td>${productArr[i].quantity}</td>
                <td>${productArr[i].description}</td>
               <td><button class="fas fa-pen-to-square btn btn-success" onclick="setItem(${i})" >Update</button></td>
        <td><button class="fas fa-xmark btn btn-danger" onclick = "deleteproduct(${i})"> Delete</button></td>
            </tr>
    `
    }
    document.querySelector('.showdata').innerHTML = contanier;
}


}
searchInput.addEventListener('input' , ()=>{
    SearchInput(searchInput.value)
})

//Update_2function
//setitem

let x = 0;
function setItem(productindex){
x = productindex;

    productNameInput.value = productArr[productindex].name;
    productCategoryInput.value = productArr[productindex].category;
    productPriceInput.value = productArr[productindex].price;
    productDiscountInput.value = productArr[productindex].discount;
    productQuantityInput.value = productArr[productindex].quantity;
    productDescriptionInput.value = productArr[productindex].description;
    add_btn.classList.add('d-none');
    UpdateBtn.classList.remove('d-none');
}


//updateProduct

function updateProduct(){
    productArr[x].name = productNameInput.value ;
    productArr[x].category =  productCategoryInput.value ;
    productArr[x].price = productPriceInput.value ;
    productArr[x].discount = productDiscountInput.value ;
    productArr[x].quantity = productQuantityInput.value;
    productArr[x].description = productDescriptionInput.value;
    add_btn.classList.remove('d-none');
    UpdateBtn.classList.add('d-none');
    displayProduct();
    clearinputs();
}

UpdateBtn.addEventListener('click' , updateProduct);

// Validation

// function checkProductname(){
//     let regx = 

// }