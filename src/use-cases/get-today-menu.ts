import { load } from 'cheerio'

import { instance } from '../lib/axios'

interface Menu {
  main: string[]
  vegetarian: string
}

export class GetTodayMenuUseCase {
  async execute() {
    const { data } = await instance.get('/')

    const $ = load(data)

    const menu: Menu = {
      main: [],
      vegetarian: '',
    }

    $('.almoco .principal > .desc').each((_, element) => {
      menu.main.push($(element).text())
    })

    $('.almoco .vegetariano > .desc').each((_, element) => {
      menu.vegetarian = $(element).text()
    })

    if (menu.main.length === 0) {
      throw new Error('Menu not found.')
    }

    return {
      menu,
    }
  }
}
