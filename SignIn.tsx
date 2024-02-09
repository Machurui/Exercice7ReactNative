import React, { useState } from 'react';
import { SafeAreaView, Button, TextInput, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { signIn } from './Conn';
import { auth } from './Firebase';

const SignIn = () => {
    const navigation = useNavigation();
    const [email, onChangeEmail] = useState('');
    const [password, onChangePassword] = useState('');

    const handleSubmit = () => {
        if (email != "" && password != "") {
            signIn(email, password);

            const unsubscribe = auth.onAuthStateChanged((user) => {
                if (user) {
                    navigation.navigate('Weather' as never);
                }
            });
            return unsubscribe;
        } else {
            Alert.alert("Email and password are required");
        }
    }

    return (
        <SafeAreaView>
            <TextInput
                style={styles.input}
                onChangeText={onChangeEmail}
                value={email}
                placeholder="Email"
            />
            <TextInput
                style={styles.input}
                onChangeText={onChangePassword}
                value={password}
                placeholder="Password"
                secureTextEntry={true}
            />
            <Button
                onPress={handleSubmit}
                title="Submit"
                color="#000010"
                accessibilityLabel="Learn more about this purple button"
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    item: {
        padding: 10,
        fontSize: 18,
    },
});

export default SignIn;