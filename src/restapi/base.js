const baseUrl = 'http://localhost:5000/api/'

export async function request(url, method = 'GET', body = {}) {
  try {
    const resp = await fetch(baseUrl + url, {
      method
    })
  } catch (e) {
    console.error(e.message)
  }
}