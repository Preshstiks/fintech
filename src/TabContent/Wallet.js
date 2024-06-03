import { Box, Card, Image, Progress, SimpleGrid, Text } from "@chakra-ui/react";
import { BsThreeDots } from "react-icons/bs";
import RadialChart from "../components/RadialChart";
import OverviewTable from "../components/OverviewTable";
import MasterCard from "../assets/icons/logo_14062982.png";
import { IoIosArrowDown } from "react-icons/io";
import WalletChart from "../components/WalletChart";
import WalletTable from "../components/WalletTable";

const Wallet = () => {
  return (
    <Box px={{ base: "5%", md: "5%" }} pb="40px">
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} mt={5} spacing={5}>
        <Card
          w="100%"
          borderRadius="12px"
          bgColor="rgba(255, 255, 255, 0.1)"
          boxShadow="0 4px 30px rgba(0, 0, 0, 0.1)"
          backdropFilter="blur(10px)"
          height="200px"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            height="50%"
            pt={6}
            px={6}
          >
            <Box>
              <Text fontSize="12px" color="gray.500">
                Name
              </Text>
              <Text fontWeight="semibold" pb={1} color="white" fontSize="18px">
                Kim Ji Won
              </Text>
            </Box>
            <Box>
              <Text fontSize="12px" color="gray.500">
                Number
              </Text>
              <Text fontWeight="semibold" pb={1} color="white" fontSize="18px">
                **** **** **** 7253
              </Text>
            </Box>
          </Box>
          <Box
            justifyContent="space-between"
            bgColor="white"
            height="50%"
            borderBottomRadius="12px"
            pt={5}
            px={6}
            display="flex"
          >
            <Box>
              <Text fontSize="12px" color="gray.500">
                Balance
              </Text>
              <Text fontWeight="semibold" pb={1} color="black" fontSize="25px">
                $20,546.00
              </Text>
            </Box>
            <Box>
              <Image
                src={MasterCard}
                width="50px"
                height="50px"
                alt="mastercard"
              />
            </Box>
          </Box>
        </Card>
        <Card
          w="100%"
          borderRadius="12px"
          bgColor="rgba(255, 255, 255, 0.1)"
          boxShadow="0 4px 30px rgba(0, 0, 0, 0.1)"
          backdropFilter="blur(10px)"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            height="50%"
            pt={6}
            px={6}
          >
            <Box>
              <Text fontSize="12px" color="gray.500">
                Name
              </Text>
              <Text fontWeight="semibold" pb={1} color="white" fontSize="18px">
                Jim Smith
              </Text>
            </Box>
            <Box>
              <Text fontSize="12px" color="gray.500">
                Number
              </Text>
              <Text fontWeight="semibold" pb={1} color="white" fontSize="18px">
                **** **** **** 5532
              </Text>
            </Box>
          </Box>
          <Box
            justifyContent="space-between"
            bgColor="white"
            height="50%"
            borderBottomRadius="12px"
            pt={5}
            px={6}
            display="flex"
          >
            <Box>
              <Text fontSize="12px" color="gray.500">
                Balance
              </Text>
              <Text fontWeight="semibold" pb={1} color="black" fontSize="25px">
                $31,746.00
              </Text>
            </Box>
            <Box>
              <Image
                src={MasterCard}
                width="50px"
                height="50px"
                alt="mastercard"
              />
            </Box>
          </Box>
        </Card>
        <Card
          w="100%"
          borderRadius="12px"
          bgColor="rgba(255, 255, 255, 0.1)"
          boxShadow="0 4px 30px rgba(0, 0, 0, 0.1)"
          backdropFilter="blur(10px)"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            height="50%"
            pt={6}
            px={6}
          >
            <Box>
              <Text fontSize="12px" color="gray.500">
                Name
              </Text>
              <Text fontWeight="semibold" pb={1} color="white" fontSize="18px">
                Ryan Daniels
              </Text>
            </Box>
            <Box>
              <Text fontSize="12px" color="gray.500">
                Number
              </Text>
              <Text fontWeight="semibold" pb={1} color="white" fontSize="18px">
                **** **** **** 3106
              </Text>
            </Box>
          </Box>
          <Box
            justifyContent="space-between"
            bgColor="white"
            height="50%"
            borderBottomRadius="12px"
            pt={5}
            px={6}
            display="flex"
          >
            <Box>
              <Text fontSize="12px" color="gray.500">
                Balance
              </Text>
              <Text fontWeight="semibold" pb={1} color="black" fontSize="25px">
                $20,442.00
              </Text>
            </Box>
            <Box>
              <Image
                src={MasterCard}
                width="50px"
                height="50px"
                alt="mastercard"
              />
            </Box>
          </Box>
        </Card>
      </SimpleGrid>
      <Box
        mt="20px"
        display={{ base: "block", md: "grid" }}
        gridTemplateColumns={{ md: "1fr 1fr" }}
        gap={5}
      >
        <Card boxShadow="sm">
          <Box display="flex" justifyContent="space-between" p={6}>
            <Text fontWeight="semibold">Card Details</Text>
            <BsThreeDots />
          </Box>
          <Box
            display="flex"
            justifyContent="space-between"
            bgColor="gray.100"
            p={4}
            mx={6}
            mb={6}
            borderRadius="9px"
          >
            <Box>
              <Text fontSize="12px" textTransform="uppercase" color="gray.500">
                Number
              </Text>
              <Text fontWeight="medium" pb={1} color="black" fontSize="16px">
                **** **** **** 1132
              </Text>
            </Box>
            <Box>
              <Text fontSize="12px" textTransform="uppercase" color="gray.500">
                Expire Date
              </Text>
              <Text fontWeight="medium" pb={1} color="black" fontSize="16px">
                08/27
              </Text>
            </Box>
            <Box>
              <Text fontSize="12px" textTransform="uppercase" color="gray.500">
                CVV
              </Text>
              <Text fontWeight="medium" pb={1} color="black" fontSize="16px">
                ***
              </Text>
            </Box>
            <Box>
              <Text fontSize="12px" textTransform="uppercase" color="gray.500">
                Status
              </Text>
              <Text fontWeight="medium" pb={1} color="black" fontSize="16px">
                Active
              </Text>
            </Box>
          </Box>
        </Card>
        <Card boxShadow="sm">
          <Box display="flex" justifyContent="space-between" p={6}>
            <Text fontWeight="semibold" color="gray.500">
              Card Limit
            </Text>
            <Box
              display="flex"
              alignItems="center"
              gap={2}
              border="1px"
              borderColor="gray.300"
              p="6px"
              borderRadius="5px"
              cursor="pointer"
            >
              <Text fontSize="14px">Monthly</Text>
              <IoIosArrowDown size={14} />
            </Box>
          </Box>
          <Box px={6}>
            <Box display="flex" alignItems="center" gap={3} pb={3}>
              <Text fontWeight="semibold" color="black" fontSize="25px">
                $14,567.90
              </Text>
              <Text fontSize="14px" color="gray.500">
                Used from $20,909.65
              </Text>
            </Box>
            <Box width="100%" display="flex" gap={3}>
              <Box
                borderRadius="100px"
                height="10px"
                width="45%"
                bgColor="#216CFA"
              ></Box>
              <Box
                borderRadius="100px"
                height="10px"
                width="20%"
                bgColor="#F37E7F"
              ></Box>
              <Box
                borderRadius="100px"
                height="10px"
                width="35%"
                bgColor="#29C6FC"
              ></Box>
            </Box>
          </Box>
        </Card>
      </Box>
      <Box
        mt="20px"
        display={{ base: "block", md: "grid" }}
        width="100%"
        gridTemplateColumns={{ md: "1fr 1fr" }}
        gap={5}
      >
        <Box mt={{ base: "20px", md: "0" }} gridColumn={{ md: "1" }}>
          <WalletChart />
        </Box>
        <Box mt={{ base: "20px", md: "0" }} gridColumn={{ md: "2 / 3" }}>
          <WalletTable />
        </Box>
      </Box>
    </Box>
  );
};

export default Wallet;
