import { request } from './base.js'

export async function search() {
  const result = await request('brand')
  return result
}