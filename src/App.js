import { Box, VStack, Container, Badge } from "@chakra-ui/layout";
import Marked from "./Marked";

function App() {
  return (
    <VStack>
      <Container maxW="100%" mt="5" textAlign="center" centerContent>
        <Box p={4} >
          <Badge colorScheme="red" color="tomato">Mardown Preview</Badge>  
        </Box>
        <Marked/>
      </Container>
    </VStack>
  );
}

export default App;
