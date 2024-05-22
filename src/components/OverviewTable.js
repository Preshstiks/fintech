import {
  Box,
  Image,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import Figma from "../assets/icons/figma.png";
import Spotify from "../assets/icons/spotify_3669986.png";
const OverviewTable = () => {
  return (
    <TableContainer
      bgColor="white"
      p="10px"
      mt="20px"
      boxShadow="sm"
      borderRadius="20px"
    >
      <Table variant="simple" size="lg">
        <Thead bgColor="#F8F8FA">
          <Tr>
            <Th color="gray.500" fontSize="13px">
              Company Name
            </Th>
            <Th color="gray.500" fontSize="13px">
              Type
            </Th>
            <Th color="gray.500" fontSize="13px">
              Date
            </Th>
            <Th color="gray.500" fontSize="13px">
              Amount
            </Th>
            <Th color="gray.500" fontSize="13px">
              Employee Status
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td fontSize="15px" fontWeight="medium">
              <Text display="flex" alignItems="center" gap={2}>
                <Box padding={2} bgColor="gray.100" borderRadius="100%">
                  <Image
                    src={Figma}
                    style={{ width: "15px", height: "15px" }}
                    alt="figma"
                  />
                </Box>
                Figma
              </Text>
            </Td>
            <Td>Subscription</Td>
            <Td>July 11.07.2023</Td>
            <Td>$624,000.00</Td>
            <Td fontSize="11px">
              <Text
                bgColor="#D9E7E0"
                display="inline-block"
                px="8px"
                py="3px"
                borderRadius="10px"
                color="#4EA967"
              >
                COMPLETED
              </Text>
            </Td>
          </Tr>
          <Tr>
            <Td>
              {" "}
              <Text display="flex" alignItems="center" gap={2}>
                <Box padding={2} bgColor="gray.100" borderRadius="100%">
                  <Image
                    src={Spotify}
                    style={{ width: "15px", height: "15px" }}
                    alt="figma"
                  />
                </Box>
                Spotify
              </Text>
            </Td>
            <Td>Receive</Td>
            <Td>July 12.07.2023</Td>
            <Td>$624,000.00</Td>
            <Td fontSize="11px">
              <Text
                bgColor="#FFF6D5"
                display="inline-block"
                px="8px"
                py="4px"
                borderRadius="10px"
                color="#E4B937"
              >
                INCOMPLETED
              </Text>
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default OverviewTable;
