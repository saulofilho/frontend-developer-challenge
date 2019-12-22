const app = document.querySelector("#root");

const container = document.createElement("div");
container.setAttribute("class", "products-grid medium-container");

app.appendChild(container);

// fetch api
let page = "1";

let productsGrid = async () => {
  const urlToFetch = `https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=${page}`;
  
  await fetch(urlToFetch)
    .then(response => {
      return response.json();
    })
    .then(data => {
      data.products.map(products => {
      // console.log("Produtos", products);
      const card = document.createElement("div");
      card.setAttribute("class", "card");
  
      const imgHeader = document.createElement("div");
      imgHeader.setAttribute("class", "img-header");
      
      const img = document.createElement("img");
      img.src = products.image;
  
      imgHeader.appendChild(img);
  
      const name = document.createElement("p");
      name.textContent = products.name;
      name.setAttribute("class", "name");
  
      const descriptionInfo = document.createElement("p");
      descriptionInfo.textContent = products.description;
      descriptionInfo.setAttribute("class", "description");
      
      const oldPriceInfo = document.createElement("p");
      oldPriceInfo.textContent = products.oldPrice;
      oldPriceInfo.setAttribute("class", "old-price");
  
      const price = document.createElement("p");
      price.textContent = products.price;
      price.setAttribute("class", "price");
  
      const installmentsCount = document.createElement("p");
      installmentsCount.textContent = products.installments.count;
      installmentsCount.setAttribute("class", "ins-count");
  
      const installmentsValue = document.createElement("p");
      installmentsValue.textContent = products.installments.value;
      installmentsValue.setAttribute("class", "ins-value");
  
      const button = document.createElement("button");
      button.setAttribute("class", "btn-buy");
      button.textContent = "Comprar";
  
      container.appendChild(card);
      card.appendChild(imgHeader);
      card.appendChild(name);
      card.appendChild(descriptionInfo);
      card.appendChild(oldPriceInfo);
      card.appendChild(price);
      card.appendChild(installmentsCount);
      card.appendChild(installmentsValue);
      card.appendChild(button);
      });
    })
    .catch(err => {
      const errorMessage = document.createElement("marquee");
      errorMessage.textContent = "Deu ruim!";
      app.appendChild(err);
    });
};

productsGrid();

let loadMore = () => {
  document.querySelector(".btn-mais").onclick = () => {
    page ++;
    productsGrid();
  };
};

loadMore();