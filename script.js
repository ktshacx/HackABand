document.querySelectorAll('.accordion-header').forEach(button => {
    button.addEventListener('click', () => {
        const accordionContent = button.nextElementSibling;

        button.classList.toggle('active');

        if (button.classList.contains('active')) {
            accordionContent.style.display = 'block';
        } else {
            accordionContent.style.display = 'none';
        }
    });
});

function openPopup(src) {
  const popup = document.getElementById('popup');
  const popupImg = document.getElementById('popup-img');
  popupImg.src = src;
  popup.style.display = 'flex';
}

function closePopup() {
  const popup = document.getElementById('popup');
  popup.style.display = 'none';
}

document.getElementById('popup').addEventListener('click', function (event) {
  if (event.target === this) {
    closePopup();
  }
});