export interface Breakfast {
  drinks: string[]
  breads: string[]
  fruits: string[]
  special: string
}

export interface Meal {
  main: string[]
  vegetarian: string
  salad: string
  garnish: string
  side_dish: string[]
  dessert: string[]
}

export interface Menu {
  breakfast: Breakfast
  lunch: Meal
  dinner: Meal
}

export const restaurants = [
  {
    name: 'fortaleza',
    id: 1,
  },
  {
    name: 'russas',
    id: 3,
  },
  {
    name: 'caucaia',
    id: 4,
  },
  {
    name: 'sobral',
    id: 5,
  },
  {
    name: 'crateus',
    id: 6,
  },
]

export interface MenuRepository {
  getTodayMenu(restaurantName: string): Promise<Menu | null>
  findMenuByDate(restaurantName: string, date: string): Promise<Menu | null>
}
