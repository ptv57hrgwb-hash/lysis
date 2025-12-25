// Year
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile drawer
const burger = document.querySelector(".burger");
const drawer = document.querySelector(".drawer");
const closeBtn = document.querySelector(".drawer__close");
const backdrop = document.querySelector(".drawer__backdrop");

function openDrawer() {
  drawer.hidden = false;
  burger.setAttribute("aria-expanded", "true");
  document.body.style.overflow = "hidden";
}
function closeDrawer() {
  drawer.hidden = true;
  burger.setAttribute("aria-expanded", "false");
  document.body.style.overflow = "";
}

burger?.addEventListener("click", openDrawer);
closeBtn?.addEventListener("click", closeDrawer);
backdrop?.addEventListener("click", closeDrawer);

drawer?.querySelectorAll("a").forEach((a) => a.addEventListener("click", closeDrawer));

