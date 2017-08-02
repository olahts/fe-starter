import React from 'react'
import Swiper from 'react-native-swiper'
import HomeDetails from "./HomeDetails"
import HomeAttributes from "./HomeAttributes"

const HomeScreen = (props) => {
     
    return (

    	<Swiper
            loop={false}
            showsPagination={false}
            index={0}>
            	<HomeDetails />
            	<HomeAttributes />
        </Swiper>

    )
}


export default HomeScreen