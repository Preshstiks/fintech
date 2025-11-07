import { Box, Flex, SimpleGrid, Stack, Text, Heading } from "@chakra-ui/react";
import ReactApexChart from "react-apexcharts";

const Report = () => {
  const kpis = [
    { label: "Total Revenue", value: "$84,230", change: "+12.4%" },
    { label: "Monthly Spend", value: "$5,120", change: "-3.1%" },
    { label: "Active Subscriptions", value: "1,284", change: "+2.7%" },
    { label: "Refunds", value: "$432", change: "+0.6%" },
  ];

  const lineSeries = [
    {
      name: "Revenue",
      data: [12, 14, 18, 22, 20, 27, 30, 33, 32, 36, 40, 44],
    },
    {
      name: "Expenses",
      data: [7, 9, 11, 13, 12, 15, 17, 18, 19, 21, 23, 25],
    },
  ];

  const lineOptions = {
    chart: { toolbar: { show: false }, zoom: { enabled: false } },
    stroke: { width: 3, curve: "smooth" },
    dataLabels: { enabled: false },
    legend: { show: true },
    grid: { borderColor: "#f1f5f9" },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    yaxis: { labels: { style: { colors: "#64748b" } } },
    colors: ["#2563eb", "#f59e0b"],
  };

  const donutSeries = [56, 29, 15];
  const donutOptions = {
    labels: ["Subscriptions", "One‑time", "Refunds"],
    legend: { show: true, position: "bottom" },
    colors: ["#2563eb", "#10b981", "#ef4444"],
    stroke: { colors: ["#ffffff"] },
    dataLabels: { enabled: false },
  };

  return (
    <Box
      px={{ base: "5%", md: "5%" }}
      mt={"150px"}
      pb={{ base: "30px", md: "40px" }}
    >
      <SimpleGrid
        columns={{ base: 1, md: 4 }}
        spacing={5}
        mb={{ base: 5, md: 6 }}
      >
        {kpis.map((kpi) => (
          <Box
            key={kpi.label}
            bg="white"
            borderRadius="16px"
            boxShadow="sm"
            p={{ base: 4, md: 5 }}
            border="1px solid"
            borderColor="gray.100"
          >
            <Text fontFamily="light" fontSize={12} color="gray.500">
              {kpi.label}
            </Text>
            <Flex align="baseline" justify="space-between" mt={1}>
              <Text fontFamily="semibold" fontSize={22}>
                {kpi.value}
              </Text>
              <Text
                fontFamily="medium"
                fontSize={12}
                color={kpi.change.startsWith("-") ? "red.500" : "green.500"}
              >
                {kpi.change}
              </Text>
            </Flex>
          </Box>
        ))}
      </SimpleGrid>

      <SimpleGrid columns={{ base: 1, lg: 3 }} spacing={5}>
        <Box
          gridColumn={{ base: "span 1", lg: "span 2" }}
          bg="white"
          borderRadius="16px"
          boxShadow="sm"
          p={{ base: 4, md: 5 }}
        >
          <Stack spacing={1} mb={2}>
            <Heading fontSize={{ base: "18px", md: "20px" }}>
              Revenue vs Expenses
            </Heading>
            <Text fontFamily="light" fontSize={12} color="gray.500">
              Last 12 months
            </Text>
          </Stack>
          <Box>
            <ReactApexChart
              options={lineOptions}
              series={lineSeries}
              type="line"
              height={300}
            />
          </Box>
        </Box>

        <Box
          bg="white"
          borderRadius="16px"
          boxShadow="sm"
          p={{ base: 4, md: 5 }}
        >
          <Stack spacing={1} mb={2}>
            <Heading fontSize={{ base: "18px", md: "20px" }}>
              Revenue Breakdown
            </Heading>
            <Text fontFamily="light" fontSize={12} color="gray.500">
              By type
            </Text>
          </Stack>
          <Box>
            <ReactApexChart
              options={donutOptions}
              series={donutSeries}
              type="donut"
              height={300}
            />
          </Box>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default Report;
