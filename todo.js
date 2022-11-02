function showUser() {
    const url = document.URL;
    let nameInput = url.substr(url.lastIndexOf('=') + 1, url.length);
    nameInput = nameInput.toLowerCase().replace(/\+/g, ' ');
    const data = localStorage.getItem(nameInput);
    const obj = JSON.parse(data);

    if(nameInput === obj.name) {
        document.querySelector('.welcome').innerHTML = nameInput + "'s" + " Todo List";
    }
}
showUser();
