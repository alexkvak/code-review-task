import {User, UserFilters} from "../../types";
import {getCachedUsers} from "../../services";
import {UserRepository} from "../../repository/user-repository";

export class InteractorUsersV1 {
    async getUsers(filters: UserFilters): Promise<User[]> {
        const cached = await getCachedUsers(filters);

        if (!cached) {
            const userRepository = new UserRepository();
            return userRepository.getUsers(filters);
        }

        return cached;
    }
}