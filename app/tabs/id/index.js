import React from 'react'
import { connect } from 'react-redux'
import { addNavigationHelpers } from 'react-navigation'
import Navigator from './Navigator'

const origin = 'id';

const Id = ({ dispatch, nav, user }) => {
    return <Navigator navigation={addNavigationHelpers({ dispatch, state: nav })} screenProps={{origin, user}}/>;
};


const mapStateToProps = ({ tabs, ...state }) => ({
    nav: tabs.id.nav,
    user: state.nav.routes[1].params
});

export default connect(mapStateToProps)(Id)