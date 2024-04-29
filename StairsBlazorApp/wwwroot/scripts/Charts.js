

function createChart(d)
{
    const ctx = document.getElementById('myChart1');

    if (window.myChart != null) {
        window.myChart.destroy();
    }

    window.myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: [1,2,3,4,5,6,7,8,9,10],
            datasets: [{
                borderColor: 'rgb(75, 192, 192)',
                borderWidth: 1,
                radius: 1,
                data: d,
            }]
        }
    });
}

function updateChart(d) {
    window.myChart.data.datasets[0].data[0] = d;
    window.myChart.update();
}