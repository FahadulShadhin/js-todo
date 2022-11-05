const loginForm = document.querySelector('#login-form');

const login = () => { 
    const name = document.querySelector('#name').value.toLowerCase();

    const existingUser = localStorage.getItem(name);
    if (!existingUser) {
        const data = { 'name': name, 'todolist': [] };
        const jsonData = JSON.stringify(data);
        localStorage.setItem(name, jsonData);
    }
    else console.log('welcome');
}

loginForm.addEventListener('submit', () => login())
