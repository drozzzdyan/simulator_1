function calculateMinHeight() {
  document.documentElement.style.setProperty('--body-min-height', window.innerHeight + 'px');
  window.addEventListener('resize', calculateMinHeight);
}

function setDecorationType(type = 0) {
  const decoration = document.getElementById('main-decoration');
  decoration.classList = 'decorations';
  const timeout = setTimeout(() => {
    if (type) decoration.classList.add(`type-${type}`);
    clearTimeout(timeout);
  }, 500);
}

function createBackgroundAnimation() {
  const circlesDec = document.querySelectorAll('.circle-dec');

  circlesDec.forEach(circle => {
    circle.initialPositionX = circle.offsetLeft;
    circle.initialPositionY = circle.offsetTop;
  })

  window.addEventListener('mousemove', event => {
    circlesDec.forEach(circle => {
      const offsetK = 0.06;
      const offsetX = Math.floor((circle.initialPositionX + event.clientX - circle.offsetLeft - window.innerWidth / 2) * offsetK);
      const offsetY = Math.floor((circle.initialPositionY + event.clientY - circle.offsetTop - window.innerHeight / 2) * offsetK);

      circle.style.transform = `translateX(${offsetX}px) translateY(${offsetY}px)`;
    })
  })
}

function setBtnControl() {
  document.querySelectorAll('.js-btn-control').forEach(btn => {
    const closeEl = document.getElementById(btn.dataset.targetClose);
    const openEl = document.getElementById(btn.dataset.targetOpen);

    btn.addEventListener('click', () => {
      setDecorationType(btn.dataset.decoration);
      closeEl.classList.add('hide');
      openEl.classList.add('hide');

      const timeout = setTimeout(() => {
        closeEl.classList.remove('active');
        closeEl.classList.remove('hide');

        openEl.classList.add('active');
        const timeoutIn = setTimeout(() => {
          openEl.classList.remove('hide');
          clearTimeout(timeout);
          clearTimeout(timeoutIn);
        }, 200);
      }, 500);
    })
  })
}

function setInteractivePage3() {
  document.querySelectorAll('.js-interactive-board').forEach(el => {
    el.addEventListener('click', () => {
      el.classList.toggle('selected');
    })
  })

  document.querySelectorAll('.js-btn-show-interactive').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.classList.remove('show');
      document.querySelector(btn.dataset.targetShow).classList.add('show');
      document.querySelector(btn.dataset.targetBubble).classList.add('show');
    })
  })
}

function setAnimationPage96() {
  setInterval(() => {
    document.querySelector('.scene-1-page-9-6-svg-grandmom').classList.toggle('mirror');
  }, 800);
}

document.addEventListener('DOMContentLoaded', () => {
  calculateMinHeight();
  createBackgroundAnimation();
  // setDecorationType(1);
  setBtnControl();

  setInteractivePage3();
  setAnimationPage96();
})