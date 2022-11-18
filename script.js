'Use strict';

// iOrder APP /////////////////////////////////////////////////

// Data

const item1 = {
  name: 'coffe',
  price: 2,
  rating: [],
};

const item2 = {
  name: 'burger',
  price: 8,
  rating: [],
};

const item3 = {
  name: 'salad',
  price: 5,
  rating: [],
};

const item4 = {
  name: 'coca cola',
  price: 3,
  rating: [],
};

const item5 = {
  name: 'fries',
  price: 4,
  rating: [],
};

const item6 = {
  name: 'lemonade',
  price: 3,
  rating: [],
};

const item7 = {
  name: 'juice',
  price: 3,
  rating: [],
};
const item8 = {
  name: 'cake',
  price: 4,
  rating: [],
};

const items = {
  name: [],
  table: [],
};

// Elements //////////////////////////

const btnitem1 = document.querySelector('.btn--item1');
const btnitem2 = document.querySelector('.btn--item2');
const btnitem3 = document.querySelector('.btn--item3');
const btnitem4 = document.querySelector('.btn--item4');
const btnitem5 = document.querySelector('.btn--item5');
const btnitem6 = document.querySelector('.btn--item6');
const btnitem7 = document.querySelector('.btn--item7');
const btnitem8 = document.querySelector('.btn--item8');
const date = document.querySelector('.date');
const order = document.querySelector('.app__order');
const btnReset = document.querySelector('.reset__btn');
const btnCheckout = document.querySelector('.checkout__btn');
const btnCloseModal = document.querySelector('.btn--close-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const tableNumber = document.querySelector('.table__number');
const form = document.querySelector('.form-modal');
const admin = document.querySelector('.admin__btn');
const star = document.querySelectorAll('.overview__icon-star');
const starContainer = document.querySelector('.star__container');
const burger = document.querySelectorAll('.overview__icon-star1');
const burgerContainer = document.querySelector('.star__container1');
const salad = document.querySelectorAll('.overview__icon-star2');
const saladContainer = document.querySelector('.star__container2');
const cocaCola = document.querySelectorAll('.overview__icon-star3');
const cocaColaConteiner = document.querySelector('.star__container3');
const fries = document.querySelectorAll('.overview__icon-star4');
const friesConteiner = document.querySelector('.star__container4');
const lemonade = document.querySelectorAll('.overview__icon-star5');
const lemonadeContainer = document.querySelector('.star__container5');
const juice = document.querySelectorAll('.overview__icon-star6');
const juiceContainer = document.querySelector('.star__container6');
const cake = document.querySelectorAll('.overview__icon-star7');
const cakeContainer = document.querySelector('.star__container7');
const ratingContainerCofee = document.querySelector('.rating__container0');
const ratingContainerBurgers = document.querySelector('.rating__container1');
const ratingContainerSalad = document.querySelector('.rating__container2');
const ratingContainerCocaCola = document.querySelector('.rating__container3');
const ratingContainerFries = document.querySelector('.rating__container4');
const ratingContainerLimonader = document.querySelector('.rating__container5');
const ratingContainerJuice = document.querySelector('.rating__container6');
const ratingContainerCake = document.querySelector('.rating__container7');
let sum = 0;
let sums;
let data1;
let data2;
let data3;
let data4;
let data5;
let data6;
let data7;
let data8;

// Functions

// Render item on UI
const renderItem = item => {
  const html = `
  <div class="order__item">
  <p class="order__description">${item.name}</p>
        <p class="order__price">Price ${item.price} €</p>
        </div>
  
  
  `;
  order.insertAdjacentHTML('afterbegin', html);
};

// Update order array
const updateOrder = name => {
  items.name.push(name);
  console.log(items.name);
};

// Sums up the price of the order
const addItem = price => {
  sums = sum += price;
  console.log(sums);
};

// Update table number array
const updateTable = number => {
  items.table.push(number);
};

// Closing modal window
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// Updating item rating
const itemGrade = function (grade, container) {
  if (grade) {
    container.innerHTML = '';
    const html = `<p class="rating__number" >${grade} / 5</p>`;
    container.insertAdjacentHTML('afterbegin', html);
  } else {
    container.innerHTML = '';
    const html = `<p class="rating__number" > 0 / 5</p>`;
    container.insertAdjacentHTML('afterbegin', html);
  }
};

// Render Admin UI
const renderAdminUI = items => {
  items.name.forEach(element => {
    const html = `
    <div class="order__item">
    <p class="order__description">${element}</p>
   
         `;
    order.insertAdjacentHTML('afterbegin', html);
  });

  items.table.forEach(element => {
    const html1 = `<p class="order__table">Table number ${element} </p>`;

    order.insertAdjacentHTML('afterbegin', html1);
    console.log(element.table);
  });
};

// Event listeners

btnitem1.addEventListener('click', function (e) {
  e.preventDefault();

  addItem(item1.price);

  renderItem(item1);

  updateOrder(item1.name);
});

btnitem2.addEventListener('click', function (e) {
  e.preventDefault();

  addItem(item2.price);

  renderItem(item2);

  updateOrder(item2.name);
});

btnitem3.addEventListener('click', function (e) {
  e.preventDefault();

  addItem(item3.price);

  renderItem(item3);

  updateOrder(item3.name);
});

btnitem4.addEventListener('click', function (e) {
  e.preventDefault();

  addItem(item4.price);

  renderItem(item4);

  updateOrder(item4.name);
});
btnitem5.addEventListener('click', function (e) {
  e.preventDefault();

  addItem(item5.price);

  renderItem(item5);

  updateOrder(item5.name);
});
btnitem6.addEventListener('click', function (e) {
  e.preventDefault();

  addItem(item6.price);

  renderItem(item6);

  updateOrder(item6.name);
});
btnitem7.addEventListener('click', function (e) {
  e.preventDefault();

  addItem(item7.price);

  renderItem(item7);

  updateOrder(item7.name);
});
btnitem8.addEventListener('click', function (e) {
  e.preventDefault();

  addItem(item8.price);

  renderItem(item8);

  updateOrder(item8.name);
});
btnReset.addEventListener('click', function (e) {
  e.preventDefault();
  order.innerHTML = '';
  sum = 0;
  items.name = [];
  items.table = [];
});
btnCheckout.addEventListener('click', function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
});

btnCloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
form.addEventListener('submit', function (e) {
  e.preventDefault();

  updateTable(tableNumber.value);
  if (tableNumber.value === '' || sum === 0) {
    const html1 = `
    <h2 class="modal-header">
    Your order is not <span class="highlight1">successful</span>
     </h2>
     <h3 class="value__text">Please enter table number AND add order items</h3> `;
    modal.innerHTML = '';
    modal.insertAdjacentHTML('afterbegin', html1);
    const span1 = document.querySelector('.highlight1');
    span1.style.color = 'red';
  } else {
    const html2 = `<h2 class="modal-header">
    Your order is <span class="highlight2">successful</span>
    
  </h2>
  <h3 class="value__text">Total price is ${sums} €</h3> `;
    modal.innerHTML = '';
    modal.insertAdjacentHTML('afterbegin', html2);
  }
});

admin.addEventListener('click', function (e) {
  e.preventDefault();
  order.innerHTML = '';

  renderAdminUI(items);
});

// Star rating funcionality
////////////////////////////////////////////////////
/////////////////////////////////////////////////////

// Item 1
star.forEach((element, clickedindex) => {
  element.addEventListener('click', () => {
    const rating = clickedindex + 1;
    item1.rating.push(rating);

    // Saving data to local strorage
    const setLocalStorage = function () {
      localStorage.setItem('ratings', JSON.stringify(item1.rating));
    };
    setLocalStorage(item1.rating);

    starContainer.classList.add('disabled');
    star.forEach((el, otherIndex) => {
      if (otherIndex <= clickedindex) el.classList.add('active');
    });
  });
});

// Item 2
burger.forEach((element, clickedindex) => {
  element.addEventListener('click', () => {
    const rating = clickedindex + 1;
    item2.rating.push(rating);
    // Saving data to local strorage
    const setLocalStorage = function () {
      localStorage.setItem('ratings1', JSON.stringify(item2.rating));
    };
    setLocalStorage(item2.rating);

    burgerContainer.classList.add('disabled');
    burger.forEach((el, otherIndex) => {
      if (otherIndex <= clickedindex) el.classList.add('active');
    });
  });
});

// Item 3
salad.forEach((element, clickedindex) => {
  element.addEventListener('click', () => {
    const rating = clickedindex + 1;
    item3.rating.push(rating);
    // Saving data to local strorage
    const setLocalStorage = function () {
      localStorage.setItem('ratings2', JSON.stringify(item3.rating));
    };
    setLocalStorage(item3.rating);

    saladContainer.classList.add('disabled');
    salad.forEach((el, otherIndex) => {
      if (otherIndex <= clickedindex) el.classList.add('active');
    });
  });
});

// Item 4
cocaCola.forEach((element, clickedindex) => {
  element.addEventListener('click', () => {
    const rating = clickedindex + 1;
    item4.rating.push(rating);
    // Saving data to local strorage
    const setLocalStorage = function () {
      localStorage.setItem('ratings3', JSON.stringify(item4.rating));
    };
    setLocalStorage(item4.rating);

    cocaColaConteiner.classList.add('disabled');
    cocaCola.forEach((el, otherIndex) => {
      if (otherIndex <= clickedindex) el.classList.add('active');
    });
  });
});

// Item 5
fries.forEach((element, clickedindex) => {
  element.addEventListener('click', () => {
    const rating = clickedindex + 1;
    item5.rating.push(rating);
    // Saving data to local strorage
    const setLocalStorage = function () {
      localStorage.setItem('ratings4', JSON.stringify(item5.rating));
    };
    setLocalStorage(item5.rating);

    friesConteiner.classList.add('disabled');
    fries.forEach((el, otherIndex) => {
      if (otherIndex <= clickedindex) el.classList.add('active');
    });
  });
});

// Item 6
lemonade.forEach((element, clickedindex) => {
  element.addEventListener('click', () => {
    const rating = clickedindex + 1;
    item6.rating.push(rating);
    // Saving data to local strorage
    const setLocalStorage = function () {
      localStorage.setItem('ratings5', JSON.stringify(item6.rating));
    };
    setLocalStorage(item6.rating);

    lemonadeContainer.classList.add('disabled');
    lemonade.forEach((el, otherIndex) => {
      if (otherIndex <= clickedindex) el.classList.add('active');
    });
  });
});

// Item 7
juice.forEach((element, clickedindex) => {
  element.addEventListener('click', () => {
    const rating = clickedindex + 1;
    item7.rating.push(rating);
    // Saving data to local strorage
    const setLocalStorage = function () {
      localStorage.setItem('ratings6', JSON.stringify(item7.rating));
    };
    setLocalStorage(item7.rating);

    juiceContainer.classList.add('disabled');
    juice.forEach((el, otherIndex) => {
      if (otherIndex <= clickedindex) el.classList.add('active');
    });
  });
});

// Item 8
cake.forEach((element, clickedindex) => {
  element.addEventListener('click', () => {
    const rating = clickedindex + 1;
    item8.rating.push(rating);
    // Saving data to local strorage
    const setLocalStorage = function () {
      localStorage.setItem('ratings7', JSON.stringify(item8.rating));
    };
    setLocalStorage(item8.rating);

    cakeContainer.classList.add('disabled');
    cake.forEach((el, otherIndex) => {
      if (otherIndex <= clickedindex) el.classList.add('active');
    });
  });
});

//

// Geting data from local storage
const getLocalStorage = function () {
  const data = JSON.parse(localStorage.getItem('ratings'));

  if (!data) return;

  data1 = data;
};
getLocalStorage();

// Rendering rating on the UI
itemGrade(data1, ratingContainerCofee);

const getLocalStorage1 = function () {
  const data = JSON.parse(localStorage.getItem('ratings1'));

  if (!data) return;

  data2 = data;
};
getLocalStorage1();
itemGrade(data2, ratingContainerBurgers);

const getLocalStorage2 = function () {
  const data = JSON.parse(localStorage.getItem('ratings2'));

  if (!data) return;

  data3 = data;
};
getLocalStorage2();
itemGrade(data3, ratingContainerSalad);

const getLocalStorage3 = function () {
  const data = JSON.parse(localStorage.getItem('ratings3'));

  if (!data) return;

  data4 = data;
};
getLocalStorage3();
itemGrade(data4, ratingContainerCocaCola);

const getLocalStorage4 = function () {
  const data = JSON.parse(localStorage.getItem('ratings4'));

  if (!data) return;

  data5 = data;
};
getLocalStorage4();
itemGrade(data5, ratingContainerFries);

const getLocalStorage5 = function () {
  const data = JSON.parse(localStorage.getItem('ratings5'));

  if (!data) return;

  data6 = data;
};
getLocalStorage5();
itemGrade(data6, ratingContainerLimonader);

const getLocalStorage7 = function () {
  const data = JSON.parse(localStorage.getItem('ratings6'));

  if (!data) return;

  data7 = data;
};
getLocalStorage7();
itemGrade(data7, ratingContainerJuice);

const getLocalStorage8 = function () {
  const data = JSON.parse(localStorage.getItem('ratings7'));

  if (!data) return;

  data8 = data;
};
getLocalStorage8();

itemGrade(data8, ratingContainerCake);

// Date and time funcionality

const now = new Date();
const day = `${now.getDate()}`.padStart(2, 0);
const month = `${now.getMonth() + 1}`.padStart(2, 0);
const year = now.getFullYear();
const hour = `${now.getHours()}`.padStart(2, 0);
const min = `${now.getMinutes()}`.padStart(2, 0);
date.textContent = `${day}/${month}/${year}, ${hour}:${min}`;
