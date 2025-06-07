function handleClick(element) {
  const channelUrl = element.getAttribute('data-channel-url');
  if (channelUrl) {
    window.open(channelUrl, '_blank');
  }
}


const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', (e) => {
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;
});

const textElements = document.querySelectorAll('p, h1');

textElements.forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.classList.add('text-hover');
  });

  el.addEventListener('mouseleave', () => {
    cursor.classList.remove('text-hover');
  });
});
