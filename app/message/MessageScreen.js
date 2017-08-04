import React from 'react'
import Swiper from 'react-native-swiper'
import MessageID from "./MessageID"
import MessageItem from "./MessageItem"

const MessageScreen = (props) => {
     
    return (

    	<Swiper
            loop={false}
            showsPagination={false}
            index={0}>
            	<MessageID />
            	<MessageItem />
        </Swiper>

    )
}


export default MessageScreen