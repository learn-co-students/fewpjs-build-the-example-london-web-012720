// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = "♡";
const FULL_HEART = "♥";

// Your JavaScript code goes here!

modal = document.querySelector("#modal");
body = document.querySelector("body");

mimicServerCall()
  .then(res => handleSuccess(res))
  .catch(err => {
    handleError(err);
  });

function handleSuccess(res) {
  body.addEventListener("click", e => {
    console.log(e.target);
    if (e.target.className == "activated-heart") {
      e.target.className = "like-glyph";
    } else if (e.target.className == "like-glyph") {
      e.target.className = "activated-heart";
    }
  });
}

function handleError(err) {
  console.error(err);
  modal.classList = "";
  setTimeout(() => {
    modal.className = "hidden";
  }, 3000);
}

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
