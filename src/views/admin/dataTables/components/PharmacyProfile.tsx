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
  Select,
  Button,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  useDisclosure
} from "@chakra-ui/react";
import { Image } from "components/image/Image";

import DocIcon from "../../../../img/avatars/doc-icon-png.jpg";
import avt1 from "../../../../img/avatars/avt1.png";
import avt2 from "../../../../img/avatars/avt2.png";
import avt3 from "../../../../img/avatars/avt3.png";
import avt4 from "../../../../img/avatars/avt4.png";
import Avatar from "react-avatar";
import React, { useState, useMemo } from "react";
import {
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from "react-table";

// Custom components
import Card from "components/card/Card";
import Menu from "components/menu/MainMenu";

// Assets
import {
  MdCheckCircle,
  MdCancel,
  MdOutlineError,
  MdOutlineLoop,
} from "react-icons/md";
import { TableProps } from "views/admin/default/variables/columnsData";

import { saveAs } from "file-saver";
import Requests from "../../../../models/Request";

import Router from 'next/router'

export default function ColumnsTable(props: TableProps) {
  const { columnsData, tableData } = props;

  // const { isOpen, onOpen, onClose } = useDisclosure()
  const [isOpen1, setisOpen1] = useState(false)
  const [isOpen2, setisOpen2] = useState(false)

  const cancelRef = React.useRef()

  const columns = useMemo(() => columnsData, [columnsData]);
  const data = useMemo(() => tableData, [tableData]);

  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    initialState,
  } = tableInstance;
  // initialState.pageSize = 5

  const onClose1 = (val: boolean) => {
    setisOpen1(val)
  }
  const onClose2 = (val: boolean) => {
    setisOpen2(val)
  }


  const textColor = useColorModeValue("secondaryGray.900", "white");
  const borderColor = useColorModeValue("gray.200", "whiteAlpha.100");

  const categoryOption = [
    {
      key: "Delivery Issue",
      value: 1,
    },
    {
      key: "Payment Issue",
      value: 2,
    },
    {
      key: "Quality Issue",
      value: 3,
    },
    {
      key: "Others",
      value: 4,
    },
  ];

  const images = [avt1, avt2, avt3, avt4];

  const [id, setID] = useState('')
  const requestApiData = new Requests();
  const approveHandler = async (id: string) => {
    setisOpen1(false)
    const data = {
      "id": id,
      "is_approved": 1
    }

    await requestApiData.pharmacistApprove(data)
      .then((res) => {
        if (res?.status === 200) {
          document.getElementById(`approvehide${id}`).innerHTML = "<p style='color: #1b2559; font-weight: 700;'>Approved</p>"
        }
      })
      .catch((err) => {
        if (err?.response?.status === 401)
          Router.push("/auth/sign-in");
      });

  }

  const approveHandlerNot = async (id: string) => {
    setisOpen2(false)
    const data = {
      "id": id,
      "is_approved": 0
    }
    await requestApiData.pharmacistApprove(data)
      .then((res) => {
        if (res?.status === 200) {
          document.getElementById(`approvehide${id}`).innerHTML = "<p style='color: #1b2559; font-weight: 700;'>Not Approved</p>"
        }
      })
      .catch((err) => {
        if (err?.response?.status === 401)
          Router.push("/auth/sign-in");
      });
  }

  return (
    <Card
      flexDirection="column"
      w="100%"
      px="0px"
      overflowX={{ sm: "scroll", lg: "hidden" }}
    >
      <Flex px="25px" justify="space-between" mb="20px" align="center">
        <Text
          color={textColor}
          fontSize="22px"
          fontWeight="700"
          lineHeight="100%"
        ></Text>
        <Menu />
      </Flex>

      <Table {...getTableProps()} variant="simple" color="gray.500" mb="24px">
        <Thead>
          {headerGroups.map((headerGroup, index) => (
            <Tr {...headerGroup.getHeaderGroupProps()} key={index}>
              {headerGroup.headers.map((column, index) => (
                <Th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  pe="10px"
                  key={index}
                  borderColor={borderColor}
                >
                  <Flex
                    justify="space-between"
                    align="center"
                    fontSize={{ sm: "10px", lg: "12px" }}
                    color="gray.400"
                  >
                    {column.render("Header")}
                  </Flex>
                </Th>
              ))}
            </Tr>
          ))}
        </Thead>
        <Tbody {...getTableBodyProps()}>
          {page.map((row, index) => {
            prepareRow(row);
            return (
              <Tr {...row.getRowProps()} key={index}>
                {row.cells.map((cell, index2) => {
                  let data;

                  if (cell.column.id === "customerName") {
                    data = (
                      <Text
                        color={textColor}
                        fontSize="sm"
                        fontWeight="700"
                        style={{ display: "flex" }}
                      >
                        <Image
                          style={{ height: "40px", width: "40px" }}
                          src={
                            images[Math.floor(Math.random() * (3 - 0 + 1) + 0)]
                          }
                        />
                        <p style={{ paddingTop: "10px", paddingLeft: "5px" }}>
                          {" "}
                          {cell.value}
                        </p>
                      </Text>
                    );
                  } else if (cell.column.id === "phoneNumber") {
                    data = (
                      <Text color={textColor} fontSize="sm" fontWeight="700">
                        {cell.value}
                      </Text>
                    );
                  } else if (cell.column.id === "email") {
                    data = (
                      <Text color={textColor} fontSize="sm" fontWeight="700">
                        {cell.value}
                      </Text>
                    );
                  } else if (cell.column.id === "document") {
                    data = (
                      <div style={{ display: "flex" }}>
                        {cell?.value?.length > 0 && cell?.value[0]?.licence_image ? (
                          <Image
                            src={DocIcon}
                            onClick={() => {
                              let url = `http://3.108.227.121:8000${cell?.value[0]?.licence_image}`;
                              saveAs(url, "Licence Image");
                            }}
                            style={{
                              height: "40px",
                              width: "40px",
                              marginLeft: "5px",
                            }}
                          />
                        ) : null}

                        <>
                          {cell?.value?.length > 0 && cell?.value[0]?.registration_image ? (
                            <Image
                              src={DocIcon}
                              onClick={() => {
                                let url = `http://3.108.227.121:8000${cell?.value[0]?.registration_image}`;
                                saveAs(url, "Registration Image");
                              }}
                              style={{
                                height: "40px",
                                width: "40px",
                                marginLeft: "5px",
                              }}
                            />
                          ) : (
                            ""
                          )}
                        </>
                        <>
                          {cell?.value?.length > 0 && cell.value[0].registration_image ? (
                            <Image
                              src={DocIcon}
                              onClick={() => {
                                let url = `http://3.108.227.121:8000${cell.value[0].registration_image}`;
                                saveAs(url, "Id Image");
                              }}
                              style={{
                                height: "40px",
                                width: "40px",
                                marginLeft: "5px",
                              }}
                            />
                          ) : (
                            ""
                          )}
                        </>
                      </div>
                    );
                  } else if (cell.column.id === "action") {
                    console.log("11111111111111111111111", cell?.value)
                    data = (
                      <>
                        {
                          cell?.value == true ?
                            <>APPROVED</>
                            :
                            <div id={`approvehide${cell?.value}`}>
                              <Button
                                onClick={() => {
                                  setID(cell?.value);
                                  setisOpen1(true)
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
                                APPROVE
                              </Button>
                              <Button
                                style={{
                                  backgroundColor: "#fec400",
                                  borderRadius: "5px",
                                  height: "20px",
                                  fontSize: "10px",
                                  color: "white",
                                  marginLeft: "4px",
                                }}
                                onClick={
                                  () => {
                                    setID(cell?.value);
                                    setisOpen2(true)
                                  }}
                              >
                                {/* RAISE A QUERY */}
                                NOT APPROVE
                              </Button>
                            </div>

                        }
                      </>

                    );
                  }
                  return (
                    <Td
                      {...cell.getCellProps()}
                      key={index}
                      fontSize={{ sm: "14px" }}
                      minW={{ sm: "150px", md: "200px", lg: "auto" }}
                      borderColor="transparent"
                    >
                      {data}
                    </Td>
                  );
                })}
              </Tr>
            );
          })}
        </Tbody>
      </Table>

      <AlertDialog
        isOpen={isOpen1}
        leastDestructiveRef={cancelRef}
        onClose={() => onClose1(false)}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
              Approve Pharmacist
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You wan&apos;t to Approve it.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={() => onClose1(false)}>
                Cancel
              </Button>
              <Button colorScheme='green' onClick={() => approveHandler(id)} ml={3}>
                Approve
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>

      <AlertDialog
        isOpen={isOpen2}
        leastDestructiveRef={cancelRef}
        onClose={() => onClose2(false)}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
              Approve Pharmacist
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You don&apos;t wan&apos;t to Approve it.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={() => onClose2(false)}>
                Cancel
              </Button>
              <Button colorScheme='green' onClick={() => approveHandlerNot(id)} ml={3}>
                NOT APPROVE
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </Card>
  );
}
