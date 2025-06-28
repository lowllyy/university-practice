const input_w = document.getElementById('width-setting');
const input_h = document.getElementById('height-setting');
const square = document.getElementById('box');

function update_size (){
    let value_w = input_w.value;
    let value_h = input_h.value;

    let value_w_numb = Number(value_w);
    let value_h_numb = Number(value_h);

    // проверка на числовое заполнение полей неотрицательными значениями

    if (isNaN(value_w_numb) || value_w_numb<0){
        value_w = "100";
        input_w.value = value_w;
    }
    if (isNaN(value_h_numb) || value_h_numb<0){
        value_h = "100";
        input_h.value = value_h;
    }

    // изменение размеров фигуры

    square.style.width = value_w + 'px';
    square.style.height = value_h + 'px';
};

// обработка события изменения текстового значения input

input_w.oninput = update_size;
input_h.oninput = update_size;

const button = document.querySelector('button')

// функция для смены цвета на случайный

function change_color(){
    let symbols = "0123456789ABCDEF";
    let max = symbols.length;
    let color = '#';
    for(let i=0; i<6; i++){
        color += symbols[Math.floor(Math.random()*max)];
    }

    // изменение цвета фигуры

    square.style.backgroundColor = color;
}; 

// обработка события клика на кнопку

button.onclick = change_color;