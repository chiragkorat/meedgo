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
  useColorModeValue
} from '@chakra-ui/react'
import Card from 'components/card/Card'
// Custom components
import AreaChart from 'components/charts/AreaChart'
// import {
//     areaChartSeriesData,
//     areaChartOptionDataCommission
// } from 'variables/charts'
import { MdBarChart } from 'react-icons/md'



export default function SalesValue(props: { [x: string]: any }) {
  const requestApiData = new Requests();

  const [count, setChartCount] = useState([])
  const [date, setChartDate] = useState([])



  useEffect(() => {
    (async function chartMonthlyCommissionFunction() {
      const chartCount: any = [];
      const chartDate: any = [];

      await requestApiData
        .chartMonthlyCommission()
        .then((res) => {
          res.data.data.map((item: any) => {
            chartCount.push(item.value);
            chartDate.push(item.date);
          })

          setChartCount(chartCount);
          setChartDate(chartDate);
        })
        .catch((err) => {
          if (err?.response?.status === 401)
            Router.push("/auth/sign-in");
        });
    })();

  }, [])


  // Chakra Color Mode
  const textColor = useColorModeValue('secondaryGray.900', 'white')
  const iconColor = useColorModeValue('brand.500', 'white')
  const bgButton = useColorModeValue('secondaryGray.300', 'whiteAlpha.100')
  const bgHover = useColorModeValue(
    { bg: 'secondaryGray.400' },
    { bg: 'whiteAlpha.50' }
  )
  const bgFocus = useColorModeValue(
    { bg: 'secondaryGray.300' },
    { bg: 'whiteAlpha.100' }
  )

  // AreaChart Commission Data


  //     console.log('11111111111111',count);
  //   console.log('22222222222222',date);

  const areaChartSeriesData = [{
    name: 'Commission',
    data: count
  }]

  const areaChartOptionDataCommission: any = {
    chart: {
      height: 350,
      type: 'area'
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    xaxis: {
      type: 'text',
      categories: date
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm'
      },
    },
  };

  return (
    <Card w='100%'>
      <Flex align='center' w='100%' px='15px' py='10px'>
        <Text
          me='auto'
          color={textColor}
          fontSize='xl'
          fontWeight='700'
          lineHeight='100%'
        >
          Commission
        </Text>
        <Button
          alignItems='center'
          justifyContent='center'
          bg={bgButton}
          _hover={bgHover}
          _focus={bgFocus}
          _active={bgFocus}
          w='37px'
          h='37px'
          lineHeight='100%'
          borderRadius='10px'
        >
          <Icon as={MdBarChart} color={iconColor} w='24px' h='24px' />
        </Button>
      </Flex>

      <Box h='240px' mt='auto'>
        {
          date.length > 0 && count.length > 0 ?
            <AreaChart
              chartData={areaChartSeriesData}
              chartOptions={areaChartOptionDataCommission}
            />
            : null
        }

      </Box>
    </Card>
  )
}
