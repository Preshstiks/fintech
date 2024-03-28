import { Box, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const RadialChart = () => {
  const [options] = useState({
    series: [60, 80, 70],
    chart: {
      height: 0,
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            fontSize: "2px",
          },
          value: {
            fontSize: "10px",
          },
          total: {
            show: true,
            label: "Total Spending",
            formatter: function (w) {
              const total = w.globals.series.reduce((acc, cur) => acc + cur, 0);
              return "$" + total;
            },
          },
        },
      },
    },

    labels: ["Workspace", "Employee Salary", "Shopping "],
  });

  return (
    <Box boxShadow="sm" bgColor="white" p="30px" borderRadius="20px">
      <Text fontFamily="medium">All Spending</Text>
      <Box display="flex" pt="24px">
        <Box borderRight="2px" borderColor="gray.400" pr="15px">
          <Text color="#636363" fontWeight="regular" fontSize="12px">
            Weekly
          </Text>
          <Text fontSize="14px" fontWeight="semibold">
            $874.00
          </Text>
        </Box>
        <Box borderRight="2px" borderColor="gray.400" px="15px">
          <Text color="#636363" fontWeight="regular" fontSize="12px">
            Monthly
          </Text>
          <Text fontSize="14px" fontWeight="semibold">
            $8,985.00
          </Text>
        </Box>
        <Box pl="15px">
          <Text color="#636363" fontWeight="regular" fontSize="12px">
            Yearly
          </Text>
          <Text fontSize="14px" fontWeight="semibold">
            $28,958.00
          </Text>
        </Box>
      </Box>
      <div
        id="chart"
        style={{
          paddingTop: "44px",
        }}
      >
        <ReactApexChart
          options={options}
          series={options.series}
          type="radialBar"
          height={200}
        />
      </div>
    </Box>
  );
};

export default RadialChart;
