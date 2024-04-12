const express = require("express");
const mongoose = require("mongoose");
const productRoutes = require("./routes/products.route.js");
const stallHolderRoutes = require("./routes/stall_holder.route.js")
const app = express();

// MIDDLEWARE
app.use(express.json());
// to accept forms
app.use(express.urlencoded({ extended: false }));

// apis
app.use("/api/products", productRoutes);
app.use("/api/stall_holders", stallHolderRoutes);
mongoose
  .connect(
    "mongodb+srv://eroyjune:i7w1DYj4QAftEAB7@cluster1.hspuxbr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1"
  )
  .then((res) => {
    console.log("connected to that database");
    app.listen(3000, () => {
      console.log("server running on port 3000");
    });
  })
  .catch(() => {
    console.log("connectionfailed");
  });

// app.get('/', (req, res) => {
//     res.send('hello from node api')
// })

// app.get("/test1", (req, res) => {
//   res.send("hello from node ap testi");
// });

// app.get('/api/products', async (req, res) => {
//   try {
//     const products = await Product.find({})
//     res.status(200).json({products})
//   } catch (error) {
//     res.status(500).json({message: error.message})
//   }
// })

// app.post('/api/products', async (req, res) => {
//   try {
//    const product =  await Product.create(req.body)
//    res.status(200).json({message: 'Success', product:product})

//   } catch (error) {
//     console.log(error)
//     res.status(500).json({message: error.message})
//   }
// })

// app.get('/api/products/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     const product = await Product.findById(id)

//     res.status(200).json(product)
//   } catch (error) {
//     res.status(500).json({message: error.message})
//   }
// })
// update product
// app.put('/api/products/:id', async (req, res) => {
//   try {
//     const {id } = req.params
//     const product = await Product.findByIdAndUpdate(id,req.body)
//     if (!product) {
//       res.status(404).json({message:'Product not found'})
//     }
//     const updatedProduct = await Product.findById(id)

//     res.status(200).json({ message: "Success", updatedProduct });
//   } catch (error) {
//     res.status(500).json({message: error.message})
//   }
// })

// app.delete('/api/products/:id', async (req, res) => {
//   try {
//     const {id } = req.params
//     const product = await Product.findByIdAndDelete(id);
//      if (!product) {
//        res.status(404).json({ message: "Product not found" });
//      }

//      res.status(200).json({message: 'Deleted successfully'})

//   } catch (error) {
//     res.status(500).json({message: error.message})
//   }
// })
