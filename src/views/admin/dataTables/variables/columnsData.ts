interface IColumnHeader {
  Header: string;
  accessor: string;
}

type Columns = IColumnHeader[];

export const columnsDataDevelopment: Columns = [
  {
    Header: "NAME",
    accessor: "name",
  },
  {
    Header: "TECH",
    accessor: "tech",
  },
  {
    Header: "DATE",
    accessor: "date",
  },
  {
    Header: "PROGRESS",
    accessor: "progress",
  },
];

export const columnsDataCheck: Columns = [
  {
    Header: "NAME",
    accessor: "name",
  },
  {
    Header: "PROGRESS",
    accessor: "progress",
  },
  {
    Header: "QUANTITY",
    accessor: "quantity",
  },
  {
    Header: "DATE",
    accessor: "date",
  },
];

export const columnsDataColumns: Columns = [
  {
    Header: "NAME",
    accessor: "name",
  },
  {
    Header: "PROGRESS",
    accessor: "progress",
  },
  {
    Header: "QUANTITY",
    accessor: "quantity",
  },
  {
    Header: "DATE",
    accessor: "date",
  },
];

export const columnsDataComplex: Columns = [
  {
    Header: "Order ID",
    accessor: "orderId",
  },
  {
    Header: "Customer Name",
    accessor: "customerName",
  },
  {
    Header: "Phone Number",
    accessor: "phoneNumber",
  },
  {
    Header: "Category",
    accessor: "category",
  },
  {
    Header: "Description",
    accessor: "description",
  },
  {
    Header: "Status",
    accessor: "status",
  },
  {
    Header: "Changer Status",
    accessor: "changeStatus",
  },
];

export const PharmacistcolumnsData: Columns = [
  {
    Header: "Customer Name",
    accessor: "customerName",
  },
  {
    Header: "Email",
    accessor: "email",
  },
  {
    Header: "Phone Number",
    accessor: "phoneNumber",
  },
  {
    Header: "Document attached",
    accessor: "document",
  },
  {
    Header: "Action",
    accessor: "action",
  },
];


export const orderDatailsComplex: Columns = [
  {
    Header: "Pharmacist Id",
    accessor: "pharmacistId",
  },
  {
    Header: "Pharmacist Name",
    accessor: "pharmacistName",
  },
  {
    Header: "Order Id",
    accessor: "orderId",
  },
  {
    Header: "Customer Name",
    accessor: "customerName",
  },
  {
    Header: "Order Total",
    accessor: "total",
  },
  {
    Header: "Order Date",
    accessor: "orderDate",
  },
  {
    Header: "Status",
    accessor: "status",
  }
];