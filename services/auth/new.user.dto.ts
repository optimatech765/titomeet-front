export interface NewUserDto {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phoneNumber: string;
    role: string;
}

export interface UserDtoForLogin {
    email: string;
    password: string;
}