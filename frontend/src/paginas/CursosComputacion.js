import { ChakraProvider } from "@chakra-ui/react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import {
  Center,
  Image,
  Heading,
  CardBody,
  Card,
  Stack,
  Text,
  Button,
  CardFooter,
} from "@chakra-ui/react";

import cursoC1 from "../assets/cursosC/cursoC1.jpg";
import cursoC2 from "../assets/cursosC/cursoC2.jpg";
import cursoC3 from "../assets/cursosC/cursoC3.jpg";
import cursoC4 from "../assets/cursosC/cursoC4.jpg";
import cursoC5 from "../assets/cursosC/cursoC5.jpg";
import cursoC6 from "../assets/cursosC/cursoC6.jpg";

// se procede a manejar como arreglo los diferentes cursos con sus diferentes imagenes
const fotos = [cursoC1, cursoC2, cursoC3, cursoC4, cursoC5, cursoC6];
const nombres = ["Python", "Java", "React", "JavaScript", "C", "C++"];
const descripcion = [
  "En este curso podras empezar desde el nivel básico para comprender el lenguaje.",
  "En este curso podras empezar desde el nivel básico para comprender el lenguaje.",
  "En este curso podras empezar desde el nivel básico para comprender esta biblioteca de Javascript.",
  "En este curso podras empezar desde el nivel básico para comprender el lenguaje.",
  "En este curso podras empezar desde el nivel básico para comprender el lenguaje.",
  "En este curso podras empezar desde el nivel básico para comprender el lenguaje.",
];

function CursosComputacion() {
  return (
    <div className="container mt-2 mb-3">
      <Center>
        <Heading fontSize="50px" h="50px" color="black" mb={5}>
          Cursos de Computación
        </Heading>
      </Center>

      <ChakraProvider>
        <Row xs={1} md={2} className="g-2 justify-content-center mt-5">
          {Array.from({ length: 6 }).map((_, idx) => (
            <Col className="col-md-3 pl-5 w-50">
              <Card
                direction={{ base: "column", sm: "row" }}
                overflow="hidden"
                variant="outline"
              >
                <Image
                
                  objectFit="cover"
                  maxW={{ base: "100%", sm: "200px" }}
                  boxSize='100%'
                  src={fotos[idx]}
                  alt=""
                />
                {/* se procede a poner todos los elementos del arreglo que nos interesa*/}
                <Stack>
                  <CardBody>
                    <Heading size="md">{nombres[idx]}</Heading>

                    <Text py="2">{descripcion[idx]}</Text>
                  </CardBody>

                  <CardFooter>
                    <Button variant="solid" colorScheme="blue">
                      Acceder
                    </Button>
                  </CardFooter>
                </Stack>
              </Card>
            </Col>
          ))}
        </Row>
      </ChakraProvider>
    </div>
  );
}

export default CursosComputacion;
