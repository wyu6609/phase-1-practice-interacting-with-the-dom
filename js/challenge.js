document.addEventListener("DOMContentLoaded", init());
function init() {
  let refreshIntervalId;
  let x = 0;
  let likeCounter = 0;
  let pausePlayButtonState = false;
  let arr = [];
  const likesList = document.querySelector(".likes");
  const counter = document.getElementById("counter");
  const likeButton = document.getElementById("heart");
  const commentBox = document.getElementById("comment-input");
  const commentForm = document.getElementById("comment-form");
  const commentSection = document.getElementById("list");
  const submitButton = document.getElementById("submit");
  const minusButton = document.getElementById("minus");
  const plusButton = document.getElementById("plus");
  const pausePlayButton = document.getElementById("pause");
  //See the timer increment every second once the page has loaded.
  startCounter();
  function startCounter() {
    refreshIntervalId = setInterval(function () {
      x++;
      counter.innerText = x;
    }, 1000);
  }

  commentForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const newComment = document.createElement("h4");
    console.log(commentBox.value);
    newComment.innerText = commentBox.value;
    commentSection.appendChild(newComment);
  });
  minusButton.addEventListener("click", () => {
    x--;
    counter.innerText = x;
  });
  plusButton.addEventListener("click", () => {
    x++;
    counter.innerText = x;
  });

  likeButton.addEventListener("click", () => {});

  pausePlayButton.addEventListener("click", () => {
    pausePlayButtonState = !pausePlayButtonState;
    pausePlayButton.innerText = pausePlayButtonState ? "Play" : "Pause";
    if (pausePlayButtonState) {
      //PLAY
      console.log("enable buttons");
      console.log("continue timer");

      plusButton.disabled = false;
      minusButton.disabled = false;
      likeButton.disabled = false;
      clearInterval(refreshIntervalId);
      console.log(x);
    } else {
      //PAUSE
      console.log("disable buttons");
      console.log("pause timer");

      plusButton.disabled = true;
      minusButton.disabled = true;
      likeButton.disabled = true;
      startCounter();
    }
  });
}
