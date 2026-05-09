import { UsersService } from '../users/users.service';
export declare class AuthService {
    private usersService;
    constructor(usersService: UsersService);
    register(data: any): Promise<import("../users/user.entity").User[]>;
    login(data: any): Promise<{
        token: string;
    }>;
}
