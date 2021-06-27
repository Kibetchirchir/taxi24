import jsonResponse from "../../helpers/jsonResponse";
import Role from "../../services/role.service";
import UserService from "../../services/User.service";

class RidersController{
    static async createRider (req, res){
        const { first_name, second_name, phone_number, email_adress, password } = req.body;

        await UserService.createUser(req.body);

        const [data, userData] = await UserService.getUserByPhoneNumber({phone_number});

        const { rows } = userData;

        const [ user ] = rows;

        const user_id = user.id;   
        
        await Role.addRole(user_id, 2);
        
        return jsonResponse({
            res,
            status: 200,
            message: "Rider created successfully",
            data: user
        })
    }
}

export default RidersController;
