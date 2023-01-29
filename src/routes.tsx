import { Icon } from "@chakra-ui/react";
import {
  MdBarChart,
  MdPerson,
  MdHome,
  MdLock,
  MdOutlineShoppingCart,
  MdOutlineQuestionAnswer,
  MdShoppingCart
} from "react-icons/md";

// Admin Imports
import MainDashboard from "pages/admin/default";

import Access from "pages/admin/access";
import CreateNew from "pages/admin/create-new";
import AssessDashboard from "pages/admin/assess-dashboard";
import Review from "pages/admin/review";


import Build from "pages/admin/build";
import Validate from "pages/admin/validate";
import Test from "pages/admin/test";
import Measure from "pages/admin/measure";
import Maintain from "pages/admin/maintain";

import PharmacyProfile from 'pages/admin/pharmacist-profile'
import CustomerServices from 'pages/admin/customer-services'
import OrderDetailsServices from 'pages/admin/order-details'
import Profile from "pages/admin/profile";
// import DataTables from 'pages/admin/data-tables'
import RTL from 'pages/rtl/rtl-default'

// Auth Imports
import SignInCentered from "pages/auth/sign-in";
import { IRoute } from "types/navigation";

const routes: IRoute[] = [
  {
    name: "Dashboard",
    layout: "/admin",
    path: "/default",
    icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
    component: MainDashboard,
  },
  {
    name: "Pharmacist Profile",
    layout: "/admin",
    path: "/pharmacist-profile",
    icon: (
      <Icon
        as={MdPerson}
        width='20px'
        height='20px'
        color='inherit'
      />
    ),
    component: PharmacyProfile,
    secondary: true,
  },
  // {
  //   name: "Pharmacist Profile",
  //   layout: "/admin",
  //   path: "/nft-marketplace",
  //   icon: <Icon as={MdPerson} width="20px" height="20px" color="inherit" />,
  //   component: CreateNew,
  // },
  {
    name: "Customer Services",
    layout: "/admin",
    path: "/customer-services",
    icon: <Icon as={MdOutlineQuestionAnswer} width="20px" height="20px" color="inherit" />,
    component: CustomerServices,
  },
  {
    name: "Order Details",
    layout: "/admin",
    path: "/order-details",
    icon: <Icon as={MdShoppingCart} width="20px" height="20px" color="inherit" />,
    component: OrderDetailsServices,
  },
  // {
  //   name: "Sign In",
  //   layout: "/auth",
  //   path: "/sign-in",
  //   icon: <Icon as={MdLock} width='20px' height='20px' color='inherit' />,
  //   component: SignInCentered,
  // },
];

export default routes;
