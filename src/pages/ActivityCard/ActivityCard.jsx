import { useState,useEffect } from 'react'
import { getActivity } from '../../services/apiService'


const ActivityCard = () => {

  const [ActivityCard,setActivityCard] = useState()

  useEffect(() => {
    const fetchActivity = async () => {
      const data = await getActivity()
      setActivityCard(data)
    }
    fetchActivity()
  }, [])
  console.log('activity', ActivityCard?.key)

  return(

  <>
  <div>
    <p> Activity Cards will appear here </p>
    <p>{ActivityCard?.activity}</p>
  </div>
  </>
  )
}


export default ActivityCard