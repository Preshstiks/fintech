import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

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
            <Td>Figma</Td>
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
            <Td>Spotify</Td>
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
