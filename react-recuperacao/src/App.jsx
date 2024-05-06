import './App.css'
import Cabecalho from './components/Cabecalho'
import Banner from './components/Banner'
import Livros from './components/Livros'
import Galeriadelivros from './components/Galeriadelivros'
import Rodape from './components/Rodape'
function App() {
  
 return(
  <>
 <Cabecalho/>
 <Banner/>
 <Livros 
 titulo={"As aventuras de Sherlock Holmes"} 
 autor={"Arthur Conan Doyle"}
 ano={"2017"}
 sinopse={"De seu apartamento em Baker Street, Sherlock Holmes exerce seus poderes de dedução em busca de justiça e verdade, aventurando-se na nebulosa Londres vitoriana acompanhado de seu fiel ajudante Dr. Watson.Esta coleção clássica de contos de Holmes inclui muitas das façanhas mais amadas do detetive: Holmes é confrontado por uma cobra venenosa em 'A Aventura da Banda Salpicada', mistificado por um polegar desaparecido em 'A Aventura do Polegar do Engenheiro' e seduzido por um belo cantor de ópera em 'Um Escândalo na Boêmia', nunca perdendo sua famosa frieza."}/>
<Galeriadelivros/>
<Rodape/>
  </>
 ) 
}

export default App
