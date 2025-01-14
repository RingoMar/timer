document.addEventListener("DOMContentLoaded", function () {
  const timestampStroke = new URLSearchParams(window.location.search).get(
    "stroke"
  );
  const containerSelect = document.querySelectorAll(".num");

  const strokeAmount =
    // @ts-ignore
    timestampStroke === null || isNaN(timestampStroke) || timestampStroke > 10
      ? "2"
      : timestampStroke;
  containerSelect.forEach((i) => {
    // @ts-ignore
    i.style.webkitTextStroke = `${strokeAmount}px #a6ffd8`;
    // @ts-ignore
    i.style.textStroke = `${strokeAmount}px #a6ffd8`;
  });
});
