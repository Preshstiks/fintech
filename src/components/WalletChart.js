import { Box, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const WalletChart = () => {
  const chartData = {
    series: [
      {
        name: "Total Income",
        data: [31, 40, 28, 51, 42, 109, 100],
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
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        width: 2,
      },
      yaxis: {
        tickAmount: 5,
      },
      xaxis: {
        type: "month",
        categories: ["Jan", "Feb", "Mar", "April", "May", "Jun", "Jul"],
      },
      toolbar: {
        show: false,
      },
    },
  };

  return (
    <Box boxShadow="sm" p="30px" bgColor="white" borderRadius="20px">
      <Text fontFamily="medium">Balance Statistics</Text>
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

export default WalletChart;
