const container = document.querySelector(".container2");
let a = [0, 4, 0, 0, 0, 6, 0, 6, 4, 0, 0, 0, 2, 3, 1, 2, 0];
let N = a.length,
  maxLeft = -1;
let prefix = [];
container.style.width = a.length * 5 + "rem";
prefix[N - 1] = a[N - 1];
for (let i = N - 2; i >= 0; i--) {
  prefix[i] = Math.max(a[i], prefix[i + 1]);
}
const loadVisuals = () => {
  for (let i = 0; i < N; i++) {
    maxLeft = Math.max(a[i], maxLeft);
    let height = Math.min(prefix[i], maxLeft) - a[i];
    let t = (height / (height + a[i])) * 100;
    let b = (a[i] / (height + a[i])) * 100;
    console.log(t + " " + b);
    let color = a[i] == 0 ? "lightblue" : "yellow";
    color =
      color === "yellow" && height !== 0
        ? `linear-gradient(to top,yellow ${b}% ,lightblue ${b}% ${t}%)`
        : color;
    height =
      color === `linear-gradient(to top,yellow ${b}% ,lightblue ${b}% ${t}%)`
        ? height + a[i]
        : height === 0
        ? a[i]
        : height;
    let blk = document.createElement("div");
    blk.style.height = height * 2 + "rem";
    blk.style.width = "4rem";
    blk.style.background = color;
    blk.innerHTML = `
    <p>H - ${a[i]}</br>
    W - ${height - a[i]}</p>
    `;
    blk.style.textAlign = "center";
    if (color == "yellow") blk.style.border = "0.5px dotted black";
    container.appendChild(blk);
  }
};
window.onload = loadVisuals();
