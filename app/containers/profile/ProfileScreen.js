import React from 'react'
import Swiper from 'react-native-swiper'
import ProfileDetails from "./ProfileDetails"
import ProfileAttributes from "./ProfileAttributes"

const ProfileScreen = (props) => {
     
    return (

    	<Swiper
            loop={false}
            showsPagination={false}
            index={0}>
            	<ProfileDetails />
            	<ProfileAttributes />
        </Swiper>

    )
}


export default ProfileScreen