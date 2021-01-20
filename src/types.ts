export interface UserFilters {
    location: string;
}

export interface User {
    id: string;
    name: string;
    login: string;
}

export interface Repository {
    getUsers(filters: UserFilters): Promise<User[]>;
}