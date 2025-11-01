import {
  Box,
  Input,
  InputGroup,
  InputRightElement,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { BiPhoneIncoming } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { PiPiggyBank } from "react-icons/pi";
const Help = () => {
  return (
    <>
      <Box mt="150px" px="5%" pb="40px">
        <Text fontFamily="semibold" textAlign="center" fontSize={25}>
          Hi, How can we help you?
        </Text>
        <Text
          fontFamily="light"
          textAlign="center"
          mt={2}
          color="gray.500"
          fontSize={14}
        >
          Got a question about your finance situation? We're here to help.
        </Text>
        <Box flexDirection="row" justifyItems="center" mt={6}>
          <InputGroup width="100%" maxWidth="350px">
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
              fontSize={12}
            />
          </InputGroup>
        </Box>
        <SimpleGrid columns={{ base: 1, md: 4 }} gap={5} mt={10}>
          <Box
            border="2px solid"
            borderColor="blue.color"
            display="inline-block"
            borderRadius="10px"
            p={5}
            w="100%"
            maxW="500px"
          >
            <Box
              bg="#ececf3"
              display="inline-flex"
              p={3}
              mb={3}
              borderRadius="100%"
            >
              <PiPiggyBank color="#191C6C" size={20} />
            </Box>
            <Box>
              <Text fontFamily="medium" mb={2} fontSize={14}>
                Personal Finance
              </Text>
              <Text fontFamily="regular" color="gray.500" fontSize={10}>
                We offer tips and advice on budgeting, saving money and reducing
                debt.
              </Text>
            </Box>
          </Box>
          <Box
            border="1px solid #ececf3"
            display="inline-block"
            borderRadius="10px"
            w="100%"
            maxW="500px"
            p={4}
          >
            <Box
              bg="#ececf3"
              display="inline-flex"
              p={3}
              mb={3}
              borderRadius="100%"
            >
              <PiPiggyBank color="#191C6C" size={20} />
            </Box>
            <Box>
              <Text fontFamily="medium" mb={2} fontSize={14}>
                Investment Guidance
              </Text>
              <Text fontFamily="regular" color="gray.500" fontSize={10}>
                Understand different investment options such as stocks, bonds,
                mutual funds and real estate.
              </Text>
            </Box>
          </Box>
          <Box
            border="1px solid #ececf3"
            display="inline-block"
            borderRadius="10px"
            p={4}
            w="100%"
            maxW="500px"
          >
            <Box
              bg="#ececf3"
              mb={3}
              display="inline-flex"
              p={3}
              borderRadius="100%"
            >
              <PiPiggyBank color="#191C6C" size={20} />
            </Box>
            <Box>
              <Text fontFamily="medium" fontSize={14} mb={2}>
                Retirement Planning
              </Text>
              <Text fontFamily="regular" color="gray.500" fontSize={10}>
                Discover strategies to plan for a comfortable retirement. We
                offer guidance on retirement accounts.
              </Text>
            </Box>
          </Box>
          <Box
            border="1px solid #ececf3"
            display="inline-block"
            borderRadius="10px"
            p={4}
            w="100%"
            maxW="500px"
          >
            <Box
              bg="#ececf3"
              mb={3}
              display="inline-flex"
              p={3}
              borderRadius="100%"
            >
              <PiPiggyBank color="#191C6C" size={20} />
            </Box>
            <Box>
              <Text fontFamily="medium" mb={2} fontSize={14}>
                Financial Tools
              </Text>
              <Text fontFamily="regular" color="gray.500" fontSize={10}>
                If you are a small business owner or entrepreneur, we offer
                guidance on managing business finances.
              </Text>
            </Box>
          </Box>
          <Box
            border="1px solid #ececf3"
            display="inline-block"
            borderRadius="10px"
            p={4}
            w="100%"
            maxW="500px"
          >
            <Box
              bg="#ececf3"
              display="inline-flex"
              mb={3}
              p={3}
              borderRadius="100%"
            >
              <PiPiggyBank color="#191C6C" size={20} />
            </Box>
            <Box>
              <Text fontFamily="medium" mb={2} fontSize={14}>
                Tax Planning
              </Text>
              <Text fontFamily="regular" color="gray.500" fontSize={10}>
                Learn about tax-saving strategies deductions, and credits that
                can help you optimize your tax situation.
              </Text>
            </Box>
          </Box>
          <Box
            border="1px solid #ececf3"
            display="inline-block"
            borderRadius="10px"
            p={4}
            w="100%"
            maxW="500px"
          >
            <Box
              bg="#ececf3"
              display="inline-flex"
              mb={3}
              p={3}
              borderRadius="100%"
            >
              <PiPiggyBank color="#191C6C" size={20} />
            </Box>
            <Box>
              <Text fontFamily="medium" mb={2} fontSize={14}>
                Financial Literacy
              </Text>
              <Text fontFamily="regular" color="gray.500" fontSize={10}>
                Enhance your financial knowledge with our educational resources.
                We cover topics such as finance.
              </Text>
            </Box>
          </Box>
          <Box
            border="1px solid #ececf3"
            display="inline-block"
            borderRadius="10px"
            p={4}
            w="100%"
            maxW="500px"
          >
            <Box
              bg="#ececf3"
              display="inline-flex"
              mb={3}
              p={3}
              borderRadius="100%"
            >
              <PiPiggyBank color="#191C6C" size={20} />
            </Box>
            <Box>
              <Text fontFamily="medium" mb={2} fontSize={14}>
                Small Business Finance
              </Text>
              <Text fontFamily="regular" color="gray.500" fontSize={10}>
                If you are a small business owner or entrepreneur, we offer
                guidance on managing business finances.
              </Text>
            </Box>
          </Box>
          <Box
            border="1px solid #ececf3"
            display="inline-block"
            borderRadius="10px"
            p={4}
            w="100%"
            maxW="500px"
          >
            <Box
              bg="#ececf3"
              display="inline-flex"
              mb={3}
              p={3}
              borderRadius="100%"
            >
              <PiPiggyBank color="#191C6C" size={20} />
            </Box>
            <Box>
              <Text fontFamily="medium" mb={2} fontSize={14}>
                Live Support
              </Text>
              <Text fontFamily="regular" color="gray.500" fontSize={10}>
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
