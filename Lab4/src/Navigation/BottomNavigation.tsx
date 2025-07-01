import {View} from 'react-native';
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import ContactScreen from '../screens/ContactScreen';
import FavoriteScreen from '../screens/FavoriteScreen';
import TabIcon from '../components/TabIcon';

const MyTabs = createBottomTabNavigator();

export default function BottomNavigation() {
  return (
    <MyTabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarItemStyle: {
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        },
      }}
      // eslint-disable-next-line react/no-unstable-nested-components
      tabBar={props => <MyTabBar {...props} />}>
      <MyTabs.Screen name="Contacts" component={ContactScreen} />
      <MyTabs.Screen name="Favorite" component={FavoriteScreen} />
    </MyTabs.Navigator>
  );
}

function MyTabBar({state, navigation}: BottomTabBarProps) {
  return (
    <View style={{flexDirection: 'row'}}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TabIcon
            isFocused={isFocused}
            onPress={onPress}
            onLongPress={onLongPress}
            routeName={route.name}
            key={route.key}
          />
        );
      })}
    </View>
  );
}
