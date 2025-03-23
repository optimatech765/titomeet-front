export interface SignUpDto {
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export interface SignUpDto2 {
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    password: string;
}

export interface LoginDto {
    email: string;
    password: string;
}

export interface ResetPasswordDto {
    email: string;
    password: string;
    token: string;
}

export type AccountDto = {
    id: string;
    refreshToken: string;
    expiresAt: string;
};

export type UserDto = {
    id: string;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    role: 'SUPER_ADMIN' | 'ADMIN' | 'USER';
    accounts: AccountDto[];
};

export type AuthResponse = {
    accessToken: string;
    refreshToken: string;
    user: UserDto;
};
