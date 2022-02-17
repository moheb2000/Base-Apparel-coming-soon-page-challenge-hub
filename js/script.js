const form = document.getElementById("form");

document.getElementById("btn").addEventListener("click", () => {
  const email = document.getElementById("input");
  const errorStyle = document.getElementById("error-icon").style;
  const validateStyle = document.getElementById("validate").style;

  if (/\S+@+\S/.test(email.value)) {
    form.style.outline = "1px solid var(--cl-desaturated-red)";
    errorStyle.display = "none";
    validateStyle.display = "none";
  } else {
    form.style.outline = "2px solid var(--cl-soft-red)";
    errorStyle.display = "inline";
    validateStyle.display = "block";
  }
});