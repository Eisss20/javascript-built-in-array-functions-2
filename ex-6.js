const carCollection = ["toyota", "fiat", "honda", "bmw"];

function updateCarCollection(carBrand) {
  // Start coding here
  const lowerCaseCarBrand = carBrand.toLowerCase();
  const position = carCollection.indexOf(lowerCaseCarBrand);

  if (position !== -1) {
    return `${carBrand} has already existed in the ${
      position + 1
    } position of the car collection.`;
  } else {
    carCollection.push(lowerCaseCarBrand);
    return `New car collection is: ${carCollection.join(", ")}.`;
  }
}

console.log(updateCarCollection("audi")); //new car collection is : toyota,fiat,honda,bmw,audi.

console.log(updateCarCollection("toyota")); //toyota has already existed in the 1 position of car collection.