
// const api= fetch("https://fakestoreapi.com/products")
//   .then((response) => response.json())
  
//   .then((data) => {
//     for (let i = 0; i < data.length; i++) {
//       // console.log(data[i])
//     }
//   })
//   .catch(error => console.error(error));

    let cards = document.getElementsByClassName("card");

console.log("==================")
    // استخدم حلقة لإضافة المستمع لكل عنصر
    for (let i = 0; i < cards.length; i++) {
      cards[i].addEventListener("click", () => {
        const api = fetch("https://fakestoreapi.com/products")
          .then((response) => response.json())

          .then((data) => {
              console.log(data[i]);
          })
          .catch((error) => console.error(error));
      });

    }
    