import React, { useEffect, useState } from "react";
import Router from "next/router";
import AdminLayout from 'layouts/admin'

import { Box, SimpleGrid } from "@chakra-ui/react";
import DevelopmentTable from "views/admin/dataTables/components/DevelopmentTable";
import CheckTable from "views/admin/dataTables/components/CheckTable";
import ColumnsTable from "views/admin/dataTables/components/ColumnsTable";
import OrderDetailsTable from "views/admin/dataTables/components/OrderDetails";
import {
    columnsDataDevelopment,
    columnsDataCheck,
    columnsDataColumns,
    columnsDataComplex,
    orderDatailsComplex
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
    const [orderDetailsData, setOrderDetailsData] = useState([])
    useEffect(() => {
        (async function makeOrderFunction() {
            await requestApiData
            .makeOrder()
            .then((res) => {
                const mainResp: any = []
                res.data.map((item: any) => {
                    mainResp.push({
                        "pharmacistId": 1011,
                        "pharmacistName": "Big Store Pharma",
                        "orderId": item.order_number,
                        "customerName": "Shobhit",
                        "total": item.total,
                        "orderDate": (item.created.split(".").shift()).replace("T", " "),
                        "status": item.status
                    }
                    )
                })

                if (mainResp && mainResp.length > 0) {
                    setOrderDetailsData(mainResp);
                }
            })
            .catch((err) => {
                if (err?.response?.status === 401)
                    Router.push("/auth/sign-in");
            });
          })();
        
    }, [])

    // const orderDetailsData = [
    //     {
    //         "pharmacistId": 1011,
    //         "pharmacistName": "Big Store Pharma",
    //         "orderId": 1,
    //         "customerName": "Shobhit",
    //         "orderDate": 'Oct 24, 2022 3:44 pm',
    //         "Status": 'Confirmed',
    //     },
    //     {
    //         "pharmacistId": 1012,
    //         "pharmacistName": "AbbVie",
    //         "orderId": 2,
    //         "customerName": "John",
    //         "orderDate": 'Nov 26, 2022 1:26 pm',
    //         "Status": 'Packed',
    //     },
    //     {
    //         "pharmacistId": 1013,
    //         "pharmacistName": "AbbVie",
    //         "orderId": 3,
    //         "customerName": "peter",
    //         "orderDate": 'Dec 2, 2022 9:54 am',
    //         "Status": 'Out for Delivery',
    //     },
    //     {
    //         "pharmacistId": 1014,
    //         "pharmacistName": "Novartis and Merck & Co",
    //         "orderId": 4,
    //         "customerName": "Michel",
    //         "orderDate": 'Dec 3, 2022 10:16 am',
    //         "Status": 'Delivered',
    //     },
    //     {
    //         "pharmacistId": 1015,
    //         "pharmacistName": "Big Store Pharma",
    //         "orderId": 5,
    //         "customerName": "Jessvin",
    //         "orderDate": 'Dec 5, 2022 5:16 pm',
    //         "Status": 'Picked up',
    //     }
    // ]

    return (
        <AdminLayout>
            <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
                <SimpleGrid
                    mb='20px'
                >
                    <OrderDetailsTable
                        columnsData={orderDatailsComplex}
                        tableData={orderDetailsData}
                    />
                </SimpleGrid>
            </Box>
        </AdminLayout>
    );
}