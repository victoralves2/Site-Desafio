const username = document.querySelector('#username');
const password = document.querySelector('#password');
const submit = document.querySelector('#submit');

submit.addEventListener('click', (event) => {
    event.preventDefault();


    //validação do usuário 

    if(username.value.trim() == ''){
        error(username, 'Email Inválido')
    }else{
        success(username);
    }

    //validação da senha
    if(password.value.trim() == '') {
        error(password, 'Senha Inválida');
    }else{
        success(password);
    }



});

function error(element, msg){
    element.style.border = '3px red solid';
    const parent = element.parentElement;
    const p = parent.querySelector('p');
    p.textContent = msg;
    p.style.visibility = 'visible';


}

function success(element){
    element.style.border = '3px green solid';
    const parent = element.parentElement;
    const p = parent.querySelector('p');
    p.style.visibility = 'hidden';

}
