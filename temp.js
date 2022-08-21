import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TouchableOpacity } from 'react-native'

const Tab = createBottomTabNavigator();


const TabArr = [
  {
    route: "Home",
    label: "Home",
    activeIcon: "home",
    inActiveIcon: "home",
    component: Login,
  },
];

const TabButton = (props) => {
  const { onPress } = props;

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={styles.container}
    >
      دي تظبطها حسب اللي عندك
      {props.title}
      <FAIcon name={item.inActiveIcon} color={"#235f5e"} />

    </TouchableOpacity>
  );
};

<Tab.Navigator>
  {TabArr.map((item, index) => {
    return (
      <Tab.Screen
        key={index}
        name={item.route}
        component={item.component}
        options={{
          tabBarButton: (props) => <TabButton {...props} item={item} />,
        }}
      />
    );
  })}
</Tab.Navigator>;
