import {
  Box,
  Flex,
  List,
  Text,
  UnorderedList,
  Heading,
  ListItem,
  Button,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Logo } from "./Logo";
import { Link } from "react-router-dom";

const PecasSelecionadas = (lista) => {
  function mapData(list) {
    return list.map((x) => (
      <ListItem key={x.peca}>
        {x.peca}: {x.tipo}
      </ListItem>
    ));
  }

  function showData(list) {
    return <UnorderedList> {mapData(list)} </UnorderedList>;
  }
  const data = {
    descricao: "DescricaoDescricaoDescr",
    lista: [
      {
        peca: "peca1",
        tipo: "tipo1",
      },
      {
        peca: "peca2",
        tipo: "tipo2",
      },
    ],
  };

  return (
    <>
      {" "}
      <Flex direction="column" >
        <Flex>
          <Box
            my={6}
            textAlign="left"
            p={8}
            borderWidth={1}
            borderRadius={8}
            boxShadow="lg"
            padding={5}
          >
            <Heading marginBottom={5}> Peças escolhidas:</Heading>
            <Flex>
              <Flex> {showData(data.lista)}</Flex>
            </Flex>
          </Box>
          <Box
            my={6}
            textAlign="center"
            p={8}
            borderWidth={1}
            borderRadius={8}
            boxShadow="lg"
            padding={5}
          >
            <Heading> Descrição: </Heading>
            <Text> {data.descricao}</Text>
          </Box>
        </Flex>
      </Flex>
    </>
  );
};
export default PecasSelecionadas;
