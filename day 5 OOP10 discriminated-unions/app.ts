interface Car {
  type: "Car"; // Discriminant property
  numberOfDors: number;
  luggageCapacity: number;
}

interface Truck {
  type: "Truck"; // Discriminant property
  loadCapacity: number;
  truckType: string;
}

interface Motorcycle {
  type: "Motorcycle"; // Discriminant property
  frametype: string;
  maximumSpeed: number;
}

type Vehicle = Car | Truck | Motorcycle;

function printVihicleTypeDetails(vehicle: Vehicle) {
  switch (vehicle.type) {
    case "Car":
      console.log(
        `This ${vehicle.type} has ${vehicle.numberOfDors} doors and the capacity of the trunk is ${vehicle.luggageCapacity}`
      );
      break;

    case "Motorcycle":
      console.log(`This ${vehicle.type} has ${vehicle.frametype} frame and the maximum speed is ${vehicle.maximumSpeed}`);
      break;

    case "Truck":
      console.log(
        `This ${vehicle.type} has a load capacity of ${vehicle.loadCapacity} and the type of truck is ${vehicle.truckType}`
      );
      break;

    default:
      console.log("Unknown vehicle type");
      break;
  }
}
