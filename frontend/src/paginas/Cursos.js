import { ChakraProvider } from "@chakra-ui/react";


import {
  Box,
  SimpleGrid,
  Center,
  Flex,
  Heading,
} from "@chakra-ui/react";

const Cursos = () => {
  const basicBoxStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    boxSize: "200px",
    color: "white",
    textShadow: "0 0 40px white",
    fontWeight: "bold",
    fontSize: "25px",
    mx:"auto",
    px: 10
    
  };

  return (
    <div className="container mt-2 mb-3">
      <Center>
        <Heading fontSize="50px" h="100px" color="black">
          Cátalogo
        </Heading>
      </Center>

      <ChakraProvider>
        <SimpleGrid
          columns={{ sm: 2, md: 4 }}
          spacing="5"
          p="5"
          textAlign="center"
          rounded="lg"
        >
          <Box
            p="6"
            rounded="md"
            bg="white"
            as="a"
            color="blue.400"
            href="./CursosComputacion"
            fontWeight="bold"
          >
            <Flex flexWrap="wrap" gap="24px" justifyContent="space-evenly">
              {/* adding brightness property to the element */}
              <Box sx={basicBoxStyles} filter="auto" brightness="80%" background=
      'url(https://cdn.pixabay.com/photo/2016/11/23/14/45/coding-1853305_960_720.jpg) center/cover no-repeat' borderRadius='20' focusBorderColor='pink.400'>
                Ingenieria
              </Box>
            </Flex>
          </Box>

          <Box
            p="6"
            rounded="md"
            bg="white"
            as="a"
            color="blue.400"
            href="#"
            fontWeight="bold"
          >
            <Flex flexWrap="wrap" gap="24px" justifyContent="space-evenly">
              {/* adding brightness property to the element */}
              <Box sx={basicBoxStyles} filter="auto" brightness="80%" background=
      'url(https://cdn.pixabay.com/photo/2015/04/12/16/34/hammer-719068_960_720.jpg) center/cover no-repeat' borderRadius='20'>
                Derecho
              </Box>
            </Flex>
          </Box>
          <Box
            p="6"
            rounded="md"
            bg="white"
            as="a"
            color="blue.400"
            href="#"
            fontWeight="bold"
          >
            <Flex flexWrap="wrap" gap="24px" justifyContent="space-evenly">
              {/* adding brightness property to the element */}
              <Box sx={basicBoxStyles} filter="auto" brightness="80%" background=
      'url(https://cdn.pixabay.com/photo/2018/09/24/10/19/system-3699542_960_720.jpg) center/cover no-repeat' borderRadius='20'>
                Psicologia
              </Box>
            </Flex>
          </Box>
          <Box
            p="6"
            rounded="md"
            bg="white"
            as="a"
            color="blue.400"
            href="#"
            fontWeight="bold"
          >
            <Flex flexWrap="wrap" gap="24px" justifyContent="space-evenly">
              {/* adding brightness property to the element */}
              <Box sx={basicBoxStyles} filter="auto" brightness="80%" background=
      'url(https://cdn.pixabay.com/photo/2017/10/21/23/42/globus-2876182_960_720.jpg) center/cover no-repeat' borderRadius='20'>
                Odontologia
              </Box>
            </Flex>
          </Box>
          <Box
            p="6"
            rounded="md"
            bg="white"
            as="a"
            color="blue.400"
            href="#"
            fontWeight="bold"
          >
            <Flex flexWrap="wrap" gap="24px" justifyContent="space-evenly">
              {/* adding brightness property to the element */}
              <Box sx={basicBoxStyles} filter="auto" brightness="80%" background=
      'url(https://cdn.pixabay.com/photo/2015/07/10/20/54/stethoscope-840125_960_720.jpg) center/cover no-repeat' borderRadius='20'>
                Medicina
              </Box>
            </Flex>
          </Box>
          <Box
            p="6"
            rounded="md"
            bg="white"
            as="a"
            color="blue.400"
            href="#"
            fontWeight="bold"
          >
            <Flex flexWrap="wrap" gap="24px" justifyContent="space-evenly">
              {/* adding brightness property to the element */}
              <Box sx={basicBoxStyles} filter="auto" brightness="80%" background=
      'url(https://cdn.pixabay.com/photo/2020/05/11/18/45/cute-5159724_960_720.jpg) center/cover no-repeat' borderRadius='20'>
                Veterinaria
              </Box>
            </Flex>
          </Box>
          <Box
            p="6"
            rounded="md"
            bg="white"
            as="a"
            color="blue.400"
            href="#"
            fontWeight="bold"
          >
            <Flex flexWrap="wrap" gap="24px" justifyContent="space-evenly">
              {/* adding brightness property to the element */}
              <Box sx={basicBoxStyles} filter="auto" brightness="80%" background=
      'url(https://cdn.pixabay.com/photo/2015/05/07/15/48/bustos-756620_960_720.jpg) center/cover no-repeat' borderRadius='20'>
                Filosofia
              </Box>
            </Flex>
          </Box>

          <Box
            p="6"
            rounded="md"
            bg="white"
            as="a"
            color="blue.400"
            href="#"
            fontWeight="bold"
          >
            <Flex flexWrap="wrap" gap="24px" justifyContent="space-evenly">
              {/* adding brightness property to the element */}
              <Box sx={basicBoxStyles} filter="auto" brightness="80%" background=
      'url(https://cdn.pixabay.com/photo/2016/05/12/16/35/earth-1388003_960_720.jpg) center/cover no-repeat'borderRadius='20'>
                Ciencias
              </Box>
            </Flex>
          </Box>
          <Box
            p="6"
            rounded="md"
            bg="white"
            as="a"
            color="blue.400"
            href="#"
            fontWeight="bold"
          >
            <Flex flexWrap="wrap" gap="24px" justifyContent="space-evenly">
              {/* adding brightness property to the element */}
              <Box sx={basicBoxStyles} filter="auto" brightness="80%" background=
      'url(https://cdn.pixabay.com/photo/2015/11/10/08/22/pay-1036469_960_720.jpg) center/cover no-repeat' borderRadius='20'>
                Contaduria
              </Box>
            </Flex>
          </Box>
          <Box
            p="6"
            rounded="md"
            bg="white"
            as="a"
            color="blue.400"
            href="#"
            fontWeight="bold"
          >
            <Flex flexWrap="wrap" gap="24px" justifyContent="space-evenly">
              {/* adding brightness property to the element */}
              <Box sx={basicBoxStyles} filter="auto" brightness="80%" background=
      'url(https://cdn.pixabay.com/photo/2016/06/24/10/47/house-1477041_960_720.jpg) center/cover no-repeat' borderRadius='20'>
                Arquitectura
              </Box>
            </Flex>
          </Box>

          <Box
            p="6"
            rounded="md"
            bg="white"
            as="a"
            color="blue.400"
            href="#"
            fontWeight="bold"
          >
            <Flex flexWrap="wrap" gap="24px" justifyContent="space-evenly">
              {/* adding brightness property to the element */}
              <Box sx={basicBoxStyles} filter="auto" brightness="80%" background=
      'url(https://cdn.pixabay.com/photo/2017/08/30/07/52/money-2696219_960_720.jpg) center/cover no-repeat' borderRadius='20'>
                Economía
              </Box>
            </Flex>
          </Box>

          <Box
            p="6"
            rounded="md"
            bg="white"
            as="a"
            color="blue.400"
            href="#"
            fontWeight="bold"
          >
            <Flex flexWrap="wrap" gap="24px" justifyContent="space-evenly">
              {/* adding brightness property to the element */}
              <Box sx={basicBoxStyles} filter="auto" brightness="80%" background=
      'url(https://cdn.pixabay.com/photo/2017/02/01/13/52/analysis-2030261_960_720.jpg) center/cover no-repeat' borderRadius='20'>
                Química
              </Box>
            </Flex>
          </Box>
        </SimpleGrid>
      </ChakraProvider>
    </div>
  );
};

export default Cursos;
