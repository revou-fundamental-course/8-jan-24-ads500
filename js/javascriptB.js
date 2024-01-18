document.getElementById("hitung").addEventListener("click", function () {
  const inputVlue = document.getElementById("squareSide").value;
  let intConvert = parseInt(inputVlue);
  let KelilingLinkaran = 4 * intConvert;

  if (inputVlue == "") {
  } else {
    document.getElementById("rumus").innerHTML = " K = 4 x S ";
    document.getElementById("rumusInput").innerHTML =
      "K = 4 " + " x " + inputVlue;
    document.getElementById("hasil").innerHTML = "K = " + KelilingLinkaran;
  }
});

document.getElementById("reset").addEventListener("click", function () {
  window.location.reload();
});
