// 버튼을 누를 때 마다 submit 되면서 페이지가 새로고침 됨
// => preventDefault함수를 통해서 브라우저의 기본 동작을 막아주면 해결

const loginForm = document.querySelector('#login-form')
const loginInput = document.querySelector('#login-form input')

function onLoginSubmit(info) {
    info.preventDefault();
    const username = loginInput.value;
    console.log(username)
}

loginForm.addEventListener('submit', onLoginSubmit);


