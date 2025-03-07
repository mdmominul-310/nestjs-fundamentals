import { UsersService } from './users.service';
import { CreateUserDto } from './dtos/user.createUserDto';
export declare class UsersController {
    private userService;
    constructor(userService: UsersService);
    create(userdto: CreateUserDto): Promise<any>;
}
