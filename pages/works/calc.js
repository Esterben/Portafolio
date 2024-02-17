import {
  Container,
  Badge,
  Link,
  List,
  ListItem
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Calculadora">
    <Container>
      <Title>
        Calculadora <Badge>2024</Badge>
      </Title>
      <P>
        Calculadora que realiza operaciones simples matematicas por ejemplo suma, resta
        multiplicacion y divison. Proyecto simple pero de uso cotidiano.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="#">
            PONER LINK AQUI <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Plataformas</Meta>
          <span>Aplicacion web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>C#, HTML, CSS, Javascript, ASP.NET, .NET</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/calculator.jpg" alt="calculator" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'