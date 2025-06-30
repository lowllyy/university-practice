const form = document.querySelector('form')
const name_input = document.getElementById('name')
const phone_input = document.getElementById('phone')

const pattern = {
    mask: '+7 (000) 000-00-00'
};
const mask = IMask(phone_input,pattern);

const email_input = document.getElementById('email')
const message = document.querySelector('.send__btn-message')
var map_clicked = false;

// ------------- checking necessary fields -------------------------

function checking(event) {
    event.preventDefault();
    let name_value = name_input.value;
    let email_value = email_input.value;
    let phone_value = phone_input.value;
    let clear_phone = phone_value.replace(/[^\d]/g, '');
    if(name_value.trim()==''){
        message.style.color = '#FF0000';
        message.textContent = 'Не заполнено поле "ФИО"';
    }
    else if(phone_value.trim()=='') {
        message.style.color = '#FF0000';
        message.textContent = 'Не заполнено поле "Телефон"';
    }
    else if(clear_phone.length<11) {
        message.style.color = '#FF0000';
        message.textContent = 'Некорректно заполнено поле "Телефон"';
    }
    else if(!map_clicked) {
        message.style.color = '#FF0000';
        message.textContent = 'Не отмечен адрес доставки';
    }
    else{
        message.textContent = 'Заказ оформлен!';
        message.style.color = '#008000';
    }
}
form.onsubmit = checking;

// --------------------- using Yandex Maps -------------------------

ymaps.ready(init);

function init(){
    var myMap = new ymaps.Map("map", {
        center: [55.76, 37.64],
        zoom: 7
    });

    var placemark;
        
    myMap.events.add('click', function (e) {
        var coords = e.get('coords');
        map_clicked = true;
        if (placemark ) {
            placemark.geometry.setCoordinates(coords);
            placemark.properties.set({
                iconCaption: coords,
                balloonContent: 'Координаты: ' + coords[0]+ ', ' + coords[1]});
        }
        else {
            placemark = new ymaps.Placemark(coords, {
                iconCaption: coords
            }, {
                preset: 'islands#blackDotIconWithCaption',
            });
                placemark.properties.set({balloonContent: 'Координаты: ' + coords[0] + ', ' + coords[1]});
                myMap.geoObjects.add(placemark);
            }
        placemark.balloon.open();
    });
}