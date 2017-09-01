import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import actions from './actions'
import style from './styles'
import navconstants from '../constants'


class Feed extends Component {

    componentDidMount(){
        // this.props.load(this.state)
    }

    render() {
      const { navigateTo } = this.props;
      const { origin } = this.props.screenProps;

        return (

            <View style={styles.container}>
                  <TouchableOpacity  underlayColor="#ccc"  onPress = { () => navigateTo({route: navconstants.GO_BACK, params:{ origin }}) }>
                      <Text > pop back</Text>
                  </TouchableOpacity>
                <TouchableOpacity  underlayColor="#ccc"  onPress = { () => navigateTo({route: navconstants.GOTO_HISTORIES, params:{ origin }}) }>
                    <Text > push history</Text>
                </TouchableOpacity>
                <Text>Kilode</Text>
              </View>

        )
    }

}


const styles = StyleSheet.create(style)

const stateToProps = ({ tabs }) => ({
    feed: tabs.home.feed,
});

const dispatchToProps = (dispatch) => {
    return {
        navigateTo: (params) => dispatch(actions.navigateTo(params)),
        load: (params) => dispatch(actions.load(params)),
    }
};


export default connect(stateToProps,dispatchToProps)(Feed)
