const Product = require("../model/product");


//1
const getAllProducts = async (req, res) => {

   const { company , name , featured , sort , select } = req.query;
   const queryObject = {};

   if(company){
      queryObject.company = company;
   }

   if(name){
      queryObject.name = { $regex: name, $options: "i" };
   }

   if(featured){
      queryObject.featured = featured;
   }

   let apiData = Product.find(queryObject);


   if(sort){
      let sortFix = sort.replace(" , " , " ");
      apiData = apiData.sort(sortFix);
   }

   if(select){
      let selectFix = select.split(",").join("");
      apiData = apiData.select(selectFix);
   }

   let page = Number(req.query.page) || 1;
   let limit = Number(req.query.limit) || 10;
   
   //page = 2;
   //limit = 3;
   //limit = 1*3 = 3


   let skip = (page - 1) * limit;

   apiData = apiData.skip(skip).limit(limit);

   console.log(queryObject);

    //console.log(req.query);
   //  const myData = await apiData.sort(sort);
   // res.status(200).json({ msg: "I am getAllProducts" });
   const Products = await apiData;
   res.status(200).json({ Products,nbHits: Products.length });
};

//2.
const getAllProductsTesting = async (req, res) => {
   // res.status(200).json( {msg: "I am getAllProductsTesting"});
   //const myData = await Product.find({ company: "apple"});

   //const myData = await Product.find( req.query ).sort("name");
   
   const myData = await Product.find( req.query ).select("name company");
 
   // const myData = await Product.find( req.query ).sort("-name");
   // const myData = await Product.find( req.query ).sort("name");
   // console.log(req.query);

   res.status(200).json({ myData });

};

//3.
module.exports = { getAllProducts, getAllProductsTesting };