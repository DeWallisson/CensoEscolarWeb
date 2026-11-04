import { useState } from 'react';
import Home from './Home';
import Instituicoes from './Instituicoes';
import Header from './components/Header';
import Footer from './components/Footer';

export default function App() {
  const [paginaAtual, setPaginaAtual] = useState('home');

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header paginaAtual={paginaAtual} setPaginaAtual={setPaginaAtual} />

      <main className="flex-fill">
        {paginaAtual === 'home' && <Home />}
        {paginaAtual === 'instituicoes' && <Instituicoes />}
      </main>

      <Footer />
    </div>
  );
}