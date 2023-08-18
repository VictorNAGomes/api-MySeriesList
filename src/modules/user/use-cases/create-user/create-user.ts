import { UserRepository } from '../../../../repositories/UserRepository'
import { CreateUserDto, UserSchema } from '../../dtos/create-user.dto'

export class CreateUser {
    constructor(private readonly userRepository: UserRepository) {}

    async execute({ userName, password }: CreateUserDto) {
        const data = UserSchema.safeParse({ userName, password })
        if (!data.success) throw new Error(data.error.issues[0].message)

        const existingUser = await this.userRepository.findByUserName(userName)
        if (existingUser !== undefined) throw new Error('User already exists')

        const user = await this.userRepository.create(data.data)
        return user
    }
}
