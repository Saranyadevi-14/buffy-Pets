//toggle for dog and cat
  
let isDog = true;

function togglePet() {
  const slider = document.getElementById("slider");
  const dogCards = document.querySelectorAll(".dog");
  const catCards = document.querySelectorAll(".cat");

  if (isDog) {
    // Show cat cards
    slider.style.left = "85px";
    dogCards.forEach(card => card.style.display = "none");
    catCards.forEach(card => card.style.display = "block");
  } else {
    // Show dog cards
    slider.style.left = "5px";
    dogCards.forEach(card => card.style.display = "block");
    catCards.forEach(card => card.style.display = "none");
  }

  isDog = !isDog;
}

//dropdown 

  const menus = ["dog", "cat", "smallPet", "bird", "grooming", "vets"];
    menus.forEach(name => {
      const btn = document.getElementById(name + "Btn");
      const menu = document.getElementById(name + "Menu");
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        menus.forEach(other => {
          const otherMenu = document.getElementById(other + "Menu");
          if (other !== name) otherMenu.style.display = "none";
        });
        menu.style.display = (menu.style.display === "flex") ? "none" : "flex";
        e.stopPropagation();
      });
    });

    window.addEventListener("click", function (e) {
      menus.forEach(name => {
        const btn = document.getElementById(name + "Btn");
        const menu = document.getElementById(name + "Menu");
        if (!btn.contains(e.target) && !menu.contains(e.target)) {
          menu.style.display = "none";
        }
      });
    });