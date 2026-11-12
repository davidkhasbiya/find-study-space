document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#loginForm');
  const email = document.querySelector('#email');
  const password = document.querySelector('#password');
  const status = document.querySelector('#loginStatus');
  const emailError = document.querySelector('#emailError');
  const passwordError = document.querySelector('#passwordError');

  // ── Password visibility toggle ──────────────────────────────────────────
  const eyeIconOpen = `<path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6Z"/><circle cx="12" cy="12" r="2.5"/>`;
  const eyeIconClosed = `<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-6.5 0-10-8-10-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c6.5 0 10 8 10 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/>`;

  document.querySelector('#passwordToggle')?.addEventListener('click', (event) => {
    const button = event.currentTarget;
    const eyeSvg = button.querySelector('#eyeIcon');
    const visible = password.type === 'password';

    password.type = visible ? 'text' : 'password';
    button.setAttribute('aria-label', visible ? 'Sembunyikan kata sandi' : 'Tampilkan kata sandi');
    if (eyeSvg) eyeSvg.innerHTML = visible ? eyeIconClosed : eyeIconOpen;
  });

  // ── Lupa kata sandi ─────────────────────────────────────────────────────
  document.querySelector('#forgotPassword')?.addEventListener('click', (event) => {
    event.preventDefault();
    status.textContent = 'Fitur pemulihan kata sandi belum terhubung ke backend.';
    status.style.color = '#c24141';
  });

  // ── Validasi & submit ───────────────────────────────────────────────────
  form?.addEventListener('submit', (event) => {
    event.preventDefault();

    // Reset feedback
    emailError.textContent = '';
    passwordError.textContent = '';
    status.textContent = '';
    status.style.color = '';

    let valid = true;

    // Validasi email
    if (!email.value.trim()) {
      emailError.textContent = 'Email wajib diisi.';
      valid = false;
    } else if (!email.validity.valid) {
      emailError.textContent = 'Masukkan format email yang valid.';
      valid = false;
    }

    // Validasi password
    if (!password.value.trim()) {
      passwordError.textContent = 'Kata sandi wajib diisi.';
      valid = false;
    } else if (password.value.length < 8) {
      passwordError.textContent = 'Kata sandi minimal 8 karakter.';
      valid = false;
    }

    if (valid) {
      status.textContent = 'Login berhasil untuk simulasi frontend. Mengarahkan ke dashboard...';
      status.style.color = '';
      setTimeout(() => {
        window.location.href = 'dashboard.html';
      }, 1200);
    }
  });
});
