import ProductData from "./ProductData.mjs";
import ProductList from "./ProductList.mjs";
import { loadHeaderFooter, getParam } from "./utils.mjs";

loadHeaderFooter();

const category = getParam("category");
const dataSource = new ProductData();
const element = document.querySelector(".product-list");
const header = document.querySelector("#productListingTitle");
header.innerHTML = `top products: ${category}`;
header.style.textTransform = "capitalize";
const listing = new ProductList(category, dataSource, element);

listing.init();