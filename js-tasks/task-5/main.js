const table = document.getElementById('table');
const tbody = table.querySelector('tbody');

const add_col = document.getElementById('add-col');
const del_col = document.getElementById('del-col');

const add_row = document.getElementById('add-row');
const del_row = document.getElementById('del-row');

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

update_btn_state();

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
    update_btn_state();
}

function delete_column() {
    let rows = Array.from(tbody.children);
    rows.forEach(row =>{
        if (row.cells.length > 1) {
            let last_child = row.lastElementChild;
            row.removeChild(last_child);
        }
    })
    update_btn_state();
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
    update_btn_state();
}

function delete_row() {
    let last_row = tbody.lastElementChild;
    tbody.removeChild(last_row);
    update_btn_state();
}

add_row.onclick = function() {
    add_new_row();
}

del_row.onclick = function() {
    delete_row();
}