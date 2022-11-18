import React, { useState, useMemo } from 'react';
import { View, Text } from 'react-native';
import LottieView from 'lottie-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Formik } from 'formik';
import { useTheme } from "@react-navigation/native";
import createStyles from "../login/LoginScreen.style";
import { Button, FormContainer, FormInput } from '../../../components';
import { BIT_SMALL_VERTICAL_SPACE, MEDIUM_VERTICAL_SPACE, REGULAR_VERTICAL_SPACE, SMALL, VERY_SMALL_VERTICAL_SPACE } from 'shared/utils/data';
import { signUpSchema } from 'shared/methods/schema';
import AuthHeader from 'components/auth/AuthHeader';
interface SignUpScreenProps { }
const SignUpScreen: React.FC<SignUpScreenProps> = () => {
    const theme = useTheme();
    const styles = useMemo(() => createStyles(theme), [theme]);

    const [ShowPassword, setShowPassword] = useState(false);

    const back = () => {
        console.log("back")
    };

    return (
        <View style={styles.container}>
            <AuthHeader lottieFile={require('../../../assets/animation/loading2.json')} />
            <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                <Formik
                    initialValues={{ name: '', mobile: '', email: '', password: '' }}
                    validationSchema={signUpSchema}
                    onSubmit={async values => {
                        await AsyncStorage.setItem('login', 'true');

                    }}>
                    {({ errors, handleSubmit, handleChange, values }) => {
                        return (
                            <FormContainer isSignUp={true}>
                                <View style={{ height: VERY_SMALL_VERTICAL_SPACE }} />
                                <Text style={styles.title}>Create Account!</Text>
                                <Text style={styles.Info}>
                                    Please enter your Details to get access
                                </Text>
                                <View style={{ height: VERY_SMALL_VERTICAL_SPACE }} />
                                <FormInput
                                    value={values.name}
                                    onChangeText={handleChange('name')}
                                    type={'name'} setShowPassword={undefined} ShowPassword={undefined} />
                                <View style={{ height: REGULAR_VERTICAL_SPACE }} />

                                <FormInput
                                    value={values.mobile}
                                    onChangeText={handleChange('mobile')}
                                    type={'mobile'} setShowPassword={undefined} ShowPassword={undefined} />
                                <View style={{ height: REGULAR_VERTICAL_SPACE }} />
                                <FormInput
                                    value={values.email}
                                    onChangeText={handleChange('email')}
                                    type={'email'} setShowPassword={undefined} ShowPassword={undefined} />
                                <View style={{ height: REGULAR_VERTICAL_SPACE }} />
                                <FormInput
                                    value={values.password}
                                    onChangeText={handleChange('password')}
                                    type={'password'}
                                    ShowPassword={ShowPassword}
                                    setShowPassword={setShowPassword}
                                />
                                {errors.name || errors.mobile || errors.email || errors.password ? (
                                    <View>
                                        <View style={{ height: VERY_SMALL_VERTICAL_SPACE }} />
                                        <Text style={styles.errorText}>
                                            {errors.name ? errors.name
                                                : errors.mobile ? errors.mobile
                                                    : errors?.email ? errors.email
                                                        : errors.password}
                                        </Text>
                                    </View>
                                ) : (
                                    <View style={{ height: VERY_SMALL_VERTICAL_SPACE }} />
                                )}

                                <Button
                                    title={'SIGNUP'}
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
                                    title={'BACK'}
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
                                {(errors.name || errors.mobile || errors.email || errors.password) && (
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


export default SignUpScreen;
