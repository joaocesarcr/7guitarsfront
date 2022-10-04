import {
  Box,
  Flex,
  IconButton,
  Button,
  Stack,
  HStack,
  useColorModeValue,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Logo } from "./Logo";
import { Link } from "react-router-dom";
import PecasSelecionadas from "./PecasSelecionadas.jsx";

const Pedido = (data) => {
  const { getDisclosureProps, getButtonProps } = useDisclosure();

  data = {
    titulo: "titulo",
    tipo: "tipo",
    preco: "$$",
    autor: "autor",
    data: "data",
  };
  const buttonProps = getButtonProps();
  const disclosureProps = getDisclosureProps();
  return (
    <>
      <Box
        my={6}
        textAlign="left"
        p={8}
        borderWidth={1}
        borderRadius={8}
        boxShadow="lg"
      >
        <Flex align="space" justifyContent="center">
          <Flex direction="column">
            <Flex gap="20" align="center">
              <Text> {data.titulo} </Text>
              <Text> {data.tipo} </Text>
              <Text> {data.preco} </Text>
              <Text> {data.autor} </Text>
              <Text> {data.data} </Text>
              <Button {...buttonProps}>
                {" "}
                <HamburgerIcon />{" "}
              </Button>
            </Flex>
            <Flex direction="column" {...disclosureProps}>
              <PecasSelecionadas {...disclosureProps} />
              <Button width="full" mt={4} type="submit">
                Adicionar ao Carrinho
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};
export default Pedido;
