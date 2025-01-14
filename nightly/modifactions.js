// @ts-nocheck

const contain = document.querySelector(".container");

contain.addEventListener(
  "contextmenu",
  function (ev) {
    ev.preventDefault();

    let stopParam = new URLSearchParams(window.location.search);

    if (stopParam.has("stop")) {
      stopParam.delete("stop");
    } else {
      stopParam.set("stop", new Date().toISOString());
    }

    window.location.search = stopParam.toString();

    return false;
  },
  false
);

document.addEventListener("keydown", function (event) {
  // Check if the pressed key is 'r' (key code 82)
  if (event.key === "r" || event.keyCode === 82) {
    let stopParam = new URLSearchParams(window.location.search);

    if (stopParam.has("stop")) {
      stopParam.set("stop", new Date().toISOString());
    }
    stopParam.set("time", new Date().toISOString());
    window.location.search = stopParam.toString();
  }
});
