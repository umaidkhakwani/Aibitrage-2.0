import React, { useState } from 'react';
import Chart from 'react-apexcharts';

const MultiLayeredPieChart = () => {
  const [options, setOptions] = useState({
    plotOptions: {
      pie: {
        size: '60%',
        donut: {
          size: '85%',
        },
      },
    },
  });

  const [series, setSeries] = useState([
    {
      name: 'Layer A',
      data: [44],
    },
    {
      name: 'Layer B',
      data: [55],
    },
    {
      name: 'Layer C',
      data: [41],
    },
    {
      name: 'Layer D',
      data: [17],
    },
    {
      name: 'Layer E',
      data: [15],
    },
  ]);

  return (
    <div className="donut">
      <Chart options={options} series={series} type="donut" width="380" />
    </div>
  );
};

export default MultiLayeredPieChart;
