import { Box, Button, Container, Flex, Heading, HStack, Icon, Input, Text, VStack } from "@chakra-ui/react";
import { FaLeaf, FaRocket, FaSun, FaTools } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Header */}
      <Flex as="header" w="100%" p={4} justifyContent="space-between" alignItems="center" bg="gray.100">
        <Heading size="md">Logo</Heading>
        <HStack spacing={8}>
          <Text>Home</Text>
          <Text>About</Text>
          <Text>Contact</Text>
        </HStack>
      </Flex>

      {/* Hero Section */}
      <Box as="section" bgImage="url('/images/hero-bg.jpg')" bgSize="cover" bgPos="center" color="white" textAlign="center" py={20}>
        <Heading as="h1" size="2xl" mb={4}>Sustainable Electrical Solutions at Your Fingertips</Heading>
        <Text fontSize="xl" mb={8}>Empowering professionals and enthusiasts with tools and knowledge for a greener future</Text>
        <Button colorScheme="teal" size="lg">Try Our Solar Panel Sizing Calculator</Button>
      </Box>

      {/* Brief Description Section */}
      <Box as="section" py={10} textAlign="center">
        <Icon as={FaLeaf} w={10} h={10} color="teal.500" mb={4} />
        <Text fontSize="lg" maxW="600px" mx="auto">
          Our platform provides the latest tools and resources to help you design and implement sustainable electrical solutions. Join our community of professionals and enthusiasts dedicated to a greener future.
        </Text>
      </Box>

      {/* Future Features Section */}
      <Box as="section" py={10} bg="gray.50">
        <Heading as="h2" size="lg" textAlign="center" mb={8}>Coming Soon</Heading>
        <Flex justifyContent="center" wrap="wrap" spacing={8}>
          <VStack p={4} m={2} bg="white" boxShadow="md" borderRadius="md">
            <Icon as={FaSun} w={8} h={8} color="yellow.500" />
            <Text>Solar Panel Efficiency Calculator</Text>
          </VStack>
          <VStack p={4} m={2} bg="white" boxShadow="md" borderRadius="md">
            <Icon as={FaTools} w={8} h={8} color="blue.500" />
            <Text>DIY Installation Guides</Text>
          </VStack>
          <VStack p={4} m={2} bg="white" boxShadow="md" borderRadius="md">
            <Icon as={FaRocket} w={8} h={8} color="red.500" />
            <Text>Advanced Energy Storage Solutions</Text>
          </VStack>
        </Flex>
      </Box>

      {/* Value Proposition Section */}
      <Box as="section" py={10} textAlign="center">
        <Heading as="h2" size="lg" mb={8}>Why Choose Our Platform</Heading>
        <Flex justifyContent="center" wrap="wrap" spacing={8}>
          <VStack p={4} m={2} bg="white" boxShadow="md" borderRadius="md">
            <Icon as={FaLeaf} w={8} h={8} color="green.500" />
            <Text>Eco-Friendly Solutions</Text>
          </VStack>
          <VStack p={4} m={2} bg="white" boxShadow="md" borderRadius="md">
            <Icon as={FaTools} w={8} h={8} color="blue.500" />
            <Text>Expert Resources</Text>
          </VStack>
          <VStack p={4} m={2} bg="white" boxShadow="md" borderRadius="md">
            <Icon as={FaRocket} w={8} h={8} color="red.500" />
            <Text>Innovative Tools</Text>
          </VStack>
        </Flex>
      </Box>

      {/* Newsletter Signup Section */}
      <Box as="section" py={10} bg="gray.50" textAlign="center">
        <Text fontSize="lg" mb={4}>Stay updated with our latest news and features</Text>
        <HStack justifyContent="center">
          <Input placeholder="Enter your email" size="lg" maxW="400px" />
          <Button colorScheme="teal" size="lg">Subscribe</Button>
        </HStack>
      </Box>

      {/* Footer */}
      <Flex as="footer" w="100%" p={4} justifyContent="space-between" alignItems="center" bg="gray.100">
        <Text>&copy; 2023 Sustainable Electrical Solutions</Text>
        <HStack spacing={8}>
          <Text>About Us</Text>
          <Text>Contact</Text>
          <Text>Terms of Service</Text>
          <Text>Privacy Policy</Text>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Index;