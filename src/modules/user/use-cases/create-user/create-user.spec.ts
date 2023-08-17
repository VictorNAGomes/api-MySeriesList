// sum.test.js
import { expect, it } from 'vitest'
import { CreateUser } from './create-user'

it('should not create an user with an userName that not metches with the requisites', () => {
    const user = new CreateUser()

    expect(() =>
        user.execute({
            userName: 'test_',
            password: 'Teste123',
        }),
    ).toThrowError()

    expect(() =>
        user.execute({
            userName: 'tes1',
            password: 'Teste123',
        }),
    ).toThrowError()
})

it('should not create an user with an existing userName', () => {
    const user = new CreateUser()

    user.execute({
        userName: 'teste123',
        password: 'Teste123',
    })

    expect(() =>
        user.execute({
            userName: 'teste123',
            password: 'Teste123',
        }),
    ).toThrowError()
})

it('should not send a weak password', () => {
    const user = new CreateUser()

    expect(() =>
        user.execute({
            userName: 'teste123',
            password: 'tes',
        }),
    ).toThrowError()

    expect(() =>
        user.execute({
            userName: 'teste123',
            password: 'testeteste',
        }),
    ).toThrowError()

    expect(() =>
        user.execute({
            userName: 'teste123',
            password: 'teste123',
        }),
    ).toThrowError()
})
