import { Titulo } from "./componentes/Titulo";
import { Quadrado } from "./componentes/Quadrado";
import { ListaDeItens } from "./componentes/ListaItens";
import { Paragrafo } from "./componentes/Paragrafo";
import { Cabecalho } from "./componentes/Cabecalho";
import Botao from "./componentes/Botao";
import { Rodape } from "./componentes/rodape";
import { Imagem } from "./componentes/imagem";

export default function Home() {
    return (
        <div>
            <header>
                <Cabecalho />
            </header>

            <main>
                <Titulo />
                <Quadrado />
                <Quadrado />
                <Quadrado />
                <ListaDeItens />
                <Botao />
                <Imagem />
                <Paragrafo />
            </main>
            <footer>
                <Rodape />
            </footer>
        </div>
    );
}
