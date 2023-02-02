const mongoose = require("mongoose"); //require mongoose
mongoose.set("strictQuery", true);

// my models (importing the models)
const DinoModel = require("./models/DinoModel");

mongoose
  .connect("mongodb://127.0.0.1/Jurassic-Park") //connect to the database behind the slash is the name of the database
  .then(() => {
    console.log("Great job, you connected to Jurassic-Park!");
  })
  .catch((error) => {
    console.log("There was an error connecting: ", error);
  });

//one dinosaur (use the same shape as the schema)
const petri = {
  name: "Petri",
  friends: ["Josh", "Mat"],
  meatEater: true,
  legs: 2,
  longNeck: false,
  color: "blue",
};

//an array of dinosaurs (use the same shape as the schema)
let dinoArray = [
  {
    name: "Hopper",
    friends: ["Charlie", "Josh", "Mat"],
    meatEater: true,
    legs: 2,
    color: "green",
  },
  {
    name: "Rex",
    friends: ["Josh", "Mat"],
    meatEater: true,
    legs: 2,
    color: "red",
  },
  {
    name: "Sara",
    friends: ["Charlie", "Mat"],
    meatEater: false,
    legs: 4,
    longNeck: false,
  },
  {
    name: "Little Foot",
    friends: ["Charlie", "Josh", "Mat"],
    meatEater: false,
    legs: 4,
    longNeck: false,
  },
];

//creates a single new model that needs to fit the schema
// DinoModel.create(petri)
// .then((newDinoInDb) => {
//     console.log('Nice, now you got a new dino', newDinoInDb)
// }).catch((error) => {
//     console.log("There was an error", error)
// });

//creates an array with the model
// DinoModel.insertMany(dinoArray)
// .then((dinoArrayDb) => {
//     console.log("the array was created", dinoArrayDb)
// })
// .catch((error) => {
//     console.log(error)
// })

//reading the database, gives back an array
// DinoModel.find()
//   .then((allDinos) => {
//     console.log("Here is a list of all dinos", allDinos);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//reading the database by Id, gives back an object
// DinoModel.findById('63db8b7a7767dde66c2add77')
//   .then((dino) => {
//     console.log("Here is a object of a dino", dino);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//updating in the database by Id
// DinoModel.findByIdAndUpdate(
//   "63db8b7a7767dde66c2add79",
//   { color: "green" },
//   { new: true } //gives the new schema in the console
// )
//   .then((UpdatedDinoInDb) => {
//     console.log("Nice, now you updated", UpdatedDinoInDb);
//   })
//   .catch((error) => {
//     console.log("There was an error", error);
//   });

//update in the database by name
// DinoModel.findOneAndUpdate(
//   { name: "Rex" },
//   { color: "green" },
//   { new: true } //gives the new schema in the console
// )
//   .then((UpdatedDinoInDb) => {
//     console.log("Nice, now you updated", UpdatedDinoInDb);
//   })
//   .catch((error) => {
//     console.log("There was an error", error);
//   });

//deleting inside the database
DinoModel.findByIdAndDelete('63db8b7a7767dde66c2add79')
  .then((deletedDino) => {
    console.log("Here is a object of the deleted dino", deletedDino);
  })
  .catch((error) => {
    console.log(error);
  });