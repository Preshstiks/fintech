import {
  Box,
  Text,
  Avatar,
  Button,
  SimpleGrid,
  FormControl,
  Input,
  Switch,
  Flex,
  Stack,
  Badge,
  Icon,
  ButtonGroup,
} from "@chakra-ui/react";
import { useState } from "react";
import { FiEdit3, FiBell, FiLock, FiCreditCard, FiCheck } from "react-icons/fi";
import ProfilePic from "../assets/profile_pic.jpeg";
const Profile = () => {
  const leftTabs = [
    { label: "Edit profile", icon: FiEdit3 },
    { label: "Notifications", icon: FiBell },
    { label: "Password & Security", icon: FiLock },
    { label: "Choose plan", icon: FiCreditCard },
  ];
  const [selectedLeftTab, setSelectedLeftTab] = useState(0);
  const [billingCycle, setBillingCycle] = useState("monthly");
  const [selectedPlan, setSelectedPlan] = useState("pro");

  const plans = [
    {
      id: "starter",
      name: "Starter",
      description: "Track personal finances with essential insights",
      monthly: 0,
      yearly: 0,
      features: [
        "Connect up to 2 bank accounts",
        "Smart monthly budgeting tips",
        "Email support",
      ],
    },
    {
      id: "pro",
      name: "Pro",
      description: "Unlock advanced cashflow analytics and alerts",
      monthly: 19,
      yearly: 190,
      features: [
        "Unlimited connected accounts",
        "Real-time spending notifications",
        "Exportable reports & CSV",
      ],
      recommended: true,
    },
    {
      id: "team",
      name: "Team",
      description: "Collaborate on forecasts with your finance team",
      monthly: 39,
      yearly: 390,
      features: [
        "Multi-user workspaces & roles",
        "Shared approval workflows",
        "Dedicated success manager",
      ],
    },
  ];

  const selectedPlanDetails =
    plans.find((plan) => plan.id === selectedPlan) ?? plans[0];

  return (
    <Box px={{ base: "5%", md: "5%" }} mt={"150px"}>
      <SimpleGrid columns={{ base: 1, md: 4 }} spacing={6}>
        <Box h="100%">
          <Box bg="white" borderRadius="16px" boxShadow="sm" p={3} h="100%">
            {leftTabs.map((tab, index) => (
              <Box
                key={tab.label}
                onClick={() => setSelectedLeftTab(index)}
                cursor="pointer"
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                bg={selectedLeftTab === index ? "gray.100" : "white"}
                color={selectedLeftTab === index ? "blue.600" : "gray.700"}
                borderRadius="12px"
                p={3}
                mb={2}
                border="1px solid"
                borderColor={
                  selectedLeftTab === index ? "blue.100" : "gray.100"
                }
              >
                <Box display="flex" alignItems="center" gap={3}>
                  <Box as={tab.icon} size="18px" />
                  <Text fontFamily="regular" fontSize={14}>
                    {tab.label}
                  </Text>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>

        <Box gridColumn={{ base: "span 1", md: "span 3" }}>
          {selectedLeftTab === 0 && (
            <Box
              bg="white"
              borderRadius="16px"
              boxShadow="sm"
              p={{ base: 5, md: 8 }}
            >
              <Box
                display="flex"
                alignItems="center"
                bg="gray.100"
                padding={5}
                borderRadius="16px"
                justifyContent="space-between"
                mb={{ base: 6, md: 8 }}
              >
                <Box display="flex" alignItems="center" gap={4}>
                  <Avatar size="lg" name="Alex Smith" src={ProfilePic} />
                  <Box>
                    <Text fontFamily="semibold" fontSize={22}>
                      Davies Precious
                    </Text>
                    <Text fontFamily="light" fontSize={13} color="gray.500">
                      Project Manager
                    </Text>
                  </Box>
                </Box>
                <Box display="flex" gap={3}>
                  <Button size="sm" colorScheme="blue" variant="ghost">
                    Replace
                  </Button>
                  <Button size="sm" colorScheme="red" variant="ghost">
                    Delete
                  </Button>
                </Box>
              </Box>

              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                <Box
                  pr={{ base: 0, md: 6 }}
                  borderRight={{
                    base: "none",
                    md: "1px solid rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <Text fontFamily="medium" fontSize={15} mb={1}>
                    Name
                  </Text>
                  <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={4}>
                    <FormControl>
                      <Input
                        placeholder="First name"
                        bg="gray.50"
                        fontSize={14}
                      />
                    </FormControl>
                    <FormControl>
                      <Input
                        placeholder="Last name"
                        bg="gray.50"
                        fontSize={14}
                      />
                    </FormControl>
                  </SimpleGrid>

                  <Box mt={6}>
                    <Text fontFamily="medium" fontSize={15} mb={1}>
                      E-mail
                    </Text>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="Email"
                        bg="gray.50"
                        fontSize={14}
                      />
                    </FormControl>
                  </Box>

                  <Box mt={6}>
                    <Text fontFamily="medium" fontSize={15} mb={1}>
                      Contact number
                    </Text>
                    <FormControl>
                      <Input
                        placeholder="Contact number"
                        bg="gray.50"
                        fontSize={14}
                      />
                    </FormControl>
                  </Box>

                  <Box mt={6}>
                    <Text fontFamily="medium" fontSize={15} mb={1}>
                      Address
                    </Text>
                    <FormControl>
                      <Input placeholder="Address" bg="gray.50" fontSize={14} />
                    </FormControl>
                  </Box>
                  <Box display="flex" gap={3} mt={6}>
                    <Button variant="outline" h="40px" size="sm">
                      Cancel
                    </Button>
                    <Button
                      as="button"
                      bg="blue.color"
                      textColor="white"
                      h="40px"
                      size="sm"
                    >
                      Save Changes
                    </Button>
                  </Box>
                </Box>

                <Box>
                  <Text fontFamily="medium" fontSize={15} mb={1}>
                    Address
                  </Text>
                  <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={4}>
                    <FormControl>
                      <Input placeholder="City" bg="gray.50" fontSize={14} />
                    </FormControl>
                    <FormControl>
                      <Input placeholder="State" bg="gray.50" fontSize={14} />
                    </FormControl>
                    <FormControl>
                      <Input
                        placeholder="Zip Code"
                        bg="gray.50"
                        fontSize={14}
                      />
                    </FormControl>
                    <FormControl>
                      <Input placeholder="Country" bg="gray.50" fontSize={14} />
                    </FormControl>
                  </SimpleGrid>
                  <FormControl mt={4}>
                    <Input
                      placeholder="Full Address"
                      bg="gray.50"
                      fontSize={14}
                    />
                  </FormControl>
                  <Box mb={4}>
                    <Text fontFamily="medium" fontSize={15} mb={1} mt={4}>
                      Payments
                    </Text>
                    <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={4}>
                      <FormControl>
                        <Input
                          placeholder="Currency"
                          bg="gray.50"
                          fontSize={14}
                        />
                      </FormControl>
                      <FormControl>
                        <Input
                          placeholder="Method"
                          bg="gray.50"
                          fontSize={14}
                        />
                      </FormControl>
                    </SimpleGrid>
                  </Box>
                  <Box>
                    <FormControl
                      display="flex"
                      alignItems="center"
                      justifyContent="space-between"
                      mb={4}
                    >
                      <Box>
                        <Text fontFamily="medium" fontSize={14} mb={1}>
                          Apple pay
                        </Text>
                        <Text fontFamily="light" fontSize={12} color="gray.500">
                          Allow pay by using Apple pay
                        </Text>
                      </Box>
                      <Switch colorScheme="blue" defaultChecked />
                    </FormControl>
                    <FormControl
                      display="flex"
                      alignItems="center"
                      justifyContent="space-between"
                    >
                      <Box>
                        <Text fontFamily="medium" fontSize={14} mb={1}>
                          Google pay
                        </Text>
                        <Text fontFamily="light" fontSize={12} color="gray.500">
                          Allow pay by using Google pay
                        </Text>
                      </Box>
                      <Switch colorScheme="blue" defaultChecked />
                    </FormControl>
                  </Box>
                </Box>
              </SimpleGrid>
            </Box>
          )}

          {selectedLeftTab === 1 && (
            <Box
              bg="white"
              borderRadius="16px"
              boxShadow="sm"
              p={{ base: 5, md: 8 }}
            >
              <Text fontFamily="medium" fontSize={16} mb={4}>
                Notifications
              </Text>
              <SimpleGrid columns={{ base: 1 }} spacing={4}>
                <FormControl
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  p={3}
                  borderRadius="12px"
                  bg="gray.50"
                >
                  <Box>
                    <Text fontFamily="regular" fontSize={15}>
                      Email notifications
                    </Text>
                    <Text fontFamily="light" fontSize={12} color="gray.500">
                      Receive important updates via email
                    </Text>
                  </Box>
                  <Switch colorScheme="blue" defaultChecked />
                </FormControl>
                <FormControl
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  p={3}
                  borderRadius="12px"
                  bg="gray.50"
                >
                  <Box>
                    <Text fontFamily="regular" fontSize={15}>
                      SMS notifications
                    </Text>
                    <Text fontFamily="light" fontSize={12} color="gray.500">
                      Get alerts on your phone
                    </Text>
                  </Box>
                  <Switch colorScheme="blue" />
                </FormControl>
                <FormControl
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  p={3}
                  borderRadius="12px"
                  bg="gray.50"
                >
                  <Box>
                    <Text fontFamily="regular" fontSize={15}>
                      Product announcements
                    </Text>
                    <Text fontFamily="light" fontSize={12} color="gray.500">
                      Occasional news and features
                    </Text>
                  </Box>
                  <Switch colorScheme="blue" defaultChecked />
                </FormControl>
              </SimpleGrid>
            </Box>
          )}

          {selectedLeftTab === 2 && (
            <Box
              bg="white"
              borderRadius="16px"
              boxShadow="sm"
              p={{ base: 5, md: 8 }}
            >
              <Text fontFamily="medium" fontSize={16} mb={4}>
                Password & Security
              </Text>
              <Box>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Current password"
                    bg="gray.50"
                    w="100%"
                    maxW={"400px"}
                    mb={3}
                    fontSize={14}
                  />
                </FormControl>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="New password"
                    bg="gray.50"
                    w="100%"
                    maxW={"400px"}
                    mb={3}
                    fontSize={14}
                  />
                </FormControl>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Confirm new password"
                    bg="gray.50"
                    w="100%"
                    maxW={"400px"}
                    mb={3}
                    fontSize={14}
                  />
                </FormControl>
                <Box display="flex" gap={3} mt={2}>
                  <Button
                    as="button"
                    bg="blue.color"
                    textColor="white"
                    h="40px"
                    size="sm"
                  >
                    Update password
                  </Button>
                  <Button variant="outline" h="40px" size="sm">
                    Enable 2FA
                  </Button>
                </Box>
              </Box>
            </Box>
          )}

          {selectedLeftTab === 3 && (
            <Box
              bg="white"
              borderRadius="16px"
              boxShadow="sm"
              p={{ base: 5, md: 8 }}
            >
              <Flex
                direction={{ base: "column", sm: "row" }}
                align={{ base: "flex-start", sm: "center" }}
                justify="space-between"
                gap={4}
              >
                <Box>
                  <Text fontFamily="medium" fontSize={16}>
                    Choose plan
                  </Text>
                  <Text fontFamily="light" fontSize={13} color="gray.500">
                    Pick the billing option that fits how you work best.
                  </Text>
                </Box>
                <ButtonGroup
                  size="sm"
                  isAttached
                  bg="gray.100"
                  borderRadius="full"
                  p={1}
                >
                  <Button
                    variant={billingCycle === "monthly" ? "solid" : "ghost"}
                    colorScheme="blue"
                    borderRadius="full"
                    onClick={() => setBillingCycle("monthly")}
                  >
                    Monthly
                  </Button>
                  <Button
                    variant={billingCycle === "yearly" ? "solid" : "ghost"}
                    colorScheme="blue"
                    borderRadius="full"
                    onClick={() => setBillingCycle("yearly")}
                  >
                    Yearly
                  </Button>
                </ButtonGroup>
              </Flex>

              <SimpleGrid columns={{ base: 1, md: 3 }} spacing={5} mt={6}>
                {plans.map((plan) => {
                  const price =
                    billingCycle === "monthly" ? plan.monthly : plan.yearly;
                  const suffix = billingCycle === "monthly" ? "/mo" : "/yr";
                  const isSelected = selectedPlan === plan.id;

                  return (
                    <Box
                      key={plan.id}
                      role="button"
                      tabIndex={0}
                      onClick={() => setSelectedPlan(plan.id)}
                      onKeyDown={(event) => {
                        if (event.key === "Enter" || event.key === " ") {
                          event.preventDefault();
                          setSelectedPlan(plan.id);
                        }
                      }}
                      border="1px solid"
                      borderColor={
                        isSelected
                          ? "blue.300"
                          : plan.recommended
                          ? "blue.200"
                          : "gray.200"
                      }
                      bg={
                        isSelected
                          ? "blue.50"
                          : plan.recommended
                          ? "gray.50"
                          : "white"
                      }
                      borderRadius="16px"
                      p={5}
                      cursor="pointer"
                      transition="all 0.2s ease"
                      display="flex"
                      flexDirection="column"
                      justifyContent="space-between"
                      gap={5}
                      _hover={{ borderColor: "blue.300" }}
                      _focus={{ boxShadow: "0 0 0 2px rgba(59,130,246,0.4)" }}
                    >
                      <Stack spacing={4}>
                        <Stack spacing={2}>
                          {plan.recommended && (
                            <Badge colorScheme="blue" w="fit-content">
                              Most popular
                            </Badge>
                          )}
                          <Text fontFamily="semibold" fontSize={17}>
                            {plan.name}
                          </Text>
                          <Text
                            fontFamily="light"
                            fontSize={13}
                            color="gray.500"
                          >
                            {plan.description}
                          </Text>
                        </Stack>

                        <Stack spacing={1}>
                          <Flex align="baseline" gap={1}>
                            <Text fontFamily="semibold" fontSize={32}>
                              ${price}
                            </Text>
                            <Text
                              fontFamily="light"
                              fontSize={13}
                              color="gray.500"
                            >
                              {suffix}
                            </Text>
                          </Flex>
                          {billingCycle === "yearly" &&
                            plan.monthly !== plan.yearly && (
                              <Text
                                fontFamily="light"
                                fontSize={12}
                                color="gray.500"
                              >
                                Billed annually (${plan.monthly} /mo equivalent)
                              </Text>
                            )}
                        </Stack>

                        <Stack spacing={2} mt={2}>
                          {plan.features.map((feature) => (
                            <Flex key={feature} align="center" gap={2}>
                              <Icon
                                as={FiCheck}
                                color="green.400"
                                boxSize={4}
                              />
                              <Text fontFamily="light" fontSize={13}>
                                {feature}
                              </Text>
                            </Flex>
                          ))}
                        </Stack>
                      </Stack>

                      <Button
                        size="sm"
                        colorScheme="blue"
                        variant={isSelected ? "solid" : "outline"}
                        onClick={(event) => {
                          event.stopPropagation();
                          setSelectedPlan(plan.id);
                        }}
                      >
                        {isSelected ? "Selected" : "Select plan"}
                      </Button>
                    </Box>
                  );
                })}
              </SimpleGrid>
            </Box>
          )}
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default Profile;
