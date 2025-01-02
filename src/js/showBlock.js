function showBlock() {
  document.getElementById('readyBlock').style.display = 'block';
}

const currentTime = new Date().getTime();

const firstVisitTime = localStorage.getItem('firstVisitTime');

if (firstVisitTime) {
  const timeDifference = currentTime - parseInt(firstVisitTime);
  const thirtyMinutes = 30 * 60 * 1000;

  if (timeDifference >= thirtyMinutes) {
    showBlock();
  }
} else {
  localStorage.setItem('firstVisitTime', currentTime);

  setTimeout(showBlock, 30 * 60 * 1000);
}
