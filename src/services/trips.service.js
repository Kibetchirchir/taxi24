const { queryBuilder } = require("../database/queryBuilder");

class TripsService {
  static async createTrip({
    user_id,
    driver_id,
    from_lat,
    from_long,
    to_lat,
    to_long,
  }) {
    const query = `INSERT INTO "public"."trips" ("driver_id", "rider_id", "from_lat", "from_long", "to_lat", "to_long", "created_at", "updated_at")
        VALUES(${user_id}, ${driver_id},${from_lat} , ${from_long}, ${to_lat}, ${to_long}, NOW(), NOW());`;
        
    return queryBuilder(query);
  }
}

export default TripsService;
