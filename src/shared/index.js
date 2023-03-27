import {
  analytics,
  checkout,
  dashboard,
  exchange,
  marketing,
  payment,
  transactions,
  wallet,
  wire,
} from "../assets";

export const mainNavlinks = [
  {
    name: "Dashboard",
    imgUrl: dashboard,
    link: "/",
  },
  {
    name: `Balances`,
    imgUrl: wallet,
    link: "/balance",
    disabled: true,
  },
  {
    name: "Transactions",
    imgUrl: transactions,
    link: "/transactions",
    disabled: true,
  },
  {
    name: "Analytics",
    imgUrl: analytics,
    link: "/analytics",
    disabled: true,
  },
  {
    name: "Martketing",
    imgUrl: marketing,
    link: "/marketing",
    disabled: true,
  },
  {
    name: "Exchange rates",
    imgUrl: exchange,
    link: "/exchangerates",
    disabled: true,
  },
];

export const subNavlinks = [
  {
    name: "Checkout",
    imgUrl: checkout,
    link: "/checkout",
    disabled: true,
  },
  {
    name: "Payment Links",
    imgUrl: payment,
    link: "/paymentlink",
    disabled: true,
  },
];

export const thirdNavlinks = [
  {
    name: "Wire",
    imgUrl: wire,
    link: "/wire",
    disabled: true,
  },
];

export const mobileNavlinks = [
  {
    name: "Dashboard",
    imgUrl: dashboard,
    link: "/",
  },
  {
    name: `Balances`,
    imgUrl: wallet,
    link: "/balance",
    disabled: true,
  },
  {
    name: "Transactions",
    imgUrl: transactions,
    link: "/transactions",
    disabled: true,
  },
  {
    name: "Analytics",
    imgUrl: analytics,
    link: "/analytics",
    disabled: true,
  },
  {
    name: "Martketing",
    imgUrl: marketing,
    link: "/marketing",
    disabled: true,
  },
  {
    name: "Exchange rates",
    imgUrl: exchange,
    link: "/exchangerates",
    disabled: true,
  },
  {
    name: "Checkout",
    imgUrl: checkout,
    link: "/checkout",
    disabled: true,
  },
  {
    name: "Payment Links",
    imgUrl: payment,
    link: "/paymentlink",
    disabled: true,
  },
  {
    name: "Wire",
    imgUrl: wire,
    link: "/wire",
    disabled: true,
  },
];
