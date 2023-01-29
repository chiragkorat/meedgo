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
import ColumnChart from 'components/charts/ColumnChart'
// import {
//   columnChartSeriesData,
//   columnChartOptionData
// } from 'variables/charts'
import { MdBarChart } from 'react-icons/md'


export default function TotalOrders(props: { [x: string]: any }) {
  const requestApiData = new Requests();

  const [count, setChartCount] = useState([])
  const [date, setChartDate] = useState([])

  useEffect(() => {
    (async function chartMonthlySaleFunction() {
      const chartCount: any = [];
      const chartDate: any = [];

      await requestApiData
        .chartMonthlySale()
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

  // ColumnChart Default

  // console.log('11111111111111',count);
  // console.log('22222222222222',date);

  const columnChartSeriesData = [{
    name: 'Net Profit',
    data: count
  }]
  const columnChartOptionData: any = {
    chart: {
      type: 'bar',
      height: 350
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '15%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    xaxis: {
      categories: date,
    },
    yaxis: {
      title: {
        text: '$ (thousands)'
      }
    },
    fill: {
      opacity: 1
    },
    tooltip: {
      y: {
        formatter: function (val: String) {
          return "$ " + val + " thousands"
        }
      }
    }
  }

  //  const columnChartOptionData: any = {
  //   chart: {
  //     type: 'bar',
  //     height: 350
  //   },
  //   plotOptions: {
  //     bar: {
  //       horizontal: false,
  //       columnWidth: '15%',
  //       endingShape: 'rounded'
  //     },
  //   },
  //   dataLabels: {
  //     enabled: false
  //   },
  //   stroke: {
  //     show: true,
  //     width: 2,
  //     colors: ['transparent']
  //   },
  //   xaxis: {
  //     categories: date,
  //   },
  //   yaxis: {
  //     title: {
  //       text: '$ (thousands)'
  //     }
  //   },
  //   fill: {
  //     opacity: 1
  //   },
  //   tooltip: {
  //     y: {
  //       formatter: function (val) {
  //         return "$ " + val + " thousands"
  //       }
  //     }
  //   }
  // };

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
          Sales Value
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
            <ColumnChart
              chartData={columnChartSeriesData}
              chartOptions={columnChartOptionData}
            />
            : null
        }

      </Box>
    </Card>
  )
}
