import { Container, Text, VStack, Heading, List, ListItem, ListIcon, Box } from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl" mb={4}>
          Welcome to Stitchers
        </Heading>
        <Text fontSize="xl" textAlign="center">
          Stitchers is designed to help developers source, modify, and integrate code snippets from open-source repositories and libraries.
        </Text>
        <Box mt={6}>
          <Heading as="h2" size="lg" mb={2}>
            Features Include:
          </Heading>
          <List spacing={3}>
            <ListItem>
              <ListIcon as={FaCheckCircle} color="green.500" />
              Code sourcing from various open-source repositories
            </ListItem>
            <ListItem>
              <ListIcon as={FaCheckCircle} color="green.500" />
              Easy modification and customization of code snippets
            </ListItem>
            <ListItem>
              <ListIcon as={FaCheckCircle} color="green.500" />
              Compatibility checks to ensure seamless integration
            </ListItem>
            <ListItem>
              <ListIcon as={FaCheckCircle} color="green.500" />
              Integration assistance for efficient collaboration within projects
            </ListItem>
          </List>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
