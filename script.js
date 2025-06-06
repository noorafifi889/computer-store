let cards = document.getElementsByClassName("card");

fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((data) => {
    for (let i = 0; i < data.length && i < cards.length; i++) {
      const product = data[i];
      cards[i].addEventListener("click", () => {
        console.log(product);
      });
    }
  })
  .catch((error) => console.error("حدث خطأ أثناء جلب البيانات:", error));

console.log("==================");
// استخدم حلقة لإضافة المستمع لكل عنصر
