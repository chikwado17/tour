//start

const selectElements = (s) => {
    return document.querySelector(s);
}

selectElements('.open').addEventListener('click', () => {
    selectElements('.nav-list').classList.add('active');
});

selectElements('.close').addEventListener('click', () => {
    selectElements('.nav-list').classList.remove('active');
});