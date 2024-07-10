
import ReactApexChart from 'react-apexcharts';

const ChartComponent = () => {
    const series = [
        {
            name: 'Stock',
            data: [10, 41, 35, 51, 49, 62,]
        },
        {
            name: 'Online',
            data: [23, 42, 35, 27, 43, 22,]
        }
    ];

    const options = {
        chart: {
            type: 'area',
            height: 300,
            foreColor: '#ccc',
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May']
        },
        colors: ['#FB9E3E', '#9A52DA'],
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.7,
                opacityTo: 0.9,
                stops: [0, 90, 100]
            }
        },
        markers: {
            size: 5,
            colors: ['#FB9E3E', '#9A52DA'],
            strokeColor: '#fff',
            strokeWidth: 2
        },
        tooltip: {
            theme: 'dark'
        }
    };

    return (
        <div id="chart">
            <ReactApexChart options={options} series={series} type="area" height={300} />
        </div>
    );
};

export default ChartComponent;
