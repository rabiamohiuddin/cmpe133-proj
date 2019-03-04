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
  },
  
  
  
  
  {
    _id: "5b21ca3eeb7f6fbccd47181w",
    name: "GoGo squeeZ Applesauce On The Go Apple Apple Pouches - 12-3.2 Oz",
    aisle:  { _id: "5b21ca3eeb7f6fbccd471832", name: "Canned Items" },
    numberInStock: 22,
    basePrice: 8.99,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181x",
    name: "Campbells Soup Condensed Chicken Noodle - 10.75 Oz",
    aisle:  { _id: "5b21ca3eeb7f6fbccd471832", name: "Canned Items" },
    numberInStock: 21,
    basePrice: 1.79,
    salePrice: 0,
    currentPrice: 0
  },  
  {
    _id: "5b21ca3eeb7f6fbccd47181y",
    name: "Progresso Traditional Soup Chicken Noodle - 19 Oz",
    aisle:  { _id: "5b21ca3eeb7f6fbccd471832", name: "Canned Items" },
    numberInStock: 25,
    basePrice: 3.39,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181z",
    name: "Swanson Chicken Breast Premium Chunk White with Rib Meat - 12.5 Oz",
    aisle:  { _id: "5b21ca3eeb7f6fbccd471832", name: "Canned Items" },
    numberInStock: 37,
    basePrice: 5.69,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47182a",
    name: "Bumble Bee Tuna Albacore Solid White in Water - 12 Oz",
    aisle:  { _id: "5b21ca3eeb7f6fbccd471832", name: "Canned Items" },
    numberInStock: 47,
    basePrice: 5.49,
    salePrice: 0,
    currentPrice: 0
  },  
  {
    _id: "5b21ca3eeb7f6fbccd47182b",
    name: "Frito Lay Snacks Flavor Mix Bag - 18-1 Oz",
    aisle:  { _id: "5b21ca3eeb7f6fbccd471834", name: "Snacks and Candy" },
    numberInStock: 27,
    basePrice: 8.29,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47182c",
    name: "Cheez-It Crackers Baked Snack - 12.4 Oz",
    aisle:  { _id: "5b21ca3eeb7f6fbccd471834", name: "Snacks and Candy" },
    numberInStock: 87,
    basePrice: 5.69,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47182d",
    name: "The Snack Artist Cashews Whole Roasted & Salted - 36.4 Oz",
    aisle:  { _id: "5b21ca3eeb7f6fbccd471834", name: "Snacks and Candy" },
    numberInStock: 75,
    basePrice: 22.49,
    salePrice: 0,
    currentPrice: 0
  },  
  {
    _id: "5b21ca3eeb7f6fbccd47182e",
    name: "Blue Diamond Almonds Whole Natural - 16 Oz",
    aisle:  { _id: "5b21ca3eeb7f6fbccd471834", name: "Snacks and Candy" },
    numberInStock: 37,
    basePrice: 11.29,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47182f",
    name: "Pepperidge Farm Goldfish Crackers Baked Snack Cheddar Carton Bulk - 30 Oz",
    aisle:  { _id: "5b21ca3eeb7f6fbccd471834", name: "Snacks and Candy" },
    numberInStock: 23,
    basePrice: 9.49,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47182g",
    name: "Best Foods Real Mayonnaise - 30 Fl. Oz.",
    aisle:  { _id: "5b21ca3eeb7f6fbccd471836", name: "Condiments, Spices, and Baking" },
    numberInStock: 32,
    basePrice: 6.89,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47182h",
    name: "Heinz Ketchup Tomato - 32 Oz",
    aisle:  { _id: "5b21ca3eeb7f6fbccd471836", name: "Condiments, Spices, and Baking" },
    numberInStock: 65,
    basePrice: 4.69,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47182i",
    name: "C&H Sugar Granulated White Pure Cane - 4 Lb",
    aisle:  { _id: "5b21ca3eeb7f6fbccd471836", name: "Condiments, Spices, and Baking" },
    numberInStock: 29,
    basePrice: 3.59,
    salePrice: 0,
    currentPrice: 0
  },  
  {
    _id: "5b21ca3eeb7f6fbccd47182j",
    name: "O Organics Organic Syrup 100% Pure Maple - 8.5 Fl. Oz.",
    aisle:  { _id: "5b21ca3eeb7f6fbccd471836", name: "Condiments, Spices, and Baking" },
    numberInStock: 54,
    basePrice: 9.09,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47182k",
    name: "Star Olive Oil Extra Virgin - 17 Fl. Oz.",
    aisle:  { _id: "5b21ca3eeb7f6fbccd471836", name: "Condiments, Spices, and Baking" },
    numberInStock: 20,
    basePrice: 8.99,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47182l",
    name: "ARROWHEAD Mountain Spring Water - 24-16.9 Fl. Oz.",
    aisle:  { _id: "5b21ca3eeb7f6fbccd471838", name: "Beverages" },
    numberInStock: 220,
    basePrice: 5.69,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47182m",
    name: "Coke Diet Soda - 20-12 Fl. Oz.",
    aisle:  { _id: "5b21ca3eeb7f6fbccd471838", name: "Beverages" },
    numberInStock: 45,
    basePrice: 7.99,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47182n",
    name: "LaCroix Sparkling Water Grapefruit Cans - 12-12 Fl. Oz.",
    aisle:  { _id: "5b21ca3eeb7f6fbccd471838", name: "Beverages" },
    numberInStock: 37,
    basePrice: 6.89,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47182o",
    name: "Coca-Cola Classic Soda - 20-12 Fl. Oz.",
    aisle:  { _id: "5b21ca3eeb7f6fbccd471838", name: "Beverages" },
    numberInStock: 38,
    basePrice: 7.99,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47182p",
    name: "Aquafina Purified Drinking Water - 24-16.9 Fl. Oz.",
    aisle:  { _id: "5b21ca3eeb7f6fbccd471838", name: "Beverages" },
    numberInStock: 37,
    basePrice: 4.99,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47182q",
    name: "Huggies Baby Wipes Natural Care Fragrance Free Refill - 168 Count",
    aisle:  { _id: "5b21ca3eeb7f6fbccd471840", name: "Baby Care" },
    numberInStock: 27,
    basePrice: 7.99,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47182r",
    name: "Huggies Natural Care Wipes Fragrance Free Refill - 184 Count",
    aisle:  { _id: "5b21ca3eeb7f6fbccd471840", name: "Baby Care" },
    numberInStock: 47,
    basePrice: 7.99,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47182s",
    name: "PediaSure Grow & Gain Shake Chocolate - 6-8 Fl. Oz.",
    aisle:  { _id: "5b21ca3eeb7f6fbccd471840", name: "Baby Care" },
    numberInStock: 23,
    basePrice: 11.99,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47182t",
    name: "Gerber 2nd Foods Baby Food Turkey & Turkey Gravy - 2.5 Oz",
    aisle:  { _id: "5b21ca3eeb7f6fbccd471840", name: "Baby Care" },
    numberInStock: 38,
    basePrice: 1.59,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47182u",
    name: "Pedialyte AdvancedCare Electrolyte Solution Oral Cherry Punch - 1 Quart",
    aisle:  { _id: "5b21ca3eeb7f6fbccd471840", name: "Baby Care" },
    numberInStock: 48,
    basePrice: 7.49,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47182v",
    name: "Ice Cubed Party Ice - 20 Lb",
    aisle:  { _id: "5b21ca3eeb7f6fbccd471838", name: "Frozen Foods" },
    numberInStock: 33,
    basePrice: 6.89,
    salePrice: 0,
    currentPrice: 0
  },
   {
    _id: "5b21ca3eeb7f6fbccd47182w",
    name: "Jimmy Dean Sandwiches Croissant Sausage Egg & Cheese - 36 Oz",
    aisle:  { _id: "5b21ca3eeb7f6fbccd471838", name: "Frozen Foods" },
    numberInStock: 55,
    basePrice: 11.29,
    salePrice: 0,
    currentPrice: 0
  },
   {
    _id: "5b21ca3eeb7f6fbccd47182x",
    name: "Signature Kitchens Blueberries Whole - 48 Oz",
    aisle:  { _id: "5b21ca3eeb7f6fbccd471838", name: "Frozen Foods" },
    numberInStock: 34,
    basePrice: 11.29,
    salePrice: 0,
    currentPrice: 0
  },
   {
    _id: "5b21ca3eeb7f6fbccd47182y",
    name: "Freschetta Frozen Pizza Naturally Rising Crust Signature Pepperoni - 27.16 Oz",
    aisle:  { _id: "5b21ca3eeb7f6fbccd471838", name: "Frozen Foods" },
    numberInStock: 82,
    basePrice: 7.99,
    salePrice: 0,
    currentPrice: 0
  },
   {
    _id: "5b21ca3eeb7f6fbccd47182z",
    name: "Drumstick Frozen Dairy Dessert Cones Vanilla 8 Cones - 36.8 Fl. Oz.",
    aisle:  { _id: "5b21ca3eeb7f6fbccd471838", name: "Frozen Foods" },
    numberInStock: 29,
    basePrice: 6.99,
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
