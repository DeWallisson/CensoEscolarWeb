import { Card, Button } from 'react-bootstrap';

export default function InfoCard({ imagem, title, text, textoBotao }) {
  return (
    <Card className="h-100 shadow-sm border-0">
      {imagem && (
        <Card.Img 
          variant="top" 
          src={imagem} 
          style={{ height: '200px', objectFit: 'cover' }} 
        />
      )}
      <Card.Body className="d-flex flex-column text-center">
        <Card.Title className="fw-bold">{title}</Card.Title>
        <Card.Text className="text-muted">{text}</Card.Text>
        <Button variant="primary" className="mt-auto">
          {textoBotao || "Acessar"}
        </Button>
      </Card.Body>
    </Card>
  );
}