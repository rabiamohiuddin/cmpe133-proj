import * as aislesAPI from "./fakeAisleService";

const products = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    name: "Cheerios",
    aisle: { _id: "5b21ca3eeb7f6fbccd471818", name: "Cereal" },
    numberInStock: 6,
    basePrice: 4.99,
    salePrice: 3.99,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    name: "Frosted Flakes",
    aisle: { _id: "5b21ca3eeb7f6fbccd471818", name: "Cereal" },
    numberInStock: 5,
    basePrice: 4.99,
    salePrice: 2.5,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd471817",
    name: "O Organics Organic Eggs Large Brown - 12 Count",
    aisle: { _id: "5b21ca3eeb7f6fbccd471820", name: "Eggs" },
    numberInStock: 8,
    basePrice: 5.69,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd471819",
    name: "Chips Ahoy!",
    aisle: { _id: "5b21ca3eeb7f6fbccd471814", name: "Cookies" },
    numberInStock: 7,
    basePrice: 4.39,
    salePrice: 2.99,
    currentPrice:0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181a",
    name: "Oreos",
    aisle: { _id: "5b21ca3eeb7f6fbccd471814", name: "Cookies" },
    numberInStock: 7,
    basePrice: 4.99,
    salePrice: 3.33,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181b",
    name: "Newtons",
    aisle: { _id: "5b21ca3eeb7f6fbccd471814", name: "Cookies" },
    numberInStock: 7,
    basePrice: 5.99,
    salePrice: 5.49,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181e",
    name: "Egglands Best Eggs Large - 12 Count",
    aisle: { _id: "5b21ca3eeb7f6fbccd471820", name: "Eggs" },
    numberInStock: 7,
    basePrice: 5.49,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181f",
    name: "Value Corner Eggs Large Family Pack - 18 Count",
    aisle: { _id: "5b21ca3eeb7f6fbccd471820", name: "Eggs" },
    numberInStock: 4,
    basePrice: 4.59,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181g",
    name: "Lucky Charms",
    aisle: { _id: "5b21ca3eeb7f6fbccd471818", name: "Cereal" },
    numberInStock: 7,
    basePrice: 4.99,
    salePrice: 3.50,
    currentPrice:0
  }, 
  {
    _id: "5b21ca3eeb7f6fbccd47181h",
    name: "Bananas - 1 lb",
    aisle: { _id: "5b21ca3eeb7f6fbccd471822", name: "Produce" },
    numberInStock: 20,
    basePrice: 0.89,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181i",
    name: "Avocados Hass Large",
    aisle: { _id: "5b21ca3eeb7f6fbccd471822", name: "Produce" },
    numberInStock: 25,
    basePrice: 2.40,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181j",
    name: "Strawberries - 16 oz",
    aisle: { _id: "5b21ca3eeb7f6fbccd471822", name: "Produce" },
    numberInStock: 35,
    basePrice: 4.99,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181k",
    name: "Clementines - 3 lb",
    aisle: { _id: "5b21ca3eeb7f6fbccd471822", name: "Produce" },
    numberInStock: 45,
    basePrice: 6.89,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181l",
    name: "Green Seedless Grapes - 2 lbs",
    aisle: { _id: "5b21ca3eeb7f6fbccd471822", name: "Produce" },
    numberInStock: 15,
    basePrice: 2.28,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181m",
    name: "CLIF Energy Bar Crunchy Peanut Butter - 6-2.4 Oz",
    aisle: { _id: "5b21ca3eeb7f6fbccd471824", name: "Health" },
    numberInStock: 15,
    basePrice: 6.49,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181n",
    name: "Ensure Nutrition Shake Original Milk Chocolate - 6-8 Fl. Oz.",
    aisle: { _id: "5b21ca3eeb7f6fbccd471824", name: "Health" },
    numberInStock: 23,
    basePrice: 10.99,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181o",
    name: "CLIF Energy Bar White Chocolate Macadamia Nut - 6-2.4 Oz",
    aisle: { _id: "5b21ca3eeb7f6fbccd471824", name: "Health" },
    numberInStock: 19,
    basePrice: 6.49,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181p",
    name: "CLIF Energy Bar Peanut Butter - 6-2.4 Oz",
    aisle: { _id: "5b21ca3eeb7f6fbccd471824", name: "Health" },
    numberInStock: 25,
    basePrice: 6.49,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181q",
    name: "CLIF Energy Bar Chcoolate Chip - 6-2.4 Oz",
    aisle: { _id: "5b21ca3eeb7f6fbccd471824", name: "Health" },
    numberInStock: 40,
    basePrice: 6.49,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181r",
    name: "Charmin Ultra Soft Bathroom Tissue Mega Rolls 2 Ply - 12 Roll",
    aisle:  { _id: "5b21ca3eeb7f6fbccd471828", name: "Home" },
    numberInStock: 35,
    basePrice: 20.09,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181s",
    name: "Bounty Paper Towels Full Sheets Big Roll 2 Ply - 12 Roll",
    aisle:  { _id: "5b21ca3eeb7f6fbccd471828", name: "Home" },
    numberInStock: 37,
    basePrice: 22.49,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181t",
    name: "Angel Soft Bathroom Tissue Double Rolls 2 Ply Unscented - 12 Roll",
    aisle:  { _id: "5b21ca3eeb7f6fbccd471828", name: "Home" },
    numberInStock: 29,
    basePrice: 9.09,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181u",
    name: "Kleenex Facial Tissue 2-Ply White Trusted Care Bundle Pack Wrapper - 4-160 Count",
    aisle:  { _id: "5b21ca3eeb7f6fbccd471828", name: "Home" },
    numberInStock: 25,
    basePrice: 7.99,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181v",
    name: "Scott Bathroom Tissue 1 Ply Unscented - 20 Roll",
    aisle:  { _id: "5b21ca3eeb7f6fbccd471828", name: "Home" },
    numberInStock: 22,
    basePrice: 19.19,
    salePrice: 0,
    currentPrice: 0
  }
];

export function getProducts() {
  return products;
}

export function getProduct(id) {
  return products.find(m => m._id === id);
}

export function saveProduct(product) {
  let productInDb = products.find(m => m._id === product._id) || {};
  productInDb.name = product.name;
  productInDb.genre = aislesAPI.aisles.find(g => g._id === product.aisleId);
  productInDb.numberInStock = product.numberInStock;
  productInDb.dailyRentalRate = product.dailyRentalRate;

  if (!productInDb._id) {
    productInDb._id = Date.now();
    products.push(productInDb);
  }

  return productInDb;
}

export function deleteProduct(id) {
  let productInDb = products.find(m => m._id === id);
  products.splice(products.indexOf(productInDb), 1);
  return productInDb;
}
