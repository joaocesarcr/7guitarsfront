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
        height="full"
        align="center"
        justifyContent="center"
        h="100vh"
      >
        <Box width="50%">
          <Pedido />
          <Pedido />
          <Pedido />
          <Pedido />
        </Box>
      </Box>
    </ChakraProvider>
  );
}
export default Biblioteca;
