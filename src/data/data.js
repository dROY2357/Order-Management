let customers = [
  {
    name: "Kama",
    orders: [
      { name: "Bob", quantity: 0, staus: "" },
      { name: "Job", quantity: 0, staus: "" },
      { name: "Rob", quantity: 0, staus: "" },
      { name: "Elon Maa", quantity: 0, staus: "" },
    ],
  },
  {
    name: "Rama",
    orders: [
      { name: "Bob", quantity: 0, staus: "" },
      { name: "Job", quantity: 0, staus: "" },
      { name: "Rob", quantity: 0, staus: "" },
      { name: "Elon Maa", quantity: 0, staus: "" },
    ],
  },
  {
    name: "Shama",
    orders: [
      { name: "Bob", quantity: 0, staus: "" },
      { name: "Job", quantity: 0, staus: "" },
      { name: "Rob", quantity: 0, staus: "" },
      { name: "Elon Maa", quantity: 0, staus: "" },
    ],
  },
  {
    name: "Dhama",
    orders: [
      { name: "Bob", quantity: 0, staus: "" },
      { name: "Job", quantity: 0, staus: "" },
      { name: "Rob", quantity: 0, staus: "" },
      { name: "Elon Maa", quantity: 0, staus: "" },
    ],
  },
];

let sellers = [
  {
    name: "Bob",
    orders: [
      { name: "Kama", quantity: 0 },
      { name: "Rama", quantity: 0 },
      { name: "Shama", quantity: 0 },
      { name: "Dhama", quantity: 0 },
    ],
  },
  {
    name: "Job",
    orders: [
      { name: "Kama", quantity: 0 },
      { name: "Rama", quantity: 0 },
      { name: "Shama", quantity: 0 },
      { name: "Dhama", quantity: 0 },
    ],
  },
  {
    name: "Rob",
    orders: [
      { name: "Kama", quantity: 0 },
      { name: "Rama", quantity: 0 },
      { name: "Shama", quantity: 0 },
      { name: "Dhama", quantity: 0 },
    ],
  },
  {
    name: "Elon Maa",
    orders: [
      { name: "Kama", quantity: 0 },
      { name: "Rama", quantity: 0 },
      { name: "Shama", quantity: 0 },
      { name: "Dhama", quantity: 0 },
    ],
  },
];

let notifications = [
  {
    type: "customer",
    data: [
      { name: "Kama", notifs: [] },
      { name: "Rama", notifs: [] },
      { name: "Shama", notifs: [] },
      { name: "Dhama", notifs: [] },
    ],
  },
  {
    type: "seller",
    data: [
      { name: "Bob", notifs: [] },
      { name: "Job", notifs: [] },
      { name: "Rob", notifs: [] },
      { name: "Elon Maa", notifs: [] },
    ],
  },
];

export default { customers, sellers, notifications };
