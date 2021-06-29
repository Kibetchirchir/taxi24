import { OK, NOT_FOUND } from "../../constants/statusCodes";
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

  static async updateTrip(req, res){
    const { trip_id, status } = req.params;

    const [, tripsRes] = await TripsService.updateTripsStatus({status, id: trip_id});

    const { rowCount } = tripsRes;

    if( rowCount === 0){
      return jsonResponse({
        res,
        status: NOT_FOUND,
        message: 'trip not found',
      });
    }

    return jsonResponse({
      res,
      status: OK,
      message: 'trip updated',
    });
  }
}

export default TripController;
