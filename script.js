let name = document.querySelector('#name');
let company = document.querySelector('#company');
let avatar = document.querySelector('#avatar');
let form = document.querySelector('form');
let username = document.querySelector('#username');

async function fetchUserData(username) {
  let response = await fetch(`https://api.github.com/users/${username}`);
  let data = await response.json();
  console.log(data);

  name.textContent = data.name;
  company.textContent = data.company;
  avatar.src = data.avatar_url;
}

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  fetchUserData(username.value);
});