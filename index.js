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

const  driversByRevenue(drivers) = function compare (a,b) {
  if (a.last_nom < b.last_nom)
    return -1;
  if (a.last_nom > b.last_nom)
    return 1;
  return 0;
}

drivers.sort(compare);