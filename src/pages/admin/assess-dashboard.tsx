import { Box } from "@chakra-ui/react";
import React, { useState } from "react";
import AdminLayout from "layouts/admin";
import dynamic from 'next/dist/shared/lib/dynamic'
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

export default function AssessDashboard() {
  const seriesData: any = [14, 23, 21, 17, 15, 10, 12, 17, 21];
  const optionData: any = {
    chart: {
      type: 'polarArea',
    },
    stroke: {
      colors: ['#fff']
    },
    fill: {
      opacity: 0.8
    },
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
          position: 'bottom'
        }
      }
    }]
  };

  const [newSeries, setSeries] = useState(seriesData);
  const [newOptions, setOptions] = useState(optionData);

  return (
    <AdminLayout>
      <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
        <Chart options={newOptions} series={newSeries} type="polarArea" width={500} height={320} />
      </Box>
    </AdminLayout>
  );
}
