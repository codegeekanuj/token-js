const pluss = document.querySelector("#plus"),
  minus = document.querySelector("#minus");
let a = 1;
pluss.addEventListener("click", () => {
  a++;
  if (a < 10) {
    a = "0" + a;
  }
  document.getElementById("num").innerHTML = a;
});

minus.addEventListener("click", () => {
  if (a > 0) {
    a--;
    if (a < 10) {
      a = "0" + a;
    }
    document.getElementById("num").innerHTML = a;
  }
});
