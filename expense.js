const ctx = document.getElementById('canvas').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'],
        datasets: [{
            data: [17.45, 34.91, 52.36, 31.07, 23.39, 43.28, 25.48],
            backgroundColor: [
                ' hsl(10, 79%, 65%)',
                ' hsl(10, 79%, 65%)',
                'hsl(186, 34%, 60%)',
                ' hsl(10, 79%, 65%)',
                ' hsl(10, 79%, 65%)',
                ' hsl(10, 79%, 65%)',
                ' hsl(10, 79%, 65%)'
            ],
            borderRadius: 6
        }]
    },
    options: {
         plugins: {
        legend: {
            display: false
        }
},
        scales: {
           
            y: {
                beginAtZero: true,
                 ticks: {
                    display: false,
                },
                grid: {
                  display: false,
                  drawTicks: false,
                
               }

            },
             x: {
               grid: {
                  display: false,
               },
               ticks: {
                    display: false
            },
           
          }
        }
      }
});