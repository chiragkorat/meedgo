import React, { useEffect, useState } from "react";
import Router from "next/router";
import AdminLayout from 'layouts/admin'
import Card from 'components/card/Card'
import {
  MdAdd
} from "react-icons/md";
import { Box, SimpleGrid, Flex, Tag, Icon, Radio, RadioGroup } from "@chakra-ui/react";
import DevelopmentTable from "views/admin/dataTables/components/DevelopmentTable";
import CheckTable from "views/admin/dataTables/components/CheckTable";
import ColumnsTable from "views/admin/dataTables/components/ColumnsTable";
import PharmacyProfileTable from "views/admin/dataTables/components/PharmacyProfile";
import {
  columnsDataDevelopment,
  columnsDataCheck,
  columnsDataColumns,
  PharmacistcolumnsData,
} from "views/admin/dataTables/variables/columnsData";
import pharmacyProfileData from "views/admin/dataTables/variables/pharmacyProfileData.json";
import Requests from "../../models/Request";


export default function PharmacyProfile() {
  const requestApiData = new Requests();
  const [jsonData, setJsonData] = useState([])
  let pharmacistList = []
  const mainResp: any = []

  useEffect( () => {
    (async function pharmacistListFunction() {
      await requestApiData
      .pharmacistList()
      .then((res) => {
        res?.data.map((item:(any)) => {
            mainResp.push({
                // "id": 22,
                // "profile": [
                //   {
                //     "id": 3,
                //     "image": "/profile_pics/profile.png",
                //     "user": 22
                //   }
                // ],
                // "pharmacist_docs": [
                //   {
                //     "id": 2,
                //     "licence_image": "/pharmacit_pics/dolo.jfif",
                //     "registration_image": "/pharmacit_pics/dolo_HSwliiy.jfif",
                //     "id_image": "/pharmacit_pics/dolo_dfHXfHK.jfif",
                //     "tan_number": "123456",
                //     "user": 22
                //   }
                // ],
                // "password": "pbkdf2_sha256$390000$TNDqpbeXSYgmbHo36D5ydM$ztoMJLJcGwVQgle9fLemHB6+JD0vl9RQvm1NkR69xc4=",
                // "last_login": null,
                // "is_superuser": false,
                // "first_name": "string",
                // "last_name": "string",
                // "is_staff": false,
                // "is_active": true,
                // "date_joined": "2022-12-14T11:46:58.821213Z",
                // "username": null,
                // "name": "desh1234",
                // "mobile_number": "999999999",
                // "whatapp_mobile_number": null,
                // "email": "userdddgg@example.com",
                // "birth_date": null,
                // "isVerified": false,
                // "counter": 0,
                // "user_type": "Pharmacists",
                // "gender": "M",
                // "age": 0,
                // "groups": [],
                // "user_permissions": []
    
                "orderId": item.id,
                "customerName": item.name,
                "phoneNumber": item.mobile_number,
                "email": item.email,
                "document": item.pharmacist_docs,
                "action": item.id
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


  // Chakra Color Mode
  return (
    <AdminLayout>
      <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
        <SimpleGrid
          mb='20px'
        >
          <Flex px='25px' justify='space-between' mb='20px' align='center'>
            <PharmacyProfileTable
              columnsData={PharmacistcolumnsData}
              tableData={jsonData}
            />
            <Card
              flexDirection='column'
              w='32%'
              px='0px'
              ml="20px"
              overflowX={{ sm: 'scroll', lg: 'hidden' }}
              style={{ marginTop: '-11%' }}
            >
              <Flex px='25px' justify='space-between' mb='20px' align='center'>
                <b>Pharmacy</b>
                <p style={{ color: 'blue' }}>View Details</p>

              </Flex>
              <Flex style={{ fontSize: '12px', marginTop: '-15px' }} ml='26px' align='left'>
                Today

              </Flex>
              <Flex px='25px' justify='space-between' pb='10px' mt='20px' align='center'>
                <b style={{ fontSize: '12px' }}>
                  Create New Task
                </b>
                <Tag>
                  <Icon
                    w="24px"
                    h="24px"
                    as={MdAdd}
                  />
                </Tag>
              </Flex>
              <hr />
              <Flex px='25px' justify='space-between' pb='10px' mt='18px' align='center'>
                <Radio value='Sasuke' />
                <b style={{ fontSize: '12px', marginLeft: '-60px' }}>
                  Finish Ticket Update
                </b>
                <Tag style={{ backgroundColor: '#fec400', color: 'white' }}>
                  Urgent
                </Tag>
              </Flex>
              <hr />

              <Flex px='25px' justify='space-between' pb='10px' mt='18px' align='center'>
                <Radio value='Sasuke' />

                <b style={{ fontSize: '12px', marginLeft: '-35px' }}>
                  Create New Ticket example
                </b>
                <Tag style={{ backgroundColor: '#29cc97', color: 'white' }}>
                  New
                </Tag>
              </Flex>
              <hr />

              <Flex px='25px' justify='space-between' pb='10px' mt='18px' align='center'>
                <RadioGroup defaultValue='Sasuke'>
                  <Radio value='Sasuke' />
                </RadioGroup>

                <b style={{ fontSize: '12px', marginLeft: '-60px' }}>
                  Update ticket report
                </b>
                <Tag >
                  Default
                </Tag>
              </Flex>
            </Card>
          </Flex>
        </SimpleGrid>
      </Box>
    </AdminLayout>
  );
}