const profileIcon = document.querySelector('.profile-icon');
const dropdownMenu = document.querySelector('.dropdown-menu');

profileIcon.addEventListener('click', () => {
  dropdownMenu.style.display = dropdownMenu.style.display === 'flex' ? 'none' : 'flex';
});


// translator dropdown

document.querySelectorAll('.dropbtn').forEach(button => {
  button.addEventListener('click', function () {
    const dropdown = this.parentElement;
    dropdown.classList.toggle('show');

    // Close other dropdowns
    document.querySelectorAll('.dropdown').forEach(other => {
      if (other !== dropdown) {
        other.classList.remove('show');
      }
    });
  });
});

// Close dropdowns on click outside
window.addEventListener('click', function (e) {
  if (!e.target.closest('.dropdown')) {
    document.querySelectorAll('.dropdown').forEach(dropdown => dropdown.classList.remove('show'));
  }
});




