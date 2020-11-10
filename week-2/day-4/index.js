// Also automate the slide.

var nextImage = function () {
  currentPosition = currentPosition - 500;
  if (currentPosition < 0) {
    currentPosition = 1500;
  }
  document.getElementById('imageslider').style.transform =
    'TranslateX(’ + currentPosition + ‘px)';
};

var prevImage = function () {
  currentPosition = currentPosition + 500;
  if (currentPosition > 1500) {
    currentPosition = 0;
  }
  document.getElementById('imageslider').style.transform =
    'TranslateX(’ + currentPosition + ‘px)';
};
