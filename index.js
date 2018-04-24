// Code your solution in this file!
function logDriverNames(drivers) {
  return drivers.forEach(function (driver) {
    console.log(driver.name);
  });
}

function logDriversByHometown(drivers, location) {
  return drivers.forEach(function (driver, location) {
    if (driver.hometown === location) 
      console.log(driver.name);
  });
}