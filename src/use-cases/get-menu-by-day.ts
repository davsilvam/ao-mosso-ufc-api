import { Menu, MenuRepository } from '@/repositories/menu-repository'
import { MenuNotFoundError } from './errors/menu-not-found.error'

interface GetMenuByDayUseCaseRequest {
  restaurant: string
  date: string
}

interface GetMenuByDayUseCaseResponse {
  menu: Menu
}

export class GetMenuByDayUseCase {
  constructor(private menuRepository: MenuRepository) {}

  async execute({
    restaurant,
    date,
  }: GetMenuByDayUseCaseRequest): Promise<GetMenuByDayUseCaseResponse> {
    const menu = await this.menuRepository.findMenuByDate(restaurant, date)

    if (!menu) {
      throw new MenuNotFoundError()
    }

    return {
      menu,
    }
  }
}
