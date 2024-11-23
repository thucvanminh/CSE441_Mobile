// import React from 'react';
// import { Text, View } from 'react-native';
// import Navigation from "./component/Navigation";
// import { AuthProvider } from './context/AuthContext';
// import { MenuProvider } from 'react-native-popup-menu';

// const App = () => {
//   return (
//     <MenuProvider>
//       <AuthProvider>
//         <Navigation />
//       </AuthProvider>
//     </MenuProvider>
//   );
// }
// export default App;


import React from 'react';
import { MenuProvider } from 'react-native-popup-menu';
import { AuthProvider } from './context/AuthContext';
import Navigation from "./component/Navigation";

const App = () => {
  return (
    <MenuProvider>
      <AuthProvider>
        {/* Only one NavigationContainer should be present in Navigation.js */}
        <Navigation />
      </AuthProvider>
    </MenuProvider>
  );
}

export default App;