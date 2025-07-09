const table = document.getElementById('table');
const tbody = table.querySelector('tbody');

const add_col = document.getElementById('add-col');
const del_col = document.getElementById('del-col');

const add_row = document.getElementById('add-row');
const del_row = document.getElementById('del-row');

const is_touch_device = 'ontouchstart' in window;

let saved_info = localStorage.getItem('user-table');
if (!saved_info) {
    save_table();
}
else {
    load_table();
}

const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
    input.readOnly = true;

    if (is_touch_device) {
        input.addEventListener('touchstart', function() {
            input.readOnly = false;
            input.focus();
        });
    }
    else {
        input.addEventListener('dblclick', function() {
            input.readOnly = false;
            input.focus();
        });
    };

    input.addEventListener('blur', function() {
        input.readOnly = true;
    });
    input.addEventListener('input', function(){
        save_table();
    });
})

function get_number_cols() {
    const first_row = tbody.querySelector('tr');
    return first_row.cells.length;
}

function update_btn_state() {
    let cols = get_number_cols();
    if (cols == 1) {
        del_col.disabled = true;
    }
    else {
        del_col.disabled = false;
    }

    let rows = get_number_rows();
    if (rows == 1) {
        del_row.disabled = true;
    }
    else {
        del_row.disabled=false;
    }
}

function add_column() {
    let rows = Array.from(tbody.children);
    rows.forEach(row => {
        const new_col = document.createElement('td')
        const new_input = document.createElement('input');
        new_input.type='text';
        new_input.placeholder='1234';
        new_col.appendChild(new_input);
        row.appendChild(new_col);
    })
    const inputs = document.querySelectorAll('input');

    inputs.forEach(input => {
        input.readOnly = true;

        if (is_touch_device) {
            input.addEventListener('touchstart', function() {
                input.readOnly = false;
                input.focus();
            });
        }
        else {
            input.addEventListener('dblclick', function() {
                input.readOnly = false;
                input.focus();
            });
        }

        input.addEventListener('blur', function() {
            input.readOnly = true;
        });
        input.addEventListener('input', function(){
            save_table();
        });
    });
    
    update_btn_state();
    save_table();
}

function can_delete_row(row){
    for (let i = 0; i < row.cells.length; i++) {
        const cell = row.cells[i];
        const input = cell.querySelector('input');
        if(input.value != ''){
            return false;
        }
    }
    return true;
}

function can_delete_col(rows){
    for(let i = 0; i < rows.length; i++){
        let last_col = rows[i].lastElementChild;
        const input = last_col.querySelector('input');
        if (input.value != ''){
            return false;
        }
    }
    return true;
}

function delete_column() {
    let rows = Array.from(tbody.children);
    let permission = can_delete_col(rows);
    if (!permission) {
        const result = confirm('В удаляемом столбце есть данные! Всё равно удаляем?');
        if(result){
            rows.forEach(row =>{
                if (row.cells.length > 1) {
                    let last_child = row.lastElementChild;
                    row.removeChild(last_child);
                }
            })
        }
    }
    else {
        rows.forEach(row =>{
            if (row.cells.length > 1) {
                let last_child = row.lastElementChild;
                row.removeChild(last_child);
            }
        })
    }

    update_btn_state();
    save_table();
}

add_col.onclick = function() {
    add_column();
}

del_col.onclick = function() {
    delete_column();
}

function get_number_rows() {
    let massive_of_rows = Array.from(tbody.children);
    return massive_of_rows.length;
}

function add_new_row() {
    const new_row = document.createElement('tr');
    let number_of_cols = get_number_cols();

    for (let i=0; i < number_of_cols; i++) {
        const new_cell = document.createElement('td');
        const new_inp = document.createElement('input');
        new_inp.type = 'text';
        new_inp.placeholder = '1234';
        new_cell.appendChild(new_inp);
        new_row.appendChild(new_cell);
    }

    tbody.appendChild(new_row);
    
    const inputs = document.querySelectorAll('input');

    inputs.forEach(input => {
        input.readOnly = true;

        if (is_touch_device) {
            input.addEventListener('touchstart', function() {
                input.readOnly = false;
                input.focus();
            });
        }
        else {
            input.addEventListener('dblclick', function() {
                input.readOnly = false;
                input.focus();
            });
        }

        input.addEventListener('blur', function() {
            input.readOnly = true;
        });
        input.addEventListener('input', function(){
            save_table();
        });
    });

    update_btn_state();
    save_table();
}

function delete_row() {
    let last_row = tbody.lastElementChild;
    let permission = can_delete_row(last_row);
    if(!permission){
        const result = confirm('В удаляемой строке есть данные! Всё равно удаляем?');
        if(result){
            tbody.removeChild(last_row);
        }
    }
    else{
        tbody.removeChild(last_row);
    }
    update_btn_state();
    save_table();
}

add_row.onclick = function() {
    add_new_row();
}

del_row.onclick = function() {
    delete_row();
}

function save_table() {
    let data = [];
    let rows = document.querySelectorAll('tr');
    rows.forEach(row => {
        let data_in_row = [];
        let cols = row.querySelectorAll('td');
        cols.forEach(col => {
            const input = col.querySelector('input');
            data_in_row.push(input.value);
        });
        data.push(data_in_row);
    });
    let serial_obj = JSON.stringify(data);
    localStorage.setItem('user-table', serial_obj);
}

function load_table() {
    tbody.innerHTML = '';
    let return_table = JSON.parse(localStorage.getItem('user-table'));
    return_table.forEach(data_in_row => {
        const new_row = document.createElement('tr');
        data_in_row.forEach(col =>{
            const new_col = document.createElement('td');
            const new_input = document.createElement('input');
            new_input.type = 'text';
            new_input.value = col;
            new_input.placeholder = '1234';
            new_col.appendChild(new_input);
            new_row.appendChild(new_col);
        });
        tbody.appendChild(new_row);
    });
    update_btn_state();
}