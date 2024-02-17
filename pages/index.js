import NextLink from 'next/link'
import {
  Container,
  Heading,
  Box,
  Button,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Image from 'next/image'

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hola, Soy desarrollador de software en proceso!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Gabriel Esteban Velásquez L.
          </Heading>
          <p>Software developer (Angular, SQL, Python, .NET, ASP.NET)</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <Image
              src="/images/about.png"
              alt="Profile image"
              width="100"
              height="100"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>

          Soy un estudiante apasionado de la
          ingeniería electrónica, a lo largo de
          mi carrera me motive por aprender
          programación. Me destaco en el
          trabajo grupal por mis habilidades
          de comunicación y aplicación de
          conocimientos. Busco una
          oportunidad laboral para aprender
          mas sobre la programación y
          aplicarlo en proyectos de alto valor a
          la sociedad

        </Paragraph>
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/works"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
          >
            Portafolio
          </Button>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1999</BioYear>
          Fecha de nacimiento
        </BioSection>
        <BioSection>
          <BioYear>2016</BioYear>
          Diseño e integracion de Multimedia - SENA
        </BioSection>
        <BioSection>
          <BioYear>2024</BioYear>
          Ingeniería Electrónica - Universidad de Nariña (En Proceso)
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Me ♥
        </Heading>
        <Paragraph>
          Videojuegos, Musica, Edicion audiovisual, Libros, senderismo
        </Paragraph>
      </Section>
    </Container>
  </Layout >
)

export default Home
export { getServerSideProps } from '../components/chakra'
