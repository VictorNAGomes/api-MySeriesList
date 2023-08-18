/* eslint-disable no-return-await */
// sum.test.js
import { describe, expect, it } from 'vitest'
import { CreateUser } from './create-user'
import { InMemoryUserRepository } from '../../../../../tests/repositories/InMemoryUserRepository'

describe('Create User', () => {
    const inMemoryUser = new InMemoryUserRepository()

    it('should not create an user with an userName that not metches with the requisites', async () => {
        const user = new CreateUser(inMemoryUser)

        await expect(() =>
            user.execute({
                userName: 'test_',
                password: 'Teste123',
            }),
        ).rejects.toThrowError()

        await expect(() =>
            user.execute({
                userName: 'tes1',
                password: 'Teste123',
            }),
        ).rejects.toThrowError()
    })

    it('should not create an user with an existing userName', async () => {
        const user = new CreateUser(inMemoryUser)

        await user.execute({
            userName: 'teste1234',
            password: 'Teste123',
        })

        await expect(() =>
            user.execute({
                userName: 'teste1234',
                password: 'Teste123',
            }),
        ).rejects.toThrowError()
    })

    it('should not send a weak password', async () => {
        const user = new CreateUser(inMemoryUser)

        await expect(() =>
            user.execute({
                userName: 'teste2',
                password: 'tes',
            }),
        ).rejects.toThrowError()

        await expect(() =>
            user.execute({
                userName: 'teste3',
                password: 'testeteste',
            }),
        ).rejects.toThrowError()

        await expect(() =>
            user.execute({
                userName: 'teste4',
                password: 'teste123',
            }),
        ).rejects.toThrowError()
    })
})
