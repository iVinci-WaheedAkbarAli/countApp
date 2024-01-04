import React from "react";
import { Box, Text, Button } from "@chakra-ui/react";
type CounterProps = {
  increaseCount: () => void;
  decreaseCount: () => void;
  counterValue: number;
};

const Counter: React.FC<CounterProps> = ({
  increaseCount,
  decreaseCount,
  counterValue,
}) => {
  return (
    <Box
      boxShadow="lg"
      p={10}
      rounded="lg"
      bg="white"
      width="50%"
      margin="0 auto"
    >
      <Text fontSize="40px">React Counter</Text>
      <Text fontSize="60px" color="blue.500">
        {counterValue}
      </Text>
      <Button
        colorScheme="linkedin"
        rounded="full"
        fontSize="50px"
        mr={10}
        w={20}
        h={20}
        onClick={increaseCount}
      >
        +
      </Button>
      <Button
        rounded="full"
        fontSize="50px"
        w={20}
        h={20}
        onClick={decreaseCount}
      >
        -
      </Button>
    </Box>
  );
};
export default Counter;
