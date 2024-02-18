import React, { useEffect } from 'react';

function PlotComponent({ plotDiv }) {
    useEffect(() => {
        document.getElementById('plotly-plot').innerHTML = plotDiv;
    }, [plotDiv]);

    return (
        <div id="plotly-plot"></div>
    );
}

export default PlotComponent;
