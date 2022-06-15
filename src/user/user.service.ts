import { Injectable, Res } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { create } from 'domain';
import { ResourceService } from 'libs/services/resource.service';
import { Model } from 'mongoose';
import { UserCreateDto, UserUpdateDto } from 'tools/dtos/user.dto';
import { AuditModel } from 'tools/models/audit.model';
import { UserModel } from 'tools/models/user.model';

const result: UserModel[] = []

@Injectable()
export class UserService extends ResourceService<UserModel,UserCreateDto,UserUpdateDto> {
    constructor(@InjectModel('User') userMongo: Model<UserModel>,
    ){
        super (userMongo)
    }

   /* getAllUsers() : UserModel[]{

        if (result.length == 0) {
            this.creatingMockUser(
            {
                birthDay:new Date(),
                email:"berke.bicak@hotmail.com",
                name:"Berke",
                surname:"Bıçak",
                password:"12345",

            }
            
            )
        }

        return result;
    }

    getUserById(id) : any{
        const user = result.find(data=>data.id == id);

        if(!user){
            return "user does not exist"
        }
        else{
            return user;
        }
    }
    

    /*createUser(body:UserCreateDto){
        const isExist = result.find(res=>{res.email == body.email;});
        
        if (isExist) {

            return isExist;
        }
        else{

            this.creatingMockUser(body);
            return result.slice(result.length - 1, result.length);

        }

    }*/

   /* private creatingMockUser(data:any){
        const user: UserModel = new UserModel();
        user.birthDay = data.birthDay;
        user.email = data.email;
        user.name = data.name;
        user.surname = data.surname;
        user.password = data.password;

        user.id = (Math.floor(Math.random()*60) + 1).toString();
        
        result.push(user);
    }*/
}