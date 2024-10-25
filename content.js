let areCommentsHidden = false;

const hideCommentsSection = () => {
  const haveCommentsLoaded = document.querySelector('#comments #header-author')
  if (haveCommentsLoaded) {
    const buttonElement = getButtonElement();
    document.getElementById('comments').prepend(buttonElement);
    buttonElement.click();
    clearInterval(checkComments);
  }
}

// Hide comments by default once they load
const checkComments = setInterval(hideCommentsSection, 500);

const getButtonElement = () => {
  const buttonElement = document.createElement('button-view-model');
  buttonElement.classList.add('yt-spec-button-view-model')
  buttonElement.innerHTML = `
    <button class="toggle-comments-button yt-spec-button-shape-next yt-spec-button-shape-next--tonal yt-spec-button-shape-next--mono yt-spec-button-shape-next--size-m" aria-disabled="false" style="">
        <div class="yt-spec-button-shape-next__button-text-content">Hide Comments</div>
    </button>
  `
  buttonElement.onclick = function() {
    const commentsSection = document.querySelector('#comments #sections');
    const toggleButtonText = document.querySelector('.toggle-comments-button > div');
   
    if (areCommentsHidden) {
      commentsSection.style.display = 'block';
      toggleButtonText.innerText = 'Hide Comments';
      areCommentsHidden = false;
    } else {
      commentsSection.style.display = 'none';
      toggleButtonText.innerText = 'Show Comments';
      areCommentsHidden = true;
    }
  };

  return buttonElement;
}
