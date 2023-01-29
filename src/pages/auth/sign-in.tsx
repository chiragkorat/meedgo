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
  FormHelperText,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useColorModeValue,
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
import Requests from "../../models/Request";
import { useFormik } from "formik";
import * as yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SignIn() {
  const requestApiData = new Requests();

  // Chakra color mode
  const textColor = useColorModeValue("navy.700", "white");
  const textColorSecondary = "gray.400";
  const textColorDetails = useColorModeValue("navy.700", "secondaryGray.600");
  const textColorBrand = useColorModeValue("brand.500", "white");
  const brandStars = useColorModeValue("brand.500", "brand.400");
  const googleBg = useColorModeValue("secondaryGray.300", "whiteAlpha.200");
  const googleText = useColorModeValue("navy.700", "white");
  const googleHover = useColorModeValue(
    { bg: "gray.200" },
    { bg: "whiteAlpha.300" }
  );
  const googleActive = useColorModeValue(
    { bg: "secondaryGray.300" },
    { bg: "whiteAlpha.200" }
  );
  const errorColor = "red.700";

  const [showOTP, setshowOTP] = React.useState(false);
  const [mobileNumber, setMobileNumber] = React.useState("");

  const validationSchema = yup.object({
    mobile_number: yup
      .string()
      .required("Mobile number is required")
      .matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
        "Mobile number is not valid"
      ),
  });

  const formikSendOTP = useFormik({
    initialValues: {
      mobile_number: "",
    },
    enableReinitialize: true,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const mainPayload = {
        phone: values?.mobile_number?.toString(),
      };
      requestApiData
        .sendOTP(mainPayload.phone)
        .then((res) => {
          setshowOTP(true);
          setMobileNumber(mainPayload.phone);
        })
        .catch((err) => {
          toast.error(err?.response?.data?.msg, {
            position: toast.POSITION.TOP_CENTER,
          });
        });
    },
  });

  const formikVerifyOTP = useFormik({
    initialValues: {
      otp: "",
    },
    enableReinitialize: true,
    onSubmit: (values) => {
      const mainPayload = {
        otp: values?.otp,
      };
      requestApiData
        .verifyOTP(mobileNumber, mainPayload.otp)
        .then((res) => {
          if (res?.status === 200) {
            localStorage.setItem("Token", res?.data?.data?.token?.accessToken);
            toast.success("You are Sucessful Login", {
              position: toast.POSITION.TOP_CENTER,
            });
            Router.push("/admin/default");
          }
        })
        .catch((err) => {
          toast.error(err?.response?.data, {
            position: toast.POSITION.TOP_CENTER,
          });
        });
    },
  });

  return (
    <DefaultAuthLayout illustrationBackground={"/img/auth/auth.png"}>
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

          <Heading color={textColor} fontSize="36px" mb="10px">
            Sign In
          </Heading>
          <Text
            mb="36px"
            ms="4px"
            color={textColorSecondary}
            fontWeight="400"
            fontSize="md"
          >
            Enter your mobile number to sign in!
          </Text>
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
          {showOTP == true ? (
            <form onSubmit={formikVerifyOTP.handleSubmit}>
              <FormControl>
                <FormLabel
                  display="flex"
                  ms="4px"
                  fontSize="sm"
                  fontWeight="500"
                  color={textColor}
                  mb="8px"
                >
                  OTP
                </FormLabel>
                <Input
                  isRequired={true}
                  variant="auth"
                  fontSize="sm"
                  ms={{ base: "0px", md: "0px" }}
                  type="text"
                  placeholder=""
                  mb="24px"
                  fontWeight="500"
                  size="lg"
                  name="otp"
                  value={formikVerifyOTP.values.otp}
                  onChange={formikVerifyOTP.handleChange}
                />

                <Button
                  fontSize="sm"
                  variant="brand"
                  fontWeight="500"
                  w="100%"
                  h="50"
                  mb="24px"
                  type="submit"
                >
                  Send OTP
                </Button>
              </FormControl>
            </form>
          ) : (
            <form onSubmit={formikSendOTP.handleSubmit}>
              <FormControl>
                <FormLabel
                  ms="4px"
                  fontSize="sm"
                  fontWeight="500"
                  color={textColor}
                  display="flex"
                >
                  Mobile Number
                </FormLabel>
                <Input
                  fontSize="sm"
                  placeholder="Min. 10 characters"
                  mb="24px"
                  size="lg"
                  type="text"
                  variant="auth"
                  name="mobile_number"
                  value={formikSendOTP.values.mobile_number}
                  onChange={formikSendOTP.handleChange}
                  onBlur={formikSendOTP.handleBlur}
                />
                {formikSendOTP.errors.mobile_number &&
                formikSendOTP.touched.mobile_number == true ? (
                  <FormHelperText color={errorColor} mb="16px">
                    {formikSendOTP.errors.mobile_number}
                  </FormHelperText>
                ) : null}

                <Button
                  fontSize="sm"
                  variant="brand"
                  fontWeight="500"
                  w="100%"
                  h="50"
                  mb="24px"
                  type="submit"
                >
                  Send OTP
                </Button>
              </FormControl>
            </form>
          )}
          {/* <Flex flexDirection='column' justifyContent='center' alignItems='start' maxW='100%' mt='0px'>
			<Text color={textColorDetails} fontWeight='400' fontSize='14px'>
				Not registered yet?
				<Link href='/auth/sign-up'>
					<a>
						<Text color={textColorBrand} as='span' ms='5px' fontWeight='500'>
							Create an Account
						</Text>
					</a>
				</Link>
			</Text>
		</Flex> */}
        </Flex>
      </Flex>
    </DefaultAuthLayout>
  );
}
