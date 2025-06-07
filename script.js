const container = document.getElementById("products-container");

fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((product) => {
      const card = document.createElement("div");
      card.className = "col";
      let title = product.title;
      if (title.length > 50) {
        title = title.substring(0, 40) + "...";
      }
      card.innerHTML = `
        <a href="product.html?id=${product.id}" class="product" target="_blank" style="text-decoration: none; color: black;">
          <div class="card h-100">
            <img src="${product.image}" class="p-4 img-fluid d-flex justify-content-center" alt="${product.title}" style="object-fit: cover; height: 200px; margin-left:auto ; margin-right:auto">
            <div class="card-body">
              <h5 class="fs-6">${title}</h5>
              <p class="card-text">${product.price} $</p>
              <p class="text-black-50">Product Code: ${product.id}</p>
              <div class="icon fs-4 d-flex justify-content-between align-items-center mr-5" style="margin-right: 16%">
                <a href="#" class="icon-style"><i class="bi bi-cart-check icon-style"></i></a>
                <a href="#" class="icon-style"><i class="bi bi-heart icon-style"></i></a>
                <a href="#" class="icon-style"><i class="bi bi-share icon-style"></i></a>
              </div>
            </div>
          </div>
        </a>
      `;
      container.appendChild(card);
    });
  })
  .catch((err) => console.error("حدث خطأ أثناء جلب البيانات:", err));
