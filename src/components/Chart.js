import { Box, Text } from "@chakra-ui/react";
import React from "react";
import ReactApexChart from "react-apexcharts";

const ChartComponent = () => {
  const chartData = {
    series: [
      {
        name: "Total Income",
        data: [4200, 4350, 4100, 4500, 4650, 4800, 4950],
      },
      {
        name: "Total Spending",
        data: [2800, 2950, 3100, 2900, 3050, 3200, 3150],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "area",
        zoom: {
          enabled: false,
        },
        pan: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        width: 3,
      },
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.7,
          opacityTo: 0.3,
          stops: [0, 90, 100],
        },
      },
      colors: ["#2563eb", "#f59e0b"],
      legend: {
        show: true,
        position: "top",
        horizontalAlign: "right",
      },
      yaxis: {
        labels: {
          formatter: function (val) {
            return "$" + (val / 1000).toFixed(1) + "k";
          },
        },
        tickAmount: 5,
      },
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      grid: {
        borderColor: "#f1f5f9",
        strokeDashArray: 4,
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return "$" + val.toLocaleString();
          },
        },
      },
    },
  };

  return (
    <Box boxShadow="sm" p="30px" bgColor="white" borderRadius="20px">
      <Text fontFamily="medium">Balance Overview</Text>
      <div
        style={{
          paddingTop: "20px",
        }}
      >
        <div id="chart">
          <ReactApexChart
            options={chartData.options}
            series={chartData.series}
            type="area"
            height={250}
          />
        </div>
      </div>
    </Box>
  );
};

export default ChartComponent;
