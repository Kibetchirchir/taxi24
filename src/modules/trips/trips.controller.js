import TripsService from "../../services/trips.service";

class TripController {
  static async createTrip(req, res) {
    const {
      body: { from_lat, from_long, to_lat, to_long },
      params: { user_id },
    } = req;

    const driver_id = 1

    const trip = await TripsService.createTrip({
      user_id,
      driver_id,
      from_lat,
      from_long,
      to_lat,
      to_long,
    });
  }
}

export default TripController;
