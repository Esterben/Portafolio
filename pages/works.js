import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import thumbCalc from '../public/images/works/calc.jpg'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>
      <SimpleGrid column={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="calc" title="calculadora" thumbnail={thumbCalc}>
            Calculadora al estilo de Mac OSX que realiza operaciones basicas.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
