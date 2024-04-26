document.addEventListener("DOMContentLoaded", function() {
    let counter = document.getElementById('counter');
    let count = parseInt(counter.innerText);
    let likes = {};
    let isPaused = false;

    function incrementCounter() {
        if (!isPaused) {
        count++;
        counter.innerText = count;
        }
    }

    function decrementCounter() {
        if (!isPaused) {
        count--;
        counter.innerText = count;
        }
    }

    function likeNumber() {
        if (!likes[count]) {
          likes[count] = 1;
        } else {
          likes[count]++;
        }
        displayLikes();
    }

    function displayLikes() {
        let likesList = document.querySelector('.likes');
        likesList.innerHTML = ''; // Clear previous likes
    
        for (let num in likes) {
          let li = document.createElement('li');
          li.innerText = `${num} has been liked ${likes[num]} times`;
          likesList.appendChild(li);
        }
    }

    let plusButton = document.getElementById('plus');
    plusButton.addEventListener('click', incrementCounter);

    let minusButton = document.getElementById('minus');
    minusButton.addEventListener('click', decrementCounter);

    let likeButton = document.getElementById('heart');
    likeButton.addEventListener('click', likeNumber);

    let pauseButton = document.getElementById('pause');
    pauseButton.addEventListener('click', function() {
      isPaused = !isPaused;
      if (isPaused) {
        pauseButton.innerText = 'resume';
        plusButton.disabled = true;
        minusButton.disabled = true;
        likeButton.disabled = true;
      } else {
        pauseButton.innerText = 'pause';
        plusButton.disabled = false;
        minusButton.disabled = false;
        likeButton.disabled = false;
      }
    });
  
    setInterval(incrementCounter, 1000);
  });

document.addEventListener("DOMContentLoaded", function() {
  function submitComment(event) {
    event.preventDefault();

    let commentInput = document.getElementById('comment-input');
    let commentText = commentInput.value;

    commentInput.value = '';

    let commentList = document.getElementById('list');
    let newComment = document.createElement('li');
    newComment.innerText = commentText;

    commentList.appendChild(newComment);
  }

  let commentForm = document.getElementById('comment-form');
  commentForm.addEventListener('submit', submitComment);
});
