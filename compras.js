if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
  } else {
    ready()
  }

  function ready() {
    //ouvidor do evento de remover
    const removeCartProductButtons = document.getElementsByClassName("botao-remover")
    for (var i = 0 ; i < removeCartProductButtons.length; i++) {
        removeCartProductButtons[i].addEventListener("click", removeProduct);
    }

const quantityinputs = document.getElementsByClassName("quantidade");
for (var i = 0; i < quantityinputs.length; i++) {
     quantityinputs[i].addEventListener("change" , updateTotal)
}

const addToCartButtons = document.getElementsByClassName("btn_adicionar_6")
for (var i = 0; i < addToCartButtons.length; i++) {
    addToCartButtons[i].addEventListener("click", addProductToCard);
    }
  }
    

  function addProductToCard(event) {
   const button = event.target
   const productInfos = button.parentElement
   const productImage = productInfos.getElementsByClassName("img_processador_2")[0].src
   const productTittle = productInfos.getElementsByClassName("text_processador_2")[0].innerText
   const productPrice = productInfos.getElementsByClassName("buy_processador_2")[0].innerText
   
   let newCartProduct = document.createElement("div")
   newCartProduct.classList.add("conteiner-card_1")

   newCartProduct.innerHTML = 
   `
   <div class="cards-produtos">
   <img class="img_carrinho_monitor" src="${productImage}" alt="${productTittle}">
   <span class="text_monitor_3">${productTittle}</span>
   <span class="buy_monitor_3">${productPrice}</span>
   <form>
      <input value="1" min="0" class="quantidade" id="quantidade" type="number">
   </form>

   <button class="botao-remover">Remover</button>
   </div>
   `

   const tableBody = document.querySelector(".linha_finalizada .cards-produtos");
   tableBody.append(newCartProduct);
  }

 
function removeProduct(event) {
    event.target.parentElement.remove()
    updateTotal();
}

function updateTotal() {
    let totalAmount = 0;
    const cartProducts = document.getElementsByClassName("conteiner-card_1");
    for (var i = 0; i < cartProducts.length; i++) {
      console.log(cartProducts[i]);
      const productPrice = cartProducts[i].getElementsByClassName("buy_monitor_3")[0].innerText.replace("R$", "").replace(",", ".")
      const productQuantity = cartProducts[i].getElementsByClassName("quantidade")[0].value
     
      totalAmount += productPrice * productQuantity
    }
    totalAmount = totalAmount.toFixed(2);
    totalAmount = totalAmount.replace(".", ",");
    document.querySelector(".container_valorDeTudo h3").innerText = "R$" + totalAmount;
}

   

