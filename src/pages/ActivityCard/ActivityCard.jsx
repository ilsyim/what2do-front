import { useState,useEffect } from 'react'
import { getSoloActivity, getDuoActivity, getGroupActivity } from '../../services/apiService'


const ActivityCard = () => {

  const [ActivityCard,setActivityCard] = useState()
  const [DuoActivityCard,setDuoActivityCard] = useState()
  const [GroupActivityCard,setGroupActivityCard] = useState()
  
  useEffect(() => {
    const fetchActivity = async () => {
      const data = await getSoloActivity()
      setActivityCard(data)
    }
    fetchActivity()
  }, [])
  console.log('activity', ActivityCard?.key)


  useEffect(() => {
    const fetchDuoActivity = async () => {
      const data = await getDuoActivity()
      setDuoActivityCard(data)
    }
    fetchDuoActivity()
  }, [])
  console.log('activity', ActivityCard?.key)

  useEffect(() => {
    const fetchGroupActivity = async () => {
      const data = await getGroupActivity()
      setGroupActivityCard(data)
    }
    fetchGroupActivity()
  }, [])
  console.log('activity', ActivityCard?.key)

  

  return(

  <>
  <div>
    <p> Activity Cards will appear here </p>
    <p>{ActivityCard?.activity}</p>
    <p>{DuoActivityCard?.activity}</p>
    <p>{GroupActivityCard?.activity}</p>
  </div>
  </>
  )
}


export default ActivityCard