import { Box } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import { useState } from "react";
import Overview from "../TabContent/Overview";
import Wallet from "../TabContent/Wallet";
import Invoice from "../TabContent/Invoice";
import Profile from "../TabContent/Profile";
import Settings from "../TabContent/Setting";
import Help from "../TabContent/Help";
import Report from "../TabContent/Report";

const Dashboard = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <Box bgColor="gray.50" h="100vh" position="relative">
      <Box>
        <Navbar />
        <Hero selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        <Box w="100%" position="relative">
          <Box position="absolute" top="-100px" left="0" right="0">
            {selectedTab === 0 && <Overview />}
            {selectedTab === 1 && <Wallet />}
            {selectedTab === 2 && <Invoice />}
            {selectedTab === 3 && <Profile />}
            {selectedTab === 4 && <Settings />}
            {selectedTab === 5 && <Help />}
            {selectedTab === 6 && <Report />}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
