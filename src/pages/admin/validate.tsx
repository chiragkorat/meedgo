import { Box } from '@chakra-ui/react'
import React from 'react'
import AdminLayout from 'layouts/admin'

export default function Validate () {
  return (
    <AdminLayout>
      <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
        {/* <SimpleGrid
          mb='20px'
          columns={{ sm: 1, md: 2 }}
          spacing={{ base: '20px', xl: '20px' }}
        >
          <DevelopmentTable
            columnsData={columnsDataDevelopment}
            tableData={(tableDataDevelopment as unknown) as TableData[]}
          />
          <CheckTable
            columnsData={columnsDataCheck}
            tableData={(tableDataCheck as unknown) as TableData[]}
          />
          <ColumnsTable
            columnsData={columnsDataColumns}
            tableData={(tableDataColumns as unknown) as TableData[]}
          />
          <ComplexTable
            columnsData={columnsDataComplex}
            tableData={(tableDataComplex as unknown) as TableData[]}
          />
        </SimpleGrid> */}
      </Box>
    </AdminLayout>
  )
}
