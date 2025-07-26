//- Manage - login, Register, Default login, and logout

const defaultUser = {
  email: "admin@test.com",
  password: "admin123",
  name: "Admin"
};

let currentUser = null;

window.addEventListener('DOMContentLoaded', () => {
  // Elements references
  const loginContainer = document.getElementById('login');
  const mainContainer = document.getElementById('main');
  const userNameSpan = document.getElementById('user');

  const signInBtn = document.getElementById('signIn');
  const signUpBtn = document.getElementById('signUp');
  const loginForm = document.getElementById('loginForm');
  const registerForm = document.getElementById('registerForm');
  const logoutBtn = document.getElementById('logout');

  // Autofill default login (for quick test)
  document.getElementById('email').value = defaultUser.email;
  document.getElementById('password').value = defaultUser.password;

  signInBtn.addEventListener('click', () => switchTab('login'));
  signUpBtn.addEventListener('click', () => switchTab('register'));

  loginForm.addEventListener('submit', loginHandler);
  registerForm.addEventListener('submit', registerHandler);

  logoutBtn.addEventListener('click', logout);

  switchTab('login'); // default tab shown

  function switchTab(tab) {
    if (tab === 'login') {
      signInBtn.classList.add('bg-blue-500', 'text-white');
      signInBtn.classList.remove('text-gray-600', 'dark:text-gray-400');
      signUpBtn.classList.remove('bg-blue-500', 'text-white');
      signUpBtn.classList.add('text-gray-600', 'dark:text-gray-400');
      loginForm.classList.remove('hidden');
      registerForm.classList.add('hidden');
    } else {
      signUpBtn.classList.add('bg-blue-500', 'text-white');
      signUpBtn.classList.remove('text-gray-600', 'dark:text-gray-400');
      signInBtn.classList.remove('bg-blue-500', 'text-white');
      signInBtn.classList.add('text-gray-600', 'dark:text-gray-400');
      registerForm.classList.remove('hidden');
      loginForm.classList.add('hidden');
    }
  }

  function loginHandler(e) {
    e.preventDefault();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;

    if (email === defaultUser.email && password === defaultUser.password) {
      currentUser = { ...defaultUser };
      showMainPage();
      return;
    }

    // Fake user validation placeholder
    if (email && password) {
      currentUser = { email, name: "User" };
      showMainPage();
    } else {
      alert("Please enter valid email and password");
    }
  }

  function registerHandler(e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('newEmail').value.trim();
    const password = document.getElementById('newPassword').value;
    const confirm = document.getElementById('confirm').value;

    if (password !== confirm) {
      alert("Passwords do not match");
      return;
    }
    if (name && email && password) {
      currentUser = { email, name };
      showMainPage();
    } else {
      alert("Please fill all fields");
    }
  }

  function logout() {
    currentUser = null;
    loginContainer.classList.remove('hidden');
    mainContainer.classList.add('hidden');
    loginForm.reset();
    registerForm.reset();
    switchTab('login');
  }

  function showMainPage() {
    userNameSpan.textContent = currentUser.name;
    loginContainer.classList.add('hidden');
    mainContainer.classList.remove('hidden');
  }
});