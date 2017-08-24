import React from 'react'
import { connect } from 'react-redux';
import Navigator from './Navigator'

const Tabs = ({ dispatch, nav }) =>
    <Navigator screenProps={nav}/>


const mapStateToProps = ({ nav }) => ({
    nav: nav.routes[1].params
});

export default connect(mapStateToProps)(Tabs)
