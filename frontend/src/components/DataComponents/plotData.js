// plotData.js
import React, { useState, useEffect } from 'react';
import Plot from 'plotly.js'

const PlotData = (data) => {
  const [plotData, setPlotData] = useState([]);

  useEffect(() => {
    const trace = {
      x: data.map((d) => d.x),
      y: data.map((d) => d.y),
      type: 'scatter',
    };

    const layout = {
      title: 'Plot of Data',
      xaxis: {
        title: 'X Axis',
      },
      yaxis: {
        title: 'Y Axis',
      },
    };

    setPlotData([trace]);
  }, [data]);

  return (
    <Plot
      data={plotData}
      layout={layout}
      useResizeHandler
      style={{ width: '100%', height: '400px' }}
    />
  );
};

export default PlotData;