import axios from 'axios'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const Enroll = () => {

    const [viewData, setViewData] = useState({})
    const {id} = useParams()

    useEffect(() => {
        axios.get(`http://localhost:4000/view2/${id}`).then(response => {
            setViewData(response.data)
            console.log(response.data)
        })
    }, [])
  return (
    <div>
    hello
    <Typography variant="h6" component="div">
                                {viewData.notes}
                        
                            </Typography>
                            
                                   
    </div>
  )
}

export default Enroll