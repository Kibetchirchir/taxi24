import { off } from "process";
import { PAGELIMIT } from "../../constants/shared";
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

    static async getDriver(req, res){
        const { page = 1, status} = req.query;
        const offset = PAGELIMIT * (page - 1);

        let extraField = '';

        if( status ){
            extraField = `AND users_role.status = '${status}'`
        }

        console.log(req);

        console.log('>>>>>',status);

        const driver_role_id = 1;


        const drivers = await Role.getUserByRole(driver_role_id, offset, PAGELIMIT, extraField);

        const { rowCount, rows} = drivers[1];

        const pages  = Math.ceil(rowCount / PAGELIMIT)

        return jsonResponse({
            res, 
            status: OK,
            data: rows,
            meta: {
                total: rowCount,
                page,
                pages,
              },
        })
    }
}

export default DriverController;