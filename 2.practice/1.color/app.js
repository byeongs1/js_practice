
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {

    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    let bgColor = `rgb(${r}, ${g}, ${b})`;

    document.body.style.backgroundColor = bgColor;
    color.textContent = bgColor;
});
