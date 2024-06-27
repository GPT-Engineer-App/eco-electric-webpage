import { Box, Button, Container, Flex, Heading, HStack, Icon, Input, Text, VStack } from "@chakra-ui/react";
import { FaLeaf, FaRocket, FaSun, FaTools, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Header */}
      <Flex as="header" w="100%" p={4} justifyContent="space-between" alignItems="center" bg="gray.100">
        <Heading size="md">Eco-Electric</Heading>
        <HStack spacing={8}>
          <Text>Home</Text>
          <Text>Educational Resources</Text>
          <Text>Design Tools</Text>
          <Text>Regional Adaptation</Text>
          <Text>Content Updates</Text>
        </HStack>
        <Input placeholder="Search" size="md" maxW="200px" />
      </Flex>

      {/* Hero Section */}
      <Box as="section" bgImage="url('/images/hero-bg.jpg')" bgSize="cover" bgPos="center" color="white" textAlign="center" py={20}>
        <Heading as="h1" size="2xl" mb={4}>Welcome to Eco-Electric Platform</Heading>
        <Text fontSize="xl" mb={8}>Your Comprehensive Resource for Sustainable Electrical Solutions</Text>
        <Button colorScheme="teal" size="lg" mr={4}>Explore Our Resources</Button>
        <Button colorScheme="blue" size="lg">Try Our Design Tools</Button>
      </Box>

      {/* Introduction */}
      <Box as="section" py={10} textAlign="center">
        <Text fontSize="lg" maxW="600px" mx="auto">
          At Eco-Electric, we provide essential educational resources, practical design tools, and up-to-date information on sustainable electrical solutions tailored to your regional standards.
        </Text>
      </Box>

      {/* Key Features Overview */}
      <Box as="section" py={10} bg="gray.50">
        <Heading as="h2" size="lg" textAlign="center" mb={8}>Key Features</Heading>
        <Flex justifyContent="center" wrap="wrap" spacing={8}>
          <VStack p={4} m={2} bg="white" boxShadow="md" borderRadius="md">
            <Icon as={FaLeaf} w={8} h={8} color="green.500" />
            <Text>Educational Resources</Text>
            <Text>Access a comprehensive library of articles, videos, and interactive tutorials to enhance your knowledge on sustainable electrical solutions.</Text>
            <Button variant="link" colorScheme="teal">Learn More</Button>
          </VStack>
          <VStack p={4} m={2} bg="white" boxShadow="md" borderRadius="md">
            <Icon as={FaTools} w={8} h={8} color="blue.500" />
            <Text>Design Tools</Text>
            <Text>Utilize our suite of design tools to calculate the optimal size for solar panels and battery systems, tailored to your needs.</Text>
            <Button variant="link" colorScheme="teal">Start Designing</Button>
          </VStack>
          <VStack p={4} m={2} bg="white" boxShadow="md" borderRadius="md">
            <Icon as={FaRocket} w={8} h={8} color="red.500" />
            <Text>Regional Adaptation</Text>
            <Text>Ensure compliance with local standards and integrate regional data into your designs for accurate and effective solutions.</Text>
            <Button variant="link" colorScheme="teal">Learn More</Button>
          </VStack>
          <VStack p={4} m={2} bg="white" boxShadow="md" borderRadius="md">
            <Icon as={FaSun} w={8} h={8} color="yellow.500" />
            <Text>Content Updates</Text>
            <Text>Stay informed with our bi-weekly articles, covering the latest trends, industry news, and expert insights on smart cities and sustainability.</Text>
            <Button variant="link" colorScheme="teal">Read Articles</Button>
          </VStack>
        </Flex>
      </Box>

      {/* Featured Content/Tools */}
      <Box as="section" py={10} textAlign="center">
        <Heading as="h2" size="lg" mb={8}>Featured Content and Tools</Heading>
        <Flex justifyContent="center" wrap="wrap" spacing={8}>
          <VStack p={4} m={2} bg="white" boxShadow="md" borderRadius="md">
            <Text>Article Title 1</Text>
            <Text>Brief description of the article.</Text>
            <Button variant="link" colorScheme="teal">Read More</Button>
          </VStack>
          <VStack p={4} m={2} bg="white" boxShadow="md" borderRadius="md">
            <Text>Article Title 2</Text>
            <Text>Brief description of the article.</Text>
            <Button variant="link" colorScheme="teal">Read More</Button>
          </VStack>
          <VStack p={4} m={2} bg="white" boxShadow="md" borderRadius="md">
            <Text>Tool Title 1</Text>
            <Text>Brief description of the tool.</Text>
            <Button variant="link" colorScheme="teal">Use Tool</Button>
          </VStack>
        </Flex>
      </Box>

      {/* User Testimonials */}
      <Box as="section" py={10} bg="gray.50" textAlign="center">
        <Heading as="h2" size="lg" mb={8}>What Our Users Say</Heading>
        <Flex justifyContent="center" wrap="wrap" spacing={8}>
          <VStack p={4} m={2} bg="white" boxShadow="md" borderRadius="md">
            <Text>"This platform has been a game-changer for my projects!"</Text>
            <Text>- User 1</Text>
          </VStack>
          <VStack p={4} m={2} bg="white" boxShadow="md" borderRadius="md">
            <Text>"The design tools are incredibly useful and easy to use."</Text>
            <Text>- User 2</Text>
          </VStack>
          <VStack p={4} m={2} bg="white" boxShadow="md" borderRadius="md">
            <Text>"I love the educational resources available here."</Text>
            <Text>- User 3</Text>
          </VStack>
        </Flex>
      </Box>

      {/* Call-to-Action Section */}
      <Box as="section" py={10} textAlign="center">
        <Heading as="h2" size="lg" mb={4}>Join the Eco-Electric Community</Heading>
        <Text fontSize="lg" mb={4}>Subscribe to our newsletter to stay updated with the latest resources, tools, and articles on sustainable electrical solutions.</Text>
        <HStack justifyContent="center">
          <Input placeholder="Enter your email" size="lg" maxW="400px" />
          <Button colorScheme="teal" size="lg">Subscribe</Button>
        </HStack>
      </Box>

      {/* Footer */}
      <Flex as="footer" w="100%" p={4} justifyContent="space-between" alignItems="center" bg="gray.100">
        <Text>&copy; 2023 Eco-Electric Platform</Text>
        <HStack spacing={8}>
          <Text>Email: info@eco-electric.com</Text>
          <Text>Phone: +123456789</Text>
          <Text>Address: 123 Eco Street, Green City</Text>
        </HStack>
        <HStack spacing={8}>
          <Icon as={FaLinkedin} w={6} h={6} />
          <Icon as={FaTwitter} w={6} h={6} />
          <Icon as={FaFacebook} w={6} h={6} />
        </HStack>
        <HStack spacing={8}>
          <Text>Privacy Policy</Text>
          <Text>Terms of Service</Text>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Index;