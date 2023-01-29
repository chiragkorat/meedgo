import React, { useEffect, useState } from "react";
import Router from "next/router";
import Requests from "../../../../models/Request";

// Chakra imports
import {
  Box,
  Button,
  Flex,
  Icon,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Card from "components/card/Card";
// Custom components
import AreaChart from "components/charts/AreaChart";
// import {
//   seriesTotalOrder,
//   optionTotalOrder
// } from 'variables/charts'
import { MdBarChart } from "react-icons/md";


export default function TotalOrders(props: { [x: string]: any }) {

  const requestApiData = new Requests();
    
  const [count, setChartCount] = useState([])
  const [date, setChartDate] = useState([])

  useEffect( () => {
    (async function chartWeekOrderFunction() {
      await requestApiData
      .chartWeekOrder()
      .then((res) => {
        const chartCount:any = [];
        const chartDate:any = [];
          res.data.data.map((item: any) => {
            chartCount.push(item.count);
            chartDate.push(item.date);
          })

          setChartCount(chartCount);
          setChartDate(chartDate);
     
      })
      .catch((err) => {
        if(err?.response?.status === 401)
            Router.push("/auth/sign-in");
      });
    })();
     
  }, [])


  // Chakra Color Mode
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const iconColor = useColorModeValue("brand.500", "white");
  const bgButton = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  const bgHover = useColorModeValue(
    { bg: "secondaryGray.400" },
    { bg: "whiteAlpha.50" }
  );
  const bgFocus = useColorModeValue(
    { bg: "secondaryGray.300" },
    { bg: "whiteAlpha.100" }
  );

  const seriesTotalOrder: any = [
    {
      name: "Count",
      data: count,
    },
  ];

  const optionTotalOrder: any = {
    chart: {
      height: 350,
      type: "area",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      type: "date",
      categories: date,
    },
    tooltip: {
      x: {
        format: "dd/MM/yy",
      },
    },
  };



  return (
    <Card w="100%">
      <Flex align="center" w="100%" px="15px" py="10px">
        <Text
          me="auto"
          color={textColor}
          fontSize="xl"
          fontWeight="700"
          lineHeight="100%"
        >
          Total Orders
        </Text>
        <Button
          alignItems="center"
          justifyContent="center"
          bg={bgButton}
          _hover={bgHover}
          _focus={bgFocus}
          _active={bgFocus}
          w="37px"
          h="37px"
          lineHeight="100%"
          borderRadius="10px"
        >
          <Icon as={MdBarChart} color={iconColor} w="24px" h="24px" />
        </Button>
      </Flex>
      <Box h="240px" mt="auto">
        {
          date.length > 0 && count.length > 0 ?
          <AreaChart
          chartData={seriesTotalOrder}
          chartOptions={optionTotalOrder}
        />
        : null
        }
        
      </Box>
    </Card>
  );
}
