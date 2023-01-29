import {
  Flex,
  Table,
  Progress,
  Icon,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  Select,
} from '@chakra-ui/react'
import { Image } from 'components/image/Image';

import avt1 from "../../../../img/avatars/avt1.png";
import avt2 from "../../../../img/avatars/avt2.png";
import avt3 from "../../../../img/avatars/avt3.png";
import avt4 from "../../../../img/avatars/avt4.png";
import Avatar from 'react-avatar';
import React, { useState, useMemo } from 'react'
import {
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable
} from 'react-table'

// Custom components
import Card from 'components/card/Card'
import Menu from 'components/menu/MainMenu'

// Assets
import { MdCheckCircle, MdCancel, MdOutlineError, MdOutlineLoop, MdRemoveRedEye, MdOutlineThumbUp } from 'react-icons/md'
import { TableProps } from 'views/admin/default/variables/columnsData'

import Router from "next/router";
import { useFormik } from "formik";
import * as yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Requests from "../../../../models/Request";


export default function ColumnsTable(props: TableProps | any) {
  const requestApiData = new Requests();

  const [issueNumber, setIssueNumber] = useState('')
  const [modelOpen, setModelOpen] = useState(false)
  const { isOpen, onOpen, onClose } = useDisclosure()
  // const validationSchema = yup.object({
  //   status: yup.string().required("User type is required"),
  // });
  const formik = useFormik({
    initialValues: {
      issue_number: issueNumber,
      status: "",
      comments: "",
    },
    enableReinitialize: true,
    // validationSchema: validationSchema,
    onSubmit: (values) => {
      const mainPayload = {
        issue_number: values?.issue_number,
        status: values?.status,
        comments: values.comments,
      };
      requestApiData
        .changeStatus(mainPayload)
        .then((res) => {
          if (res?.status === 200) {
            setModelOpen(false)

            const mainResp: any = [];
            requestApiData
              .customerList()
              .then((res) => {
                res.data.map((item: any) => {
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
                  props.tableCallback(mainResp)
                }

                toast.success("You are successfully change status", {
                  position: toast.POSITION.TOP_CENTER,
                });
              })
              .catch((err) => {
                if (err?.response?.status === 401)
                  Router.push("/auth/sign-in");
              });


          }
        })
        .catch((err) => {
          toast.error("Somethings went wrong", {
            position: toast.POSITION.TOP_CENTER,
          });

          if (err?.response?.status === 401) {
            Router.push("/auth/sign-in");
          }
        });
    },
  });

  const { columnsData, tableData } = props

  const columns = useMemo(() => columnsData, [columnsData])
  const data = useMemo(() => tableData, [tableData])

  const tableInstance = useTable(
    {
      columns,
      data
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  )

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    initialState
  } = tableInstance
  // initialState.pageSize = 5

  const textColor = useColorModeValue('secondaryGray.900', 'white')
  const borderColor = useColorModeValue('gray.200', 'whiteAlpha.100')

  const categoryOption = [
    {
      key: "Delivery Issue",
      value: 1
    },
    {
      key: "Payment Issue",
      value: 2
    },
    {
      key: "Quality Issue",
      value: 3
    },
    {
      key: "Others",
      value: 4
    }
  ]

  const images = [avt1, avt2, avt3, avt4]



  return (
    <Card
      flexDirection='column'
      w='100%'
      px='0px'
      overflowX={{ sm: 'scroll', lg: 'hidden' }}
    >
      <ToastContainer />
      <Flex px='25px' justify='space-between' mb='20px' align='center'>
        <Text
          color={textColor}
          fontSize='22px'
          fontWeight='700'
          lineHeight='100%'
        >

        </Text>
        <Menu jsonData={data} />
      </Flex>
      <Table {...getTableProps()} variant='simple' color='gray.500' mb='24px'>
        <Thead>
          {headerGroups.map((headerGroup, index) => (
            <Tr {...headerGroup.getHeaderGroupProps()} key={index}>
              {headerGroup.headers.map((column, index) => (
                <Th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  pe='10px'
                  key={index}
                  borderColor={borderColor}
                >
                  <Flex
                    justify='space-between'
                    align='center'
                    fontSize={{ sm: '10px', lg: '12px' }}
                    color='gray.400'
                  >
                    {column.render('Header')}
                  </Flex>
                </Th>
              ))}
            </Tr>
          ))}
        </Thead>
        <Tbody {...getTableBodyProps()}>

          {page.map((row, index) => {
            prepareRow(row)
            return (
              <Tr {...row.getRowProps()} key={index}>
                {row.cells.map((cell, index2) => {
                  let data
                  if (cell.column.id === 'orderId') {
                    data = (
                      <Text color={textColor} fontSize='sm' fontWeight='700'>
                        {cell.value}
                      </Text>
                    )
                  } else if (cell.column.id === 'customerName') {
                    data = (
                      <Text color={textColor} fontSize='sm' fontWeight='700' style={{ display: 'flex' }}>
                        <Image style={{ height: '40px', width: '40px' }} src={images[Math.floor(Math.random() * (3 - 0 + 1) + 0)]} />
                        <p style={{ paddingTop: '10px', paddingLeft: '5px' }}> {cell.value}</p>
                      </Text>
                    )
                  } else if (cell.column.id === 'phoneNumber') {
                    data = (
                      <Text color={textColor} fontSize='sm' fontWeight='700'>
                        {cell.value}
                      </Text>
                    )
                  }
                  else if (cell.column.id === 'category') {
                    data = (
                      <Text color={textColor} fontSize='sm' fontWeight='700'>
                        {cell.value}
                      </Text>)
                  }
                  else if (cell.column.id === 'description') {
                    data = (
                      <Text color={textColor} style={{ maxWidth: '280px' }} fontSize='sm' fontWeight='700'>
                        {cell.value}
                      </Text>
                    )
                  } else if (cell.column.id === 'status') {
                    data = (
                      <div style={{ width: "100px" }}>
                        <div style={{
                          height: '50px',
                          width: '50px',
                          borderRadius: "80%",
                          marginLeft: '10px',
                          backgroundColor: cell.value === 1 ? '#ffcf23'
                            : cell.value === 2
                              ? '#376fff'
                              : cell.value === 3
                                ? '#e93940'
                                : cell.value === 4
                                  ? '#376fff'
                                  : null
                        }}
                        >
                          <Flex align='center'>
                            <Icon
                              w='24px'
                              h='24px'
                              style={{ marginTop: '13px', marginLeft: '12px' }}
                              color={
                                'white'
                              }
                              as={
                                cell.value === 1
                                  ? MdOutlineLoop
                                  : cell.value === 2
                                    ? MdOutlineThumbUp
                                    : cell.value === 3
                                      ? MdRemoveRedEye
                                      : cell.value === 4
                                        ? MdRemoveRedEye
                                        : MdRemoveRedEye
                              }
                            />
                          </Flex>
                          <br />

                        </div>
                        {
                          cell.value === 1
                            ? <b style={{ display: 'inline-flex', color: 'black', paddingLeft: '8px' }}>Initiated</b>
                            : cell.value === 2
                              ? <b style={{ display: 'inline-flex', color: 'black', paddingLeft: '0px' }}>Completed</b>
                              : cell.value === 3
                                ? <b style={{ display: 'inline-flex', color: 'black', paddingLeft: '8px' }}>Calceled</b>
                                :
                                cell.value === 4
                                  ? <b style={{ display: 'inline-flex', color: 'black', paddingLeft: '4px' }}>In Progress</b>
                                  : null
                        }
                      </div>
                    )
                  } else if (cell.column.id === 'changeStatus') {
                    data = (
                      <div>
                        <Button
                          onClick={() => {
                            setIssueNumber(cell?.value);
                            setModelOpen(true)
                          }}
                          bg="transparent"
                          style={{
                            backgroundColor: "#29cc97",
                            borderRadius: "5px",
                            height: "20px",
                            fontSize: "10px",
                            color: "white",
                          }}
                        >
                          Change Status
                        </Button>
                      </div>
                    )
                  }
                  return (
                    <Td
                      {...cell.getCellProps()}
                      key={index}
                      fontSize={{ sm: '14px' }}
                      minW={{ sm: '150px', md: '200px', lg: 'auto' }}
                      borderColor='transparent'
                    >
                      {data}
                    </Td>
                  )
                })}
              </Tr>
            )
          })}
        </Tbody>
      </Table>

      <Modal isOpen={modelOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          style={{
            padding: "40px",
          }}
        >
          <ModalHeader>Change Status</ModalHeader>
          <form onSubmit={formik.handleSubmit}>
            <FormControl>
              <FormLabel
                display="flex"
                ms="4px"
                fontSize="sm"
                fontWeight="500"
                color={textColor}
                mb="8px"
              >
                Status
              </FormLabel>
              <Select
                name="status"
                placeholder="Select option"
                mb="8px"
                onChange={formik.handleChange}
              >
                <option value="Initiated">Initiated</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
                <option value="Calceled">Calceled</option>
              </Select>

              <FormLabel
                display="flex"
                ms="4px"
                fontSize="sm"
                fontWeight="500"
                color={textColor}
                mb="8px"
              >
                Comments
              </FormLabel>
              <Input
                fontSize="sm"
                ms={{ base: "0px", md: "0px" }}
                type="text"
                placeholder="Add Your Comments Here"
                mb="8px"
                fontWeight="500"
                size="lg"
                name="comments"
                value={formik.values.comments}
                onChange={formik.handleChange}
              />

              <Button
                fontSize="sm"
                variant="brand"
                fontWeight="500"
                w="100%"
                h="50"
                mb="8px"
                type="submit"
              >
                Change
              </Button>
            </FormControl>
          </form>
          <Button onClick={onClose}>
            Cancel
          </Button>
        </ModalContent>
      </Modal>

    </Card >
  )
}
