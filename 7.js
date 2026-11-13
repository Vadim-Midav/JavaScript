let flights = [];

function addFlight(flightNumber, destination, departureTime, capacity) {
    const flight = {
        flightNumber: flightNumber,
        destination: destination,
        departureTime: departureTime,
        capacity: capacity,
        passengers: [],
    };

    flights.push(flight);

    return `Рейс №${flightNumber} в ${destination}. Вылет: ${departureTime}. Мест: ${capacity}`;
}

function cancelFlight(flightNumber) {
    for (let i = 0; i < flights.length; i++) {
        if (flights[i].flightNumber === flightNumber) {
            flights.splice(i, 1);

            return `Рейс №${flightNumber} отменён`;
        }
    }

    return `Рейс №${flightNumber} не найден`;
}

function registerPassenger(flightNumber, passengerName) {
    for (let i = 0; i < flights.length; i++) {
        if (flights[i].flightNumber === flightNumber) {
            flights[i].passengers.push(passengerName);

            return `Пассажир ${passengerName} зарегистрирован на рейс №${flightNumber}`;
        }
    }

    return `Рейс №${flightNumber} не найден`;
}

function findFlightByNumber(flightNumber) {
    for (let i = 0; i < flights.length; i++) {
        if (flights[i].flightNumber === flightNumber) {
            return `Рейс №${flights[i].flightNumber}
Направление: ${flights[i].destination}
Вылет: ${flights[i].departureTime}
Мест: ${flights[i].capacity}
Пассажиры: ${flights[i].passengers}`;
        }
    }

    return `Рейс №${flightNumber} не найден`;
}

function showAllFlights() {
    for (let i = 0; i < flights.length; i++) {
        console.log(
            `Рейс №${flights[i].flightNumber}, Направление: ${flights[i].destination}, Вылет: ${flights[i].departureTime}, Мест: ${flights[i].capacity}`
        );
    }
} 

function showFlightPassengers(flightNumber) {
    for (let i = 0; i < flights.length; i++) {
        if (flights[i].flightNumber === flightNumber) {
            return `Пассажиры рейса №${flightNumber}: ${flights[i].passengers}`;
        }
    }

    return `Рейс №${flightNumber} не найден`;
}

console.log(addFlight(1, "Baku", "15:00", 200));
console.log(registerPassenger(1, "Vadim"));
console.log(registerPassenger(1, "Ivan"));
console.log(registerPassenger(1, "Elena"));

console.log(flights);

console.log(findFlightByNumber(1));

console.log(addFlight(1, "Baku", "15:00", 200));
console.log(cancelFlight(1))
showAllFlights()
console.log(showFlightPassengers(1));