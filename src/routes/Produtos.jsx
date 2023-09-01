import { Link } from "react-router-dom"
import { ListaProdutos } from "../Components/ListaProdutos"
import "./Produtos.css"
import {MdOutlineDeleteOutline as Trash} from "react-icons/md"
import {BiMessageSquareAdd as Add} from "react-icons/bi"

export default function Produtos() {

document.title = "Lista de Produtos"

const tbEstilos = {
  textAlign: "Center",
  letterSpacing: "2px",
  color:"#0000ff",
  textDecoration:"none",


}

  return (
    <div>
        <h1 style={tbEstilos}>Produtos</h1>

        <table>
            <thead>
            <tr>
                <th>ID</th>
                <th>NOME</th>
                <th>PREÇO</th>
                <th>EDITAR</th>
            </tr>
            </thead>
            <tbody>
            {ListaProdutos.map((produto,indice)=>(
                 <tr key={indice}>
                    <td>{produto.id}</td>
                    <td>{produto.nome}</td>
                    <td>{produto.preco}</td>
                    <td><Link to={`/editar/produtos/${produto.id}`}><Add/></Link> | <Link to={`/excluir/produtos/${produto.id}`}> <Trash/> </Link></td>
                 </tr>
            ))}
        </tbody>
        <tfoot>
        <tr>
           <td colSpan={2} style={{color: 'red', textAlign:"center"}}>PRODUTOS</td>
        </tr>
        </tfoot>
        </table>
        
    </div>
  )
}
