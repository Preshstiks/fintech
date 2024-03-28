import { Box, Text } from "@chakra-ui/react";

const Invoice = () => {
  return (
    <Box>
      <Text fontFamily="semibold" fontSize={35}>
        Invoice
      </Text>
      <Text fontFamily="light" fontSize={14}>
        This is your Monthly Overview Report
      </Text>
    </Box>
  );
};

export default Invoice;
