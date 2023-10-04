import axios from 'axios'

export const instance = axios.create({
  baseURL:
    'https://www.ufc.br/restaurante/cardapio/1-restaurante-universitario-de-fortaleza',
})
