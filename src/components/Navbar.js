import { Box, Image, Input, Text } from "@chakra-ui/react";
import { GoDotFill, GoMail } from "react-icons/go";
import { FiBell } from "react-icons/fi";
import Avatar from "../assets/profile_pic.jpeg";
import { CiSearch } from "react-icons/ci";
import { HiOutlineMenuAlt1 } from "react-icons/hi";

const Navbar = () => {
  return (
    <Box py="40px" color="white" bgColor="blue.color" px="5%">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Text fontFamily="bold" fontSize={25}>
          WealthWave
        </Text>
        <Box
          fontFamily="regular"
          fontSize={14}
          display={{ base: "none", md: "flex" }}
          gap="7"
        >
          <Text cursor="pointer" color="gold.color">
            Dashboard
          </Text>
          <Text cursor="pointer">Analytics</Text>
          <Text cursor="pointer">Transactions</Text>
          <Text cursor="pointer">Wallet</Text>
        </Box>
        <Box
          width="20%"
          position="relative"
          // display={["none", "none", "block"]}
          display={{ base: "none", xmd: "block" }}
        >
          <Input
            backgroundColor="opaque.color"
            maxWidth="500px"
            px="30px"
            py="10px"
            border="transparent"
            focusBorderColor="transparent"
            fontSize="14px"
            style={{
              caretColor: "#ffffff",
            }}
            _placeholder={{
              color: "#ffffff",
              fontSize: "14px",
            }}
            placeholder="Search anything..."
          />
          <Box position="absolute" top={2.5} left={2}>
            <CiSearch size={20} />
          </Box>
        </Box>
        <Box display={{ base: "none", md: "flex" }} alignItems="center" gap={7}>
          <Box position="relative">
            <GoMail size={20} cursor="pointer" />
            <GoDotFill color="red" className="dot" />
          </Box>
          <Box position="relative">
            <FiBell size={20} cursor="pointer" />
            <GoDotFill color="red" className="dot" />
          </Box>
          <Box
            border="1px"
            borderColor="#4779c4"
            position="relative"
            borderRadius="100%"
            cursor="pointer"
            p="2px"
          >
            <Image
              src={Avatar}
              height={30}
              width={30}
              objectFit="cover"
              borderRadius="100%"
            />
          </Box>
        </Box>
        <Box display={{ base: "block", md: "none" }}>
          <HiOutlineMenuAlt1 size={25} />
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
