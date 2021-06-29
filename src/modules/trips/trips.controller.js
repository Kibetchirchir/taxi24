import { OK } from "../../constants/statusCodes";
import jsonResponse from "../../helpers/jsonResponse";
import TripsService from "../../services/trips.service";

class TripController {
  static async createTrip(req, res) {
    const {
      body: { from_lat, from_long, to_lat, to_long },
      params: { rider_id: user_id },
    } = req;

    const driver_id = 10;

    const status = 'pending';

    const trips = await TripsService.createTrip({
      user_id,
      driver_id,
      from_lat,
      from_long,
      to_lat,
      to_long,
      status,
    });

    return jsonResponse({
        res,
        status: OK,
        message: 'Trip created successfully',
        data: trips
    })
  }

  static async getTrip(req, res) {

    const { status } = req.query;

    let where = '';

    if(status){
      where = `WHERE status = '${status}'`
    }

    if(status === 'ongoing'){
      where = `WHERE status IN('pending', 'ongoing') `
    }

    const [tripData, result] = await TripsService.getTrips({ where });

    const { rows: trips} = result

    return jsonResponse({
      res,
      status: OK,
      message: 'Trips',
      data: trips
    })
  }
}

export default TripController;
