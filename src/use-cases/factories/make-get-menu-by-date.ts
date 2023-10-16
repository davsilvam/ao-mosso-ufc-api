import { ApiMenuRepository } from '@/repositories/api/api-menu-repository'
import { GetMenuByDayUseCase } from '../get-menu-by-day'

export function makeGetMenuByDateUseCase() {
  const menuRepository = new ApiMenuRepository()
  const getMenuByDayUseCase = new GetMenuByDayUseCase(menuRepository)

  return getMenuByDayUseCase
}
