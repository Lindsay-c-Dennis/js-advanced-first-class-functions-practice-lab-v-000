// Code your solution in this file!
function logDriverNames(drivers) {
  return drivers.forEach(function (driver) {
    console.log(driver.name);
  });
}

const logDriversByHometown = function (drivers, hometown) {
  drivers.forEach(function (driver, hometown) {
    if (driver.hometown === hometown) 
      console.log(driver.name);
  });
}