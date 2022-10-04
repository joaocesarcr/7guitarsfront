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
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from '@chakra-ui/react';
import MainNav from '../components/MainNav';
// axios.defaults.withCredentials = true;

function CadastroEstoque(secoes) {
  const secoesArray = secoes;
  // console.log(secoesArray);
  // const [secoesArray, setSecoesArray] = useState([]);
  const [partArray, setPartArray] = useState();
  const [partCordas, setPartCordas] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const partes = {
    Cordas: [],
    Corpos: [],
    Controles: [],
    Pescocos: [],
    Cabecas: [],
    Captadores: [],
  };

  // useEffect(() => {
  //   // let partsSections = [];
  //   const fetchData = async (secao) => {
  //     const response = await axios(
  //       'http://sevenguitars.herokuapp.com/getPartsOfType?section=' + secao
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

  // let teste = fetchData('Cordas');
  // teste.then((result) => {
  //   console.log(result.Variacoes);
  // });

  // function mapPartInfos(section, array) {
  //   return partCordas['Variacoes'].map((key, index) => (
  //     <TabPanel>
  //       <Text>{key.text}</Text>
  //       <FormLabel>Preço</FormLabel>
  //       <Input
  //         type="text"
  //         name="price"
  //         value={key.price}
  //         // onChange={(e) => setValue(e.target.value)}
  //         // onKeyPress={handleKeyPress}
  //         autoComplete="off"
  //       />
  //       <FormLabel>Quantidade</FormLabel>
  //       <Input
  //         type="text"
  //         name="quantity"
  //         value={key.quantity}
  //         // onChange={(e) => setValue(e.target.value)}
  //         // onKeyPress={handleKeyPress}
  //         autoComplete="off"
  //       />
  //       <Text>{key.description}</Text>
  //     </TabPanel>
  //   ));
  // }

  // console.log(partCabecas);
  // useEffect(() => {
  //   const fetchData = async (secao) => {
  //     const response = await axios(
  //       'http://sevenguitars.herokuapp.com/getPartsOfType?section=' + secao
  //     );
  //     const data = response.data;
  //     return data;
  //   };

  //   return () => {
  //     secoesArray.forEach((secao) => {
  //       let teste = fetchData(secao.name);
  //       teste.then((result) => {
  //         // setPartArray(result['Variacoes']);
  //         partes[secao.name] = result['Variacoes'];
  //       });
  //     });
  //     setPartCabecas(partes['Cabecas']);
  //     console.log(partCabecas);
  //   };
  // }, [partes, secoesArray, partCabecas]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios(

        'http://sevenguitars.herokuapp.com/getPartsOfType?section=' + secao
      );
      const data = response.data;
      setPartCordas(data.Variacoes);
    };
    fetchData();
  }, []);


  const getVariations = async (secao) => {
    const response = await axios(
      'http://sevenguitars.herokuapp.com/getPartsOfType?section=' + secao
    );
  }

  if (partCordas) {
    console.log(partCordas);
  }

  // useEffect(() => {
  //   axios
  //     .get('http://sevenguitars.herokuapp.com/getPartsOfType?section=Cordas')
  //     .then((resp) => {
  //       setPartCordas(resp.data);
  //       // console.log(partCordas['Variacoes']);
  //     });

  //   function mapPartInfos(partCordas) {
  //     return partCordas['Variacoes'].map((key, index) => (
  //       <TabPanel>
  //         <Text>{key.text}</Text>
  //         <FormLabel>Preço</FormLabel>
  //         <Input
  //           type="text"
  //           name="price"
  //           value={key.price}
  //           // onChange={(e) => setValue(e.target.value)}
  //           // onKeyPress={handleKeyPress}
  //           autoComplete="off"
  //         />
  //         <FormLabel>Quantidade</FormLabel>
  //         <Input
  //           type="text"
  //           name="quantity"
  //           value={key.quantity}
  //           // onChange={(e) => setValue(e.target.value)}
  //           // onKeyPress={handleKeyPress}
  //           autoComplete="off"
  //         />
  //         <Text>{key.description}</Text>
  //       </TabPanel>
  //     ));
  //   }

  //   // console.log(partCordas['Nome']);
  //   // partCordas['Variacoes']
  // }, [partCordas]);

  // console.log(partes);
  // console.log(partArray);

  // console.log(teste);

  // useEffect(() => {
  //   const fetchData = async (secao) => {
  //     const response = await axios(
  //       'http://sevenguitars.herokuapp.com/getPartsOfType?section=' + secao
  //     );
  //     const data = response.data;
  //     setPartArray(data);
  //     // secao.forEach((sec) => {
  //     //   if (sec.name === 'Cordas') {
  //     //     console.log(data);
  //     //   }
  //     //   // setSecoesArray(data);
  //     // });
  //     // setPostArray(data.Variacoes);
  //   };
  //   fetchData();
  // }, [secoesArray]);
  // console.log(partArray);

  // useEffect(() => {
  //   const fetchData = async (secao) => {
  //     const response = await axios(
  //       'http://sevenguitars.herokuapp.com/getPartsOfType?section=' + secao
  //     );
  //     const data = response.data;
  //     // setPostArray(data.Variacoes);
  //   };
  //   fetchData();
  // }, [secoesArray]);

  // const getVariations = async (secao) => {
  //   const response = await axios(
  //     'http://sevenguitars.herokuapp.com/getPartsOfType?section=' + secao
  //   );
  //   const data = response.data;
  //   return data;
  // };

  // console.log(secoesArray);
  // function mapData() {
  //   secoesArray.forEach((secao) => {
  //     getVariations(secao.name).then((name) => <Text>{'sucesso'}</Text>);
  //   });
  // }
  // function mapData() {
  //   secoesArray.forEach((secao) => {
  //     getVariations(secao.name).then((name) => <Text>{'sucesso'}</Text>);
  //   });
  // }

  // const teste = (name) => {
  //   testeArray = name;
  //   // console.log(testeArray.Nome.section);
  //   return testeArray;
  // };

  // const mapPartes = (array) => {
  //   secoesArray.map((parte, index) => {
  //     if (array.Nome.section === parte.name) {
  //       return <Text>{'sucesso'}</Text>;
  //     } else {
  //       return <Text>{'fracasso'}</Text>;
  //     }

  //     // <option value={parte.name} key={index}>
  //       // {parte.name}
  //     // </option>
  //   });
  // };

  // const mapPartes = (partArray) => {
  //   return secoesArray.map((parte, index) => <Text>{'teste'}</Text>);
  // };

  return (
    <Flex
      width="full"
      height="full"
      align="center"
      // justifyContent="center"
      h="100vh"
      bgColor="#E2E2E2"
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
        <Tabs size="md" variant="enclosed">
          <TabList>
            <Tab>Cabeças</Tab>
            <Tab>Captadores</Tab>
            <Tab>Controles</Tab>
            <Tab>Cordas</Tab>
            <Tab>Corpos</Tab>
            <Tab>Pescoços</Tab>
          </TabList>
          <TabPanels>
            {/* {mapPartInfos(partCordas)} */}
            {/* <TabPanel>
              <Text>Nome</Text>
              <FormLabel>Preço</FormLabel>
              <Input
                type="text"
                name="text"
                value="R$0.00"
                // onChange={(e) => setValue(e.target.value)}
                // onKeyPress={handleKeyPress}
                autoComplete="off"
              />
              <FormLabel>Quantidade</FormLabel>
              <Input
                type="text"
                name="text"
                value={0}
                // onChange={(e) => setValue(e.target.value)}
                // onKeyPress={handleKeyPress}
                autoComplete="off"
              />
              <Text>Descrição</Text>
            </TabPanel> */}
            <TabPanel>
              <Text>Nome</Text>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Flex>
  );
}

export default CadastroEstoque;
