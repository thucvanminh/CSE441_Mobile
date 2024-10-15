

import React from 'react';
import data from './Data';
import Square from './Square';
import styles from './style';
import { ScrollView } from 'react-native';
import style from './style';

function App(): React.JSX.Element {
  return(
    <ScrollView style = {styles.container}>
      {data.map((item , index)=>(
        <Square key = {item} text={`Square ${index+1}`}></Square>
      ))}

    </ScrollView>

  );
}



export default App;
