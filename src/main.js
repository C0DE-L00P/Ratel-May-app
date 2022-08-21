import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useEffect, useRef } from 'react'
import { StyleSheet,  TouchableOpacity } from 'react-native'
import * as Animatable from 'react-native-animatable';
import Login from './login';
import Splashy from './splashy';
// import Icon from '../utils/Icons';
import FAIcon from 'react-native-vector-icons/FontAwesome' 
import Events from '../components/events';
import Sessions from './sessions';
import Programs from '../components/ourpragrams';

//TODO: attach it with state to change icons when login
const TabArr = [
  { route: 'Home', label: 'Home', activeIcon: 'home', inActiveIcon: 'home', component: Programs },
  { route: 'Events', label: 'Events',  activeIcon: 'calendar', inActiveIcon: 'calendar-o', component: Events },
  { route: 'Sessions', label: 'Sessions',  activeIcon: 'users', inActiveIcon: 'users', component: Sessions },
  // { route: 'Account', label: 'Account',  activeIcon: 'user-circle', inActiveIcon: 'user-circle-o', component: Login },
];

const Tab = createBottomTabNavigator();

const TabButton = (props) => {
  const { item, onPress, accessibilityState } = props;
  const focused = accessibilityState.selected;
  const viewRef = useRef(null);

  useEffect(() => {
    if (focused) {
      viewRef.current.animate({0: {scale: 1.4}, 1: {scale: 2}});
    } else {
      viewRef.current.animate({0: {scale: 2}, 1: {scale: 1.4}});
    }
  }, [focused])

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={styles.container}>
      <Animatable.View
        ref={viewRef}
        duration={300}
        style={styles.container}>
        <FAIcon name={focused ? item.activeIcon : item.inActiveIcon} color={focused ? "#235f5e" : "grey" } />
      </Animatable.View>
    </TouchableOpacity>
  )
}

export default function Main() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: true,
        tabBarStyle: {
            backrgoundColor: 'red',
          height: 60,
          position: 'absolute',
          bottom: 16,
          right: 16,
          left: 16,
          borderRadius: 16
        }
      }}
    >
      {TabArr.map((item, index) => {
        return (
          <Tab.Screen key={index} name={item.route} component={item.component}
            options={{
              tabBarShowLabel: false,
              tabBarButton: (props) => <TabButton {...props} item={item} />
            }}
          />
        )
      })}
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})