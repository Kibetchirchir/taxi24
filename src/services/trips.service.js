import { queryBuilder } from "../database/queryBuilder";

class TripsService {
  static async createTrip({
    user_id,
    driver_id,
    from_lat,
    from_long,
    to_lat,
    to_long,
    status,
  }) {
    const query = `INSERT INTO "public"."trips" ("driver_id", "rider_id", "from_lat", "from_long", "to_lat", "to_long", "created_at", "updated_at", "status")
        VALUES(${user_id}, ${driver_id},${from_lat} , ${from_long}, ${to_lat}, ${to_long}, NOW(), NOW(), '${status}');`;

    return queryBuilder(query);
  }

  static async getTrips({ where }) {
    const query = `SELECT
	trips.*,
	riders.first_name AS riders_name,
	drivers.first_name AS drivers_name
    FROM
	trips
	INNER JOIN users AS riders ON riders.id = trips.rider_id
    INNER JOIN users AS drivers ON drivers.id = trips.driver_id
    ${where}
    `;

    return queryBuilder(query);
  }

  static async updateTripsStatus({ id, status }) {
    const query = `UPDATE
      trips
  SET
      status = '${status}'
  WHERE
      id = ${id}`;

    return queryBuilder(query);
  }
}

export default TripsService;
