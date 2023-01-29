import React, {useState, useEffect} from 'react'
import dynamic from 'next/dist/shared/lib/dynamic'
import { isWindowAvailable } from 'utils/navigation'
import { ChartProps, ChartState } from './LineAreaChart'
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

class AreaChart extends React.Component<ChartProps, ChartState> {
  constructor (props: ChartState) {
    super(props)

    
    this.state = {
      chartData: [],
      chartOptions: {}
    }

  }



  componentDidMount () {    
    // if(this.state.chartData.length > 1 ) {
    this.setState({
      chartData: this.props.chartData,
      chartOptions: this.props.chartOptions
    })
  // }
  }

  render () {
    if (!isWindowAvailable()) return <></>

    return (
      <>
       <Chart
          options={this.state.chartOptions}
          series={this.state.chartData}
          type='area'
          width='100%'
          height='100%'
        />
      </>
     
    )
  }
}
export default AreaChart

// export default function AreaChart(props:  { [x: string]: any }) {
//   const seriesTotalOrder = [
//     {
//       name: "Count",
//       data: props.chartData,
//     },
//   ];

//   const optionTotalOrder: any = {
//     chart: {
//       height: 350,
//       type: "area",
//     },
//     dataLabels: {
//       enabled: false,
//     },
//     stroke: {
//       curve: "smooth",
//     },
//     xaxis: {
//       type: "datetime",
//       categories: props.chartOptions,
//     },
//     tooltip: {
//       x: {
//         format: "dd/MM/yy",
//       },
//     },
//   };

//   const [chartData, setChartData] = useState([])
//   const [chartOptions, setChartOptions] = useState({})

//   useEffect(() => {
//     setChartData(seriesTotalOrder)
//     setChartData(optionTotalOrder)
// })

//   return (
//     <Chart
//         options={chartData}
//         series={chartOptions}
//         type='area'
//         width='100%'
//         height='100%'
//       />
//   )
// }



