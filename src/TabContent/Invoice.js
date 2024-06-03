import { Box, Card, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { HiSquare3Stack3D } from "react-icons/hi2";
import { PiNotepadFill } from "react-icons/pi";
import ChartIcon from "../assets/icons/chartIcon.png";
import { FaHandHoldingUsd } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import InvoiceTable from "../components/InvoiceTable";

const Invoice = () => {
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
            <Box display="flex" gap={3} alignItems="center">
              <Text
                color="blue.color"
                p={2}
                borderRadius="8px"
                className="wallet"
              >
                <HiSquare3Stack3D size={25} />
              </Text>
              <Text fontSize="16px" fontWeight="light" color="gray.500">
                CLIENT
              </Text>
            </Box>
            <BsThreeDots size={20} />
          </Box>
          <Box
            pt="20px"
            display="flex"
            justifyContent="space-between"
            alignItems="end"
          >
            <Box>
              <Text fontWeight="bold" pb={1} fontSize="23px">
                4295
              </Text>
            </Box>
            <Image
              src={ChartIcon}
              style={{
                height: "80px",
                width: "80px",
              }}
              height={60}
              width={60}
            />
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
            <Box display="flex" gap={3} alignItems="center">
              <Text
                color="green.color"
                p={2}
                borderRadius="8px"
                className="money"
              >
                <PiNotepadFill size={25} />
              </Text>
              <Text fontSize="16px" fontWeight="light" color="gray.500">
                INVOICES
              </Text>
            </Box>
            <BsThreeDots size={20} />
          </Box>
          <Box
            pt="20px"
            display="flex"
            justifyContent="space-between"
            alignItems="end"
          >
            <Box>
              <Text fontWeight="bold" pb={1} fontSize="23px">
                2432
              </Text>
            </Box>
            <Image
              src={ChartIcon}
              style={{
                height: "80px",
                width: "80px",
              }}
              height={60}
              width={60}
            />
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
            <Box display="flex" gap={3} alignItems="center">
              <Text
                color="pitch.color"
                p={2}
                borderRadius="8px"
                className="spend"
              >
                <FaHandHoldingUsd size={25} />
              </Text>
              <Text fontSize="16px" fontWeight="light" color="gray.500">
                PAID
              </Text>
            </Box>
            <BsThreeDots size={20} />
          </Box>
          <Box
            pt="20px"
            display="flex"
            justifyContent="space-between"
            alignItems="end"
          >
            <Box>
              <Text fontWeight="bold" pb={1} fontSize="23px">
                $48.90k
              </Text>
            </Box>
            <Image
              src={ChartIcon}
              style={{
                height: "80px",
                width: "80px",
              }}
              height={60}
              width={60}
            />
          </Box>
        </Card>
      </SimpleGrid>
      <InvoiceTable />
    </Box>
  );
};

export default Invoice;
