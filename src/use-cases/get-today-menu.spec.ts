import { beforeEach, describe, expect, it } from 'vitest'

import { InMemoryMenuRepository } from '@/repositories/in-memory/in-memory-menu-repository'
import { GetTodayMenuUseCase } from './get-today-menu'
import { MenuNotFoundError } from './errors/menu-not-found.error'

let menuRepository: InMemoryMenuRepository
let sut: GetTodayMenuUseCase

describe('Get Today Menu Use Case', () => {
  beforeEach(() => {
    menuRepository = new InMemoryMenuRepository()
    sut = new GetTodayMenuUseCase(menuRepository)
  })

  it('should be able to get today menu in Fortaleza', async () => {
    const { menu } = await sut.execute({ restaurant: 'fortaleza' })

    expect(menu.breakfast.special).toEqual('Mamão')
  })

  it('should be not able to get today menu in a invalid campus', async () => {
    await expect(() =>
      sut.execute({ restaurant: 'invalid' }),
    ).rejects.toBeInstanceOf(MenuNotFoundError)
  })
})
