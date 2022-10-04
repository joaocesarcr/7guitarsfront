import { React, useState, useEffect } from 'react';
import axios from 'axios';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  ChakraProvider,
  Select,
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
} from '@chakra-ui/react';
import MainNav from '../components/MainNav';
axios.defaults.withCredentials = true;

function CadastroEstoque(secoes) {
  const secoesArray = secoes;
  // console.log(secoesArray);
  // const [secoesArray, setSecoesArray] = useState([]);
  const [partArray, setPartArray] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const [part, setPart] = useState({
    Cordas: [],
    Corpos: [],
    Controles: [],
    Pescocos: [],
    Cabecas: [],
    Captadores: [],
  });

  // useEffect(() => {
  //   // let partsSections = [];
  //   const fetchData = async (secao) => {
  //     const response = await axios(
  //       'https://sevenguitars.herokuapp.com/getPartsOfType?section=' + secao
  //     );
  //     const data = response.data;
  //     // partsSections.push(data.Variacoes);
  //     return data;
  //   };
  //   secoesArray.forEach((secao) => {
  //     // console.log(secao.name);
  //     let data = fetchData(secao.name);
  //     for (let [key, value] of Object.entries(part)) {
  //       if (secao.name === key) {
  //         setPart((prev) => {
  //           const stateObj = { ...prev };
  //           stateObj[secao.name] = data.Variacoes;
  //           return stateObj;
  //         });
  //       }
  //     }
  //   });
  //   console.log(part);
  //   // setPartArray(partsSections);
  // }, [secoesArray]);

  useEffect(() => {
    const fetchData = async (secao) => {
      const response = await axios(
        'https://sevenguitars.herokuapp.com/getPartsOfType?section=' + secao
      );
      const data = response.data;
      // setPostArray(data.Variacoes);
    };
    fetchData();
  }, [secoesArray]);

  const getVariations = async (secao) => {
    const response = await axios(
      'https://sevenguitars.herokuapp.com/getPartsOfType?section=' + secao
    );
    const data = response.data;
    return data;
  };
  // console.log(secoesArray);
  secoesArray.forEach((secao) => {
    getVariations(secao.name).then((name) => console.log(name));
  });

  return (
    <ChakraProvider theme={theme}>
      <Flex
        width="full"
        height="full"
        align="center"
        // justifyContent="center"
        h="100vh"
        bgColor="purple"
        direction="column"
      >
        <Box my={12} textAlign="center">
          <Heading color="black">Gerenciar Estoque</Heading>
        </Box>
        <Box
          my={6}
          textAlign="left"
          p={8}
          maxWidth="600px"
          borderWidth={1}
          borderRadius={8}
          boxShadow="lg"
          bgColor="white"
        >
          <Accordion defaultIndex={[0]} allowToggle minWidth="300px">
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Section 1 title
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Section 2 title
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>
      </Flex>
    </ChakraProvider>
  );
}

export default CadastroEstoque;
