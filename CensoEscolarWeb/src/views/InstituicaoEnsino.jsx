import { useEffect, useState } from 'react';
import {
  Button,
  Col,
  Form,
  OverlayTrigger,
  Row,
  Table,
  Tooltip,
} from 'react-bootstrap';
import { FaPlus, FaTrash } from 'react-icons/fa';
import { FaMagnifyingGlass } from 'react-icons/fa6';

const InstituicaoEnsino = () => {
  const [instituicoesEnsino, setInstituicoesEnsino] = useState([]);

  const listarInstituicoesEnsino = () => {
    console.log('Listando as IEs');

    fetch('http://localhost:5000/instituicoes?_page=1&_per_page=10')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Erro na resposta da API.');
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        const lista = Array.isArray(data) ? data : (data.data ?? []);
        setInstituicoesEnsino([...lista]);
      })
      .catch((error) => {
        console.log('Erro na requisição da API.', error);
      });
  };

  useEffect(() => {
    listarInstituicoesEnsino();
  }, []);

  const buscarHandleClick = (event) => {};

  const handleClickAdicionarIE = (event) => {
    event?.preventDefault();
    console.log('Adicionando uma IE');

    const novaInstituicao = {
      no_entidade: 'IFPB - Campina Grande',
      co_entidade: '25000001',
      qt_mat_bas: 0,
      qt_mat_inf: 0,
      qt_mat_fund: 0,
      qt_mat_med: 0,
      qt_mat_prof: 0,
      qt_mat_eja: 0,
      qt_mat_esp: 0,
    };

    fetch('http://localhost:5000/instituicoes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(novaInstituicao),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Falha ao adicionar IE (status ${response.status})`);
        }
        return response.json();
      })
      .then((criada) => {
        setInstituicoesEnsino((prev) => [...prev, criada]);
      })
      .catch((error) => {
        console.error('Erro ao adicionar instituição de ensino:', error);
        alert('Não foi possível adicionar a instituição de ensino.');
      });
  };

  const removerHandleClick = (id) => {
    const confirmou = window.confirm(
      'Tem certeza de que deseja remover esta instituição de ensino?',
    );

    if (!confirmou) {
      return;
    }

    if (id === undefined || id === null) {
      console.log('Item sem ID no servidor; não foi possível enviar DELETE.');
      return;
    }

    console.log('Removendo IE de id:', id);

    fetch(`http://localhost:5000/instituicoes/${id}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Falha ao remover (status ${response.status})`);
        }
        setInstituicoesEnsino((prev) => prev.filter((item) => item.id !== id));
      })
      .catch((error) => {
        console.log('Erro ao remover instituição de ensino:', error);
        alert('Não foi possível remover a instituição de ensino.');
      });
  };

  return (
    <>
      <Row className="pt-4">
        <Col xs="10" lg="10">
          <Form.Control type="text" placeholder="Busca" />
        </Col>
        <Col xs="2" lg="2" className="d-flex gap-2">
          <OverlayTrigger placement="top" overlay={<Tooltip>Buscar</Tooltip>}>
            <Button onClick={buscarHandleClick}>
              <FaMagnifyingGlass />
            </Button>
          </OverlayTrigger>
          <OverlayTrigger
            placement="top"
            overlay={<Tooltip>Adicionar</Tooltip>}
          >
            <Button onClick={handleClickAdicionarIE}>
              <FaPlus />
            </Button>
          </OverlayTrigger>
        </Col>
      </Row>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Nome</th>
          </tr>
        </thead>
        <tbody>
          {instituicoesEnsino.map((instituicaoEnsino, i) => {
            return (
              <tr key={instituicaoEnsino.id ?? `local-${i}`}>
                <td>{i + 1}</td>
                <td>
                  {instituicaoEnsino.co_entidade}{' '}
                  <OverlayTrigger
                    placement="top"
                    overlay={<Tooltip>Remover</Tooltip>}
                  >
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => removerHandleClick(instituicaoEnsino.id)}
                    >
                      <FaTrash />
                    </Button>
                  </OverlayTrigger>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default InstituicaoEnsino;
