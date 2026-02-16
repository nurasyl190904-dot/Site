// Simple form handling (demo)
// In production, replace with real backend/API integration.

document.addEventListener('DOMContentLoaded', () => {
  // set current year
  document.getElementById('year').textContent = new Date().getFullYear();

  const form = document.getElementById('enrollForm');
  const alertBox = document.getElementById('formAlert');

  // When "Курсқа жазылу" buttons clicked, preselect course and scroll to form
  document.querySelectorAll('.enroll-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const course = btn.dataset.course || '';
      const select = document.getElementById('course');
      for (const opt of select.options) {
        if (opt.value === course) { opt.selected = true; break; }
      }
      window.location.hash = '#contact';
      document.getElementById('name').focus();
    });
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alertBox.classList.remove('d-none','success','error');
    alertBox.classList.add('d-none');

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const course = document.getElementById('course').value;
    const message = document.getElementById('message').value.trim();

    // basic validation
    if (!name || !email || !course) {
      showAlert('Барлық міндетті өрістер толтырылуы тиіс (аты, email, курс).', 'error');
      return;
    }

    // Simulate submission
    showAlert('Сіздің өтініміңіз қабылданды! Қысқа уақытта бізбен байланысамыз.', 'success');

    // clear form after a short delay
    setTimeout(() => {
      form.reset();
    }, 1200);

    // Optionally: send data to server with fetch(...)
    // fetch('/api/enroll', { method: 'POST', body: JSON.stringify({name,email,course,message}) })
  });

  function showAlert(text, type='success') {
    alertBox.textContent = text;
    alertBox.classList.remove('d-none');
    alertBox.classList.remove('success','error');
    alertBox.classList.add(type);
  }
});