import { Box, Card, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { BiSolidWalletAlt } from "react-icons/bi";
import Icon from "../assets/chart.png";
import { FaSackDollar } from "react-icons/fa6";
import { ImUpload2 } from "react-icons/im";
import ChartComponent from "../components/Chart";
import RadialChart from "../components/RadialChart";
import OverviewTable from "../components/OverviewTable";
const Overview = () => {
  return (
    <Box px={{ base: "5%", md: "5%" }} pb="40px">
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={5}>
        <Card
          w="100%"
          borderRadius="12px"
          bgColor="white"
          boxShadow="sm"
          p="25px"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            pb="20px"
          >
            <Box>
              <Text fontWeight="semibold" pb={1} fontSize="18px">
                Total Balance
              </Text>
              <Text fontSize="12px" color="gray.500">
                2 July - 24 September 2023
              </Text>
            </Box>
            <Text
              color="blue.color"
              p={2}
              borderRadius="8px"
              className="wallet"
            >
              <BiSolidWalletAlt size={25} />
            </Text>
          </Box>
          <Box
            pt="20px"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Text fontWeight="semibold" pb={1} fontSize="18px">
                $982,000.00
              </Text>
              <Text fontSize="12px" color="blue.500" fontFamily="medium">
                +16% Last Year
              </Text>
            </Box>
            <Image src={Icon} height={50} width={50} />
          </Box>
        </Card>
        <Card
          w="100%"
          borderRadius="12px"
          bgColor="white"
          boxShadow="sm"
          p="25px"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            pb="20px"
          >
            <Box>
              <Text fontWeight="semibold" pb={1} fontSize="18px">
                Total Income
              </Text>
              <Text fontSize="12px" color="gray.500">
                9 July - 24 September 2023
              </Text>
            </Box>
            <Text
              color="green.color"
              p={2}
              borderRadius="8px"
              className="money"
            >
              <FaSackDollar size={25} />
            </Text>
          </Box>
          <Box
            pt="20px"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Text fontWeight="semibold" pb={1} fontSize="18px">
                $854,348.00
              </Text>
              <Text fontSize="12px" color="green.color" fontFamily="medium">
                +12% Last Month
              </Text>
            </Box>
            <Image src={Icon} height={50} width={50} />
          </Box>
        </Card>
        <Card
          w="100%"
          borderRadius="12px"
          bgColor="white"
          boxShadow="sm"
          p="25px"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            pb="20px"
          >
            <Box>
              <Text fontWeight="semibold" pb={1} fontSize="18px">
                Total Spending
              </Text>
              <Text fontSize="12px" color="gray.500">
                24 July - 24 September 2023
              </Text>
            </Box>
            <Text
              color="pitch.color"
              p={2}
              borderRadius="8px"
              className="spend"
            >
              <ImUpload2 size={25} />
            </Text>
          </Box>
          <Box
            pt="20px"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Text fontWeight="semibold" pb={1} fontSize="18px">
                $982,000.00
              </Text>
              <Text fontSize="12px" color="pitch.color" fontFamily="medium">
                -10% Last Year
              </Text>
            </Box>
            <Image src={Icon} height={50} width={50} />
          </Box>
        </Card>
      </SimpleGrid>
      <Box
        mt="20px"
        display={{ base: "block", md: "grid" }}
        gridTemplateColumns={{ md: "1fr 1fr" }}
        gap={5}
      >
        <ChartComponent />
        <Box mt={{ base: "20px", md: "0" }}>
          <RadialChart />
        </Box>
      </Box>
      <OverviewTable />
    </Box>
  );
};

export default Overview;
