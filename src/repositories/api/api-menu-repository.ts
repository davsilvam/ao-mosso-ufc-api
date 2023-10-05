import { load } from 'cheerio'

import { Menu, MenuRepository, restaurants } from '../menu-repository'
import { instance } from '@/lib/axios'
import { mealConstructor } from '@/utils/meal-constructor'
import { breakfastConstructor } from '@/utils/breakfast-constructor'

export class ApiMenuRepository implements MenuRepository {
  async getTodayMenu(restaurantName: string): Promise<Menu | null> {
    const restaurant = restaurants.find(
      restaurant => restaurant.name === restaurantName,
    )

    if (!restaurant) return null

    const url = `/${restaurant?.id}-restaurante-universitario-de-${restaurant}`

    const { data } = await instance.get(url)
    const $ = load(data)

    const breakfast = breakfastConstructor($)
    const lunch = mealConstructor($, 'almoco')
    const dinner = mealConstructor($, 'jantar')

    const menu: Menu = {
      breakfast,
      lunch,
      dinner,
    }

    if (!menu) return null

    return menu
  }

  async findMenuByDate(restaurantName: string, date: Date): Promise<Menu> {
    throw new Error('Method not implemented.')
  }
}
