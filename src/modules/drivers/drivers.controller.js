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

        const user_id = user[0].id;

        await Role.addRole(user_id, 1);
        
        return jsonResponse({
            res,
            status: 200,
            message: "Driver created successfully",
            data: user,
        })
    }

    static async getDriver(req, res){
        const { page = 1, status, id, type} = req.query;
        const offset = PAGELIMIT * (page - 1);

        let extraField = '';
        let roleId  =  type  === 'driver'? 1 : 2;

        if( status ){
            extraField = `AND users_role.status = '${status}'`
        }

        if(id){
            extraField = `AND users.id = '${id}'`
        }

        const drivers = await Role.getUserByRole(roleId, offset, PAGELIMIT, extraField);

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