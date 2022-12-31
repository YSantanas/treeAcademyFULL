import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import Arbol from "../assets/logoArbol.png";

const Inicio = () => {
  return (
    <div
      class="container justify-content-center "
      style={{ minHeight: "80vh", paddingTop: "2vh",textAlign:"center" }}
    >
      
      <h1 className="text-center text-dark">Quiénes Somos</h1>
      <Card class="container justify-content-center"  style={{ width: "50", alignItems:"center" }}>
        <Card.Img
          variant="top"
          src={Arbol}

          style={{ width: "20%", margin: "4px"}}
        />
        <Card.Body>
          <Card.Title>¿Porqué la necesidad de crear TreeAcademy?</Card.Title>
          <p class="text-start text-break text-wrap fs-6">
          
            Esta idea surgió de la realización de un proyecto academico, pronto apareció la imagen que seria
            nuestro simbólo y la que podran observar a lo largo de la web. 

          </p>
            <p class="text-start text-break text-wrap fs-6">
            El significado del árbol no es más que 
            evocar el conocimiento, un arbol esta compuesto por sus raices que vendría siendo nuestro conocimiento base,
            pero pronto ese conocimiento base va creciendo y surgen las ramas que son precisamente esos cursos que aqui albergamos.
            </p>
            <p class="text-start text-break text-wrap fs-6">
            TreeAcademy pretende encontrar la mejor educación al alcance de todos, el conocimiento crece y crede hasta hacer un 
            inmenso arbol de conocimiento, que nos apoyará en el futuro para encontrar mejores ofertas laborales o academicas.
            </p>
          
        </Card.Body>
      </Card>
    </div>
  );
};
export default Inicio;
