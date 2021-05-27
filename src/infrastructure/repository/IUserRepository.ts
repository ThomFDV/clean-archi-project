import {UserEntity} from "../../domain/entity/UserEntity";

export interface IUserRepository {
    getUserById(id?: number): UserEntity;
    saveUser(user: UserEntity): void;
}
