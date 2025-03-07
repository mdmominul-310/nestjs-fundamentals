import { User } from 'src/entities/User';
import { Repository } from 'typeorm';
export declare class UsersService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    create(user: any): Promise<any>;
}
