import React from "react";
import Router from "next/router";
// Chakra imports
import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useColorModeValue,
  Radio,
  RadioGroup,
  Select,
  Stack,
} from "@chakra-ui/react";
// Custom components
import adminLogoImage from "img/layout/Logo2.png";

// Custom components
import { Image } from "components/image/Image";
import { HSeparator } from "components/separator/Separator";
import DefaultAuthLayout from "layouts/auth/Default";
// Assets
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { RiEyeCloseLine } from "react-icons/ri";
import { useFormik } from "formik";
import * as yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Requests from "../../models/Request";

export default function SignUp() {
  // Chakra color mode
  const requestApiData = new Requests();

  const textColor = useColorModeValue("navy.700", "white");
  const textColorSecondary = "gray.400";
  const errorColor = "red.700";
  const brandStars = useColorModeValue("brand.500", "brand.400");

  const [show, setShow] = React.useState(false);

  const handleClick = () => setShow(!show);

  const validationSchema = yup.object({
    name: yup.string().required("Username is required"),
    email: yup.string().required("Email is required").email("Enter a valid email"),
    mobile_number: yup
    .string()
    .required("Mobile number is required")
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/, 
      'Mobile number is not valid'
      ),
    first_name: yup.string().required("First name is required"),
    last_name: yup.string().required("Last name is required"),
    gender: yup.string().required("Gender is required"),
    user_type: yup.string().required("User type is required"),
    password: yup
      .string()
      .required("Password is required")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain minimum 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
    password2: yup
      .string()
      .oneOf([yup.ref("password"), null], "Password does not match"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      mobile_number: "",
      password: "",
      password2: "",
      first_name: "",
      last_name: "",
      gender: "",
      user_type: "",
    },
    enableReinitialize: true,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const mainPayload = {
        name: values?.name,
        email: values?.email,
        mobile_number: values?.mobile_number?.toString(),
        password: values.password,
        password2: values.password2,
        first_name: values?.first_name,
        last_name: values?.last_name,
        gender: values.gender,
        user_type: values.user_type,
      };
      requestApiData
        .signUpRequest(mainPayload)
        .then((res) => {
console.log(res);
console.log(res?.data?.Token);

          if (res?.status === 201) {
            localStorage.setItem("Token", res?.data?.Token);
            toast.success("You are Successfully Sign Up", {
              position: toast.POSITION.TOP_CENTER,
            });
            Router.push("/admin/default");
          }
        })
        .catch((err) => {   
          console.log(err);
          // console.log(err?.response?.data?.mobile_number[0]);

          // if (err?.response?.data ) {
          //   err?.response?.data?.mobile_number ? 
          //   toast.error("Mobile number already exists", {
          //     position: toast.POSITION.TOP_CENTER,
          //   }) : null

          //   err?.response?.data?.email ? 
          //   toast.error("Mobile number already exists", {
          //     position: toast.POSITION.TOP_CENTER,
          //   }) : null
           
          // } else {
            toast.error("Somthing went wrong", {
              position: toast.POSITION.TOP_CENTER,
            });
          // }
        });
    },
  });

  return (
    <DefaultAuthLayout illustrationBackground={"/img/auth/auth.png"} >
      <ToastContainer />
      <Flex
        style={{ marginLeft: "30%" }}
        maxW={{ base: "100%", md: "max-content" }}
        w="100%"
        mx={{ base: "auto", lg: "0px" }}
        me="auto"
        h="100%"
        alignItems="start"
        justifyContent="center"
        mb={{ base: "30px", md: "60px" }}
        px={{ base: "25px", md: "0px" }}
        mt={{ base: "40px", md: "14vh" }}
        flexDirection="column"
      >

        <Box me="auto">
          <Image
            src={adminLogoImage}
            style={{
              height: "150px",
              width: "150px",
              marginLeft: "50%",
              marginTop: "-40px",
            }}
          />

          <Heading color={textColor} fontSize="36px" mb="36px">
            Sign Up
          </Heading>
        </Box>

        <Flex
          zIndex="2"
          direction="column"
          w={{ base: "100%", md: "420px" }}
          maxW="100%"
          background="transparent"
          borderRadius="15px"
          mx={{ base: "auto", lg: "unset" }}
          me="auto"
          mb={{ base: "20px", md: "auto" }}
        >

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
                UserName<Text color={brandStars}>*</Text>
              </FormLabel>
              <Input
                variant="auth"
                fontSize="sm"
                ms={{ base: "0px", md: "0px" }}
                type="text"
                placeholder="Add Your Username"
                mb="8px"
                fontWeight="500"
                size="lg"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {
                formik.errors.name && formik.touched.name == true ? 
                <FormHelperText color={errorColor} mb="16px">{formik.errors.name}</FormHelperText>: null
              }

              <FormLabel
                display="flex"
                ms="4px"
                fontSize="sm"
                fontWeight="500"
                color={textColor}
                mb="8px"
              >
                Email<Text color={brandStars}>*</Text>
              </FormLabel>
              <Input
                variant="auth"
                fontSize="sm"
                ms={{ base: "0px", md: "0px" }}
                type="email"
                placeholder="mail@simmmple.com"
                mb="8px"
                fontWeight="500"
                size="lg"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {
                formik.errors.email && formik.touched.email == true ? 
                <FormHelperText color={errorColor} mb="16px">{formik.errors.email}</FormHelperText>: null
              }


              <FormLabel
                display="flex"
                ms="4px"
                fontSize="sm"
                fontWeight="500"
                color={textColor}
                mb="8px"
              >
                Mobile Number<Text color={brandStars}>*</Text>
              </FormLabel>
              <Input
                variant="auth"
                fontSize="sm"
                ms={{ base: "0px", md: "0px" }}
                type="text"
                placeholder="(000) 000 000 0000"
                mb="8px"
                fontWeight="500"
                size="lg"
                name="mobile_number"
                value={formik.values.mobile_number}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {
                formik.errors.mobile_number && formik.touched.mobile_number == true ? 
                <FormHelperText color={errorColor} mb="16px">{formik.errors.mobile_number}</FormHelperText>: null
              }

              <FormLabel
                ms="4px"
                fontSize="sm"
                fontWeight="500"
                color={textColor}
                display="flex"
              >
                Password<Text color={brandStars}>*</Text>
              </FormLabel>
              <InputGroup size="md">
                <Input
                  fontSize="sm"
                  placeholder="Min. 8 characters"
                  mb="8px"
                  size="lg"
                  type={show ? "text" : "password"}
                  variant="auth"
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <InputRightElement display="flex" alignItems="center" mt="4px">
                  <Icon
                    color={textColorSecondary}
                    _hover={{ cursor: "pointer" }}
                    as={show ? RiEyeCloseLine : MdOutlineRemoveRedEye}
                    onClick={handleClick}
                  />
                </InputRightElement>
              </InputGroup>
              {
                formik.errors.password && formik.touched.password == true ? 
                <FormHelperText color={errorColor} mb="16px">{formik.errors.password}</FormHelperText>: null
              }

              <FormLabel
                ms="4px"
                fontSize="sm"
                fontWeight="500"
                color={textColor}
                display="flex"
              >
                Password2<Text color={brandStars}>*</Text>
              </FormLabel>
              <InputGroup size="md">
                <Input
                  fontSize="sm"
                  placeholder="Min. 8 characters"
                  mb="8px"
                  size="lg"
                  type={show ? "text" : "password"}
                  variant="auth"
                  name="password2"
                  value={formik.values.password2}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <InputRightElement display="flex" alignItems="center" mt="4px">
                  <Icon
                    color={textColorSecondary}
                    _hover={{ cursor: "pointer" }}
                    as={show ? RiEyeCloseLine : MdOutlineRemoveRedEye}
                    onClick={handleClick}
                  />
                </InputRightElement>
              </InputGroup>
              {
                formik.errors.password2 && formik.touched.password2 == true ? 
                <FormHelperText color={errorColor} mb="16px">{formik.errors.password2}</FormHelperText>: null
              }

              <FormLabel
                display="flex"
                ms="4px"
                fontSize="sm"
                fontWeight="500"
                color={textColor}
                mb="8px"
              >
                First Name<Text color={brandStars}>*</Text>
              </FormLabel>
              <Input
                variant="auth"
                fontSize="sm"
                ms={{ base: "0px", md: "0px" }}
                type="text"
                placeholder=""
                mb="8px"
                fontWeight="500"
                size="lg"
                name="first_name"
                value={formik.values.first_name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {
                formik.errors.first_name && formik.touched.first_name == true ? 
                <FormHelperText color={errorColor} mb="16px">{formik.errors.first_name}</FormHelperText>: null
              }

              <FormLabel
                display="flex"
                ms="4px"
                fontSize="sm"
                fontWeight="500"
                color={textColor}
                mb="8px"
              >
                Last Name<Text color={brandStars}>*</Text>
              </FormLabel>
              <Input
                variant="auth"
                fontSize="sm"
                ms={{ base: "0px", md: "0px" }}
                type="text"
                placeholder=""
                mb="8px"
                fontWeight="500"
                size="lg"
                name="last_name"
                value={formik.values.last_name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {
                formik.errors.last_name && formik.touched.last_name == true ? 
                <FormHelperText color={errorColor} mb="16px">{formik.errors.last_name}</FormHelperText>: null
              }

              <FormLabel
                display="flex"
                ms="4px"
                fontSize="sm"
                fontWeight="500"
                color={textColor}
                mb="8px"
              >
                Gender<Text color={brandStars}>*</Text>
              </FormLabel>
              <RadioGroup mb="8px">
                <Stack direction="row">
                  <Radio
                    name="gender"
                    onChange={formik.handleChange}
                    checked={formik.values.gender == "F" ? true : false}
                    value="F"
                  >
                    F
                  </Radio>
                  <Radio
                    name="gender"
                    onChange={formik.handleChange}
                    checked={formik.values.gender == "M" ? true : false}
                    value="M"
                  >
                    M
                  </Radio>
                  <Radio
                    name="gender"
                    onChange={formik.handleChange}
                    checked={formik.values.gender == "O" ? true : false}
                    value="O"
                  >
                    O
                  </Radio>
                </Stack>
              </RadioGroup>
              {
                formik.errors.gender && formik.touched.gender == true ? 
                <FormHelperText color={errorColor} mb="16px">{formik.errors.gender}</FormHelperText>: null
              }

              <FormLabel
                display="flex"
                ms="4px"
                fontSize="sm"
                fontWeight="500"
                color={textColor}
                mb="8px"
              >
                User Type<Text color={brandStars}>*</Text>
              </FormLabel>
              <Select
                name="user_type"
                placeholder="Select option"
                mb="8px"
                onChange={formik.handleChange}
              >
                <option value="Customer">Customer</option>
                <option value="Pharmacists">Pharmacists</option>
                <option value="Doctor">Doctor</option>
                <option value="Hospitals">Hospitals</option>
              </Select>
              {
                formik.errors.user_type && formik.touched.user_type == true ? 
                <FormHelperText color={errorColor} mb="16px">{formik.errors.user_type}</FormHelperText>: null
              }

              <Button
                fontSize="sm"
                variant="brand"
                fontWeight="500"
                w="100%"
                h="50"
                mb="8px"
                type="submit"
              >
                Sign Up
              </Button>
            </FormControl>
          </form>

        </Flex>

      </Flex>
    </DefaultAuthLayout>
  );
}
