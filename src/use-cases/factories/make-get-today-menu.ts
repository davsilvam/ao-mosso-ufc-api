import { ApiMenuRepository } from '@/repositories/api/api-menu-repository'
import { GetTodayMenuUseCase } from '../get-today-menu'

export function makeGetTodayMenuUseCase() {
  const apiMenuRepository = new ApiMenuRepository()
  const getTodayMenuUseCase = new GetTodayMenuUseCase(apiMenuRepository)

  return getTodayMenuUseCase
}
