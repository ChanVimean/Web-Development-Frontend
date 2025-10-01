// ? Single export
const phones = [
  {
    id: 1,
    product: "iPhone 17 Pro Max",
    price: 1499.99,
    color: "pink",
  },
  {
    id: 2,
    product: "iPhone 16 Pro",
    price: 899.99,
    color: "white",
  },
  {
    id: 3,
    product: "Samsung",
    price: 999.99,
    color: "black",
  },
];

// ? Multiple export
export const clothes = [
  {
    id: 1,
    product: "Jean",
    price: 12.49,
    size: "M",
    color: "Blue",
  },
  {
    id: 2,
    product: "Hat",
    price: 5,
    size: "",
    color: "Red",
  },
  {
    id: 3,
    product: "T-Shirt",
    price: 19.99,
    size: "L",
    color: "White",
  },
];

export const addition = (num1, num2) => {
  return num1 + num2;
};

// ? Single export
export default phones;
