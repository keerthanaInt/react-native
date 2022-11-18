import React, { useState, useMemo } from 'react';
import { View, Text } from 'react-native';
import { Formik } from 'formik';
import { useTheme } from "@react-navigation/native";
import { loginSchema } from 'shared/methods/schema';
import createStyles from "./LoginScreen.style";
import { Button, FormContainer, FormInput } from '../../../components'
import { BIT_SMALL_VERTICAL_SPACE, MEDIUM_VERTICAL_SPACE, REGULAR_VERTICAL_SPACE, SMALL, VERY_SMALL_VERTICAL_SPACE } from 'shared/utils/data';
import AuthHeader from 'components/auth/AuthHeader';

interface LoginScreenProps { }
const LoginScreen: React.FC<LoginScreenProps> = () => {
    const theme = useTheme();
    const styles = useMemo(() => createStyles(theme), [theme]);
    const [ShowPassword, setShowPassword] = useState(false);
    
    const back = () => {
        console.log("back")
    };

    
    return (
        <View style={styles.container}>
           
            <AuthHeader lottieFile={ require('../../../assets/animation/loading1.json') }/>
            <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                <Formik
                    initialValues={{ email: '', password: '' }}
                    validationSchema={loginSchema}
                    onSubmit={async values => {
                        console.log("submit")
                    }}>
                    {({ errors, handleSubmit, handleChange, values }) => {
                        return (
                            <FormContainer>
                                <View style={{ height: VERY_SMALL_VERTICAL_SPACE }} />
                                <Text style={styles.title}>Hi,</Text>
                                <Text style={styles.title}>Welcome Back!</Text>
                                <Text style={styles.Info}>
                                    Please enter your Email ID to get access
                                </Text>
                                <View style={{ height: VERY_SMALL_VERTICAL_SPACE }} />
                                <FormInput
                                    value={values.email}
                                    onChangeText={handleChange('email')}
                                    type={'email'} />
                                <View style={{ height: REGULAR_VERTICAL_SPACE }} />
                                <FormInput
                                    value={values.password}
                                    onChangeText={handleChange('password')}
                                    type={'password'}
                                    ShowPassword={ShowPassword}
                                    setShowPassword={setShowPassword} />
                                {errors.email || errors.password ? (
                                    <View style={{ alignItems: 'center' }}>
                                        <View style={{ height: VERY_SMALL_VERTICAL_SPACE }} />
                                        <Text style={styles.errorText}>
                                            {errors?.email ? errors.email : errors.password}
                                        </Text>
                                    </View>
                                ) : (
                                    <View style={{ height: VERY_SMALL_VERTICAL_SPACE }} />
                                )}
                                <Button
                                    title={'LOGIN'}
                                    customStyle={{
                                        height: 65,
                                        backgroundColor: 'white',
                                        borderRadius: 50,
                                    }}

                                    titleStyle={{
                                        color: 'black',
                                        fontSize: SMALL,
                                        fontWeight: 'bold',
                                    }}
                                    onPress={handleSubmit} isLoading={false} disabled={false} />
                                <View style={{ height: BIT_SMALL_VERTICAL_SPACE }} />
                                <Button
                                    title={'SIGNUP'}
                                    customStyle={{
                                        height: 65,
                                        borderWidth: 2,
                                        borderColor: 'white',
                                        borderRadius: 50,
                                    }}

                                    titleStyle={{
                                        color: 'black',
                                        fontSize: SMALL,
                                        fontWeight: 'bold',
                                    }}
                                    onPress={back} isLoading={false} disabled={false} />
                                {(errors.email || errors.password) && (
                                    <View style={{ height: MEDIUM_VERTICAL_SPACE }} />
                                )}
                            </FormContainer>
                        );
                    }}
                </Formik>
            </View>
        </View>
    );
};


export default LoginScreen;
