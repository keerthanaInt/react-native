import React from 'react';
import { Text, Pressable, ActivityIndicator} from 'react-native';
type Props = {
  customStyle:any
  title:string
  titleStyle:any
  onPress:any
  isLoading:boolean,
  disabled:boolean,
};
 const Button = ({
  customStyle,
  title,
  titleStyle,
  onPress,
  isLoading = false,
  disabled = false,
}:Props) => {
  return (
    <Pressable
      disabled={disabled}
      onPress={onPress}
      style={[
        {...customStyle, justifyContent: 'center', alignItems: 'center'},
      ]}>
      {!isLoading && <Text style={{...titleStyle}}>{title}</Text>}
      {isLoading && <ActivityIndicator size={'small'} color="white" />}
    </Pressable>
  );
};


export default Button;
