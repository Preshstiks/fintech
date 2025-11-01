import {
  Box,
  Input,
  InputGroup,
  InputRightElement,
  SimpleGrid,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import {
  PiPiggyBank,
  PiTrendUp,
  PiClockClockwise,
  PiCalculator,
  PiReceipt,
  PiBookOpen,
  PiBuildings,
  PiHeadset,
} from "react-icons/pi";
const Help = () => {
  const iconSize = useBreakpointValue({ base: 18, md: 20 });
  return (
    <>
      <Box
        mt={"150px"}
        px={{ base: "4%", md: "5%" }}
        pb={{ base: "30px", md: "40px" }}
      >
        <Text
          fontFamily="semibold"
          textAlign="center"
          fontSize={{ base: 20, md: 25 }}
        >
          Hi, How can we help you?
        </Text>
        <Text
          fontFamily="light"
          textAlign="center"
          mt={2}
          color="gray.500"
          fontSize={{ base: 12, md: 14 }}
          px={{ base: 4, md: 0 }}
        >
          Got a question about your finance situation? We're here to help.
        </Text>
        <Box
          flexDirection="row"
          justifyItems="center"
          display="flex"
          justifyContent="center"
          mt={6}
        >
          <InputGroup width="100%" maxWidth={{ base: "100%", sm: "350px" }}>
            <InputRightElement
              pointerEvents="none"
              bg="blue.color"
              mt="5px"
              mr="5px"
              borderRadius="10px"
            >
              <BsSearch color="white" />
            </InputRightElement>
            <Input
              type="tel"
              borderRadius="10px"
              py={6}
              placeholder="Search for article"
              fontSize={{ base: 11, md: 12 }}
            />
          </InputGroup>
        </Box>
        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 3, lg: 4 }}
          gap={{ base: 4, md: 5 }}
          mt={{ base: 8, md: 10 }}
        >
          <Box
            border="2px solid"
            borderColor="blue.color"
            borderRadius="10px"
            p={{ base: 4, md: 5 }}
            w="100%"
            h="100%"
          >
            <Box
              bg="#ececf3"
              display="inline-flex"
              p={{ base: 2.5, md: 3 }}
              mb={3}
              borderRadius="100%"
            >
              <PiPiggyBank color="#191C6C" size={iconSize} />
            </Box>
            <Box>
              <Text fontFamily="medium" mb={2} fontSize={{ base: 13, md: 14 }}>
                Personal Finance
              </Text>
              <Text
                fontFamily="regular"
                color="gray.500"
                fontSize={{ base: 9, md: 10 }}
                lineHeight={{ base: 1.4, md: 1.5 }}
              >
                We offer tips and advice on budgeting, saving money and reducing
                debt.
              </Text>
            </Box>
          </Box>
          <Box
            border="1px solid #ececf3"
            borderRadius="10px"
            w="100%"
            h="100%"
            p={{ base: 4, md: 4 }}
          >
            <Box
              bg="#ececf3"
              display="inline-flex"
              p={{ base: 2.5, md: 3 }}
              mb={3}
              borderRadius="100%"
            >
              <PiTrendUp color="#191C6C" size={iconSize} />
            </Box>
            <Box>
              <Text fontFamily="medium" mb={2} fontSize={{ base: 13, md: 14 }}>
                Investment Guidance
              </Text>
              <Text
                fontFamily="regular"
                color="gray.500"
                fontSize={{ base: 9, md: 10 }}
                lineHeight={{ base: 1.4, md: 1.5 }}
              >
                Understand different investment options such as stocks, bonds,
                mutual funds and real estate.
              </Text>
            </Box>
          </Box>
          <Box
            border="1px solid #ececf3"
            borderRadius="10px"
            p={{ base: 4, md: 4 }}
            w="100%"
            h="100%"
          >
            <Box
              bg="#ececf3"
              mb={3}
              display="inline-flex"
              p={{ base: 2.5, md: 3 }}
              borderRadius="100%"
            >
              <PiClockClockwise color="#191C6C" size={iconSize} />
            </Box>
            <Box>
              <Text fontFamily="medium" fontSize={{ base: 13, md: 14 }} mb={2}>
                Retirement Planning
              </Text>
              <Text
                fontFamily="regular"
                color="gray.500"
                fontSize={{ base: 9, md: 10 }}
                lineHeight={{ base: 1.4, md: 1.5 }}
              >
                Discover strategies to plan for a comfortable retirement. We
                offer guidance on retirement accounts.
              </Text>
            </Box>
          </Box>
          <Box
            border="1px solid #ececf3"
            borderRadius="10px"
            p={{ base: 4, md: 4 }}
            w="100%"
            h="100%"
          >
            <Box
              bg="#ececf3"
              mb={3}
              display="inline-flex"
              p={{ base: 2.5, md: 3 }}
              borderRadius="100%"
            >
              <PiCalculator color="#191C6C" size={iconSize} />
            </Box>
            <Box>
              <Text fontFamily="medium" mb={2} fontSize={{ base: 13, md: 14 }}>
                Financial Tools
              </Text>
              <Text
                fontFamily="regular"
                color="gray.500"
                fontSize={{ base: 9, md: 10 }}
                lineHeight={{ base: 1.4, md: 1.5 }}
              >
                If you are a small business owner or entrepreneur, we offer
                guidance on managing business finances.
              </Text>
            </Box>
          </Box>
          <Box
            border="1px solid #ececf3"
            borderRadius="10px"
            p={{ base: 4, md: 4 }}
            w="100%"
            h="100%"
          >
            <Box
              bg="#ececf3"
              display="inline-flex"
              mb={3}
              p={{ base: 2.5, md: 3 }}
              borderRadius="100%"
            >
              <PiReceipt color="#191C6C" size={iconSize} />
            </Box>
            <Box>
              <Text fontFamily="medium" mb={2} fontSize={{ base: 13, md: 14 }}>
                Tax Planning
              </Text>
              <Text
                fontFamily="regular"
                color="gray.500"
                fontSize={{ base: 9, md: 10 }}
                lineHeight={{ base: 1.4, md: 1.5 }}
              >
                Learn about tax-saving strategies deductions, and credits that
                can help you optimize your tax situation.
              </Text>
            </Box>
          </Box>
          <Box
            border="1px solid #ececf3"
            borderRadius="10px"
            p={{ base: 4, md: 4 }}
            w="100%"
            h="100%"
          >
            <Box
              bg="#ececf3"
              display="inline-flex"
              mb={3}
              p={{ base: 2.5, md: 3 }}
              borderRadius="100%"
            >
              <PiBookOpen color="#191C6C" size={iconSize} />
            </Box>
            <Box>
              <Text fontFamily="medium" mb={2} fontSize={{ base: 13, md: 14 }}>
                Financial Literacy
              </Text>
              <Text
                fontFamily="regular"
                color="gray.500"
                fontSize={{ base: 9, md: 10 }}
                lineHeight={{ base: 1.4, md: 1.5 }}
              >
                Enhance your financial knowledge with our educational resources.
                We cover topics such as finance.
              </Text>
            </Box>
          </Box>
          <Box
            border="1px solid #ececf3"
            borderRadius="10px"
            p={{ base: 4, md: 4 }}
            w="100%"
            h="100%"
          >
            <Box
              bg="#ececf3"
              display="inline-flex"
              mb={3}
              p={{ base: 2.5, md: 3 }}
              borderRadius="100%"
            >
              <PiBuildings color="#191C6C" size={iconSize} />
            </Box>
            <Box>
              <Text fontFamily="medium" mb={2} fontSize={{ base: 13, md: 14 }}>
                Small Business Finance
              </Text>
              <Text
                fontFamily="regular"
                color="gray.500"
                fontSize={{ base: 9, md: 10 }}
                lineHeight={{ base: 1.4, md: 1.5 }}
              >
                If you are a small business owner or entrepreneur, we offer
                guidance on managing business finances.
              </Text>
            </Box>
          </Box>
          <Box
            border="1px solid #ececf3"
            borderRadius="10px"
            p={{ base: 4, md: 4 }}
            w="100%"
            h="100%"
          >
            <Box
              bg="#ececf3"
              display="inline-flex"
              mb={3}
              p={{ base: 2.5, md: 3 }}
              borderRadius="100%"
            >
              <PiHeadset color="#191C6C" size={iconSize} />
            </Box>
            <Box>
              <Text fontFamily="medium" mb={2} fontSize={{ base: 13, md: 14 }}>
                Live Support
              </Text>
              <Text
                fontFamily="regular"
                color="gray.500"
                fontSize={{ base: 9, md: 10 }}
                lineHeight={{ base: 1.4, md: 1.5 }}
              >
                Discover strategies to plan for a comfortable retirement. We
                offer guidance on retirement accounts.
              </Text>
            </Box>
          </Box>
        </SimpleGrid>
      </Box>
    </>
  );
};

export default Help;
