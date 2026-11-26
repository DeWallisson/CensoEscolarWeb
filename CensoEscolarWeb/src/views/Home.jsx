import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import Carrossel from '../components/Carrossel';

const Home = () => {
  let itensCarrossel = [
    {
      srcImagem:
        'https://plus.unsplash.com/premium_photo-1680807869780-e0876a6f3cd5?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      titulo: 'Nossas Salas de aula',
      descricao:
        'Nos Institutos Federais você tem uma infraestrutura de laboratórios confortável.',
    },
    {
      srcImagem:
        'https://images.unsplash.com/photo-1758270705031-ebd46917a454?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
      titulo: 'Professores qualificados',
      descricao: 'Professores com pós-graduação.',
    },
  ];
  return (
    <>
      {/* Carrossel */}
      <Carrossel itensCarrossel={itensCarrossel}></Carrossel>
      {/* Cards */}
      <Container className="mt-2">
        <Row>
          <Col>
            <Card>
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card>
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1778489769184-45868633c527?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card>
              <Card.Img
                variant="top"
                src="https://plus.unsplash.com/premium_photo-1661688307556-61310f23a42c?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;