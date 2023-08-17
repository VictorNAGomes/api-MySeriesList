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
    password: z
        .string()
        .min(8)
        .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, {
            message: 'The password is not strong enough',
        }),
})

export type CreateUserDto = z.infer<typeof User>
export const UserSchema = User
