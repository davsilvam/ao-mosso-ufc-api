import { Menu, MenuRepository } from '@/repositories/menu-repository'
import { MenuNotFoundError } from './errors/menu-not-found.error'

interface GetTodayMenuUseCaseRequest {
  restaurant: string
}

interface GetTodayMenuUseCaseResponse {
  menu: Menu
}
export class GetTodayMenuUseCase {
  constructor(private menuRepository: MenuRepository) {}

  async execute({
    restaurant,
  }: GetTodayMenuUseCaseRequest): Promise<GetTodayMenuUseCaseResponse> {
    const menu = await this.menuRepository.getTodayMenu(restaurant)

    if (!menu) {
      throw new MenuNotFoundError()
    }

    return {
      menu,
    }
  }
}
