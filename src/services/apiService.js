const BASE_URL = "http://www.boredapi.com/api/activity/"



async function getActivity() {
  const res = await fetch(BASE_URL)
  const data = await res.json()
  console.log(data)
  return data
}


export {
  getActivity
}
