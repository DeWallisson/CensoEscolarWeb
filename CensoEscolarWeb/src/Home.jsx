import { Container, Row, Col } from 'react-bootstrap';
import Carrossel from './components/Carrossel';
import InfoCard from './components/InfoCard';

export default function Home() {
  const dadosCards = [
    {
      imagem: "https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=1172&auto=format&fit=crop",
      title: "Dados do Censo",
      text: "Informações consolidadas e detalhadas sobre as escolas estaduais da Paraíba.",
      textoBotao: "Ver Dados"
    },
    {
      imagem: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1170&auto=format&fit=crop",
      title: "Ranking de Matrículas",
      text: "Acompanhe as instituições de ensino que lideram o volume de alunos no estado.",
      textoBotao: "Ver Ranking"
    },
    {
      imagem: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1132&auto=format&fit=crop",
      title: "Transparência",
      text: "Visualização acessível para dados educacionais abertos e relatórios oficiais.",
      textoBotao: "Saiba Mais"
    }
  ];

  return (
    <Container className="mt-4 mb-5">
      <Carrossel />
      
      <Row className="mt-4">
        {dadosCards.map((card, index) => (
          <Col md={4} className="mb-4" key={index}>
            <InfoCard 
              imagem={card.imagem}
              title={card.title} 
              text={card.text}
              textoBotao={card.textoBotao}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}