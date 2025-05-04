const productsModal = require("../modal/productsModal");

async function ProductsController(req, res) {
  const productList = [
    {
      name: "Wireless Mouse",
      category: "Electronics",
      price: 25.99,
      inStock: true,
      tags: ["wireless", "peripheral", "USB"],
    },
    {
      name: "Yoga Mat",
      category: "Fitness",
      price: 19.99,
      inStock: false,
      tags: ["exercise", "non-slip", "home"],
    },
    {
      name: "Bluetooth Speaker",
      category: "Audio",
      price: 45.0,
      inStock: true,
      tags: ["portable", "wireless", "music"],
    },
    {
      name: "LED Desk Lamp",
      category: "Home Decor",
      price: 30.5,
      inStock: true,
      tags: ["lighting", "adjustable", "energy-saving"],
    },
    {
      name: "Stainless Steel Water Bottle",
      category: "Kitchen",
      price: 15.75,
      inStock: false,
      tags: ["eco-friendly", "reusable", "insulated"],
    },
    {
      name: "Noise Cancelling Headphones",
      category: "Audio",
      price: 120.0,
      inStock: true,
      tags: ["over-ear", "wireless", "ANC"],
    },
    {
      name: "Gaming Keyboard",
      category: "Electronics",
      price: 70.0,
      inStock: true,
      tags: ["mechanical", "RGB", "USB"],
    },
    {
      name: "Cookware Set",
      category: "Kitchen",
      price: 99.99,
      inStock: false,
      tags: ["non-stick", "10-piece", "durable"],
    },
    {
      name: "Running Shoes",
      category: "Footwear",
      price: 60.0,
      inStock: true,
      tags: ["lightweight", "breathable", "sport"],
    },
    {
      name: "Smartphone Stand",
      category: "Accessories",
      price: 10.0,
      inStock: true,
      tags: ["adjustable", "portable", "desk"],
    },
  ];

  const enterValue = await productsModal.insertMany(productList);

  res.status(200).json({
    success: true,
    message: `${enterValue.length} items will be storeg in this data base`,
  });
}

async function getProductStats(req, res) {
  try {
    const filterStock = await productsModal.aggregate([
      //stage 1 : render only product which is in stock and price is grater than 100
      { $match: { inStock: true, price: { $gte: 10 } } },
      //stage 2: render products with same category and find their average price , total vale of product and total product amount
      {
        $group: {
          _id: "$category",
          averagePrice: { $avg: "$price" },
          productValue: { $sum: "$price" },
          count: { $sum: 1 },
        },
      },
      //stage 3 use project which is used to add or remove the field in recoed 0 will be delete and 1 will be add
      {
        $project: {
          _id: 0,
          averagePrice: 1,
          productValue: 1,
          count: 1,
        },
      },
    ]);

    res.status(404).json({
      success: true,
      messgae: "there is error pf applying pipeline aggregation",
      data: filterStock,
    });
  } catch (error) {
    console.log("ther is error for filtering data", error);
    res.status(404).json({
      success: false,
      messgae: "there is error pf applying pipeline aggregation",
    });
  }
}

module.exports = { ProductsController, getProductStats };
