import * as aislesAPI from "./fakeAisleService";

const products = [
  {
    _id: "5b21ca3eeb7f6fbccd47181a",
    name: "Cheerios",
    aisle: { _id: "5b21ca3eeb7f6fbccd471818", name: "Cereal" },
    numberInStock: 6,
    basePrice: 4.99,
    salePrice: 3.99,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181b",
    name: "Frosted Flakes",
    aisle: { _id: "5b21ca3eeb7f6fbccd471818", name: "Cereal" },
    numberInStock: 5,
    basePrice: 4.99,
    salePrice: 2.5,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181c",
    name: "Lucky Charms",
    aisle: { _id: "5b21ca3eeb7f6fbccd471818", name: "Cereal" },
    numberInStock: 7,
    basePrice: 4.99,
    salePrice: 3.50,
    currentPrice:0
  }, 
  {
    _id: "5b21ca3eeb7f6fbccd47182a",
    name: "Bananas - 1 lb",
    aisle: { _id: "5b21ca3eeb7f6fbccd471822", name: "Produce" },
    numberInStock: 20,
    basePrice: 0.89,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47182b",
    name: "Avocados Hass Large",
    aisle: { _id: "5b21ca3eeb7f6fbccd471822", name: "Produce" },
    numberInStock: 25,
    basePrice: 2.40,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47182c",
    name: "Strawberries - 16 oz",
    aisle: { _id: "5b21ca3eeb7f6fbccd471822", name: "Produce" },
    numberInStock: 35,
    basePrice: 4.99,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47182d",
    name: "Clementines - 3 lb",
    aisle: { _id: "5b21ca3eeb7f6fbccd471822", name: "Produce" },
    numberInStock: 45,
    basePrice: 6.89,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47182e",
    name: "Green Seedless Grapes - 2 lbs",
    aisle: { _id: "5b21ca3eeb7f6fbccd471822", name: "Produce" },
    numberInStock: 15,
    basePrice: 2.28,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47183a",
    name: "CLIF Energy Bar Crunchy Peanut Butter - 6-2.4 Oz",
    aisle: { _id: "5b21ca3eeb7f6fbccd471824", name: "Health" },
    numberInStock: 15,
    basePrice: 6.49,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47183b",
    name: "Ensure Nutrition Shake Original Milk Chocolate - 6-8 Fl. Oz.",
    aisle: { _id: "5b21ca3eeb7f6fbccd471824", name: "Health" },
    numberInStock: 23,
    basePrice: 10.99,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47183c",
    name: "CLIF Energy Bar White Chocolate Macadamia Nut - 6-2.4 Oz",
    aisle: { _id: "5b21ca3eeb7f6fbccd471824", name: "Health" },
    numberInStock: 19,
    basePrice: 6.49,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47183d",
    name: "CLIF Energy Bar Peanut Butter - 6-2.4 Oz",
    aisle: { _id: "5b21ca3eeb7f6fbccd471824", name: "Health" },
    numberInStock: 25,
    basePrice: 6.49,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47183e",
    name: "CLIF Energy Bar Chcoolate Chip - 6-2.4 Oz",
    aisle: { _id: "5b21ca3eeb7f6fbccd471824", name: "Health" },
    numberInStock: 40,
    basePrice: 6.49,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47184a",
    name: "Charmin Ultra Soft Bathroom Tissue Mega Rolls 2 Ply - 12 Roll",
    aisle:  { _id: "5b21ca3eeb7f6fbccd471828", name: "Home" },
    numberInStock: 35,
    basePrice: 20.09,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47184b",
    name: "Bounty Paper Towels Full Sheets Big Roll 2 Ply - 12 Roll",
    aisle:  { _id: "5b21ca3eeb7f6fbccd471828", name: "Home" },
    numberInStock: 37,
    basePrice: 22.49,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47184c",
    name: "Angel Soft Bathroom Tissue Double Rolls 2 Ply Unscented - 12 Roll",
    aisle:  { _id: "5b21ca3eeb7f6fbccd471828", name: "Home" },
    numberInStock: 29,
    basePrice: 9.09,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47184d",
    name: "Kleenex Facial Tissue 2-Ply White Trusted Care Bundle Pack Wrapper - 4-160 Count",
    aisle:  { _id: "5b21ca3eeb7f6fbccd471828", name: "Home" },
    numberInStock: 25,
    basePrice: 7.99,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47184e",
    name: "Scott Bathroom Tissue 1 Ply Unscented - 20 Roll",
    aisle:  { _id: "5b21ca3eeb7f6fbccd471828", name: "Home" },
    numberInStock: 22,
    basePrice: 19.19,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47185a",
    name: "GoGo squeeZ Applesauce On The Go Apple Apple Pouches - 12-3.2 Oz",
    aisle:  { _id: "5b21ca3eeb7f6fbccd471832", name: "Canned Foods" },
    numberInStock: 22,
    basePrice: 8.99,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47185b",
    name: "Campbells Soup Condensed Chicken Noodle - 10.75 Oz",
    aisle:  { _id: "5b21ca3eeb7f6fbccd471832", name: "Canned Foods" },
    numberInStock: 21,
    basePrice: 1.79,
    salePrice: 0,
    currentPrice: 0
  },  
  {
    _id: "5b21ca3eeb7f6fbccd47185c",
    name: "Progresso Traditional Soup Chicken Noodle - 19 Oz",
    aisle:  { _id: "5b21ca3eeb7f6fbccd471832", name: "Canned Foods" },
    numberInStock: 25,
    basePrice: 3.39,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47185d",
    name: "Thick-It Puree Canned Foods Chicken Patty - Each",
    aisle: { _id: "5b21ca3eeb7f6fbccd471832", name: "Canned Foods" },
    numberInStock: 35,
    basePrice: 12.99,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47185e",
    name: "Sheltons Chicken Breast Canned Canned Food 5 Oz",
    aisle: { _id: "5b21ca3eeb7f6fbccd471832", name: "Canned Foods" },
    numberInStock: 37,
    basePrice: 4.15,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47185f",
    name: "KEYKSTONE Canned Chicken Meat 14.5 Oz",
    aisle: { _id: "5b21ca3eeb7f6fbccd471832", name: "Canned Foods" },
    numberInStock: 46,
    basePrice: 8.99,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47185g",
    name:
      "Whole Earth Farms Grain Free Chicken & Turkey Canned Dog Food, 12.7 Oz., Case ",
    aisle: { _id: "5b21ca3eeb7f6fbccd471832", name: "Canned Foods" },
    numberInStock: 11,
    basePrice: 29.88,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47185h",
    name: "Swanson Chicken Breast Premium Chunk White with Rib Meat - 12.5 Oz",
    aisle:  { _id: "5b21ca3eeb7f6fbccd471832", name: "Canned Foods" },
    numberInStock: 37,
    basePrice: 5.69,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47185i",
    name: "Bumble Bee Tuna Albacore Solid White in Water - 12 Oz",
    aisle:  { _id: "5b21ca3eeb7f6fbccd471832", name: "Canned Foods" },
    numberInStock: 47,
    basePrice: 5.49,
    salePrice: 0,
    currentPrice: 0
  },  
  {
    _id: "5b21ca3eeb7f6fbccd47186a",
    name: "Frito Lay Snacks Flavor Mix Bag - 18-1 Oz",
    aisle:  { _id: "5b21ca3eeb7f6fbccd471834", name: "Snacks and Candy" },
    numberInStock: 27,
    basePrice: 8.29,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47186b",
    name: "Cheez-It Crackers Baked Snack - 12.4 Oz",
    aisle:  { _id: "5b21ca3eeb7f6fbccd471834", name: "Snacks and Candy" },
    numberInStock: 87,
    basePrice: 5.69,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47186c",
    name: "The Snack Artist Cashews Whole Roasted & Salted - 36.4 Oz",
    aisle:  { _id: "5b21ca3eeb7f6fbccd471834", name: "Snacks and Candy" },
    numberInStock: 75,
    basePrice: 22.49,
    salePrice: 0,
    currentPrice: 0
  },  
  {
    _id: "5b21ca3eeb7f6fbccd47186d",
    name: "Blue Diamond Almonds Whole Natural - 16 Oz",
    aisle:  { _id: "5b21ca3eeb7f6fbccd471834", name: "Snacks and Candy" },
    numberInStock: 37,
    basePrice: 11.29,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47186e",
    name: "Pepperidge Farm Goldfish Crackers Baked Snack Cheddar Carton Bulk - 30 Oz",
    aisle:  { _id: "5b21ca3eeb7f6fbccd471834", name: "Snacks and Candy" },
    numberInStock: 23,
    basePrice: 9.49,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47187a",
    name: "Best Foods Real Mayonnaise - 30 Fl. Oz.",
    aisle:  { _id: "5b21ca3eeb7f6fbccd471836", name: "Condiments, Spices, and Baking" },
    numberInStock: 32,
    basePrice: 6.89,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47187b",
    name: "Heinz Ketchup Tomato - 32 Oz",
    aisle:  { _id: "5b21ca3eeb7f6fbccd471836", name: "Condiments, Spices, and Baking" },
    numberInStock: 65,
    basePrice: 4.69,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47187c",
    name: "C&H Sugar Granulated White Pure Cane - 4 Lb",
    aisle:  { _id: "5b21ca3eeb7f6fbccd471836", name: "Condiments, Spices, and Baking" },
    numberInStock: 29,
    basePrice: 3.59,
    salePrice: 0,
    currentPrice: 0
  },  
  {
    _id: "5b21ca3eeb7f6fbccd47187d",
    name: "O Organics Organic Syrup 100% Pure Maple - 8.5 Fl. Oz.",
    aisle:  { _id: "5b21ca3eeb7f6fbccd471836", name: "Condiments, Spices, and Baking" },
    numberInStock: 54,
    basePrice: 9.09,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47187e",
    name: "Star Olive Oil Extra Virgin - 17 Fl. Oz.",
    aisle:  { _id: "5b21ca3eeb7f6fbccd471836", name: "Condiments, Spices, and Baking" },
    numberInStock: 20,
    basePrice: 8.99,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47188a",
    name: "ARROWHEAD Mountain Spring Water - 24-16.9 Fl. Oz.",
    aisle:  { _id: "5b21ca3eeb7f6fbccd471838", name: "Beverages" },
    numberInStock: 220,
    basePrice: 5.69,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47188b",
    name: "Coke Diet Soda - 20-12 Fl. Oz.",
    aisle:  { _id: "5b21ca3eeb7f6fbccd471838", name: "Beverages" },
    numberInStock: 45,
    basePrice: 7.99,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47188c",
    name: "LaCroix Sparkling Water Grapefruit Cans - 12-12 Fl. Oz.",
    aisle:  { _id: "5b21ca3eeb7f6fbccd471838", name: "Beverages" },
    numberInStock: 37,
    basePrice: 6.89,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47188d",
    name: "Coca-Cola Classic Soda - 20-12 Fl. Oz.",
    aisle:  { _id: "5b21ca3eeb7f6fbccd471838", name: "Beverages" },
    numberInStock: 38,
    basePrice: 7.99,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47188e",
    name: "Aquafina Purified Drinking Water - 24-16.9 Fl. Oz.",
    aisle:  { _id: "5b21ca3eeb7f6fbccd471838", name: "Beverages" },
    numberInStock: 37,
    basePrice: 4.99,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47189a",
    name: "Huggies Baby Wipes Natural Care Fragrance Free Refill - 168 Count",
    aisle:  { _id: "5b21ca3eeb7f6fbccd471840", name: "Baby Care" },
    numberInStock: 27,
    basePrice: 7.99,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47189b",
    name: "Huggies Natural Care Wipes Fragrance Free Refill - 184 Count",
    aisle:  { _id: "5b21ca3eeb7f6fbccd471840", name: "Baby Care" },
    numberInStock: 47,
    basePrice: 7.99,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47189c",
    name: "PediaSure Grow & Gain Shake Chocolate - 6-8 Fl. Oz.",
    aisle:  { _id: "5b21ca3eeb7f6fbccd471840", name: "Baby Care" },
    numberInStock: 23,
    basePrice: 11.99,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47189d",
    name: "Gerber 2nd Foods Baby Food Turkey & Turkey Gravy - 2.5 Oz",
    aisle:  { _id: "5b21ca3eeb7f6fbccd471840", name: "Baby Care" },
    numberInStock: 38,
    basePrice: 1.59,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47189e",
    name: "Pedialyte AdvancedCare Electrolyte Solution Oral Cherry Punch - 1 Quart",
    aisle:  { _id: "5b21ca3eeb7f6fbccd471840", name: "Baby Care" },
    numberInStock: 48,
    basePrice: 7.49,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47190a",
    name: "Ice Cubed Party Ice - 20 Lb",
    aisle:  { _id: "5b21ca3eeb7f6fbccd471838", name: "Frozen Foods" },
    numberInStock: 33,
    basePrice: 6.89,
    salePrice: 0,
    currentPrice: 0
  },
   {
    _id: "5b21ca3eeb7f6fbccd47190b",
    name: "Jimmy Dean Sandwiches Croissant Sausage Egg & Cheese - 36 Oz",
    aisle:  { _id: "5b21ca3eeb7f6fbccd471838", name: "Frozen Foods" },
    numberInStock: 55,
    basePrice: 11.29,
    salePrice: 0,
    currentPrice: 0
  },
   {
    _id: "5b21ca3eeb7f6fbccd47190c",
    name: "Signature Kitchens Blueberries Whole - 48 Oz",
    aisle:  { _id: "5b21ca3eeb7f6fbccd471838", name: "Frozen Foods" },
    numberInStock: 34,
    basePrice: 11.29,
    salePrice: 0,
    currentPrice: 0
  },
   {
    _id: "5b21ca3eeb7f6fbccd47190d",
    name: "Freschetta Frozen Pizza Naturally Rising Crust Signature Pepperoni - 27.16 Oz",
    aisle:  { _id: "5b21ca3eeb7f6fbccd471838", name: "Frozen Foods" },
    numberInStock: 82,
    basePrice: 7.99,
    salePrice: 0,
    currentPrice: 0
  },
   {
    _id: "5b21ca3eeb7f6fbccd47190e",
    name: "Drumstick Frozen Dairy Dessert Cones Vanilla 8 Cones - 36.8 Fl. Oz.",
    aisle:  { _id: "5b21ca3eeb7f6fbccd471838", name: "Frozen Foods" },
    numberInStock: 29,
    basePrice: 6.99,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47191a",
    name: "Svenhard's Swedish Bakery Breakfast Claws - 8 Count, 16 Oz Tray",
    aisle: { _id: "5b21ca3eeb7f6fbccd471822", name: "Bakery and Breakfast" },
    numberInStock: 17,
    basePrice: 6.79,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47191b",
    name: "Quaker Breakfast Squares - 20ct",
    aisle: { _id: "5b21ca3eeb7f6fbccd471822", name: "Bakery and Breakfast" },
    numberInStock: 15,
    basePrice: 13.99,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47191c",
    name:
      "Lettieri's 6 Oz. Sausage, Egg, And Cheese Breakfast Sandwich - 12/Case",
    aisle: { _id: "5b21ca3eeb7f6fbccd471822", name: "Bakery and Breakfast" },
    numberInStock: 13,
    basePrice: 23.49,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47191d",
    name: 'Bakery Chef 3" Premium Buttermilk Biscuit - 12/Case',
    aisle: { _id: "5b21ca3eeb7f6fbccd471822", name: "Bakery and Breakfast" },
    numberInStock: 35,
    basePrice: 4.56,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47191e",
    name: "Belvita Dark Chocolate Creme Breakfast Sandwich, 15 Ct.",
    aisle: { _id: "5b21ca3eeb7f6fbccd471822", name: "Bakery and Breakfast" },
    numberInStock: 15,
    basePrice: 11.99,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47191f",
    name: "Chips Ahoy!",
    aisle: { _id: "5b21ca3eeb7f6fbccd471822", name: "Bakery and Breakfast" ,
    numberInStock: 7,
    basePrice: 4.39,
    salePrice: 2.99,
    currentPrice:0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47191g",
    name: "Oreos",
    aisle: { _id: "5b21ca3eeb7f6fbccd471822", name: "Bakery and Breakfast" ,
    numberInStock: 7,
    basePrice: 4.99,
    salePrice: 3.33,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47191h",
    name: "Newtons",
    aisle: { _id: "5b21ca3eeb7f6fbccd471822", name: "Bakery and Breakfast" ,
    numberInStock: 7,
    basePrice: 5.99,
    salePrice: 5.49,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47192a",
    name:
      "Pacific Natural Foods Organic Coconut Non-Dairy Beverage - Original | 32 Fl Oz ",
    aisle: { _id: "5b21ca3eeb7f6fbccd471824", name: "Dairy, Eggs, and Cheese" },
    numberInStock: 15,
    basePrice: 2.58,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47192b",
    name: "Ensure Nutrition Shake Original Milk Chocolate - 6-8 Fl. Oz.",
    aisle: { _id: "5b21ca3eeb7f6fbccd471824", name: "Dairy, Eggs, and Cheese" },
    numberInStock: 23,
    basePrice: 10.99,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47192c",
    name: "Nestle Carnation Malted Original Milk Powder - 40 Oz Canister",
    aisle: { _id: "5b21ca3eeb7f6fbccd471824", name: "Dairy, Eggs, and Cheese" },
    numberInStock: 13,
    basePrice: 11.79,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47192d",
    name: "Horizon Organic Lowfat Milk | 9ct | Vanilla",
    aisle: { _id: "5b21ca3eeb7f6fbccd471824", name: "Dairy, Eggs, and Cheese" },
    numberInStock: 24,
    basePrice: 8.99,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47192e",
    name: "NESTLE NIDO Fortificada Dry Milk 56.3 Oz. Canister",
    aisle: { _id: "5b21ca3eeb7f6fbccd471824", name: "Dairy, Eggs, and Cheese" },
    numberInStock: 40,
    basePrice: 16.19,
    salePrice: 0,
    currentPrice: 0
  },
    {
    _id: "5b21ca3eeb7f6fbccd47192f",
    name: "O Organics Organic Eggs Large Brown - 12 Count",
    aisle: { _id: "5b21ca3eeb7f6fbccd471824", name: "Dairy, Eggs, and Cheese" },
    numberInStock: 8,
    basePrice: 5.69,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47192g",
    name: "Egglands Best Eggs Large - 12 Count",
    aisle: { _id: "5b21ca3eeb7f6fbccd471824", name: "Dairy, Eggs, and Cheese" },
    numberInStock: 7,
    basePrice: 5.49,
    salePrice: 0,
    currentPrice: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47192h",
    name: "Value Corner Eggs Large Family Pack - 18 Count",
    aisle: { _id: "5b21ca3eeb7f6fbccd471824", name: "Dairy, Eggs, and Cheese" },
    numberInStock: 4,
    basePrice: 4.59,
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
