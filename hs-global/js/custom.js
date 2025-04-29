// Load external HTML content for header
fetch("./includes/header.html")
  .then((response) => response.text())
  .then((body) => {
    document.getElementById("header").innerHTML = body;

    const burger = document.getElementById("burger");
    const mobileMenu = document.getElementById("mobileMenu");
    const closeMenu = document.getElementById("closeMenu");
    const bodyElement = document.body; // 👈 Get body tag

    // Open sidebar on burger click
    burger?.addEventListener("click", () => {
      mobileMenu?.classList.add("active");
      bodyElement?.classList.add("no-scroll"); // 👈 Add no-scroll class
    });

    // Close sidebar on close icon click
    closeMenu?.addEventListener("click", () => {
      mobileMenu?.classList.remove("active");
      bodyElement?.classList.remove("no-scroll"); // 👈 Remove no-scroll class
    });
  });

// Load login modal
fetch("./includes/loginmodel.html")
  .then((response) => response.text())
  .then((body) => {
    document.getElementById("LoginModel").innerHTML = body;
  });

// Load footer
fetch("./includes/footer.html")
  .then((response) => response.text())
  .then((body) => {
    document.getElementById("footer").innerHTML = body;
  });



  document.addEventListener("DOMContentLoaded", function () {
    var app = new Vue({
      el: "#app",
      data: {
        currentSlide: 0,
        isPreviousSlide: false,
        isFirstLoad: true,
        autoSlideInterval: null,
        slides: [
          {
            headlineFirstLine: "CREATING WINSOME",
            headlineSecondLine: "VISION",
            sublineFirstLine: "Premium Italian marble and granite for luxury spaces",
            sublineSecondLine: "novum",
            bgImg: "./images/home-page/banner1.jpg",
            rectImg: "./images/home-page/banner1.jpg"
          },
          {
            headlineFirstLine: "CRAFTING ELEGANCE",
            headlineSecondLine: "BY NATURE",
            sublineFirstLine: "Premium Italian marble and granite for luxury spaces",
            sublineSecondLine: "le soleil",
            bgImg: "./images/home-page/banner2.jpg",
            rectImg: "./images/home-page/banner2.jpg"
          },
          {
            headlineFirstLine: "LUXURY DEFINED",
            headlineSecondLine: "BY NATURE",
            sublineFirstLine: "Exclusive collection of imported stones",
            sublineSecondLine: "τον ήλιο",
            bgImg: "./images/home-page/banner3.webp",
            rectImg: "./images/home-page/banner3.webp"
          }
        ]
      },
      mounted: function () {
        const productRotatorSlide = document.getElementById("app");
        let startX = 0;
        let endX = 0;

        productRotatorSlide.addEventListener("touchstart", (event) => {
          startX = event.touches[0].pageX;
        });

        productRotatorSlide.addEventListener("touchmove", (event) => {
          endX = event.touches[0].pageX;
        });

        productRotatorSlide.addEventListener("touchend", () => {
          const threshold = endX - startX;

          if (threshold > 50 && this.currentSlide > 0) {
            this.currentSlide--;
          } else if (threshold < -50 && this.currentSlide < this.slides.length - 1) {
            this.currentSlide++;
          }
        });

        // ✅ Auto-slide only on mobile
        if (window.innerWidth <= 768) {
          this.autoSlideInterval = setInterval(() => {
            this.currentSlide = (this.currentSlide + 1) % this.slides.length;
          }, 4000);
        }
      },
      methods: {
        updateSlide(index) {
          this.isPreviousSlide = index < this.currentSlide;
          this.currentSlide = index;
          this.isFirstLoad = false;
        }
      }
    });
  });


  window.addEventListener('scroll', function () {
    const header = document.getElementById('mainHeader');
    if (window.scrollY > 0) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});