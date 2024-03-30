const soccerField = document.querySelector(".soccer__field");
const soccerBall = document.querySelector(".soccer__ball");

soccerField.addEventListener("click", (event) => {
  let soccerFieldCoords = soccerField.getBoundingClientRect();

  let soccerBallCoords = {
    top:
      event.clientY -
      soccerFieldCoords.top -
      soccerField.clientTop -
      soccerBall.clientHeight / 2,
    left:
      event.clientX -
      soccerFieldCoords.left -
      soccerField.clientLeft -
      soccerBall.clientWidth / 2,
  };

  if (soccerBallCoords.top < 0) soccerBallCoords.top = 0;

  if (soccerBallCoords.left < 0) soccerBallCoords.left = 0;

  if (
    soccerBallCoords.left + soccerBall.clientWidth >
    soccerField.clientWidth
  ) {
    soccerBallCoords.left = soccerField.clientWidth - soccerBall.clientWidth;
  }

  if (
    soccerBallCoords.top + soccerBall.clientHeight >
    soccerField.clientHeight
  ) {
    soccerBallCoords.top = soccerField.clientHeight - soccerBall.clientHeight;
  }

  soccerBall.style.left = soccerBallCoords.left + "px";
  soccerBall.style.top = soccerBallCoords.top + "px";
});
