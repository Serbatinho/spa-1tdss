import { useParams } from "react-router-dom"
import { ListaProdutos } from "../Components/ListaProdutos"


export default function EditarProdutos() {

  document.title = "Editar Produtos"

  const {id} = useParams()

  const produtoRecuperadoById = ListaProdutos.filter((produto)=>{
    // return String(produto._id) === id
    if(produto.id == parseInt(id)){
      return produto;
    }

  });

  return (
    <>
      <h3>EditarProdutos {id}</h3>
      <p>produto selecionado - {id}</p>
      <p>produto selecionado - {produtoRecuperadoById[0].nome}</p>
    </>
  )
}
