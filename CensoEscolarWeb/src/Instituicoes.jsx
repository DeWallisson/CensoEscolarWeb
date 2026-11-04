import dadosEscolas from './datasets/instituicoes_pb.json';

export default function Instituicoes() {
  const lista = Array.isArray(dadosEscolas) ? dadosEscolas : [];

  const top10Escolas = [...lista]
    .sort((a, b) => (b.qt_mat_bas || b.QT_MAT_BAS || 0) - (a.qt_mat_bas || a.QT_MAT_BAS || 0))
    .slice(0, 10);

  return (
    <div className="container mt-4 mb-5">
      <h2 className="mb-4 text-primary text-center">
        Top 10 Instituições com Mais Matrículas (PB)
      </h2>

      <div className="table-responsive shadow-sm rounded">
        <table className="table table-striped table-hover align-middle">
          <thead className="table-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Escola</th>
              <th scope="col">Município</th>
              <th scope="col">Região</th>
              <th scope="col" className="text-end">Total de Matrículas</th>
            </tr>
          </thead>
          <tbody>
            {top10Escolas.map((escola, index) => (
              <tr key={escola.co_entidade || escola.CO_ENTIDADE || index}>
                <th scope="row" className="fw-bold">{index + 1}º</th>
                <td>
                  {escola.no_entidade || escola.NO_ENTIDADE || escola.NO_ESCOLA || `Escola INEP: ${escola.co_entidade || escola.CO_ENTIDADE}`}
                </td>
                <td>
                  {escola.no_municipio || escola.NO_MUNICIPIO || 'Paraíba'}
                </td>
                <td>
                  {escola.no_regiao || escola.NO_REGIAO || 'PB'}
                </td>
                <td className="text-end fw-bold text-success">
                  {(escola.qt_mat_bas || escola.QT_MAT_BAS || 0).toLocaleString('pt-BR')}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}