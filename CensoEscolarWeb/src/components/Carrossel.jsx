import { Carousel } from 'react-bootstrap';
import './Carrossel.css';

const Carrossel = ({ itensCarrossel = [] }) => {
  const slides = itensCarrossel.length > 0 ? itensCarrossel : [
    {
      srcImagem: "https://images.unsplash.com/photo-1719159381962-4170890ada4e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
      titulo: "Censo Escolar",
      descricao: "Panorama detalhado das Instituições de Ensino da Paraíba."
    },
    {
      srcImagem: "https://images.unsplash.com/photo-1771758249853-415175dc29b9?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
      titulo: "Ranking de Matrículas",
      descricao: "Confira as principais escolas do estado em volume de alunos."
    }
  ];

  return (
    <Carousel>
      {slides.map(({ srcImagem, titulo, descricao }, i) => (
        <Carousel.Item key={i}>
          <img className="carousel-img" src={srcImagem} alt={titulo} />
          <Carousel.Caption>
            <h3>{titulo}</h3>
            <p>{descricao}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Carrossel;