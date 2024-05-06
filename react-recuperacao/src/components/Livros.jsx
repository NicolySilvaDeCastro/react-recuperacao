export default function Livros({titulo, autor, ano, sinopse}){
    return(
        <section className="livros">
            <div className= "informacao">
            <h1>{titulo}</h1><br></br>
            <p>{autor}</p><br></br>
            <p>{ano}</p><br></br>
            <p>{sinopse}</p><br></br>
            </div>

            <img src="imglivro.jpg" alt="imagem"></img>
        </section>
    )
    
    }