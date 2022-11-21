const box1 = document.querySelector(".box1");
const box2 = document.querySelector(".box2");
const curInput1 = document.querySelector(".cur-input-1");
const curInput2 = document.querySelector(".cur-input-2");
const btn = document.querySelectorAll("button");

const rateBox = document.querySelector(".rate-box");
const changeBtn = document.querySelector(".fa-retweet");

function calc() {
  const curItem1Value = box1.value;
  const curItem2Value = box2.value;

  fetch(`https://api.exchangerate.host/${curItem1Value}`)
    .then((res) => res.json())
    .then((data) => {
      const rate = data.rates[curItem2Value];

      rateBox.textContent = `1 ${curItem1Value} = ${rate.toFixed(
        4
      )} ${curItem2Value}`;

      curInput2.value = (curInput1.value * rate).toFixed(2);
    });
}

function listeners() {
  box1.addEventListener("change", calc);
  box2.addEventListener("change", calc);
  curInput1.addEventListener("input", calc);
  curInput2.addEventListener("input", calc);
  btn.addEventListener("click", calc);
  changeBtn.addEventListener("click", () => {
    [box1.value, box2.value] = [box1.value, box2.value];
    calc();
    changeBtn.classList.toggle("rotate-btn");
  });
}

// window.onload = () => {
//   listeners();
//   calc();
// };

function addBtn() {
  const arr = ["RUB", "USD", "EUR", "GBP"];
  arr.forEach((soz)=>{
    const btn = document.createElement()
  })
}
