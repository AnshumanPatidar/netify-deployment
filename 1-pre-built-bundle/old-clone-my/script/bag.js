const CONVENIENCE_FEES = 99

let bagItemObjects;
onload();


function loadBagItemsObjects() {
 bagItemObjects =  bagItems.map((itemid) => {
      for(let i = 0 ; i < items.length ; i++ )
      {
          if(items[i].id == itemid)
          {
             return items[i]
          }
      }
  })
}

function onload() {
  loadBagItemsObjects();
  displayItemContainer();
  diplayBagItemSummary();
}

function displayItemContainer() {
  let container = document.querySelector('.bag-items-container');
  let innerHTML = '';
  bagItemObjects.forEach(element => {
     innerHTML += generateItemHtml(element);
  });
  container.innerHTML = innerHTML;
}


function onClickRemove(itemId){
  bagItems = bagItems.filter(bagItemId => 
        bagItemId != itemId
   )
   localStorage.setItem('bagItems' , JSON.stringify(bagItems));
   loadBagItemsObjects();
   displayBagIcons();
   displayItemContainer();
   diplayBagItemSummary();
   
}

function generateItemHtml(items) {
  return `<div class="bag-item-container">
  <div class="item-left-part">
    <img class="bag-item-img" src=../${items.image}>
  </div>
  <div class="item-right-part">
    <div class="company">${items.company}</div>
    <div class="item-name">${items.item_name}</div>
    <div class="price-container">
      <span class="current-price">Rs ${items.current_price}</span>
      <span class="">Rs ${items.original_price}</span>
      <span class="">(${items.discount_percentage}% OFF)</span>
    </div>
    <div class="return-period">
      <span class="return-period-days">${items.return_period} days</span> return available
    </div>
    <div class="delivery-details">
      Delivery by
      <span class="delivery-details-days">${items.delivery_date}</span>
    </div>
  </div>

  <div class="remove-from-cart" onClick="onClickRemove(${items.id})">X</div>
</div>`

}

function bagItemSummary(){
  
}

function diplayBagItemSummary(){
  console.log(bagItemObjects)
    let totalMRP = 0;
    let total_discount = 0;
    let totalAmount = 0;
    bagItemObjects.forEach(bagItem => {
      totalMRP += bagItem.original_price; 
      total_discount += bagItem.original_price - bagItem.current_price;      

   })
  

   totalAmount = totalMRP - total_discount + CONVENIENCE_FEES;
  let bagItemdetail = document.querySelector('.bag-summary');
  bagItemdetail.innerHTML = `<div class="bag-details-container">
  <div class="price-header">PRICE DETAILS (${bagItemObjects.length}) </div>
  <div class="price-item">
    <span class="price-item-tag">Total MRP</span>
    <span class="price-item-value">₹${totalMRP}</span>
  </div>
  <div class="price-item">
    <span class="price-item-tag">Discount on MRP</span>
    <span class="price-item-value priceDetail-base-discount">-₹${total_discount}</span>
  </div>
  <div class="price-item">
    <span class="price-item-tag">Convenience Fee</span>
    <span class="price-item-value">₹ ${CONVENIENCE_FEES}</span>
  </div>
  <hr>
  <div class="price-footer">
    <span class="price-item-tag">Total Amount</span>
    <span class="price-item-value">₹ ${totalAmount}</span>
  </div>
</div>
<button class="btn-place-order">
  <div class="css-xjhrni">PLACE ORDER</div>
</button>`

}

