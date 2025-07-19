const profileIcon = document.querySelector('.profile-icon');
const dropdownMenu = document.querySelector('.dropdown-menu');

profileIcon.addEventListener('click', () => {
  dropdownMenu.style.display = dropdownMenu.style.display === 'flex' ? 'none' : 'flex';
});

document.getElementById('open-login').addEventListener('click', () => {
  showModal('login-modal');
  dropdownMenu.style.display = 'none';
});

document.getElementById('open-register').addEventListener('click', () => {
  showModal('register-modal');
  dropdownMenu.style.display = 'none';
});

function showModal(id) {
  document.getElementById(id).style.display = 'block';
}

function closeModal(id) {
  document.getElementById(id).style.display = 'none';
}

// Optional: Close modals if clicking outside
window.addEventListener('click', function (e) {
  ['login-modal', 'register-modal'].forEach(id => {
    const modal = document.getElementById(id);
    if (e.target === modal) modal.style.display = 'none';
  });
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

