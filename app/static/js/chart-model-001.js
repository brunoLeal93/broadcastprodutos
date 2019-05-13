var chartData = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [{
        data: [12, 19, -3, 5, -20, 3],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1,
    }]
  };
var chartTitle = {
    display: true,
    text: 'Índice Bovespa',
    fontSize: 24,
    position: 'top',
    padding: 20,
    fontColor: '#ccc'
};
var chartPlugins = {
    chartJsPluginSubtitle: {
        display: true,
        text:	'Altas & Baixas',
    },
};

var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: chartData,
    options:{
        maintainAspectRatio: false,
        legend:{
            display: false,
            position: 'top'
        },
        scales: {
            yAxes: [{
                    ticks: {
                        callback: function(value, index, values) {
                            return value + '%';
                            },
                        beginAtZero: true,
                        fontColor: "#fff"
                    },
                    gridLines:{
                        color: "#333",
                        lineWidth:1,
                        zeroLineColor :"#333",
                        zeroLineWidth : 2
                    },
            }],
            xAxes: [{
                ticks: {
                beginAtZero: true,
                fontColor: "#fff"
            },
                gridLines:{
                    color: "#333",
                    lineWidth:1,
                    zeroLineColor :"#333",
                    zeroLineWidth : 2
                }
            }]
        },
        title: chartTitle,
        plugins: chartPlugins
    }
});

document.getElementById('changeToBarVertical').onclick = function() {
    myChart.destroy();
    myChart = new Chart(ctx, {
      type: 'bar',
      data: chartData,
      options:{
        maintainAspectRatio: false,
          legend:{
              display: false,
              position: 'top'
          },
          scales: {
              yAxes: [{
                      ticks: {
                      callback: function(value, index, values) {
                          return value + '%';
                      },
                      beginAtZero: true
                  },
                  gridLines:{
                      color: "#333",
                      lineWidth:1,
                      zeroLineColor :"#333",
                      zeroLineWidth : 2
                  },
              }],
              xAxes: [{
                  gridLines:{
                      color: "#333",
                      lineWidth:1,
                      zeroLineColor :"#333",
                      zeroLineWidth : 2
                  }
              }]
          },
          title: chartTitle,
          plugins: chartPlugins
      }
    });
  };

document.getElementById('changeToBarHorizontal').onclick = function() {
    myChart.destroy();
    myChart = new Chart(ctx, {
      type: 'horizontalBar',
      data: chartData,
      options:{
        maintainAspectRatio: false,
          legend:{
              display: false,
              position: 'top'
          },
          scales: {
            gridLines:{
                color: "#333",
                lineWidth:1,
                zeroLineColor :"#333",
                zeroLineWidth : 2
            },
              xAxes: [{
                ticks: {
                callback: function(value, index, values) {
                    return value + '%';
                },
                beginAtZero: true
            },
                  gridLines:{
                      color: "#333",
                      lineWidth:1,
                      zeroLineColor :"#333",
                      zeroLineWidth : 2
                  }
              }]
          },
          title: chartTitle,
          plugins: chartPlugins
      }
    });
  };