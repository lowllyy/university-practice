const line_graph = document.getElementById('line_graph');
const num_req = document.getElementById('requests');
const percent_errors = document.getElementById('errors');
const number_errors = document.getElementById('number_errors');

let dataset = [];
let labels_x = [];

setInterval( () => fetch('http://localhost:3000/cpu')
    .then(res => res.text())
    .then(text => {
        dataset = creating_dataset(text);
        labels_x = create_labels();
        requests.textContent = labels_x.length;
        create_graph(dataset, labels_x);
  }), 5000)

let data = [];
let percent = 0;
let counter_errors = 0;

function creating_dataset(elem){
    let num_elem = Number(elem);

    if (num_elem !=0){
        data.push(num_elem);
    }
    else {
        counter_errors++;
        num_elem = data[data.length-1];
        data.push(num_elem);
    }

    percent = ((counter_errors*100)/data.length).toFixed(4);
    number_errors.textContent = counter_errors;
    percent_errors.textContent = percent;

    return data;
};

let labels = [];
let counter = 0;

function create_labels (){
    counter+=5;
    let str_counter = counter.toString();
    labels.push(str_counter);
    return labels;
};

let chart = null;

function create_graph(dataset, massive_labels){
    if(chart){
        chart.destroy();
    }
    chart = new Chart(line_graph, {
        type: 'line',
        data: {
            labels: massive_labels,
            datasets: [{
                label: '% of CPU usage',
                data: dataset,
                fill: false,
                borderColor: 'rgb(91, 239, 210)'
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        stepSize: 5
                    },
                    title: {
                        display:true,
                        text: 'CPU usage, %'
                    }
                },
                x: {
                  title: {
                    display:true,
                    text: 'Time, seconds'
                    }  
                }
            }
        }
    })
};