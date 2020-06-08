/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import RNBootSplash from 'react-native-bootsplash';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';

import styles from './styles';
import AppIntro from '../component/AppIntro';
import Login from '../component/Login';
import Signup from '../component/Signup';
import Deposit from '../component/Deposit';
import Member from '../component/Member';
import Together from '../component/Together';
import History from '../component/History';

const AuthStack = createStackNavigator();
const Tab = createBottomTabNavigator();
const DepositStack = createStackNavigator();
const MemberStack = createStackNavigator();
const TogetherStack = createStackNavigator();
const HistoryStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const LoginStack = () => {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="AppIntro" component={AppIntro} />
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="Signup" component={Signup} />
    </AuthStack.Navigator>
  );
}

const TabBar = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Deposit" component={DepositStackScreen} />
      <Tab.Screen name="Member" component={MemberStackScreen} />
      <Tab.Screen name="Together" component={TogetherStackScreen} />
      <Tab.Screen name="History" component={HistoryStackScreen} />
    </Tab.Navigator>
  );
}

const DepositStackScreen = () => {
  return(
    <DepositStack.Navigator screenOptions={{ headerShown: false }}>
      <DepositStack.Screen name="Deposit" component={Deposit} />
    </DepositStack.Navigator>
  );
}

const MemberStackScreen = () => {
  return(
    <MemberStack.Navigator screenOptions={{ headerShown: false }}>
      <MemberStack.Screen name="Member" component={Member} />
    </MemberStack.Navigator>
  );
}

const TogetherStackScreen = () => {
  return(
    <TogetherStack.Navigator screenOptions={{ headerShown: false }}>
      <TogetherStack.Screen name="Together" component={Together} />
    </TogetherStack.Navigator>
  );
}

const HistoryStackScreen = () => {
  return(
    <HistoryStack.Navigator screenOptions={{ headerShown: false }}>
      <HistoryStack.Screen name="History" component={History} />
    </HistoryStack.Navigator>
  );
}

export default class App extends React.Component {
  componentDidMount() {
    RNBootSplash.hide({duration: 1000});
}
  
  render() {
    // if (condition) {
      
    // }
    return (
      <NavigationContainer>
        {/* isSignedIn == true --> Home of Tab bar 
          con chua vo trang AppIntro*/}
        
        <Drawer.Navigator>
          <Drawer.Screen name="Home" component={TabBar} />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
};
