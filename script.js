var monthlyPrices = [-2000, -500, 1200, 3000, 3050, 2800, 4500];

var ctx = document.getElementById('chart1').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'Total revenue',
            backgroundColor: 'rgb(125, 176, 190)',
            borderColor: 'rgb(0, 0, 0)',
            data: monthlyPrices
        }]
    },

    // Configuration options go here
    options: {}
});
