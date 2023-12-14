const BASE_URL = "http://www.boredapi.com/api/activity/"



async function getSoloActivity() {
  const res = await fetch(`${BASE_URL}?participants=1`)
  const data = await res.json()
  console.log(data)
  return data
}

async function getDuoActivity() {
  const res = await fetch(`${BASE_URL}?participants=2`)
  const data = await res.json()
  console.log(data)
  return data
}

async function getGroupActivity() {
  const res = await fetch(`${BASE_URL}?participants=4`)
  const data = await res.json()
  console.log(data)
  return data
}


export {
  getSoloActivity,
  getDuoActivity,
  getGroupActivity
}
