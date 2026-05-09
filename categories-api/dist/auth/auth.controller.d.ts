import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    register(data: any): Promise<import("../users/user.entity").User[]>;
    login(data: any): Promise<{
        token: string;
    }>;
}
