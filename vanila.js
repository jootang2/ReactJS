const button = document.querySelector('#btn');
let counter = 0;
function handleBtnClick() {
    const count = document.querySelector('#counter');
    counter ++;
    count.innerHTML = `Total Click : ${counter}`

}
button.addEventListener('click', handleBtnClick);