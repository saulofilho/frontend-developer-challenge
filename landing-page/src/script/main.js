// grid products
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
  
      const name = document.createElement("p");
      name.textContent = products.name;
      name.setAttribute("class", "name");
  
      const descriptionInfo = document.createElement("p");
      descriptionInfo.textContent = products.description;
      descriptionInfo.setAttribute("class", "description");
      
      const oldPriceInfo = document.createElement("p");
      oldPriceInfo.textContent = `De: R$ ${products.oldPrice}`;
      oldPriceInfo.setAttribute("class", "old-price");
  
      const price = document.createElement("p");
      price.textContent = `Por: R$ ${products.price}`;
      price.setAttribute("class", "price");

      const groupValues = document.createElement("div");
      groupValues.setAttribute("class", "groupValues");
  
      const installmentsCount = document.createElement("p");
      installmentsCount.textContent = `ou ${products.installments.count}`;
      installmentsCount.setAttribute("class", "ins-count");
  
      const installmentsValue = document.createElement("p");
      installmentsValue.textContent = `de R$ ${products.installments.value}`;
      installmentsValue.setAttribute("class", "ins-value");
  
      const button = document.createElement("button");
      button.setAttribute("class", "btn-buy");
      button.textContent = "Comprar";
  
      container.appendChild(card);
      imgHeader.appendChild(img);
      card.appendChild(imgHeader);
      card.appendChild(name);
      card.appendChild(descriptionInfo);
      card.appendChild(oldPriceInfo);
      card.appendChild(price);
      card.appendChild(groupValues);
      groupValues.appendChild(installmentsCount);
      groupValues.appendChild(installmentsValue);
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

// loading 8 products per page
let loadMore = () => {
  document.querySelector(".btn-mais").onclick = () => {
    page ++;
    productsGrid();
  };
};
loadMore();

// menu mobile
let menuMob = () => {
    document.querySelector("#show-menu").onclick = () => {
    let element = document.querySelector(".links-mob");
    element.classList.toggle("links-mob-show");
  };
};
menuMob();