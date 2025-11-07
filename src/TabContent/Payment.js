import {
  Box,
  Button,
  Checkbox,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FaCcAmex, FaCcMastercard, FaCcVisa } from "react-icons/fa";

const Payment = () => {
  return (
    <Box px="5%" pb="40px" pt="150px">
      <Flex
        gap={{ base: "24px", xl: "32px" }}
        direction={{ base: "column", xl: "row" }}
        align="stretch"
      >
        <Box flex="1" p={{ base: "24px", md: "32px" }}>
          <Stack spacing="28px">
            <Stack spacing="6px">
              <Heading fontSize={{ base: "24px", md: "26px" }}>
                Payment Method
              </Heading>
              <Text color="gray.500" fontSize="14px">
                Enter Your Card Details
              </Text>
            </Stack>

            <Stack spacing="20px">
              <FormControl>
                <FormLabel fontWeight="medium" fontSize={14} color="gray.700">
                  Card Number
                </FormLabel>
                <InputGroup>
                  <Input
                    placeholder="1234 1234 1234 1234"
                    bg="gray.50"
                    border="1px solid"
                    borderColor="gray.100"
                    _focus={{ borderColor: "blue.400", boxShadow: "none" }}
                    py={5}
                    fontSize="14px"
                  />
                  <InputRightElement width="auto" pr="12px">
                    <Flex gap="6px" align="center">
                      <FaCcAmex size={28} color="#1F8CF0" />
                      <FaCcMastercard size={28} color="#FF5F00" />
                      <FaCcVisa size={28} color="#1434CB" />
                    </Flex>
                  </InputRightElement>
                </InputGroup>
                <Text mt="8px" fontSize="12px" color="gray.500">
                  Amex, Master Card and Visa accepted
                </Text>
              </FormControl>

              <FormControl>
                <FormLabel fontWeight="medium" fontSize={14} color="gray.700">
                  Name On Card
                </FormLabel>
                <Input
                  placeholder="Name"
                  bg="gray.50"
                  border="1px solid"
                  borderColor="gray.100"
                  _focus={{ borderColor: "blue.400", boxShadow: "none" }}
                  py={5}
                  fontSize="14px"
                />
              </FormControl>

              <SimpleGrid columns={{ base: 1, sm: 2 }} spacing="20px">
                <FormControl>
                  <FormLabel fontWeight="medium" fontSize={14} color="gray.700">
                    Expiry Date
                  </FormLabel>
                  <Input
                    placeholder="12/08/27"
                    bg="gray.50"
                    border="1px solid"
                    borderColor="gray.100"
                    _focus={{ borderColor: "blue.400", boxShadow: "none" }}
                    py={5}
                    fontSize="14px"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel fontWeight="medium" fontSize={14} color="gray.700">
                    CVC
                  </FormLabel>
                  <Input
                    placeholder="***"
                    bg="gray.50"
                    border="1px solid"
                    borderColor="gray.100"
                    _focus={{ borderColor: "blue.400", boxShadow: "none" }}
                    py={5}
                    fontSize="15px"
                  />
                </FormControl>
              </SimpleGrid>
            </Stack>

            <Divider borderColor="gray.100" />

            <Stack spacing="16px">
              <Stack spacing="6px">
                <Heading fontSize={{ base: "20px", md: "22px" }}>
                  Your Details
                </Heading>
              </Stack>

              <FormControl>
                <FormLabel fontWeight="medium" fontSize={14} color="gray.700">
                  Name
                </FormLabel>
                <Input
                  placeholder="Name"
                  bg="gray.50"
                  border="1px solid"
                  borderColor="gray.100"
                  _focus={{ borderColor: "blue.400", boxShadow: "none" }}
                  py={5}
                  fontSize="14px"
                />
                <Text mt="8px" fontSize="12px" color="gray.500">
                  Your Name or Your Company's Name.
                </Text>
              </FormControl>

              <FormControl>
                <FormLabel fontWeight="medium" fontSize={14} color="gray.700">
                  Billing Email
                </FormLabel>
                <Input
                  placeholder="Email Address"
                  type="email"
                  bg="gray.50"
                  border="1px solid"
                  borderColor="gray.100"
                  _focus={{ borderColor: "blue.400", boxShadow: "none" }}
                  py={5}
                  fontSize="14px"
                />
                <Text mt="8px" fontSize="12px" color="gray.500">
                  We'll Send Billing Notifications to This Email
                </Text>
              </FormControl>
            </Stack>
          </Stack>
        </Box>

        <Box
          flex={{ base: "1", xl: "0.55" }}
          p={{ base: "24px", md: "32px" }}
          h="fit-content"
        >
          <Stack spacing="24px">
            <Stack spacing="6px">
              <Heading fontSize={{ base: "24px", md: "26px" }}>
                Bill Summary
              </Heading>
              <Text color="gray.500" fontSize="14px">
                What You Would Pay After Your Trial Ends
              </Text>
            </Stack>

            <Stack spacing="18px">
              <Flex justify="space-between" align="center">
                <Text color="gray.500" fontSize="14px">
                  4 Editor's
                </Text>
                <Text fontWeight="semibold" fontSize="16px">
                  $28.00
                </Text>
              </Flex>
              <Divider borderColor="gray.100" />
              <Stack spacing="6px">
                <Flex justify="space-between" align="center">
                  <Stack spacing="2px">
                    <Text fontSize="16px" fontWeight="semibold">
                      Total Per Month
                    </Text>
                    <Text fontSize="13px" color="gray.500">
                      Due on 6 July 2023, Then Every Month
                    </Text>
                  </Stack>
                  <Text fontWeight="semibold" fontSize="16px">
                    $28.00
                  </Text>
                </Flex>
              </Stack>
            </Stack>

            <Stack spacing="18px">
              <Checkbox
                colorScheme="blue"
                alignItems="flex-start"
                lineHeight="20px"
                spacing="10px"
                sx={{
                  ".chakra-checkbox__control": { mt: "2px" },
                  ".chakra-checkbox__label": { fontSize: "14px" },
                }}
              >
                I've read and agree to the Sketch Terms of Service and order
                Details
              </Checkbox>
              <Button
                colorScheme="blue"
                borderRadius="16px"
                h="56px"
                fontSize="16px"
              >
                Payment Confirm
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Flex>
    </Box>
  );
};

export default Payment;
