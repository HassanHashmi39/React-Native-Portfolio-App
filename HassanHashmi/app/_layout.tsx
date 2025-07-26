import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
export default function Layout() {
 return (
 <Tabs
 screenOptions={({ route }) => ({
 tabBarIcon: ({ color, size }) => {
 let iconName;
 if (route.name === 'Home') iconName = 'home' ;
 else if (route.name === 'Contact') iconName = 'phone-portrait'; 
 else if (route.name === 'About') iconName = 'calendar';
 else if (route.name === 'Skill') iconName = 'search';
 else if (route.name === 'Portfolio') iconName = 'briefcase';
 else if (route.name === 'Article') iconName = 'newspaper';
 return <Ionicons name ={iconName} size={size} color={color} 
/>;
 },
 tabBarActiveTintColor: '#c49600ff',
 tabBarInactiveTintColor: 'gray',
 })}
 >
  <Tabs.Screen name="Home" options={{headerTitleAlign:'center', headerTitle:'Welcome to Hassan Hashmi' }} />
  <Tabs.Screen name="Contact" options={{headerTitleAlign:'center'}} />
  <Tabs.Screen name="About" options={{headerTitleAlign:'center'}}/>
  <Tabs.Screen name="Skill" options={{headerTitleAlign:'center'}}/>
  <Tabs.Screen name="Projects" options={{headerTitleAlign:'center'}}/>
  <Tabs.Screen name="Article" options={{headerTitleAlign:'center'}}/>
  <Tabs.Screen name='Portfolio' options={{ headerShown: false }} />
  

 </Tabs>
 );
}