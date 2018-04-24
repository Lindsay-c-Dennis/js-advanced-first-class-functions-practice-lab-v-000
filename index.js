// Code your solution in this file!
function logDriverNames(drivers) {
  return drivers.forEach(function (driver) {
    console.log(driver.name);
  });
}

const logDriversByHometown = function (drivers, hometown) {
  drivers.forEach(function (driver) {
    if (driver.hometown === hometown) 
      console.log(driver.name);
  });
};

const driversByRevenue = function (drivers) {
  return drivers.slice().sort(function (a, b) {
    return (a.revenue - b.revenue);
  });
};

const driversByName = function (drivers) {
  return drivers.slice().sort()
}