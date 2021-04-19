import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {MainScreen} from './screens'
import RNBootSplash from "react-native-bootsplash";


const BottomTabNav = createBottomTabNavigator();
const StackNav = createStackNavigator();


const Navigator =(props)=> {
    React.useEffect(async () => {
      await RNBootSplash.hide({ fade: true });
    }, []);
      return (
        <NavigationContainer >
          <BottomTabNav.Navigator tabBar={(info) => {console.log('tabbar info',info)}}>
            <BottomTabNav.Screen name="MainScreen" component={MainScreen}  />
          </BottomTabNav.Navigator>
        </NavigationContainer>
      )
}
const mapDispatchToProps = dispatch => {
  return bindActionCreators({}, dispatch)
}

const mapStateToProps = state => {
  return {
      user: state.user
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Navigator);
