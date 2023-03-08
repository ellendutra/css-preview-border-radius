const form = document.querySelector(".form");
const cssText = document.querySelector(".css");
const preview = document.querySelector(".preview");

form.addEventListener("input", handleInput);

const handleStyle = {
  element: preview,
  borderTopLeftRadius(value) {
    this.element.style.borderTopLeftRadius = value;
  },
  borderTopRightRadius(value) {
    this.element.style.borderTopRightRadius = value;
  },
  borderBottomLeftRadius(value) {
    this.element.style.borderBottomLeftRadius = value;
  },
  borderBottomRightRadius(value) {
    this.element.style.borderBottomRightRadius = value;
  },
};

function handleInput(event) {
  const name = event.target.name;
  const value = event.target.value;

  handleStyle[name](value);

  showCSS();
}

function showCSS() {
  const borderRadius = [
    document.querySelector("#borderTopLeftRadius").value + "px",
    document.querySelector("#borderTopRightRadius").value + "px",
    document.querySelector("#borderBottomRightRadius").value + "px",
    document.querySelector("#borderBottomLeftRadius").value + "px",
  ].join(" ");
  preview.style.borderRadius = borderRadius;
  cssText.innerHTML = "border-radius: " + borderRadius + ";";
}
