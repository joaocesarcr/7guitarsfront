import {
  Heading,
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

const SelecionarOpcao = (data) => {
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
        <Heading>{data.title}</Heading>

      </Box>
    </>
  );
};
export default SelecionarOpcao;
