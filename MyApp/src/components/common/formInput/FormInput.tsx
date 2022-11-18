import React,{useMemo} from 'react';
import { View, TextInput, Pressable} from 'react-native';
import { Entypo, MEDIUM_SMALL_VERTICAL_SPACE } from 'shared/utils/data';
import createStyles from "./FormInput.style";
import { useTheme } from "@react-navigation/native";

type Props = {
  value:any,
  onChangeText: any,
  errorStyle?: any,
  setShowPassword?: any,
  type: any,
  ShowPassword?: any,
};
const FormInput = ({
  value,
  onChangeText,
  errorStyle = {},
  setShowPassword,
  type,
  ShowPassword,
}:Props) => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  return (
    <View style={{...styles.InputContainer, ...errorStyle}}>
      <View>
        {type === 'email' ? (
          <Entypo
            color={'black'}
            name="mail"
            size={MEDIUM_SMALL_VERTICAL_SPACE}
          />
        ) : (
            <Entypo
            color={'black'}
            name="key"
            size={MEDIUM_SMALL_VERTICAL_SPACE}
          />
        )}
      </View>
      <TextInput
        keyboardType={type === 'email' ? 'email-address' : 'default'}
        secureTextEntry={ShowPassword ? false : true}
        style={styles.InputText}
        returnKeyType={type === 'email' ? 'next' : 'go'}
        placeholder={type === 'email' ?'John@gmail.com':'********'}
        value={value}
        onChangeText={onChangeText}
       
      />
      {type === 'password' && (
        <View style={{alignItems: 'flex-end'}}>
          <Pressable
            android_ripple={{color: '#ccc'}}
            
            onPress={() => setShowPassword(!ShowPassword)}>
            {ShowPassword ? (
              <Entypo
                color={'black'}
                name="eye"
                size={MEDIUM_SMALL_VERTICAL_SPACE}
              />
            ) : (
                <Entypo
                color={'black'}
                name="eye-with-line"
                size={MEDIUM_SMALL_VERTICAL_SPACE}
              />
            )}
          </Pressable>
        </View>
      )}
    </View>
  );
};

export default FormInput;
