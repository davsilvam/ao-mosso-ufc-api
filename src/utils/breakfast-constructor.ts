import { CheerioAPI } from 'cheerio'

import { Breakfast } from '@/repositories/menu-repository'

export function breakfastConstructor($: CheerioAPI): Breakfast {
  const breakfast: Breakfast = {
    drinks: [],
    breads: [],
    fruits: [],
    special: '',
  }

  $(`.desjejum .bebidas > .desc`).each((_, element) => {
    if (
      $(element).attr('class') === 'desc lactose' ||
      $(element).attr('class') === 'desc gluten'
    )
      return
    breakfast.drinks.push($(element).text().trim())
  })

  $(`.desjejum .paes > .desc`).each((_, element) => {
    if (
      $(element).attr('class') === 'desc lactose' ||
      $(element).attr('class') === 'desc gluten'
    )
      return
    breakfast.breads.push($(element).text().trim())
  })

  $(`.desjejum .frutas > .desc`).each((_, element) => {
    if (
      $(element).attr('class') === 'desc lactose' ||
      $(element).attr('class') === 'desc gluten'
    )
      return
    breakfast.fruits.push($(element).text().trim())
  })

  $(`.desjejum .frutas > .desc`).each((_, element) => {
    if (
      $(element).attr('class') === 'desc lactose' ||
      $(element).attr('class') === 'desc gluten'
    )
      return
    breakfast.special = $(element).text().trim()
  })

  return breakfast
}
