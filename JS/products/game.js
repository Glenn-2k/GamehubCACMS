const url = "http://wp.glennkristiansen.no/wp-json/wc/store/products/";

const productSpecific = document.querySelector(".product-specific-content");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const apiCall = url + id;

async function getGame() {
  try {
    const response = await fetch(apiCall);
    const results = await response.json();
    return results;
  } catch (error) {
    productSpecific.innerHTML = "An error occured";
  }
}

export async function gamePage() {
  const specificGame = await getGame();
  displayGame(specificGame);
}

function displayGame(specificGame) {
  try {
    const realPrice = specificGame.prices.price / 100;
    const image = specificGame.images[0].src;

    productSpecific.innerHTML = `
  <h1 class="specific-heading">${specificGame.name}</h1>
  <div class="grid-container-specific">
      <div class="specific-1">
          <img src="${image}" alt="cover of ${specificGame.name}"
              class="product-specific-cover">
      </div>
      <div class="specific-2">
          <p class="specific-text">${specificGame.description}</p>
          <p class="specific-price">$${realPrice}</p>
          <a href="/cart-full.html" id='add-to-cart-specific'>Add to cart</a>
          <a href="/games.html" id='add-to-cart-specific'>Continue shopping</a>
      </div>
  </div>`;
  } catch (error) {
    productSpecific.innerHTML = "An error occured";
    console.log("an error occured");
  }

  document.title = `Gamehub | ${specificGame.name}`;
}
