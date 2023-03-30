const switcherElement = document.querySelector(".switcher");
const body = document.body;

function switcher(element, prop) {
  const active = switcherElement.classList.contains("active");
  if (active) {
    toggleClass.call(switcherElement, "active");
    changeProperty.call(element, prop, "var(--light-color)");
  } else {
    toggleClass.call(switcherElement, "active");
    changeProperty.call(element, prop, "var(--dark-color)");
  }
}

function changeProperty(prop, value) {
  this.style.setProperty(prop, value);
}

function toggleClass(className) {
  if (this.classList.contains(className)) {
    this.classList.remove(className);
  } else {
    this.classList.add(className);
  }
}

switcherElement.addEventListener("click", () =>
  switcher(body, "background-color")
);
