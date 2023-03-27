import { AiOutlinePieChart } from "react-icons/ai";
import { BiWallet } from "react-icons/bi";
import { TbArrowsDownUp } from "react-icons/tb";
import {
  BsArrowRepeat,
  BsBarChart,
  BsCart2,
  BsLink45Deg,
  BsMegaphone,
} from "react-icons/bs";
import { TbArrowsRightLeft } from "react-icons/tb";

export const mainNavlinks = [
  {
    name: "Dashboard",
    imgUrl: <AiOutlinePieChart />,
    link: "/dashboard",
  },
  {
    name: `Balances`,
    imgUrl: <BiWallet />,
    link: "/balance",
    disabled: true,
  },
  {
    name: "Transactions",
    imgUrl: <TbArrowsDownUp />,
    link: "/dashboard/transactions",
  },
  {
    name: "Analytics",
    imgUrl: <BsBarChart />,
    link: "/analytics",
    disabled: true,
  },
  {
    name: "Martketing",
    imgUrl: <BsMegaphone />,
    link: "/marketing",
    disabled: true,
  },
  {
    name: "Exchange rates",
    imgUrl: <BsArrowRepeat />,
    link: "/exchangerates",
    disabled: true,
  },
];

export const subNavlinks = [
  {
    name: "Checkout",
    imgUrl: <BsCart2 />,
    link: "/checkout",
    disabled: true,
  },
  {
    name: "Payment Links",
    imgUrl: <BsLink45Deg />,
    link: "/paymentlink",
    disabled: true,
  },
];

export const thirdNavlinks = [
  {
    name: "Wire",
    imgUrl: <TbArrowsRightLeft />,
    link: "/wire",
    disabled: true,
  },
];

export const mobileNavlinks = [
  {
    name: "Dashboard",
    imgUrl: <AiOutlinePieChart />,
    link: "/dashboard",
  },
  {
    name: `Balances`,
    imgUrl: <BiWallet />,
    link: "/balance",
    disabled: true,
  },
  {
    name: "Transactions",
    imgUrl: <TbArrowsDownUp />,
    link: "/dashboard/transactions",
  },
  {
    name: "Analytics",
    imgUrl: <BsBarChart />,
    link: "/analytics",
    disabled: true,
  },
  {
    name: "Martketing",
    imgUrl: <BsMegaphone />,
    link: "/marketing",
    disabled: true,
  },
  {
    name: "Exchange rates",
    imgUrl: <BsArrowRepeat />,
    link: "/exchangerates",
    disabled: true,
  },
  {
    name: "Checkout",
    imgUrl: <BsCart2 />,
    link: "/checkout",
    disabled: true,
  },
  {
    name: "Payment Links",
    imgUrl: <BsLink45Deg />,
    link: "/paymentlink",
    disabled: true,
  },
  {
    name: "Wire",
    imgUrl: <TbArrowsRightLeft />,
    link: "/wire",
    disabled: true,
  },
];

export const tableData = [
  {
    transaction_id: "GB124QWERTY12346",
    source: "GTB",
    customer_name: "Mike Owen",
    customer_email: "0223337281",
    amount: "$230.00",
    request_date: "24.08.2021",
    status: "Pending",
  },
  {
    transaction_id: "CB328ABCEDF23416",
    source: "UBA",
    customer_name: "Steve O'Shassy",
    customer_email: "0982764829",
    amount: "$480.00",
    request_date: "22.08.2021",
    status: "Successful",
  },
  {
    transaction_id: "GB124QWERTY12346",
    source: "GTB",
    customer_name: "Mike Owen",
    customer_email: "0223337281",
    amount: "$230.00",
    request_date: "24.08.2021",
    status: "Pending",
  },
  {
    transaction_id: "GB124QWERTY12346",
    source: "GTB",
    customer_name: "Mike Owen",
    customer_email: "0223337281",
    amount: "$230.00",
    request_date: "24.08.2021",
    status: "Pending",
  },
  {
    transaction_id: "GB124QWERTY12346",
    source: "GTB",
    customer_name: "Mike Owen",
    customer_email: "0223337281",
    amount: "$230.00",
    request_date: "24.08.2021",
    status: "Pending",
  },
  {
    transaction_id: "CB328ABCEDF23416",
    source: "UBA",
    customer_name: "Steve O'Shassy",
    customer_email: "0982764829",
    amount: "$480.00",
    request_date: "22.08.2021",
    status: "Successful",
  },
  {
    transaction_id: "GB124QWERTY12346",
    source: "GTB",
    customer_name: "Mike Owen",
    customer_email: "0223337281",
    amount: "$230.00",
    request_date: "24.08.2021",
    status: "Pending",
  },
  {
    transaction_id: "GB124QWERTY12346",
    source: "GTB",
    customer_name: "Mike Owen",
    customer_email: "0223337281",
    amount: "$230.00",
    request_date: "24.08.2021",
    status: "Pending",
  },
  {
    transaction_id: "GB124QWERTY12346",
    source: "GTB",
    customer_name: "Mike Owen",
    customer_email: "0223337281",
    amount: "$230.00",
    request_date: "24.08.2021",
    status: "Pending",
  },
  {
    transaction_id: "CB328ABCEDF23416",
    source: "UBA",
    customer_name: "Steve O'Shassy",
    customer_email: "0982764829",
    amount: "$480.00",
    request_date: "22.08.2021",
    status: "Successful",
  },
  {
    transaction_id: "GB124QWERTY12346",
    source: "GTB",
    customer_name: "Mike Owen",
    customer_email: "0223337281",
    amount: "$230.00",
    request_date: "24.08.2021",
    status: "Pending",
  },
  {
    transaction_id: "GB124QWERTY12346",
    source: "GTB",
    customer_name: "Mike Owen",
    customer_email: "0223337281",
    amount: "$230.00",
    request_date: "24.08.2021",
    status: "Pending",
  },
  {
    transaction_id: "GB124QWERTY12346",
    source: "GTB",
    customer_name: "Mike Owen",
    customer_email: "0223337281",
    amount: "$230.00",
    request_date: "24.08.2021",
    status: "Pending",
  },
  {
    transaction_id: "CB328ABCEDF23416",
    source: "UBA",
    customer_name: "Steve O'Shassy",
    customer_email: "0982764829",
    amount: "$480.00",
    request_date: "22.08.2021",
    status: "Successful",
  },
  {
    transaction_id: "GB124QWERTY12346",
    source: "GTB",
    customer_name: "Mike Owen",
    customer_email: "0223337281",
    amount: "$230.00",
    request_date: "24.08.2021",
    status: "Pending",
  },
  {
    transaction_id: "GB124QWERTY12346",
    source: "GTB",
    customer_name: "Mike Owen",
    customer_email: "0223337281",
    amount: "$230.00",
    request_date: "24.08.2021",
    status: "Pending",
  },
  {
    transaction_id: "GB124QWERTY12346",
    source: "GTB",
    customer_name: "Mike Owen",
    customer_email: "0223337281",
    amount: "$230.00",
    request_date: "24.08.2021",
    status: "Pending",
  },
  {
    transaction_id: "CB328ABCEDF23416",
    source: "UBA",
    customer_name: "Steve O'Shassy",
    customer_email: "0982764829",
    amount: "$480.00",
    request_date: "22.08.2021",
    status: "Successful",
  },
  {
    transaction_id: "GB124QWERTY12346",
    source: "GTB",
    customer_name: "Mike Owen",
    customer_email: "0223337281",
    amount: "$230.00",
    request_date: "24.08.2021",
    status: "Pending",
  },
  {
    transaction_id: "GB124QWERTY12346",
    source: "GTB",
    customer_name: "Mike Owen",
    customer_email: "0223337281",
    amount: "$230.00",
    request_date: "24.08.2021",
    status: "Pending",
  },
  {
    transaction_id: "GB124QWERTY12346",
    source: "GTB",
    customer_name: "Mike Owen",
    customer_email: "0223337281",
    amount: "$230.00",
    request_date: "24.08.2021",
    status: "Pending",
  },
  {
    transaction_id: "CB328ABCEDF23416",
    source: "UBA",
    customer_name: "Steve O'Shassy",
    customer_email: "0982764829",
    amount: "$480.00",
    request_date: "22.08.2021",
    status: "Successful",
  },
  {
    transaction_id: "GB124QWERTY12346",
    source: "GTB",
    customer_name: "Mike Owen",
    customer_email: "0223337281",
    amount: "$230.00",
    request_date: "24.08.2021",
    status: "Pending",
  },
  {
    transaction_id: "GB124QWERTY12346",
    source: "GTB",
    customer_name: "Mike Owen",
    customer_email: "0223337281",
    amount: "$230.00",
    request_date: "24.08.2021",
    status: "Pending",
  },
  {
    transaction_id: "GB124QWERTY12346",
    source: "GTB",
    customer_name: "Mike Owen",
    customer_email: "0223337281",
    amount: "$230.00",
    request_date: "24.08.2021",
    status: "Pending",
  },
  {
    transaction_id: "CB328ABCEDF23416",
    source: "UBA",
    customer_name: "Steve O'Shassy",
    customer_email: "0982764829",
    amount: "$480.00",
    request_date: "22.08.2021",
    status: "Successful",
  },
  {
    transaction_id: "GB124QWERTY12346",
    source: "GTB",
    customer_name: "Mike Owen",
    customer_email: "0223337281",
    amount: "$230.00",
    request_date: "24.08.2021",
    status: "Pending",
  },
  {
    transaction_id: "GB124QWERTY12346",
    source: "GTB",
    customer_name: "Mike Owen",
    customer_email: "0223337281",
    amount: "$230.00",
    request_date: "24.08.2021",
    status: "Pending",
  },
  {
    transaction_id: "GB124QWERTY12346",
    source: "GTB",
    customer_name: "Mike Owen",
    customer_email: "0223337281",
    amount: "$230.00",
    request_date: "24.08.2021",
    status: "Pending",
  },
  {
    transaction_id: "CB328ABCEDF23416",
    source: "UBA",
    customer_name: "Steve O'Shassy",
    customer_email: "0982764829",
    amount: "$480.00",
    request_date: "22.08.2021",
    status: "Successful",
  },
  {
    transaction_id: "GB124QWERTY12346",
    source: "GTB",
    customer_name: "Mike Owen",
    customer_email: "0223337281",
    amount: "$230.00",
    request_date: "24.08.2021",
    status: "Pending",
  },
  {
    transaction_id: "GB124QWERTY12346",
    source: "GTB",
    customer_name: "Mike Owen",
    customer_email: "0223337281",
    amount: "$230.00",
    request_date: "24.08.2021",
    status: "Pending",
  },
  {
    transaction_id: "GB124QWERTY12346",
    source: "GTB",
    customer_name: "Mike Owen",
    customer_email: "0223337281",
    amount: "$230.00",
    request_date: "24.08.2021",
    status: "Pending",
  },
  {
    transaction_id: "CB328ABCEDF23416",
    source: "UBA",
    customer_name: "Steve O'Shassy",
    customer_email: "0982764829",
    amount: "$480.00",
    request_date: "22.08.2021",
    status: "Successful",
  },
  {
    transaction_id: "GB124QWERTY12346",
    source: "GTB",
    customer_name: "Mike Owen",
    customer_email: "0223337281",
    amount: "$230.00",
    request_date: "24.08.2021",
    status: "Pending",
  },
  {
    transaction_id: "GB124QWERTY12346",
    source: "GTB",
    customer_name: "Mike Owen",
    customer_email: "0223337281",
    amount: "$230.00",
    request_date: "24.08.2021",
    status: "Pending",
  },
  {
    transaction_id: "GB124QWERTY12346",
    source: "GTB",
    customer_name: "Mike Owen",
    customer_email: "0223337281",
    amount: "$230.00",
    request_date: "24.08.2021",
    status: "Pending",
  },
  {
    transaction_id: "CB328ABCEDF23416",
    source: "UBA",
    customer_name: "Steve O'Shassy",
    customer_email: "0982764829",
    amount: "$480.00",
    request_date: "22.08.2021",
    status: "Successful",
  },
  {
    transaction_id: "GB124QWERTY12346",
    source: "GTB",
    customer_name: "Mike Owen",
    customer_email: "0223337281",
    amount: "$230.00",
    request_date: "24.08.2021",
    status: "Pending",
  },
  {
    transaction_id: "GB124QWERTY12346",
    source: "GTB",
    customer_name: "Mike Owen",
    customer_email: "0223337281",
    amount: "$230.00",
    request_date: "24.08.2021",
    status: "Pending",
  },
  {
    transaction_id: "GB124QWERTY12346",
    source: "GTB",
    customer_name: "Mike Owen",
    customer_email: "0223337281",
    amount: "$230.00",
    request_date: "24.08.2021",
    status: "Pending",
  },
  {
    transaction_id: "CB328ABCEDF23416",
    source: "UBA",
    customer_name: "Steve O'Shassy",
    customer_email: "0982764829",
    amount: "$480.00",
    request_date: "22.08.2021",
    status: "Successful",
  },
  {
    transaction_id: "GB124QWERTY12346",
    source: "GTB",
    customer_name: "Mike Owen",
    customer_email: "0223337281",
    amount: "$230.00",
    request_date: "24.08.2021",
    status: "Pending",
  },
  {
    transaction_id: "GB124QWERTY12346",
    source: "GTB",
    customer_name: "Mike Owen",
    customer_email: "0223337281",
    amount: "$230.00",
    request_date: "24.08.2021",
    status: "Pending",
  },
  {
    transaction_id: "GB124QWERTY12346",
    source: "GTB",
    customer_name: "Mike Owen",
    customer_email: "0223337281",
    amount: "$230.00",
    request_date: "24.08.2021",
    status: "Pending",
  },
  {
    transaction_id: "CB328ABCEDF23416",
    source: "UBA",
    customer_name: "Steve O'Shassy",
    customer_email: "0982764829",
    amount: "$480.00",
    request_date: "22.08.2021",
    status: "Successful",
  },
  {
    transaction_id: "GB124QWERTY12346",
    source: "GTB",
    customer_name: "Mike Owen",
    customer_email: "0223337281",
    amount: "$230.00",
    request_date: "24.08.2021",
    status: "Pending",
  },
  {
    transaction_id: "GB124QWERTY12346",
    source: "GTB",
    customer_name: "Mike Owen",
    customer_email: "0223337281",
    amount: "$230.00",
    request_date: "24.08.2021",
    status: "Pending",
  },
];

export const salesChartData = [
  {
    price: 2200,
    date: "20-Aug",
  },
  {
    price: 2200,
    date: "20-Aug",
  },
  {
    price: 3800,
    date: "20-Aug",
  },
  {
    price: 3400,
    date: "20-Aug",
  },
  {
    price: 2100,
    date: "21-Aug",
  },
  {
    price: 2250,
    date: "21-Aug",
  },
  {
    price: 1500,
    date: "21-Aug",
  },
  {
    price: 1800,
    date: "22-Aug",
  },
  {
    price: 2700,
    date: "22-Aug",
  },
  {
    price: 2600,
    date: "22-Aug",
  },
  {
    price: 1900,
    date: "23-Aug",
  },
  {
    price: 2500,
    date: "23-Aug",
  },
  {
    price: 2300,
    date: "24-Aug",
  },
  {
    price: 2500,
    date: "24-Aug",
  },
  {
    price: 3200,
    date: "24-Aug",
  },
  {
    price: 2600,
    date: "25-Aug",
  },
  {
    price: 2700,
    date: "25-Aug",
  },
];

export const weeklyChartData = [
  {
    price: 2200,
    date: "20-Aug",
  },
  {
    price: 2200,
    date: "20-Aug",
  },
  {
    price: 3800,
    date: "20-Aug",
  },
  {
    price: 3400,
    date: "20-Aug",
  },
  {
    price: 2100,
    date: "21-Aug",
  },
  {
    price: 2250,
    date: "21-Aug",
  },
  {
    price: 1500,
    date: "21-Aug",
  },
  {
    price: 1800,
    date: "22-Aug",
  },
  {
    price: 2300,
    date: "24-Aug",
  },
  {
    price: 2500,
    date: "24-Aug",
  },
  {
    price: 3200,
    date: "24-Aug",
  },
  {
    price: 2600,
    date: "25-Aug",
  },
  {
    price: 2700,
    date: "25-Aug",
  },
  {
    price: 2700,
    date: "22-Aug",
  },
  {
    price: 2600,
    date: "22-Aug",
  },
  {
    price: 2100,
    date: "21-Aug",
  },
  {
    price: 2250,
    date: "21-Aug",
  },
  {
    price: 1500,
    date: "21-Aug",
  },
  {
    price: 1800,
    date: "22-Aug",
  },
  {
    price: 1900,
    date: "23-Aug",
  },
  {
    price: 2500,
    date: "23-Aug",
  },
  {
    price: 2300,
    date: "24-Aug",
  },
  {
    price: 2500,
    date: "24-Aug",
  },
  {
    price: 3200,
    date: "24-Aug",
  },
  {
    price: 2600,
    date: "25-Aug",
  },
  {
    price: 2700,
    date: "25-Aug",
  },
];

export const thisMonthChartData = [
  {
    price: 2200,
    date: "20-Aug",
  },
  {
    price: 2200,
    date: "20-Aug",
  },
  {
    price: 3800,
    date: "20-Aug",
  },
  {
    price: 3400,
    date: "20-Aug",
  },
  {
    price: 2100,
    date: "21-Aug",
  },
  {
    price: 2250,
    date: "21-Aug",
  },
  {
    price: 1500,
    date: "21-Aug",
  },
  {
    price: 1800,
    date: "22-Aug",
  },
  {
    price: 2300,
    date: "24-Aug",
  },
  {
    price: 2500,
    date: "24-Aug",
  },
  {
    price: 2100,
    date: "21-Aug",
  },
  {
    price: 2250,
    date: "21-Aug",
  },
  {
    price: 1500,
    date: "21-Aug",
  },
  {
    price: 1800,
    date: "22-Aug",
  },
  {
    price: 3200,
    date: "24-Aug",
  },
  {
    price: 2600,
    date: "25-Aug",
  },
  {
    price: 2700,
    date: "25-Aug",
  },
  {
    price: 2700,
    date: "22-Aug",
  },
  {
    price: 2600,
    date: "22-Aug",
  },
  {
    price: 2100,
    date: "21-Aug",
  },
  {
    price: 2250,
    date: "21-Aug",
  },
  {
    price: 1500,
    date: "21-Aug",
  },
  {
    price: 1800,
    date: "22-Aug",
  },
  {
    price: 1900,
    date: "23-Aug",
  },
  {
    price: 2700,
    date: "22-Aug",
  },
  {
    price: 2600,
    date: "22-Aug",
  },
  {
    price: 2100,
    date: "21-Aug",
  },
  {
    price: 2250,
    date: "21-Aug",
  },
  {
    price: 2500,
    date: "23-Aug",
  },
  {
    price: 2300,
    date: "24-Aug",
  },
  {
    price: 2500,
    date: "24-Aug",
  },
  {
    price: 3200,
    date: "24-Aug",
  },
  {
    price: 2600,
    date: "25-Aug",
  },
  {
    price: 2700,
    date: "25-Aug",
  },
];

export const lastMonthChartData = [
  {
    price: 2200,
    date: "20-Aug",
  },
  {
    price: 2200,
    date: "20-Aug",
  },
  {
    price: 3800,
    date: "20-Aug",
  },
  {
    price: 3400,
    date: "20-Aug",
  },
  {
    price: 2100,
    date: "21-Aug",
  },
  {
    price: 2250,
    date: "21-Aug",
  },
  {
    price: 2200,
    date: "20-Aug",
  },
  {
    price: 3800,
    date: "20-Aug",
  },
  {
    price: 3400,
    date: "20-Aug",
  },
  {
    price: 1500,
    date: "21-Aug",
  },
  {
    price: 1800,
    date: "22-Aug",
  },
  {
    price: 2300,
    date: "24-Aug",
  },
  {
    price: 2500,
    date: "24-Aug",
  },
  {
    price: 2100,
    date: "21-Aug",
  },
  {
    price: 2250,
    date: "21-Aug",
  },
  {
    price: 1500,
    date: "21-Aug",
  },
  {
    price: 1800,
    date: "22-Aug",
  },
  {
    price: 3200,
    date: "24-Aug",
  },
  {
    price: 2600,
    date: "25-Aug",
  },
  {
    price: 2700,
    date: "25-Aug",
  },
  {
    price: 2700,
    date: "22-Aug",
  },
  {
    price: 1800,
    date: "22-Aug",
  },
  {
    price: 1900,
    date: "23-Aug",
  },
  {
    price: 2700,
    date: "22-Aug",
  },
  {
    price: 2600,
    date: "22-Aug",
  },
  {
    price: 2100,
    date: "21-Aug",
  },
  {
    price: 2250,
    date: "21-Aug",
  },
  {
    price: 1500,
    date: "21-Aug",
  },
  {
    price: 1800,
    date: "22-Aug",
  },
  {
    price: 1900,
    date: "23-Aug",
  },
  {
    price: 2700,
    date: "22-Aug",
  },
  {
    price: 2600,
    date: "22-Aug",
  },
  {
    price: 2100,
    date: "21-Aug",
  },
  {
    price: 2500,
    date: "24-Aug",
  },
  {
    price: 3200,
    date: "24-Aug",
  },
  {
    price: 2600,
    date: "25-Aug",
  },
  {
    price: 2700,
    date: "25-Aug",
  },
  {
    price: 2250,
    date: "21-Aug",
  },
  {
    price: 2500,
    date: "23-Aug",
  },
  {
    price: 2300,
    date: "24-Aug",
  },
  {
    price: 2500,
    date: "24-Aug",
  },
  {
    price: 3200,
    date: "24-Aug",
  },
  {
    price: 2600,
    date: "25-Aug",
  },
  {
    price: 2700,
    date: "25-Aug",
  },
];
