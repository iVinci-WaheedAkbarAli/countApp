import React from "react";
import { Box, Text, Button } from "@chakra-ui/react";
type Func = {
  change1: () => void;
  change2: () => void;
  count: number;
};

const Counter: React.FC<Func> = ({ change1, change2, count }) => {
  return (
    <Box boxShadow="lg" rounded="lg" bg="white" width="50%" margin="0 auto">
      <Text fontSize="40px">React Counter</Text>
      <Text fontSize="60px" color="blue.500">
        {count}
      </Text>
      <Button
        colorScheme="linkedin"
        rounded="full"
        fontSize="50px"
        mr={10}
        w={20}
        h={20}
        onClick={change2}
      >
        +
      </Button>
      <Button rounded="full" fontSize="50px" w={20} h={20} onClick={change1}>
        -
      </Button>
    </Box>
  );
};
export default Counter;
