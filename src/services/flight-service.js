const {FlightRepository, AirplaneRepository} = require('../repository/index');
const { compareTime } = require('../utils/helper');
class FlightService{

    constructor() {
        this.airplaneRepository = new AirplaneRepository();
        this.flightrepository = new FlightRepository();
    }

    async createFlight(data){
        try {             
            const airplane = await AirplaneRepository.getAirplane(data.airplaneId);
            const flight = await this.flightrepository.createFlight({
                ...data, totalSeats:airplane.capacity
            })
            return flight;
        } catch (error) {
            console.log("something went wrong in the service layer");
            throw {error};
        }
    }

    async getFlightData() {
        //todo
    }
}

module.exports = FlightService;