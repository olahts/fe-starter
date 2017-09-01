import React from 'react'
import { connect } from 'react-redux'
import { addNavigationHelpers } from 'react-navigation'
import Navigator from './Navigator'
import constants from './constants'

const Home = ({ dispatch, nav }) => {
    return <Navigator navigation={addNavigationHelpers({ dispatch, state: nav })} />;
};


const mapStateToProps = ({ tabs }) => ({
    nav: tabs.home.nav,
});

export default connect(mapStateToProps)(Home)