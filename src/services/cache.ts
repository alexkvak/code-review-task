import cache from 'cache';
import {User, UserFilters} from "../types";

export async function getCachedUsers(filters: UserFilters): Promise<User[] | undefined> {
    return cache.get(getUsersCacheKey(filters));
}

function getUsersCacheKey(filters: UserFilters): string {
    return `users-${filters.location}`;
}