

function createChart(d)
{
    const ctx = document.getElementById('myChart1');

    if (window.myChart != null) {
        window.myChart.destroy();
    }

    window.myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: [0],
            datasets: [{
                borderColor: 'rgb(75, 192, 192)',
                borderWidth: 1,
                radius: 1,
                data: d,
            }]
        }
    });
}

function updateChart(time, value) {
    window.myChart.data.labels.push(time);
    window.myChart.data.datasets[0].data.push(value);
    window.myChart.update();
}