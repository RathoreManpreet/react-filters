import "./App.css";
import Products from "./pages/Products";
const filters = [
  {
    id: "color",
    name: "Color",
    options: [
      { value: "white", label: "White" },
      { value: "black", label: "Black" },
      { value: "blue", label: "Blue" },
    ],
  },
  {
    id: "category",
    name: "Category",
    options: [
      { value: "tees", label: "Tees" },
      { value: "crewnecks", label: "Crewnecks" },
      { value: "sweatshirts", label: "Sweatshirts" },
      { value: "pants-shorts", label: "Pants & Shorts" },
    ],
  },
  {
    id: "sizes",
    name: "Sizes",
    options: [
      { value: "xs", label: "XS" },
      { value: "s", label: "S" },
      { value: "m", label: "M" },
      { value: "l", label: "L" },
      { value: "xl", label: "XL" },
      { value: "2xl", label: "2XL" },
    ],
  },
];

const products = [
  {
    id: 1,
    name: "Crewnecks",
    size: "XL",
    href: "#",
    imageSrc:
      "https://images.unsplash.com/photo-1574180566232-aaad1b5b8450?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "White",
  },
  {
    id: 2,
    name: "Crewnecks",
    size: "M",
    href: "#",
    imageSrc:
      "https://images.unsplash.com/photo-1590999659195-e64a988eaf4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",

    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 3,
    name: "Tees",
    size: "L",
    href: "#",
    imageSrc:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "White",
  },
  {
    id: 4,
    name: "Tees",
    size: "XL",
    href: "#",
    imageSrc:
      "https://media.istockphoto.com/id/183870483/photo/happy-smiling-man-portrait.jpg?s=1024x1024&w=is&k=20&c=wm-vXznVsJ3nzJgq7wZxSQzCC-6G-ZB1n9fxuotKvUo=",

    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Blue",
  },

  {
    id: 5,
    name: "Tees",
    size: "M",
    href: "#",
    imageSrc:
      "https://images.unsplash.com/photo-1618517351616-38fb9c5210c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",

    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },

  {
    id: 6,
    name: "Sweatshirts",
    size: "M",
    href: "#",
    imageSrc:
      "https://images.unsplash.com/photo-1554568218-ffd1e72a2151?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "White",
  },

  // More products...
];
function App() {
  return (
    <div>
      <Products products={products} filters={filters} />
    </div>
  );
}

export default App;
