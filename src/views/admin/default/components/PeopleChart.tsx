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
import React from 'react'
import {
    PeopleChart,
    areaChartOptionDataCommission
} from 'variables/charts'
import { MdBarChart } from 'react-icons/md'

export default function SalesValue(props: { [x: string]: any }) {
    const { ...rest } = props

    // Chakra Color Mode
    const textColor = useColorModeValue('secondaryGray.900', 'white')
    const iconColor = useColorModeValue('brand.500', 'white')
    const bgButton = useColorModeValue('secondaryGray.300', 'whiteAlpha.100')

    const chartOptions = {
        series: [
            {
                name: "Online Customers",
                data: [48, 70, 20, 90, 36, 80, 30, 91, 60]
            },
            {
                name: "Store Customers",
                data: [40, 30, 70, 80, 40, 16, 40, 20, 51, 10]
            }
        ],
        options: {
            chart: {
                background: "white"
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: "smooth"
            },
            xaxis: {
                categories: [
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sep"
                ]
            },
            legend: {
                position: "bottom"
            },
            grid: {
                show: true
            }
        }
    };
    const bgHover = useColorModeValue(
        { bg: 'secondaryGray.400' },
        { bg: 'whiteAlpha.50' }
    )
    const bgFocus = useColorModeValue(
        { bg: 'secondaryGray.300' },
        { bg: 'whiteAlpha.100' }
    )
    return (
        <Card w='100%' {...rest}>
            <Flex align='center' w='100%' px='15px' py='10px'>
                <Text
                    me='auto'
                    color={textColor}
                    fontSize='xl'
                    fontWeight='700'
                    lineHeight='100%'
                >
                    Orders
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
                    {...rest}
                >
                    <Icon as={MdBarChart} color={iconColor} w='24px' h='24px' />
                </Button>
            </Flex>

            <Box h='240px' mt='auto'>
                <AreaChart
                    chartData={PeopleChart}
                    chartOptions={areaChartOptionDataCommission}
                />

            </Box>
        </Card>
    )
}
