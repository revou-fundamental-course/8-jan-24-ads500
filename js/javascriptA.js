document.getElementById("hitung").addEventListener("click", function () {
  const inputVlue = document.getElementById("squareSide").value;
  let intConvert = parseInt(inputVlue);
  let luasLinkaran = intConvert * intConvert;

  if (inputVlue == "") {
  } else {
    document.getElementById("rumus").innerHTML = "L = S x S ";
    document.getElementById("rumusInput").innerHTML =
      "L = " + inputVlue + " x " + inputVlue;
    document.getElementById("hasil").innerHTML = "L = " + luasLinkaran;
  }
});

document.getElementById("reset").addEventListener("click", function () {
  window.location.reload();
});
