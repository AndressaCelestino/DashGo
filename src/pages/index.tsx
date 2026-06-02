import Head from 'next/head'
import {
  Badge,
  Box,
  Button,
  Container,
  Heading,
  Link,
  List,
  ListItem,
  SimpleGrid,
  Stack,
  Text
} from '@chakra-ui/react'

const repositoryUrl = 'https://github.com/AndressaCelestino/DashGo'
const linkedinUrl =
  'https://www.linkedin.com/in/andressa-regina-lopes-celestino-2a5ba1135/'

const features = [
  {
    title: 'Next.js page scaffold',
    description:
      'Uses the Pages Router with a root page and custom app component, making it straightforward to grow into a routed dashboard.'
  },
  {
    title: 'Chakra UI foundation',
    description:
      'Wraps the app with ChakraProvider so future screens can share accessible components, theme values and layout primitives.'
  },
  {
    title: 'Custom dashboard palette',
    description:
      'Defines gray tokens from 50 to 900 and applies dark global body colors through the shared theme.'
  },
  {
    title: 'Typed React setup',
    description:
      'Includes TypeScript, React 18, Next typings and standard scripts for development, build, start and lint workflows.'
  }
]

const techStack = [
  'Next.js 12',
  'React 18',
  'TypeScript',
  'Chakra UI',
  'Emotion',
  'Framer Motion'
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareSourceCode',
  name: 'DashGo',
  description:
    'Next.js 12 dashboard starter with React 18, TypeScript, Chakra UI provider setup and custom theme tokens.',
  programmingLanguage: ['TypeScript', 'TSX', 'JavaScript'],
  runtimePlatform: 'Node.js',
  codeRepository: repositoryUrl,
  author: {
    '@type': 'Person',
    name: 'Andressa Regina Lopes Celestino',
    url: linkedinUrl
  }
}

export default function Home() {
  return (
    <>
      <Head>
        <title>DashGo | Next.js Chakra Dashboard Starter</title>
        <meta
          name="description"
          content="DashGo is a Next.js 12 and Chakra UI starter dashboard project with TypeScript, custom theme tokens and a simple React page scaffold."
        />
        <meta
          property="og:title"
          content="DashGo - Next.js Chakra Dashboard Starter"
        />
        <meta
          property="og:description"
          content="A TypeScript dashboard starter using Next.js, React 18, Chakra UI, Emotion and a custom gray color system."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={repositoryUrl} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <Box as="main" bg="gray.900" color="gray.50" minH="100vh">
        <Box
          as="section"
          borderBottom="1px solid"
          borderColor="gray.700"
          bg="gray.800"
        >
          <Container maxW="1120px" py={{ base: 16, md: 24 }}>
            <Stack spacing={6} maxW="820px">
              <Badge
                alignSelf="flex-start"
                colorScheme="green"
                letterSpacing="0"
                px={3}
                py={1}
                borderRadius="full"
              >
                Next.js dashboard scaffold
              </Badge>
              <Heading
                as="h1"
                fontSize={{ base: '4xl', md: '6xl' }}
                lineHeight="1"
                letterSpacing="0"
              >
                DashGo
              </Heading>
              <Text fontSize={{ base: 'lg', md: 'xl' }} color="gray.200">
                A TypeScript dashboard starter built on Next.js 12, React 18 and
                Chakra UI, with the application provider and custom design
                tokens already wired for future interface work.
              </Text>
              <Button
                as={Link}
                href={repositoryUrl}
                colorScheme="green"
                alignSelf="flex-start"
                _hover={{ textDecoration: 'none' }}
              >
                View GitHub repository
              </Button>
            </Stack>
          </Container>
        </Box>

        <Container maxW="1120px" py={{ base: 12, md: 16 }}>
          <Stack spacing={{ base: 12, md: 16 }}>
            <Box as="section" id="overview">
              <Stack spacing={4}>
                <Heading as="h2" size="xl" letterSpacing="0">
                  Overview
                </Heading>
                <Text color="gray.200" fontSize="lg" maxW="820px">
                  The current app renders a simple root page through
                  <Box as="span" color="green.200">
                    {' '}
                    src/pages/index.tsx
                  </Box>
                  . The core project foundation lives in
                  <Box as="span" color="green.200">
                    {' '}
                    src/pages/_app.tsx
                  </Box>
                  , where ChakraProvider wraps the Next app and injects a
                  shared theme from
                  <Box as="span" color="green.200">
                    {' '}
                    src/styles/theme.ts
                  </Box>
                  .
                </Text>
              </Stack>
            </Box>

            <Box as="section" id="features">
              <Stack spacing={6}>
                <Heading as="h2" size="xl" letterSpacing="0">
                  Features
                </Heading>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
                  {features.map((feature) => (
                    <Box
                      key={feature.title}
                      border="1px solid"
                      borderColor="gray.700"
                      borderRadius="md"
                      bg="gray.800"
                      p={6}
                    >
                      <Heading as="h3" size="md" mb={3} letterSpacing="0">
                        {feature.title}
                      </Heading>
                      <Text color="gray.300">{feature.description}</Text>
                    </Box>
                  ))}
                </SimpleGrid>
              </Stack>
            </Box>

            <Box as="section" id="tech-stack">
              <Stack spacing={4}>
                <Heading as="h2" size="xl" letterSpacing="0">
                  Tech Stack
                </Heading>
                <List display="flex" flexWrap="wrap" gap={3}>
                  {techStack.map((technology) => (
                    <ListItem
                      key={technology}
                      bg="gray.800"
                      border="1px solid"
                      borderColor="gray.700"
                      borderRadius="full"
                      px={4}
                      py={2}
                      color="gray.100"
                      fontWeight="semibold"
                    >
                      {technology}
                    </ListItem>
                  ))}
                </List>
              </Stack>
            </Box>

            <Box as="section" id="how-it-works">
              <Stack spacing={4}>
                <Heading as="h2" size="xl" letterSpacing="0">
                  How It Works
                </Heading>
                <Text color="gray.200" fontSize="lg" maxW="820px">
                  Next.js loads the root page from the Pages Router. Before that
                  page renders, the custom app component applies ChakraProvider
                  and the extended theme, so new dashboard screens can reuse the
                  same dark palette, spacing primitives and component system.
                </Text>
              </Stack>
            </Box>

            <Box
              as="section"
              borderTop="1px solid"
              borderColor="gray.700"
              pt={10}
            >
              <Stack spacing={3} maxW="820px">
                <Heading as="h2" size="lg" letterSpacing="0">
                  Author
                </Heading>
                <Text color="gray.200" fontSize="lg">
                  <Box as="strong" color="gray.50">
                    Andressa Regina Lopes Celestino — Control &amp; Automation
                    Engineer
                  </Box>
                  <br />
                  Develops typed web interfaces and dashboard foundations that
                  turn structured data and operational workflows into clear user
                  experiences.{' '}
                  <Link href={linkedinUrl} color="green.200" isExternal>
                    LinkedIn profile
                  </Link>
                </Text>
              </Stack>
            </Box>
          </Stack>
        </Container>
      </Box>
    </>
  )
}
