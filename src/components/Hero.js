import { Box, Text } from "@chakra-ui/react";
import { useState } from "react";
import Overview from "../TabContent/Overview";
import Wallet from "../TabContent/Wallet";
import Invoice from "../TabContent/Invoice";
import Profile from "../TabContent/Profile";
import Settings from "../TabContent/Setting";
import Help from "../TabContent/Help";
import Report from "../TabContent/Report";

const Hero = ({ selectedTab, setSelectedTab }) => {
  const handleTabSelect = (index) => {
    setSelectedTab(index);
  };
  return (
    <Box bgColor="blue.color" px="5%">
      <Box
        color="white"
        pt="70px"
        pb="150px"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box>
          <Text fontFamily="semibold" fontSize={35}>
            Welcome Back, Precious
          </Text>
          <Text fontFamily="light" fontSize={14}>
            This is your Monthly Overview Report
          </Text>
        </Box>
        <Box
          borderBottom="2px"
          borderColor="#3c649f"
          display="flex"
          fontSize={14}
          fontFamily="regular"
          gap={10}
        >
          <Text
            onClick={() => handleTabSelect(0)}
            cursor="pointer"
            borderBottom={selectedTab === 0 ? "2px" : "none"}
            color={selectedTab === 0 ? "gold.color" : "white"}
            borderColor={selectedTab === 0 ? "gold.color" : "white"}
            pb="10px"
          >
            Overview
          </Text>
          <Text
            onClick={() => handleTabSelect(1)}
            borderBottom={selectedTab === 1 ? "2px" : "none"}
            cursor="pointer"
            pb="10px"
            color={selectedTab === 1 ? "gold.color" : "white"}
            borderColor={selectedTab === 1 ? "gold.color" : "white"}
          >
            Wallet
          </Text>
          <Text
            onClick={() => handleTabSelect(2)}
            borderBottom={selectedTab === 2 ? "2px" : "none"}
            cursor="pointer"
            pb="10px"
            color={selectedTab === 2 ? "gold.color" : "white"}
            borderColor={selectedTab === 2 ? "gold.color" : "white"}
          >
            Invoice
          </Text>
          <Text
            onClick={() => handleTabSelect(3)}
            borderBottom={selectedTab === 3 ? "2px" : "none"}
            cursor="pointer"
            pb="10px"
            color={selectedTab === 3 ? "gold.color" : "white"}
            borderColor={selectedTab === 3 ? "gold.color" : "white"}
          >
            Profile
          </Text>
          <Text
            onClick={() => handleTabSelect(4)}
            borderBottom={selectedTab === 4 ? "2px" : "none"}
            cursor="pointer"
            pb="10px"
            color={selectedTab === 4 ? "gold.color" : "white"}
            borderColor={selectedTab === 4 ? "gold.color" : "white"}
          >
            Settings
          </Text>
          <Text
            onClick={() => handleTabSelect(5)}
            borderBottom={selectedTab === 5 ? "2px" : "none"}
            cursor="pointer"
            pb="10px"
            color={selectedTab === 5 ? "gold.color" : "white"}
            borderColor={selectedTab === 5 ? "gold.color" : "white"}
          >
            Help
          </Text>
          <Text
            onClick={() => handleTabSelect(6)}
            borderBottom={selectedTab === 6 ? "2px" : "none"}
            cursor="pointer"
            pb="10px"
            color={selectedTab === 6 ? "gold.color" : "white"}
            borderColor={selectedTab === 6 ? "gold.color" : "white"}
          >
            Report
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
