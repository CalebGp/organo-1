import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import "./colaborador.css";

const Colaborador = ({ colaborador, corDeFundo, aoDeletar, mudarFavotito }) => {
  const propsFavorito = {
    size: 25,
    onClick: (e) => {
      e.preventDefault();
      mudarFavotito();
    },
  };
  return (
    <div className="colaborador">
      <AiFillCloseCircle
        size={25}
        onClick={(e) => {
          aoDeletar(colaborador.id);
        }}
        className="deletar"
      />
      <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
        <img src={colaborador.imagem} alt={colaborador.nome} />
      </div>
      <div className="rodape">
        <h4>{colaborador.nome}</h4>
        <h5>{colaborador.cargo}</h5>
        <div className="favoritar">
          {colaborador.favorito ? (
            <AiFillHeart {...propsFavorito} color="#ff0000" />
          ) : (
            <AiOutlineHeart {...propsFavorito} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Colaborador;
