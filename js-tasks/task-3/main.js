const table_container = document.getElementById('table-container');

fetch('http://localhost:3001/products')
    .then(res => res.json())
    .then(data => {
      create_table(data);
    })
    .catch(err => {
        table_container.textContent = 'Ошибка: ' + err;
    });

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
  var row_index = 1;

  data.forEach (element => {
    let sum = element.price * element.quantity;

    content += `
      <tr>
        <td>${row_index}</td>
        <td>${element.name}</td>
        <td>${element.quantity}</td>
        <td>${element.price}</td>
        <td>${sum}</td>
      </tr>`

    row_index++;
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