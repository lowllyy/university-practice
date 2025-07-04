const table_container = document.getElementById('table-container');
const start_price_input = document.getElementById('start_price');
const end_price_input = document.getElementById('end_price');
const button = document.getElementById('update-btn');
const message_box = document.getElementById('message_box') ;

var m_price = 0;

fetch('http://localhost:3001/products')
    .then(res => res.json())
    .then(data => {
      m_price = max_price(data);
      create_id(data);
      button.onclick = function(){
        filter_data(data);
      }
    })
    .catch(err => {
        table_container.textContent = 'Ошибка: ' + err;
    });

function validate_inputs(){
  start_price_input.value = start_price_input.value.replace(/[^\d]/g, "");
  end_price_input.value = end_price_input.value.replace(/[^\d]/g, "");
  let val_1 = Number(start_price_input.value);
  let val_2 = Number(end_price_input.value);
    if (val_1 > m_price) {
      start_price_input.style.boxShadow='0 0 5px 3px rgba(255, 0, 0, 0.5)';
      message_box.innerHTML = `Кажется, вы ввели стоимость, большую максимально возможной в нашем каталоге.<br>Пожалуйста, введите цену в диапазоне от 0 до ${m_price}`
      end_price_input.disabled = true;
      button.disabled = true;
    } 
    else if (val_2 > m_price ) {
      end_price_input.style.boxShadow='0 0 5px 3px rgba(255, 0, 0, 0.5)';
      message_box.innerHTML = `Кажется, вы ввели стоимость, большую максимально возможной в нашем каталоге.<br>Пожалуйста, введите цену в диапазоне от 0 до ${m_price}`
      start_price_input.disabled = true;
      button.disabled = true;
    } 
    else {
      end_price_input.style.boxShadow='';
      start_price_input.style.boxShadow='';
      message_box.innerHTML= '';
      start_price_input.disabled = false;
      end_price_input.disabled = false;
      button.disabled = false;
    }
}

function max_price(data){
  let max_price = 0;
  
  data.forEach(element => {
    if (Number(element.price) > max_price) {
      max_price = Number(element.price);
    }
  })

  end_price_input.placeholder = max_price;
  return max_price;
}

var id_map = {};
var row_index = 1;

function create_id(data){
  data.forEach(elem => {
    id_map[elem.name] = row_index;
    row_index++;
  })
}

function get_id(elem){
  return id_map[elem];
}

function filter_data(data) {
  let start_price_value = start_price_input.value;
  let end_price_value = end_price_input.value;

  if (start_price_value == '0' && end_price_value == '0') {
    create_table(data);
  }

  else {
    if ((Number(start_price_value) >= Number(end_price_value)) && start_price_value != '0' && end_price_value != '0') {
      table_container.textContent = 'Некорректно заполнены поля фильтров. Левая граница должна быть меньше правой.';
    }

    else {
      let result = data.filter(elem => {
        return Number(elem.price) >= Number(start_price_value) && Number(elem.price) <= Number(end_price_value)
      })

      if (result.length == 0){
        table_container.textContent = 'Нет данных, попадающих под условие фильтра';
      }

      else{
        create_table(result);
      }
    }
  }
}

function create_table(data) {

  let table_header = `
    <thead>
        <tr>
          <th>ID</th>
          <th>Название</th>
          <th>Количество</th>
          <th>Цена за единицу</th>
          <th>Сумма</th>
        </tr>
    </thead>`

  let content = ''

  data.forEach (element => {
    let sum = element.price * element.quantity;

    content += `
      <tr>
        <td>${get_id(element.name)}</td>
        <td>${element.name}</td>
        <td>${element.quantity}</td>
        <td>${element.price}</td>
        <td>${sum}</td>
      </tr>`
  });

  let table_body = `
    <tbody>
      ${content}
    </tbody>`;

  let final_table = `
  <table>
  ${table_header}
  ${table_body}
  </table>`

  table_container.innerHTML = final_table;
}