import { OK } from "../../constants/statusCodes";
import jsonResponse  from "../../helpers/jsonResponse";
import Role from "../../services/role.service";
import UserService from '../../services/User.service'

class DriverController {
    static async createDriver(req, res){

        const { first_name, second_name, phone_number, email_adress, password } = req.body

        await UserService.createUser(req.body);

        const [user] = await UserService.getUserByPhoneNumber({phone_number});

        
        await Role.addRole(user_id, 1);
        
        return jsonResponse({
            res,
            status: 200,
            message: "Driver created successfully",
            data: userData
        })
    }
}

export default DriverController;