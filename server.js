const express = require("express");
const app = express();
const port = 8000;
const faker = require("faker");

app.listen( port, () => console.log(`Listening on port: ${port}`) );
// const faker = require("faker")
const createCompany = () => {
    const companyFake = [{
        name: faker.company.companyName(),
        address: faker.address.streetAddress(),
        street: faker.address.streetName(),
        city: faker.address.city(),
        state: faker.address.state(),
        zipCode: faker.address.zipCode(),
        country: faker.address.country(),
    }
];
    console.log(companyFake)
    return companyFake;
};





app.get("/api/newcompany", (req, res) => {
    const newcompany = createCompany();
    console.log(newcompany);
    res.json(newcompany);
});

const createUser = () => {
    const newFake = {
        id: faker.random.uuid(),
        firtname: faker.name.firstName(),
        lastname: faker.name.lastName(),
        email: faker.internet.email(),
        phonenumber: faker.phone.phoneNumber(),
        password: faker.internet.password(),
    };
    return newFake;
};
app.get("/api/newuser", (req, res) => {
    const newuser = createUser();
    console.log(newuser);
    res.json(newuser);
});

app.get("/api/newuser/newcompany", (req, res) => {
    const newuser = createUser();
    const newcompany = createCompany();
    res.json({newuser, newcompany});
});

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );
