import React, { useEffect, useState } from "react";

import {
  Table,
  Box,
  Flex,
  FormLabel,
  Icon,
  Select,
  SimpleGrid,
  useColorModeValue,
  Tag,
  Radio, RadioGroup
} from "@chakra-ui/react";
import Card from 'components/card/Card'
import Router from "next/router";
// Assets
// Custom components
import MiniStatistics from "components/card/MiniStatistics";
import IconBox from "components/icons/IconBox";
import {
  MdAddTask,
  MdAttachMoney,
  MdBarChart,
  MdFileCopy,
  MdOutlinePieChartOutline,
  MdPerson,
  MdPlusOne,
  MdAdd
} from "react-icons/md";
import SalesValue from "views/admin/default/components/SalesValue";
import CommissionValue from "views/admin/default/components/Commission";
import PeopleChartValue from "views/admin/default/components/PeopleChart";
import TotalOrders from "views/admin/default/components/TotalOrders";
import AdminLayout from "layouts/admin";
import { Image } from "components/image/Image";
import Usa from "img/dashboards/usa.png";
import Requests from "../../models/Request";


export default function UserReports() {
  const [transactionCount, setTransactionCount] = useState<any>({})
  const requestApiData = new Requests();
  const brandColor = useColorModeValue("brand.500", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");

  useEffect(() => {
    requestApiData
      .getDashboardTrack()
      .then((res) => {
        setTransactionCount(res.data.data)
      })
      .catch((err) => {
        if (err?.response?.status === 401)
          Router.push("/auth/sign-in");
      });
  }, [])


  return (
    <AdminLayout>
      <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
        <>
          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 3, "2xl": 4 }}
            gap="20px"
            mb="20px"
          >
            <MiniStatistics
              name="Annual Transaction"
              value={transactionCount?.annualTransaction || 0}
              // growth="3.48%"
              id={1}
              endContent={
                <IconBox
                  w="56px"
                  h="56px"
                  bg={boxBg}
                  icon={
                    <Icon
                      w="32px"
                      h="32px"
                      as={MdBarChart}
                      color={brandColor}
                    />
                  }
                />
              }
            />

            <MiniStatistics
              name="Monthly Transaction"
              value={transactionCount?.monthTransaction || 0}
              // growth="3.86%"
              id={2}
              endContent={
                <IconBox
                  w="56px"
                  h="56px"
                  bg={boxBg}
                  icon={
                    <Icon
                      w="32px"
                      h="32px"
                      as={MdBarChart}
                      color={brandColor}
                    />
                  }
                />
              }
            />

            <MiniStatistics
              name="Quarterly Transaction"
              value={transactionCount?.quaterTransaction || 0}
              // growth="1.10%"
              id={3}
              endContent={
                <IconBox
                  w="56px"
                  h="56px"
                  bg={boxBg}
                  icon={
                    <Icon
                      w="32px"
                      h="32px"
                      as={MdBarChart}
                      color={brandColor}
                    />
                  }
                />
              }
            />

          </SimpleGrid>

          <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap="20px" mb="20px">
            <TotalOrders />
            <SalesValue />
          </SimpleGrid>

          <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap="20px" mb="20px">
            <CommissionValue />
            <PeopleChartValue />
          </SimpleGrid>
        </>
      </Box>

      <Flex px='25px' display='flex' >
        <Card
          flexDirection='column'
          w='32%'
          px='0px'
          style={{ marginLeft: '-20px' }}
          overflowX={{ sm: 'scroll', lg: 'hidden' }}
        >
          <Flex px='25px' justify='space-between' mb='20px' align='center'>
            <b>No of Grievance</b>
            <p style={{ color: 'blue' }}>View Details</p>

          </Flex>
          {/* <Flex style={{ fontSize: '12px', marginTop: '-15px' }} ml='26px' align='left'>
            Group  <b style={{ marginLeft: '4px' }}> Support</b>

          </Flex> */}
          <Flex px='25px' justify='space-between' pb='10px' mt='20px' align='center'>
            <b style={{ fontSize: '12px' }}>
              Delivery issue
            </b>
            266
          </Flex>
          <hr />
          <Flex px='25px' justify='space-between' pb='10px' mt='18px' align='center'>
            <b style={{ fontSize: '12px' }}>
              Payment issue
            </b>
            124
          </Flex>
          <hr />
          <Flex px='25px' justify='space-between' pb='10px' mt='18px' align='center'>
            <b style={{ fontSize: '12px' }}>
              Quality issue
            </b>
            886
          </Flex>

          <hr />
          <Flex px='25px' justify='space-between' pb='10px' mt='18px' align='center'>
            <b style={{ fontSize: '12px' }}>
              Others
            </b>
            84
          </Flex>
          <hr />
          <Flex px='25px' justify='space-between' pb='10px' mt='18px' align='center'>
            <b style={{ fontSize: '12px' }}>
              Raised by pharmacist
            </b>
            124
          </Flex>
        </Card>

        <Card
          flexDirection='column'
          w='32%'
          px='0px'
          ml="20px"
          overflowX={{ sm: 'scroll', lg: 'hidden' }}
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
            <b style={{ fontSize: '12px' }}>
              Finish Ticket Update
            </b>
            <Tag style={{ backgroundColor: '#fec400', color: 'white' }}>
              Urgent
            </Tag>
          </Flex>
          <hr />

          <Flex px='25px' justify='space-between' pb='10px' mt='18px' align='center'>


            <b style={{ fontSize: '12px' }}>
              Create New Ticket example
            </b>
            <Tag style={{ backgroundColor: '#29cc97', color: 'white' }}>
              New
            </Tag>
          </Flex>
          <hr />

          <Flex px='25px' justify='space-between' pb='10px' mt='18px' align='center'>
            <b style={{ fontSize: '12px' }}>
              Update ticket report
            </b>
            <Tag >
              Default
            </Tag>
          </Flex>
        </Card>

        <Card
          flexDirection='column'
          w='32%'
          px='0px'
          ml={6}
          overflowX={{ sm: 'scroll', lg: 'hidden' }}
        >
          <Flex px='25px' justify='space-between' mb='20px' align='center'>
            <b>Stores</b>
            <p style={{ color: 'blue' }}>View Details</p>

          </Flex>
          {/* <Flex style={{ fontSize: '12px', marginTop: '-15px' }} ml='26px' align='left'>
            Group  <b style={{ marginLeft: '4px' }}> Support</b>

          </Flex> */}
          <Flex px='25px' justify='space-between' pb='10px' mt='20px' align='center'>
            <b style={{ fontSize: '12px' }}>
              Subscription
            </b>
            6580
          </Flex>
          <hr />
          <Flex px='25px' justify='space-between' pb='10px' mt='18px' align='center'>
            <b style={{ fontSize: '12px' }}>
              Renewal
            </b>
            4480
          </Flex>
        </Card>

        <Card
          flexDirection='column'
          w='32%'
          px='0px'
          ml={6}
          overflowX={{ sm: 'scroll', lg: 'hidden' }}
        >
          <Flex px='25px' justify='space-between' mb='20px' align='center'>
            <b>App Data</b>
            <p style={{ color: 'blue' }}>View Details</p>

          </Flex>
          {/* <Flex style={{ fontSize: '12px', marginTop: '-15px' }} ml='26px' align='left'>
            Group  <b style={{ marginLeft: '4px' }}> Support</b>

          </Flex> */}
          <Flex px='25px' justify='space-between' pb='10px' mt='20px' align='center'>
            <b style={{ fontSize: '12px' }}>
              No of App Downloads
            </b>
            8620
          </Flex>
          <hr />
          <Flex px='25px' justify='space-between' pb='10px' mt='18px' align='center'>
            <b style={{ fontSize: '12px' }}>
              No of App Deleted
            </b>
            640
          </Flex>
          <hr />
          <Flex px='25px' justify='space-between' pb='10px' mt='18px' align='center'>
            <b style={{ fontSize: '12px' }}>
              No of non active users
            </b>
            2208
          </Flex>
        </Card>
      </Flex>

    </AdminLayout>
  );
}
