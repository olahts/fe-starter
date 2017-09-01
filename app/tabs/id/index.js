import React from 'react'
import { connect } from 'react-redux'
import { addNavigationHelpers } from 'react-navigation'
import Navigator from './Navigator'
import constants from './constants'

const Id = ({ dispatch, nav }) => {
    return <Navigator navigation={addNavigationHelpers({ dispatch, state: nav })} />;
};


const mapStateToProps = ({ tabs }) => ({
    nav: tabs.id.nav,
});

export default connect(mapStateToProps)(Id)