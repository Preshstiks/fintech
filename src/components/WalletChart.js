import { Box, Text } from "@chakra-ui/react";
import React from "react";
import ReactApexChart from "react-apexcharts";

const WalletChart = () => {
  const chartData = {
    series: [
      {
        name: "Account Balance",
        data: [12500, 13200, 12800, 14500, 15200, 16800, 17500],
      },
      {
        name: "Savings",
        data: [8500, 9200, 9800, 10500, 11200, 11800, 12500],
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
      colors: ["#2563eb", "#10b981"],
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
    <Box
      boxShadow="sm"
      p={{ base: "30px", md: "40px" }}
      bgColor="white"
      borderRadius="20px"
      height="100%"
    >
      <Text
        fontFamily="medium"
        fontSize={{ base: "16px", md: "18px" }}
        mb={{ base: "24px", md: "30px" }}
      >
        Balance Statistics
      </Text>
      <Box pt={{ base: "10px", md: "15px" }}>
        <ReactApexChart
          options={chartData.options}
          series={chartData.series}
          type="area"
          height={300}
        />
      </Box>
    </Box>
  );
};

export default WalletChart;
