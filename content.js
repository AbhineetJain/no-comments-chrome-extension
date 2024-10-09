const removeCommentsSection = () => {
  const commentsSection = document.getElementById('comments');
  const haveCommentsLoaded = document.querySelector('#comments #header-author')
  if (haveCommentsLoaded) {
    commentsSection.remove();
  }
}

setInterval(removeCommentsSection, 500);
