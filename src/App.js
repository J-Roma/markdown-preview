import { Box, VStack, Container, Badge } from "@chakra-ui/layout";
import Marked from "./Marked";

function App() {
  return (
    <VStack bgGradient="linear(to-l, #833ab4, #fd1d1d)">
      <Container maxW="100%" mt="3" textAlign="center"   centerContent>
        <Box p={4} >
          <Badge colorScheme="red" color="tomato">Mardown Preview</Badge>  
        </Box>
        <Marked/>
      </Container>
    </VStack>
  );
}

export default App;
