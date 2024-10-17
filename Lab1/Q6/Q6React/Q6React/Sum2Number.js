import { Alert } from "react-native";

export function Sum(num1, num2)
{
    return num1 + num2;
}

export default function toString(test)
{
    console.log(test);
    Alert.alert(test);
}
