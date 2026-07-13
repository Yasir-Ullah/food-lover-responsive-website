let menus = document.querySelector("nav");
let fa_xmark = document.querySelector(".fa-xmark");
let fabars = document.querySelector(".fa-bars");

let all_food_btn = document.querySelector(".all_food_btn");
let dinner_food_btn = document.querySelector(".dinner_food_btn");
let lunch_food_btn = document.querySelector(".lunch_food_btn");
let starter_food_btn = document.querySelector(".starter_food_btn");

let all_food = document.querySelectorAll(".img_cards");
let dinner_food = document.querySelectorAll(".dinner");
let lunch_food = document.querySelectorAll(".lunch");
let starter_food = document.querySelectorAll(".starter");

// Show All
all_food_btn.addEventListener("click", () => {
  all_food.forEach((food) => {
    food.style.display = "block";
  });
});

// Show Dinner
dinner_food_btn.addEventListener("click", () => {
  all_food.forEach((food) => {
    food.style.display = "none";
  });

  dinner_food.forEach((dinner) => {
    dinner.style.display = "block";
  });
});

// Show Lunch
lunch_food_btn.addEventListener("click", () => {
  all_food.forEach((food) => {
    food.style.display = "none";
  });

  lunch_food.forEach((lunch) => {
    lunch.style.display = "block";
  });
});

// Show Starter
starter_food_btn.addEventListener("click", () => {
  all_food.forEach((food) => {
    food.style.display = "none";
  });

  starter_food.forEach((starter) => {
    starter.style.display = "block";
  });
});

fabars.addEventListener("click", () => {
  menus.classList.add("active");
});

fa_xmark.addEventListener("click", () => {
  menus.classList.remove("active");
});

// static_counter start
const counters = document.querySelectorAll(".num");
counters.forEach((counter) => {
  const target = +counter.dataset.target;
  let count = 0;

  const updateCounter = () => {
    const increment = Math.ceil(target / 100);

    if (count < target) {
      count += increment;

      if (count > target) {
        count = target;
      }

      counter.innerText = count;

      setTimeout(updateCounter, 100);
    }
  };

  updateCounter();
});

// static_counter end

// mmmmmmmm

//  Initialize Swiper
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  slidsPerGroup: 1,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    968: {
      slidesPerView: 3,
    },
  },
});
