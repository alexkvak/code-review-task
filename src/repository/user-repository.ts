import db from './db';
import {Repository, User, UserFilters} from "../types";

export class UserRepository extends Repository {
    async getUsers(filters: UserFilters): Promise<User[]> {
        return db.query(`SELECT * FROM users WHERE location=${filters.location}`);
    }
}