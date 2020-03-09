const faker = require('faker');

function getMonth() {
  const month = faker.random.number(12);
  if (month > 9) return month.toString();
  if (month > 0) return `0${month.toString()}`;
  return '01';
}

function getYear() {
  const year = faker.random.number(35);
  if (year > 21) return year.toString();
  return '21';
}

module.exports = () => {
  return `${getMonth()}/${getYear()}`;
};
