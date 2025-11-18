for (let i = 0; i <= 25; i++) {
  console.log(i);
}

let i = 0;
while (i <= 10) {
  console.log(i);
  i++;
}

let i2 = 0;
do {
  console.log(i2);
  i2++;
} while (i2 <= 15);

const numbers = [23, 44, 123, 234, 765, 1023, 2368];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 !== 0) {
    console.log(numbers[i]);
  }
}

const currentDay = new Date().getDay();

switch (currentDay) {
  case 0:
    console.log("კვირა");
    break;
  case 1:
    console.log("ორშაბათი");
    break;
  case 2:
    console.log("სამშაბათი");
    break;
  case 3:
    console.log("ოთხშაბათი");
    break;
  case 4:
    console.log("ხუთშაბათი");
    break;
  case 5:
    console.log("პარასკევი");
    break;
  case 6:
    console.log("შაბათი");
    break;
}

const products = [
  { name: "Product1", price: 20, previousPrice: 30 },
  { name: "Product2", price: 50, previousPrice: null },
  { name: "Product3", price: 40, previousPrice: 60 },
  { name: "Product4", price: 100, previousPrice: 90 },
];

for (let i = 0; i < products.length; i++) {
  const product = products[i];

  if (product.previousPrice !== null && product.previousPrice > product.price) {
    console.log(product.name);
  }
}
