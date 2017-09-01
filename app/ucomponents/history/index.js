import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import actions from './actions'
import style from './styles'

class History extends Component {

    constructor(props) {
        super(props);

        this.state = {
            page: 1,
            seed: 1,
            loading: false,
            refreshing: false,
            data: [],
            error: null,
        };
    }

    componentDidMount(){
        this.props.load(this.state)
            .then( res => {
                const valid = Array.isArray(res);
                valid ? this.setState({
                    loading: false,
                    refreshing: false,
                    data: this.state.page === 1 ? res : [...this.state.data, ...res],
                }) : this.setState({
                    loading: false,
                    refreshing: false,
                    error: res
                });

            })
    }

    render() {
      const { navigateTo } = this.props;
      const { origin } = this.props.screenProps;

    return (

        <View style={styles.container}>
              <TouchableOpacity  underlayColor="#ccc"  onPress = { () => navigateTo({route: 'Back', params:{ origin }}) }>
                  <Text > pop back</Text>
              </TouchableOpacity>

          </View>

      )
    }

}


const styles = StyleSheet.create(style)

const stateToProps = ({ auth }) => {
    return {
        user: auth.login.user,
    }
};

const dispatchToProps = (dispatch) => {
    return {
        navigateTo: (params) => dispatch(actions.navigateTo(params)),
        load: (params) => dispatch(actions.load(params)),
    }
};

export default connect(stateToProps,dispatchToProps)(History)
