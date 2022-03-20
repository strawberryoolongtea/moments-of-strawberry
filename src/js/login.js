const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const logoutButton = document.querySelector("#logout-button");

const USERNAME_KEY = "username";
const HIDDEN_CLASSNAME = "hidden";
const savedUsername = localStorage.getItem(USERNAME_KEY);

const handleSubmit = (event) => {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreeting(username);
};

const handleLogout = () => {
  localStorage.removeItem(USERNAME_KEY);
  location.reload();
};

const paintGreeting = (username) => {
  greeting.innerText = `안녕하세요! ${username}님`;
  greeting.classList.remove(HIDDEN_CLASSNAME);

  // Show logout button
  logoutButton.classList.remove(HIDDEN_CLASSNAME);
  logoutButton.addEventListener("click", handleLogout);
};

if (savedUsername === null) {
  // Show form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", handleSubmit);
} else {
  // Show greeting
  paintGreeting(savedUsername);
}
