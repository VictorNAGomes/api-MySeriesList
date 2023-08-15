import { CreateUserDto, UserSchema } from '../../dtos/create-user.dto'

export class CreateUser {
    execute(data: CreateUserDto) {
        const user = UserSchema.safeParse(data)

        return user
    }
}
