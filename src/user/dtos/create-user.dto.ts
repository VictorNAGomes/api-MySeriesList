import { z } from 'zod'

const User = z.object({
    userName: z
        .string()
        .min(5)
        .refine(
            value => {
                return /^[a-zA-Z0-9]+$/.test(value)
            },
            {
                message: 'Invalid alphanumeric format',
            },
        ),
    password: z.string(),
})

export type CreateUserDto = z.infer<typeof User>
export const UserSchema = User
