import { User } from '@prisma/client'
import crypto from 'node:crypto'
import { UserRepository } from '../../src/repositories/UserRepository'
import { CreateUserDto } from '../../src/modules/user/dtos/create-user.dto'

export class InMemoryUserRepository implements UserRepository {
    public items: User[] = []

    async create(data: CreateUserDto) {
        await this.items.push({
            id: crypto.randomUUID(),
            userName: data.userName,
            password: data.password,
        })
    }

    async findByUserName(userName: string) {
        const user = await this.items.find(item => item.userName === userName)
        if (user) return user
        else return undefined
    }
}
