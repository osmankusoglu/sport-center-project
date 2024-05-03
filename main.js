// Scroll yapıyla arkaplan görüntü değişimi

const header = document.getElementById("header");
const headerScrolled = function (event) {
  if (window.scrollY > 80) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
};

window.addEventListener("load", headerScrolled);
document.addEventListener("scroll", headerScrolled);

var links = document.getElementsByClassName("scrollto");

var focusSectionLink = function (event) {
  for (const link of links) {
    var id = link.hash.slice(1);
    var section = document.getElementById(id);
    var position = window.scrollY + window.innerHeight / 2;

    if (
      position >= section.offsetTop &&
      position <= section.offsetTop + section.offsetHeight
    ) {
      link.ariaCurrent = "page";
      link.classList.add("active");
    } else {
      link.ariaCurrent = null;
      link.classList.remove("active");
    }
  }
};
// Sayfa değiştirme

var focusSection = function (event) {
  event.preventDefault();
  var id = event.target.hash.slice(1);
  var section = document.getElementById(id);

  if (section) {
    window.scrollTo({
      top: section.offsetTop - header.offsetHeight,
      behavior: "smooth",
    });
  }
};

window.addEventListener("scroll", focusSectionLink);

for (const link of links) {
  link.addEventListener("click", focusSection);
}

// Our Classes Buton atamaları

const yogaBtn = document.querySelector("#yogaa");
const groupBtn = document.querySelector("#group");
const soloBtn = document.querySelector("#solo");
const strecBtn = document.querySelector("#stretching");

const yogaTitle = document.querySelector(".yoga-title");
const yogaText = document.querySelector(".yoga-text");
const yogaImg = document.querySelector(".yoga-img img");

yogaBtn.addEventListener("click", (event) => {
  yogaTitle.textContent = "Why are your Yoga?";
  yogaText.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aut tenetur voluptate eum.Aut voluptas quis dignissimos deleniti nemo possimus maxime magni, rem sed nam, animi tempora? Eum,perferendis magnam!";
  yogaImg.src = "/public/yoga.jpg";
});

soloBtn.addEventListener("click", (event) => {
  yogaTitle.textContent = "Why are your Solo?";
  yogaText.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aut tenetur voluptate eum.Aut voluptas quis dignissimos deleniti nemo possimus maxime magni, rem sed nam, animi tempora? Eum,perferendis magnam!";
  yogaImg.src = "/public/solo.jpg";
});

groupBtn.addEventListener("click", (event) => {
  yogaTitle.textContent = "Why are your Group?";
  yogaText.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aut tenetur voluptate eum.Aut voluptas quis dignissimos deleniti nemo possimus maxime magni, rem sed nam, animi tempora? Eum,perferendis magnam!";
  yogaImg.src = "/public/group.webp";
});

strecBtn.addEventListener("click", (event) => {
  yogaTitle.textContent = "Why are your Stretching?";
  yogaText.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aut tenetur voluptate eum.Aut voluptas quis dignissimos deleniti nemo possimus maxime magni, rem sed nam, animi tempora? Eum,perferendis magnam!";
  yogaImg.src = "/public/stret.webp";
});

// BMI hesaplama

document.addEventListener("DOMContentLoaded", function () {
  const heightInput = document.getElementById("height");
  const weightInput = document.getElementById("weight");
  const triangleIcon = document.querySelector(".img-triangle");
  const bmiResult = document.querySelector(".title-2");

  function calculateBMI(weight, height) {
    return weight / (height / 100) ** 2;
  }

  function moveTriangle() {
    const height = parseFloat(heightInput.value);
    const weight = parseFloat(weightInput.value);

    if (!isNaN(height) && !isNaN(weight)) {
      const bmi = calculateBMI(weight, height);

      let leftPercentage;
      if (bmi < 0) {
        leftPercentage = 6;
      } else if (bmi <= 18.5) {
        leftPercentage = 6 + bmi * (15 / 18.5);
      } else if (bmi <= 24.9) {
        leftPercentage = 21 + (bmi - 18.5) * (17 / 6);
      } else if (bmi <= 29.9) {
        leftPercentage = 38 + (bmi - 24.9) * (16 / 5);
      } else if (bmi <= 34.9) {
        leftPercentage = 54 + (bmi - 29.9) * (17 / 5);
      } else {
        leftPercentage = Math.min(71 + (bmi - 34.9) * (15 / 5), 92);
      }

      triangleIcon.style.left = `${leftPercentage}%`;
      bmiResult.textContent = `Your BMI: ${bmi.toFixed(2)}`;
    }
  }

  heightInput.addEventListener("input", moveTriangle);
  weightInput.addEventListener("input", moveTriangle);
});

// menü açma - kapama

document.addEventListener("DOMContentLoaded", function () {
  var navbarToggler = document.querySelector(".navbar");
  var navbarCollapse = document.querySelector(".navbar-nav");

  navbarToggler.addEventListener("click", function () {
    navbarCollapse.classList.toggle("show");
  });

  document.addEventListener("click", function (event) {
    if (
      !navbarCollapse.contains(event.target) &&
      !navbarToggler.contains(event.target)
    ) {
      navbarCollapse.classList.remove("show");
    }
  });
});
