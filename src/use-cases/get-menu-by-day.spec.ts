import { beforeEach, describe, expect, it, vi } from 'vitest'

import { InMemoryMenuRepository } from '@/repositories/in-memory/in-memory-menu-repository'
import { MenuNotFoundError } from './errors/menu-not-found.error'
import { afterEach } from 'node:test'
import { GetMenuByDayUseCase } from './get-menu-by-day'

let menuRepository: InMemoryMenuRepository
let sut: GetMenuByDayUseCase

describe('Get Today Menu Use Case', () => {
  beforeEach(() => {
    menuRepository = new InMemoryMenuRepository()
    sut = new GetMenuByDayUseCase(menuRepository)

    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('should be able to get menu in Fortaleza by date', async () => {
    const date = new Date(2023, 9, 16) // 2023-10-16
    vi.setSystemTime(date)

    const queryDate = '2023-10-16'

    const { menu } = await sut.execute({
      restaurant: 'fortaleza',
      date: queryDate,
    })

    expect(menu.breakfast.special).toEqual('Mamão')
  })

  it('should be not able to get today menu with a invalid date', async () => {
    const date = new Date(2023, 9, 16) // 2023-10-16
    vi.setSystemTime(date)

    const queryDate = '2023-10-32'

    await expect(() =>
      sut.execute({ restaurant: 'fortaleza', date: queryDate }),
    ).rejects.toBeInstanceOf(MenuNotFoundError)
  })
})
