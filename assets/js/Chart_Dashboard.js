$(function () {
  var costData = {
    labels: ["PM", "Service"],
    datasets: [
      {
        data: [200, 150],
        backgroundColor: ["#c02323","#eabd3b"],
        hoverBackgroundColor: ["#c02323","#eabd3b"],
      },
    ],
  };
    
  var problemData = {
    labels: ["ระบบไฟฟ้า", "ระบบลม", "ระบบกลไก", "อุปกรณ์ไฟฟ้า", "ข้อบกพร่องบุคคล","Heater", "Other"],
    datasets: [
      {
        data: [34, 23, 12, 16, 5, 9,1],
        backgroundColor: ["#142459","#176BA0","#19AADE","#1AC9E6","#1BD4D4","#1DE4BD","#C7F9EE"],
        hoverBackgroundColor: ["#142459","#176BA0","#19AADE","#1AC9E6","#1BD4D4","#1DE4BD","#C7F9EE"],
      },
    ],
  };
    
  var timeData = {
    labels: ["16+ ปี", "11 - 15 ปี", "0 - 10 ปี"],
    datasets: [
      {
        data: [34, 23, 12],
        backgroundColor: ["#AF4BCE","#EB548C","#EA7369"],
        hoverBackgroundColor: ["#AF4BCE","#EB548C","#EA7369"],
      },
    ],
  };
    
  const getTotalChart = (Chart) => {
	var sum = Chart.config.data.datasets[0].data.reduce((a, b) => a + b, 0);
	return sum;
  }
  const getTotalCtx = (ctx) => {
	var sum = ctx.chart.data.datasets[0].data.reduce((a, b) => a + b, 0);
	return sum;
  }

  const options = {
    responsive: true,
    rotation: 270,
    borderWidth: 0,
    layout:{
        padding:45
    },
    plugins: {
      legend: {
        display: false,
      },
      datalabels: {
          display:true,
          color: '#404040',
          labels: {
            index: {
              font: {
                size: '12px'
              },
              formatter: (val, ctx) => ctx.chart.data.labels[ctx.dataIndex],
              align: 'end',
              anchor: 'end',
            },
            value: {
              weight: 'bold',
              color: '#fff',
              formatter: (val, ctx) => (val/getTotalCtx(ctx) <= 0.05) ? null : val
            }
          }
      },
      doughnutlabel: {
        labels: [
          {
            text: getTotalChart,
            font: {
              size: 16,
              weight: 'bold',
            },
          },
          {
            text: 'total',
          },
        ],
      },
    }
  };
    

  
  const config = (data) => {
    return {
      type: "doughnut",
      data: data,
      options: options,
      plugins:[ChartDataLabels,DoughnutLabel]
    }
  };

  // สร้างกราฟแบบ Doughnut ใน canvas
  var costCtx = $("#chart_cost")[0].getContext('2d');
    // document.getElementById("chart_cost").getContext("2d");
  var costChart = new Chart(costCtx, config(costData));
    
  var problemCtx = $("#chart_problem")[0].getContext("2d");
  var problemChart = new Chart(problemCtx, config(problemData));
  var timeCtx = $("#chart_time")[0].getContext("2d");
  var timeChart = new Chart(timeCtx, config(timeData));
});
