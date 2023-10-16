import { Menu, MenuRepository } from '../menu-repository'

interface RestaurantMenu {
  restaurant: string
  menus: Array<Menu & { date: string }>
}

export class InMemoryMenuRepository implements MenuRepository {
  private menus: RestaurantMenu[] = [
    {
      restaurant: 'fortaleza',
      menus: [
        {
          date: '2023-10-16',
          breakfast: {
            drinks: ['Café', 'Leite Integral', 'Leite s/ Lactose'],
            breads: ['Pão Carioca', 'Pão Sovado'],
            fruits: ['Banana', 'Mamão'],
            special: 'Mamão',
          },
          lunch: {
            main: ['Carne moída à bolonhesa', 'Sobrecoxa à carioca'],
            vegetarian: 'Guisado de grão de bico',
            salad: 'Repolho branco, Repolho roxo, Tomate, Abacaxi',
            garnish: 'Macarrão',
            side_dish: [
              'Arroz Branco',
              'Arroz Integral c/ açafrão',
              'Feijão Carioca',
            ],
            dessert: ['Melão japonês', 'Doce'],
          },
          dinner: {
            main: ['Carne de sol acebolada', 'Filé de frango com ervas'],
            vegetarian: 'Moqueca Vegetariano',
            salad: 'Vinagrete',
            garnish: 'Purê',
            side_dish: ['Baião de Dois', 'Arroz Integral', 'Feijão de Corda'],
            dessert: ['Laranja', 'Doce'],
          },
        },
      ],
    },
  ]

  async getTodayMenu(restaurantName: string): Promise<Menu | null> {
    const today = new Date().toISOString().split('T')[0]

    console.log(today)

    const restaurantMenu = this.menus
      .find(menu => menu.restaurant === restaurantName)
      ?.menus.find(menu => menu.date === today)

    if (!restaurantMenu) return null

    const menu: Menu = {
      breakfast: restaurantMenu.breakfast,
      lunch: restaurantMenu.lunch,
      dinner: restaurantMenu.dinner,
    }

    return menu
  }

  async findMenuByDate(
    restaurantName: string,
    date: string,
  ): Promise<Menu | null> {
    const restaurantMenu = this.menus
      .find(menu => menu.restaurant === restaurantName)
      ?.menus.find(menu => menu.date === date)

    if (!restaurantMenu) return null

    const menu: Menu = {
      breakfast: restaurantMenu.breakfast,
      lunch: restaurantMenu.lunch,
      dinner: restaurantMenu.dinner,
    }

    return menu
  }
}
