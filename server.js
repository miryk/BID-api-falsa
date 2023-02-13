// // import Faker
const { faker } = require('@faker-js/faker');

// import Express
const express = require("express");
const app = express();
const port = 8000;

// Class Product:
class User {
  constructor() {
    this._id = faker.database.mongodbObjectId();
    this.firstName = faker.name.firstName();
    this.lastName = faker.name.lastName();
    this.phone = faker.phone.number('(+595)-9## ### ###');
    this.email = faker.internet.email(this.firstName.toLowerCase(), this.lastName.toLowerCase());
    this.password = faker.internet.password(10);
  }
}
// console.log(new User());

// Class Company: 
class Company {
  constructor() {
    this._id = faker.database.mongodbObjectId();
    this.name = faker.company.name();
    this.address = {
      street: faker.address.streetAddress(),
      city: faker.address.cityName(),
      state: faker.address.state(),
      postalCode: faker.address.zipCodeByState(this.state),
      country: faker.address.country()
    }
  }
}
// console.log(new Company());


app.get("/api", (req, res) => {
  res.json({ message: "Hello World" });
});

// Get new user
app.get("/api/users/new", (req, res)=> {
  const data = new User();
  res.send(data);
})

// Get new company
app.get("/api/companies/new", (req, res)=> {
  const data = new Company();
  res.send(data);
})

// Get new company and User
app.get("/api/company", (req, res)=> {
  const data = {
    company: new Company(),
    user: new User()
  }
  res.send(data);
})




app.listen( port, () => console.log(`Listening on port: ${port}`) );
