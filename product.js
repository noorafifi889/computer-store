const id = new URLSearchParams(window.location.search).get("id");
console.log("Product ID is:", id);

// جلب بيانات المنتج حسب ID
const api = fetch(`https://fakestoreapi.com/products/${id}`)
    // console.log(api)
  .then((res) => res.json())
    .then((product) => {
      console.log(product)
    document.getElementById("product-title").textContent = product.title;
    document.getElementById("product-description").textContent =
      "Description: " + product.description;
    document.getElementById("product-price").textContent = "Price: "+product.price + " $";
    document.getElementById("product-img").src = product.image;
  })
  .catch((error) => console.error("حدث خطأ أثناء جلب بيانات المنتج:", error));
