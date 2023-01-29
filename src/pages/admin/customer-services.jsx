import React, { useEffect, useState } from "react";
import Router from "next/router";
import AdminLayout from 'layouts/admin'

import { Box, SimpleGrid } from "@chakra-ui/react";
import DevelopmentTable from "views/admin/dataTables/components/DevelopmentTable";
import CheckTable from "views/admin/dataTables/components/CheckTable";
import ColumnsTable from "views/admin/dataTables/components/ColumnsTable";
import ComplexTable from "views/admin/dataTables/components/ComplexTable";
import {
    columnsDataDevelopment,
    columnsDataCheck,
    columnsDataColumns,
    columnsDataComplex,
} from "views/admin/dataTables/variables/columnsData";
import tableDataDevelopment from "views/admin/dataTables/variables/tableDataDevelopment.json";
import tableDataCheck from "views/admin/dataTables/variables/tableDataCheck.json";
import tableDataColumns from "views/admin/dataTables/variables/tableDataColumns.json";
import tableDataComplex from "views/admin/dataTables/variables/tableDataComplex.json";


import axios from "axios";
import { headers } from '../../../next.config';
import Requests from "../../models/Request";

export default function CustomerServices() {
    const requestApiData = new Requests();
    const [jsonData, setJsonData] = useState([])
    const mainResp = []
    useEffect( () => {
        (async function customerListFunction() {
            await requestApiData
            .customerList()
            .then((res) => {
                res.data.map((item) => {
                    mainResp.push({
                        // category: "Delivery issue",
                        // comments: "In Progress",
                        // created: "2022-12-12T12:35:33.686559Z",
                        // description: "delivery issue",
                        // orderId: item.id,
                        // issue_number: "Issue_202212121235331",
                        // phone_number: "8756166528",
                        // status: "Initiated",
                        // updated: "2022-12-12T12:35:33.686593Z",
                        // user: 1,
                        // user_name: "desh"
        
                        "orderId": item.id,
                        "customerName": item.user_name,
                        "phoneNumber": item.phone_number,
                        "category": item.category,
                        "description": item.description,
                        "status": item.status == 'Initiated' ? 1 : item.status == 'Completed' ? 2 : item.status == 'Calceled' ? 3 : item.status == 'In Progress' ? 4 : null,
                        "changeStatus": item.issue_number,
                    }
                    )
                })
        
                if (mainResp && mainResp.length > 0) {
                    setJsonData(mainResp);
                }
            })
            .catch((err) => {
              if(err?.response?.status === 401)
                  Router.push("/auth/sign-in");
            });
        })();
       

    }, [])

    const handleCallback = (data) => {
        setJsonData(data);
      };
console.log('6666666666666', jsonData);
    return (
        <AdminLayout>
            <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
                <SimpleGrid
                    mb='20px'
                >
                    <ComplexTable
                        columnsData={columnsDataComplex}
                        tableData={jsonData}
                        tableCallback = {handleCallback}
                    />
                </SimpleGrid>
            </Box>
        </AdminLayout>
    );
}