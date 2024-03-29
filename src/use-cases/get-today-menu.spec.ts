import { beforeEach, describe, expect, it, vi } from 'vitest'

import { InMemoryMenuRepository } from '@/repositories/in-memory/in-memory-menu-repository'
import { GetTodayMenuUseCase } from './get-today-menu'
import { MenuNotFoundError } from './errors/menu-not-found.error'
import { afterEach } from 'node:test'

let menuRepository: InMemoryMenuRepository
let sut: GetTodayMenuUseCase

describe('Get Today Menu Use Case', () => {
  beforeEach(() => {
    menuRepository = new InMemoryMenuRepository()
    sut = new GetTodayMenuUseCase(menuRepository)

    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('should be able to get today menu in Fortaleza', async () => {
    const date = new Date(2023, 9, 16) // 2023-10-16
    vi.setSystemTime(date)

    const { menu } = await sut.execute({ restaurant: 'fortaleza' })

    expect(menu.breakfast.special).toEqual('Mamão')
  })

  it('should be not able to get today menu in a invalid campus', async () => {
    const date = new Date(2023, 9, 16) // 2023-10-16
    vi.setSystemTime(date)

    await expect(() =>
      sut.execute({ restaurant: 'invalid' }),
    ).rejects.toBeInstanceOf(MenuNotFoundError)
  })
})
