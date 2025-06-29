const form = document.querySelector('form')
const name_input = document.getElementById('name')
const phone_input = document.getElementById('phone')

const pattern = {
    mask: '+7 (000) 000-00-00'
};
const mask = IMask(phone_input,pattern);

const email_input = document.getElementById('email')
const message = document.querySelector('.send__btn-message')

function checking(event) {
    event.preventDefault();
    let name_value = name_input.value;
    let phone_value = phone_input.value;
    if(name_value.trim()==''){
        message.style.color = '#FF0000';
        message.textContent = 'Не заполнено поле "ФИО"';
    }
    else if(phone_value.trim()=='') {
        message.style.color = '#FF0000';
        message.textContent = 'Не заполнено поле "Телефон"';
    }
    else{
        message.textContent = 'Заказ оформлен!';
        message.style.color = '#008000';
    }
}

form.onsubmit = checking;