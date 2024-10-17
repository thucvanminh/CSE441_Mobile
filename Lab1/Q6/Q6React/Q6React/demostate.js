import { useState } from "react";
import { View,Text,Button } from "react-native";

export default function DemoState()
{
    const [value,setValue] = useState(0);
    var num = 0;
    function setNumber()
    {
       // num=num+1;
       setValue(value+1);
        console.log(value+1);
    }
    return (
        <View>
            <Text style={{fontSize:30, color:'red',}}>Value:{value} </Text>
            <Button title="Click" onPress={()=>setNumber()}></Button>

        </View>

    );

}