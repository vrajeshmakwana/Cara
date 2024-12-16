const bar = document.getElementById("bar");
const bar2 = document.getElementById("close");
const nav = document.getElementById("navbar");


// =============== Enabling the menu bar functionality It is common for all pages ============================ //
bar.addEventListener("click", () => {
  nav.classList.add("open");
});

bar2.addEventListener("click", () => {
  nav.classList.remove("open");
});


// ================= Generate Featured products card dynamically ================================ //
const products = [
  { product_id:1, Product_name: "Cartoon Astranaut T-Shirt", product_price: 78, product_quantity:1, proImgUrl: "static/images/products/f1.jpg" },
  { product_id:2, Product_name: "Cartoon Astranaut T-Shirt", product_price: 78, product_quantity:1, proImgUrl: "static/images/products/f2.jpg" },
  { product_id:3, Product_name: "Cartoon Astranaut T-Shirt", product_price: 78, product_quantity:1, proImgUrl: "static/images/products/f3.jpg" },
  { product_id:4, Product_name: "Cartoon Astranaut T-Shirt", product_price: 78, product_quantity:1, proImgUrl: "static/images/products/f4.jpg" },
  { product_id:5, Product_name: "Cartoon Astranaut T-Shirt", product_price: 120, product_quantity:1, proImgUrl: "static/images/products/f5.jpg" },
  { product_id:6, Product_name: "Cartoon Astranaut T-Shirt", product_price: 78, product_quantity:1, proImgUrl: "static/images/products/f6.jpg" },
  { product_id:7, Product_name: "Cartoon Astranaut T-Shirt", product_price: 78, product_quantity:1, proImgUrl: "static/images/products/f7.jpg" },
  { product_id:8, Product_name: "Cartoon Astranaut T-Shirt", product_price: 78, product_quantity:1, proImgUrl: "static/images/products/f8.jpg" },
];

const section = document.getElementById("product1");
for (pro of products) {
  const prohtml = ` <div class="pro">
                  <img src= "${pro.proImgUrl}"
                     onclick = " window.location.href = 'product.html'"
                      alt="Error">
                  <div class="des">
                      <span>addidas</span>
                      <h5>Cartoon Astronaut T-Shirts</h5>
                      <div class="star">
                          <i class="ri-star-fill"></i>
                          <i class="ri-star-fill"></i>
                          <i class="ri-star-fill"></i>
                          <i class="ri-star-fill"></i>
                          <i class="ri-star-fill"></i>
                      </div>
                      <h4>$78</h4>
                  </div>
                  <a href="#"><i class="ri-shopping-cart-line" onclick = "AddToCart(event,${pro.product_id})" 
                  data-product-image="${pro.proImgUrl}"
                  data-product-name="${pro.Product_name}"
                  data-product-price="${pro.product_price}"
                  data-product-id = "${pro.product_id}"
                  data-product-quantity="${pro.product_quantity}" id="cart"></i></a>
              </div>`;
  console.log(prohtml);
  
  section
    .querySelector(".pro-container")
    .insertAdjacentHTML("beforeend", prohtml);
}


// =============== These variable is created to check whether a product is aleready added to the cart or not //
let cartItems = [];

async function AddToCart(event, ProductId) 
{
  
  event.preventDefault()
  let productId = event.target.getAttribute("data-product-id")
  let productImage = event.target.getAttribute("data-product-image")
  let productName = event.target.getAttribute("data-product-name")
  let productPrice = event.target.getAttribute("data-product-price")
  let productQuantity = event.target.getAttribute("data-product-quantity")
    
    if (cartItems.find(item => item.id === ProductId)  )
    {
      alert("Your Product is already added to the cart")
      let index = ProductId - 1
      
      // ============ Updating product Quantity ========== //
      cartItems[index].quantity =  parseInt(cartItems[index].quantity) + 1
      cartItems[index].price = parseInt(78 * cartItems[index].quantity)
      console.log(cartItems);
      let sendData = { 
        id: ProductId,
        quantity: cartItems[index].quantity,
        price: cartItems[index].price,
      };
      options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
  
        },
        
        body: JSON.stringify(sendData)
      }

     
      let response2 = await  fetch("http://127.0.0.1:5000/submit", options)
      let data2 = await response2.json()
      console.log(data2);
      
      // ============== Updating Product Price ============= //
    }
    else
    {    
      // cartItems.push({ id: ProductId, image: productImage, name: productName, price: productPrice, quantity: productQuantity})
      // console.log(cartItems);

    let productData = {
      id: productId,
      image: productImage,
      name: productName,
      price: productPrice,
      quantity: productQuantity
    };

    options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",

      },
      
      body: JSON.stringify(productData)
    }
   
    let response = await  fetch("http://127.0.0.1:5000/submit", options)
    
    if (response.status === 200 ) {
      alert("Product added to the Cart Successfully")
      
    } 
    else {
      alert(" Sorry Something went wrong Please Try again later...")
    }
    let data = await response.json()
    console.log(data);
    let count = await fetch("http://127.0.0.1:5000/get-data")
    let result_item = count.json()
    result_item.then((value) =>{
      document.getElementById("update").innerHTML = value
      
    }) 
    
    
    
  }
    
    

}

// ================= Generate Arrival products card dynamically ================================ //

const section2 = document.querySelector(".p2");
const arproducts = [
  { proImgUrl: "static/images/products/n1.jpg" },
  { proImgUrl: "static/images/products/n2.jpg" },
  { proImgUrl: "static/images/products/n3.jpg" },
  { proImgUrl: "static/images/products/n4.jpg" },
  { proImgUrl: "static/images/products/n5.jpg" },
  { proImgUrl: "static/images/products/n6.jpg" },
  { proImgUrl: "static/images/products/n7.jpg" },
  { proImgUrl: "static/images/products/n8.jpg" },
];

for (arpro of arproducts) {
  const arihtml = `<div class="pro">
                <img src="${arpro.proImgUrl}"
                    onclick="window.location.href='/home/Arrival Detail Section/Arrival1 Detail WebPage/aproduct1.html'"
                    alt="Error">
                <div class="des">
                    <span>addidas</span>
                    <h5>Cartoon Astronaut T-Shirts</h5>
                    <div class="star">
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                    </div>
                    <h4>$78</h4>
                </div>
                <a href="#"><i class="ri-shopping-cart-line" id="cart"></i></a>
            </div>`;

  section2.querySelector(".pro2").insertAdjacentHTML("beforeend", arihtml);
}


const icon = document.querySelector(".icon");
const search = document.querySelector(".search");
const searchBox = document.getElementById("mysearch");
const resultBox = document.querySelector(".result-box");
const closeBtn = document.getElementById("closeBtn");

closeBtn.addEventListener("click", function () {
  searchBox.value = "";
  resultBox.innerHTML = "";
});

let KeywordList = [
  "Latest Fashion Trends",
  "Men's Casual Wear",
  "Women's Ethnic Wear",
  "Affordable Fashion",
  "Seasonal Sale",
  "Summer Collection",
  "Party Dresses ",
  "Designer Clothes Online",
  "Kids Clothing",
];

searchBox.onkeyup = function () {
  let result = [];
  let searchInput = searchBox.value;
  if (searchInput.length) {
    var filterKeywords = KeywordList.filter((keyword) => {
      return keyword.toLowerCase().includes(searchInput.toLowerCase());
    });
    display(filterKeywords);
  } else {
    resultBox.innerHTML = "";
  }
};

function display(result) {
  let finalResult = result.map(function (list) {
    return "<li onclick = selectInput(this)>"  + list + "</li>";
  });
  resultBox.innerHTML = "<ul>" + finalResult.join("") + "</ul>";
}

function selectInput(list) {
  searchBox.value = list.innerHTML;
  resultBox.innerHTML = "";
}

// ======================== Performing The Search Button Operation ========================= //
var count = 0;
icon.onclick = function () {
  search.classList.toggle("active");
  closeBtn.style.display = "block";
  searchBox.style.display = "block";
  count++;
  if (count % 2 == 0) {
    closeBtn.style.display = "none";
    searchBox.style.display = "none";
  } else {
    closeBtn.style.display = "block";
    searchBox.style.display = "block";
  }
};





