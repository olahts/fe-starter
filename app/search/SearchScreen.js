import React from 'react'
import Swiper from 'react-native-swiper'
import SearchID from "./SearchID"
import SearchItem from "./SearchItem"

const SearchScreen = (props) => {
     
    return (

    	<Swiper
            loop={false}
            showsPagination={false}
            index={0}>
            	<SearchID />
            	<SearchItem />
        </Swiper>

    )
}


export default SearchScreen