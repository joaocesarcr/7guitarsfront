import { React, useState } from "react";
import {
  ChakraProvider,
  Flex,
  Box,
  Heading,
  VStack,
  Grid,
  theme,
  InputGroup,
  InputLeftElement,
  Button,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import MainNav from "../components/MainNav";
import Pedido from "../components/Pedido";

function Biblioteca() {
  return (
    <ChakraProvider theme={theme}>
      <MainNav />
      <Box
        width="full"
        align="center"
        justifyContent="center"
overflowY="scroll"
      >
        <Box height="100vh"  width="50%" >
          {mapData(fData)}
        </Box>
      </Box>
    </ChakraProvider>
  );
}
export default Biblioteca;

function mapData(data) {
  return data.map( (x) => ( <Pedido data={x}/>));
}
const fData = [
  {
    titulo: "Flea",
    tipo: "Baixo",
    preco: "R$500,00",
    autor: "José",
    data: "13/02/2022",
    descricao: "Baixo bom custo benefício",
  },
  {
    titulo: "Thunder",
    tipo: "Baixo",
    preco: "R$3.500,00",
    autor: "Maria",
    data: "13/02/2022",
    descricao: "Melhor baixo possível",
  },
  {
    titulo: "Jimi",
    tipo: "Guitarra",
    preco: "R$1.200,00",
    autor: "João",
    data: "13/02/2022",
    descricao: "Guitarra para iniciantes",
  },
  {
    titulo: "Pat",
    tipo: "Violão",
    preco: "R$990,00",
    autor: "Joana",
    data: "19/02/2022",
    descricao: "Violão de aço",

  },

]
