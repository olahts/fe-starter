import React from 'react'
import Swiper from 'react-native-swiper'
import RequestID from "./RequestID"
import RequestItem from "./RequestItem"

const RequestScreen = (props) => {
     
    return (

    	<Swiper
            loop={false}
            showsPagination={false}
            index={0}>
            	<RequestID />
            	<RequestItem />
        </Swiper>

    )
}


export default RequestScreen