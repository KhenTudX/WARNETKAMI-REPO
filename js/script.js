let subtotal = 0;

const calculateTax = subtotal => {
  const tax = subtotal * 0.1000;
  const formattedTax = tax.toFixed(2);
  return formattedTax;
};

const calculateTotal = subtotal => {
  const tax = calculateTax(subtotal);
  const total = parseFloat(subtotal) + parseFloat(tax);
  const formattedTotal = total.toFixed(2);
  return formattedTotal;
};

const getImgLink = title => {
  let imgLink;
  switch (title) {
    case 'French Fies with Ketchup':
      imgLink = './img/plate__french-fries.webp';
      break;
    case 'Salmon and Vegetables':
      imgLink = './img/plate__salmon-vegetables.webp';
      break;
    case 'Spaghetti with Sauce':
      imgLink = './img/plate__spaghetti-meat-sauce.webp';
      break;
    case 'Tortellini':
      imgLink = './img/plate__tortellini.webp';
      break;
    case 'Chicken Salad':
      imgLink = './img/plate__chicken-salad.webp';
      break;
    case 'AQUA':
      imgLink = './img/aqua.webp';
      break;
    case 'JUS JERUK':
      imgLink = './img/jusj.jpg';
      break;
    default:
      imgLink = 'https://assets.codepen.io/687837/plate__chicken-salad.png';
  }

  return imgLink;
};

$('.add-button').on('click', function () {
  const title = $(this).data('title');
  const price = $(this).data('price');
  const imgLink = getImgLink(title);

  const element = `
    <li class="cart-item">
      <img src="${imgLink}" alt="${title}">
      <div class="cart-item-dets">
        <p class="cart-item-heading">${title}</p>
        <p class="g-price">Rp${price}</p>
      </div>
    </li>
  `;
  $('.cart-items').append(element);

  subtotal = subtotal + price;

  const formattedSubtotal = subtotal.toFixed(2);
  const tax = calculateTax(subtotal);
  const total = calculateTotal(subtotal);

  $('.cart-math').html(`
    <p class="cart-math-item">
      <span class="cart-math-header">Subtotal:</span>
      <span class="g-price subtotal">Rp${formattedSubtotal}</span>
    </p>
    <p class="cart-math-item">
      <span class="cart-math-header">Tax:</span>
      <span class="g-price tax">Rp${tax}</span>
    </p>
    <p class="cart-math-item">
      <span class="cart-math-header">Total:</span>
      <span class="g-price total">Rp${total}</span>
    </p>
  `);
});