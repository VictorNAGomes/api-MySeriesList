import { User } from '@prisma/client'
import { CreateUserDto } from '../modules/user/dtos/create-user.dto'

export interface UserRepository {
    create(data: CreateUserDto): Promise<void>
    findByUserName(userName: string): Promise<User | undefined>
}
