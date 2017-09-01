import React, { Component } from 'react'
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import actions from './actions'
import style from './styles'
import navconstants from '../constants'
import { List, ListItem } from "react-native-elements"

class Feeds extends Component {

    componentDidMount(){
        this.props.load(this.props.feeds)
    }

    render() {
      const { navigateTo } = this.props;
      const origin = 'home';

    return (
        <View style={styles.container}>
            <TouchableOpacity  underlayColor="#ccc"  onPress = { () => navigateTo({route: navconstants.GOTO_FEED, params:{origin} }) } >
                <Text > goto Feed</Text>
            </TouchableOpacity>
            <List
                containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }}
            >
                <FlatList
                    data={this.props.feeds.data}
                    keyExtractor={item => item._id}
                    removeClippedSubviews={false}
                    renderItem={({ item }) => (
                        <ListItem
                            roundAvatar
                            title={`${item.category} ${item.name}`}
                            subtitle={item.from}
                            // avatar={{ uri: item.picture.thumbnail }}
                            containerStyle={{ borderBottomWidth: 0 }}
                        />
                    )}
                />
            </List>
        </View>

      )
    }


}


const styles = StyleSheet.create(style)


const stateToProps = ({ tabs }) => ({
    feeds: tabs.home.feeds,
});

const dispatchToProps = (dispatch) => {
    return {
        navigateTo: (params) => dispatch(actions.navigateTo(params)),
        load: (params) => dispatch(actions.load(params)),
    }
};

export default connect(stateToProps,dispatchToProps)(Feeds)
