import { CreateUserDto, UserSchema } from '../../dtos/create-user.dto'

export class CreateUser {
    execute({ userName, password }: CreateUserDto) {
        const data = UserSchema.safeParse({ userName, password })

        if (data.success) {
            return data
        }

        throw new Error(data.error.issues[0].message)
    }
}
