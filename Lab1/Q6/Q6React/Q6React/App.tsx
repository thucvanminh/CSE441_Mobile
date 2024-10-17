

import React from 'react';
import Employee from './employee';
import EmployeeDetail from './employee_detail';
import { View } from 'react-native';
import DemoState from './demostate';

function App(): React.JSX.Element {
  return (
    <View>
      <Employee name='Nguyen van AZX' age='18' ocupation='IT' />
      <Employee name='Tran Thi B' age='20' ocupation='ACC' />
      <EmployeeDetail />
      <DemoState />
    </View>
  );
}



export default App;
