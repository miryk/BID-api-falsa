// import Faker
const { faker } = require('@faker-js/faker');

// Class Product:
class User {
  constructor() {
    this._id = faker.database.mongodbObjectId();
    this.firstName = faker.name.firstName();
    this.lastName = faker.name.lastName();
    this.phone = faker.phone.number('(+595)-9## ### ###');
    this.email = faker.internet.email(this.firstName, this.lastName);
    this.password = faker.internet.password(10);
  }
}

console.log(new User());