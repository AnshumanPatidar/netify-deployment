
let bagItems = [];
onLoad();

function onLoad(){ 
  let bagItemsStr  = localStorage.getItem('bagItems');
  bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];
  displayItemOnHomePage();
  displayBagIcons();
}

function displayBagIcons() {
 let bagItemCount = document.querySelector('.bag-item-count');
 if(bagItems.length > 0)
 {
  bagItemCount.innerText = bagItems.length;
 }
 else {
  bagItemCount.innerHTML = ``;
 }
 

}

function addToBag (item) {
   bagItems.push(item)
   localStorage.setItem('bagItems' , JSON.stringify(bagItems));
   displayBagIcons();
}

function displayItemOnHomePage()  {

  let itemsContainer = document.querySelector(".items-container");

  if(!itemsContainer ){
    return;
  }
  let innerHTML = '';
  items.forEach(item => {
    innerHTML += `
    <div class="item-container">
          <div class="rating">
                  ${item.rating.stars} ⭐| ${item.rating.count}
          </div>
          <img class="item-image" src="${item.image}" alt="item-image">
          
          <div class="item-info">
              
          
              <div class="company">${item.company}</div>
              <div class="item-name">${item.item_name}</div>
              <div class="price">
                  <span class="current-price">Rs ${item.current_price}</span>
                  <span class="original-price">Rs ${item.original_price}</span>
                  <span class="discount"> (${item.discount_percentage}% off) </span>
              </div>
              </div>
              <button onClick="addToBag(${item.id})" class="btn-add-bag">
              Add to Bag
              </button>
      
   </div>
   ` ;
  })
  
  itemsContainer.innerHTML = innerHTML;

}


