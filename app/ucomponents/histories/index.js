import React, { Component } from 'react'
import { StyleSheet, View, Text, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'
import actions from './actions'
import style from './styles'
import { List, ListItem } from "react-native-elements";

class Histories extends Component {

    componentDidMount(){
        console.log('this.props.screenProps.histories')
        console.log(this.props)
        // const user = 'Tele';
        // const { historiesactions, page }= this.props.screenProps.histories;
        // historiesactions({action: 'load', user, page})
    }

    render() {
      // const { navigateTo, navconstants, histories } = this.props.screenProps;

    return (

        <View style={styles.container}>
              {/*<TouchableOpacity  underlayColor="#ccc"  onPress = { () => navigateTo({route: navconstants.GO_BACK}) }>*/}
              <TouchableOpacity  underlayColor="#ccc"  >
                  <Text > pop back</Text>
              </TouchableOpacity>
              {/*<List*/}
                  {/*containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }}*/}
              {/*>*/}
                  {/*<FlatList*/}
                      {/*data={histories.data}*/}
                      {/*keyExtractor={item => item._id}*/}
                      {/*removeClippedSubviews={false}*/}
                      {/*ItemSeparatorComponent={this.renderSeparator}*/}
                      {/*ListFooterComponent={this.renderFooter}*/}
                      {/*renderItem={({ item }) => (*/}
                          {/*<ListItem*/}
                              {/*roundAvatar*/}
                              {/*title={`${item.name.first} ${item.name.last}`}*/}
                              {/*subtitle={item.email}*/}
                              {/*// avatar={{ uri: item.picture.thumbnail }}*/}
                              {/*containerStyle={{ borderBottomWidth: 0 }}*/}
                          {/*/>*/}
                      {/*)}*/}
                  {/*/>*/}
              {/*</List>*/}
          </View>

      )
    }


    renderSeparator = () => {
        return (
            <View
                style={{
                    height: 1,
                    width: "86%",
                    backgroundColor: "#CED0CE",
                    marginLeft: "14%"
                }}
            />
        );
    };

    renderFooter = () => {
        // if (!this.props.screenProps.histories.loading) return null;

        return (
            <View
                style={{
                    paddingVertical: 20,
                    borderTopWidth: 1,
                    borderColor: "#CED0CE"
                }}
            >
                <ActivityIndicator animating size="large" />
            </View>
        );
    };
}


const styles = StyleSheet.create(style)

export default Histories
