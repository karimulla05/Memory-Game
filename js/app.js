/*
 * Create a list that holds all of your cards
 */


/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976

var movesCount = 0,
  min = 0,
  sec = 0;
var myFrame = [...document.querySelectorAll(".card")];
var myMoves = document.querySelector(".moves");
var starCount = [...document.querySelectorAll(".fa-star")];
var emptyCard = [];
var match = 0;
var stopTime;



myFrame.forEach((data, item) => {
  data.addEventListener("click", hello);
})
// the hello fuction baed on work on push a element in to emptycard and call the function matching().
function hello() {
  if (!this.classList.contains('open') && emptyCard.length < 2) {
    opencard(this)
    emptyCard.push(this);
    matching();
  }
}

//when we are call the opencard() then there well be add a some class like open, show,disable.
function opencard(data) {
  data.classList.add("open", "show", "disable");

}

// ShuffleCards
var deck = document.querySelector(".deck");
shuffle(myFrame).forEach(() => {
  [].filter.call(myFrame, function(i) {
    deck.appendChild(i);
  })
});

// The matching() it well match the two element and there movescount well be increament.
function matching() {
  if (emptyCard.length == 2) {
    rating();
    movesCount += 1; // increament the movescount when two element are equal.
    if (movesCount == 1) { //when the condition is true it well call the startTimer().
      startTimer();
    }

    // In this function  there well call setTimeout() and check the array in two element are equal or not....
    setTimeout(function() {
      if (emptyCard[0].firstElementChild.className == emptyCard[1].firstElementChild.className) {
        match++;
        if (match ==8) //when this condition is true it well be show the pop-up-box and display the  Result...
        {
          document.querySelector(".view").style.visibility = "visible";
          clearInterval(stoptime); // it well be stop the time
          document.querySelector('.minTime').innerHTML = min;
          document.querySelector('.finSec').innerHTML = sec;
          document.querySelector('.noMoves').innerHTML = movesCount;
          document.querySelector('.finalStars').innerHTML = document.querySelector('.stars').innerHTML;

        }
      }
      myMoves.innerHTML = movesCount;
      //This is matching there element section,where two element are match or not match default it it well add or remove open,match,show,disable...
      if (emptyCard[0].firstElementChild.className == emptyCard[1].firstElementChild.className) {
        emptyCard[0].classList.add("match");
        emptyCard[1].classList.add("match");
        emptyCard[0].classList.remove("open", "show");
        emptyCard[1].classList.remove("open", "show");
      } else {
        emptyCard[0].classList.remove("open", "show", "disable");
        emptyCard[1].classList.remove("open", "show", "disable");
      }
      emptyCard = [];

    }, 500)
  }
}

var minElem = document.querySelector(".min");
var secElem = document.querySelector(".sec");

// This is the startTime() where the game was start the  default the time also starts in sec,min.
function startTimer() {
  stoptime = setInterval(function() {
    sec++;
    minElem.innerHTML = min;
    secElem.innerHTML = sec;
    if (sec == 60) {
      min++;
      sec = 0;
    }

  }, 1000);

}
// It well be show the rating of there game base on the several condition....
function rating() {
  if (movesCount == 15) {
    starCount[4].classList.remove("fa-star");
    starCount[4].classList.add("fa-star-o");
  } else if (movesCount == 21) {
    starCount[3].classList.remove("fa-star");
    starCount[3].classList.add("fa-star-o");

  } else if (movesCount == 27) {
    starCount[2].classList.remove("fa-star");
    starCount[2].classList.add("fa-star-o");
  } else if (movesCount == 33) {
    starCount[1].classList.remove("fa-star");
    starCount[1].classList.add("fa-star-o");
  }
}

// This is the shuffle code
function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue, randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

// This is the reset()
function reset() {
  location.reload();
}




/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
