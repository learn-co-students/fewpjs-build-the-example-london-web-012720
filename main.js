// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = "♡";
const FULL_HEART = "♥";

// Your JavaScript code goes here!

const modal = document.querySelector("#modal");
modal.className = "hidden";

document.addEventListener("DOMContentLoaded", () => {
  const heart = document.querySelectorAll(".like-glyph");
  for (let i = 0; i < heart.length; i++) {
    heart[i].addEventListener("click", function() {
      mimicServerCall()
        .then(data => toggleHeart(heart[i]))
        .catch(error => showModal());
    });
  }
});

const showModal = () => {
  modal.classList.remove("hidden");
  setTimeout(function() {
    modal.className = "hidden";
  }, 5000);
};
const toggleHeart = heart => {
  if (heart.innerHTML === EMPTY_HEART) {
    heart.innerHTML = FULL_HEART;
    heart.className = "activated-heart";
  } else {
    heart.innerHTML = EMPTY_HEART;
    heart.classList.remove("activated-heart");
  }
};
//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
