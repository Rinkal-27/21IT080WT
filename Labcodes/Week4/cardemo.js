var Toyota = {
    make: "Toyota",
    year: 2015,
    color: "White",
    price: 1000000,
    mileage: 10000,
    features: ["Air Conditioning", "Power Windows", "Power Locks", "Cruise Control", "AM/FM Radio"],
};
var BMW = {
    make: "BMW",
    model: "Camry",
    year: 2020,
    color: "White",
    price: 50000000,
    mileage: 10000,
    features: ["Air Conditioning", "Power Windows", "Power Locks", "Cruise Control", "AM/FM Radio"],
};
var Mercedes = {
    make: "Mercedes",
    year: 2015,
    color: "White",
    price: 2000000,
    mileage: 10000,
    features: ["Air Conditioning", "Power Windows", "Power Locks", "Cruise Control", "AM/FM Radio"],
};
function displayCarDetails(car) {
    console.log(`Make: ${car.make}`);
    console.log(`Year: ${car.year}`);
    console.log(`Color: ${car.color}`);
    console.log(`Price: ${car.price}`);
    console.log(`Mileage: ${car.mileage}`);
    console.log(`Features: ${car.features}`);
}
displayCarDetails(Toyota);
displayCarDetails(BMW);