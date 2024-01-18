import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import PreLogin from './pages/log/prelogin';
import Login from './pages/log/login';
import Accueil from './pages/accueil';
import Profil from './pages/profil';
import Ex1 from './pages/exercices/exercice_1';
import Ex2 from './pages/exercices/exercice_2';
import Ex3 from './pages/exercices/exercice_3';

const App = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="PRELOGIN">
          <Stack.Screen name="PRELOGIN" component={PreLogin} />
          <Stack.Screen name="LOGIN" component={Login} />
          <Stack.Screen name="ACCUEIL" component={Accueil} />
          <Stack.Screen name="PROFIL" component={Profil} />
          <Stack.Screen name="EXE1" component={Ex1} />
          <Stack.Screen name="EXE2" component={Ex2} />
          <Stack.Screen name="EXE3" component={Ex3} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;
