import { CheerioAPI } from 'cheerio'

import { Meal } from '@/repositories/menu-repository'

export function mealConstructor(
  $: CheerioAPI,
  queryMeal: 'almoco' | 'jantar',
): Meal {
  const meal: Meal = {
    main: [],
    vegetarian: '',
    salad: '',
    garnish: '',
    side_dish: [],
    dessert: [],
  }

  $(`.${queryMeal} .principal > .desc`).each((_, element) => {
    if (
      $(element).attr('class') === 'desc lactose' ||
      $(element).attr('class') === 'desc gluten'
    )
      return
    meal.main.push($(element).text().trim())
  })

  $(`.${queryMeal} .vegetariano > .desc`).each((_, element) => {
    if (
      $(element).attr('class') === 'desc lactose' ||
      $(element).attr('class') === 'desc gluten'
    )
      return
    meal.vegetarian = $(element).text().trim()
  })

  $(`.${queryMeal} .salada > .desc`).each((_, element) => {
    if (
      $(element).attr('class') === 'desc lactose' ||
      $(element).attr('class') === 'desc gluten'
    )
      return
    meal.salad = $(element).text().trim()
  })

  $(`.${queryMeal} .guarnicao > .desc`).each((_, element) => {
    if (
      $(element).attr('class') === 'desc lactose' ||
      $(element).attr('class') === 'desc gluten'
    )
      return
    meal.garnish = $(element).text().trim()
  })

  $(`.${queryMeal} .acompanhamento > .desc`).each((_, element) => {
    if (
      $(element).attr('class') === 'desc lactose' ||
      $(element).attr('class') === 'desc gluten'
    )
      return
    meal.side_dish.push($(element).text().trim())
  })

  $(`.${queryMeal} .sobremesa > .desc`).each((_, element) => {
    if (
      $(element).attr('class') === 'desc lactose' ||
      $(element).attr('class') === 'desc gluten'
    )
      return
    meal.dessert.push($(element).text().trim())
  })

  return meal
}
