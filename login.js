function login(event) {
    const name = document.querySelector('#name').value.toLowerCase();
    const user = { 'name': name };
    const jsonData = JSON.stringify(user);
    localStorage.setItem(name, jsonData);
    event.preventDefault();
}
