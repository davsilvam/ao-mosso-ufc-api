import { Menu, MenuRepository } from '../menu-repository'

interface RestaurantMenu {
  restaurant: string
  menu: Menu
}

export class InMemoryMenuRepository implements MenuRepository {
  private menus: RestaurantMenu[] = [
    {
      restaurant: 'fortaleza',
      menu: {
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
    },
  ]

  async getTodayMenu(restaurant: string): Promise<Menu | null> {
    const restaurantMenu = this.menus.find(
      menu => menu.restaurant === restaurant,
    )

    if (!restaurantMenu) return null

    return restaurantMenu.menu
  }

  findMenuByDate(restaurantName: string, date: Date): Promise<Menu | null> {
    throw new Error('Method not implemented.')
  }
}
