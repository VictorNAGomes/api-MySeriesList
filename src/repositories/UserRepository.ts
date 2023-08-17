import { CreateUserDto } from '../modules/user/dtos/create-user.dto'

export interface UserRepository {
    create(data: CreateUserDto): Promise<void>
}
