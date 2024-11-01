import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ToastAndroid } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const InputBox = ({label, onChangeText}) => {
    return (
        <View>
            <Text>{label}</Text>
            <TextInput style={{borderWidth: 1}} onChangeText={onChangeText}/>
        </View>
    );
};

const App = () => {
    const [type, setUserType] = useState('');
    const [name, setName] = useState('');
    const [pw, setPw] = useState('');

    {/*const Login = () => {
        if (userType && user) {
            ToastAndroid.show(`Welcome ${userType} ${user}`, ToastAndroid.SHORT);
        } else {
            ToastAndroid.show("Please select a user type and enter your username.", ToastAndroid.SHORT);
        }
    }; */}
    return (
        <View style={{ padding: 20, paddingTop: 50 }}>
            {/* 1B */}
            <Text>User Type:</Text>
            <RNPickerSelect
                onValueChange={(value) => setUserType(value)}
                items={[
                    { label: 'Admin', value: 'Admin' },
                    { label: 'Guest', value: 'Guest' },
                    { label: 'Other', value: 'Other' }
                ]}
            />
            {/*<Text>Username:</Text>
            <TextInput
                style={{borderWidth: 1}}
                value={user}
                onChangeText={(text) => setUser(text)}
            />*/}
            {/* 1A */}
            {/*<Text>Password:</Text>
            <TextInput
                style={{borderWidth: 1}}
                value={pw}
                onChangeText={(text) => setPw(text)}
                secureTextEntry
            />*/}
            {/* 1CD */}
            {/*<Button
                title="LOG IN"
                onPress={() => Alert.alert("Welcome!")}>
            </Button>*/}
            {/* 1E */}
            {/*<TouchableOpacity
                onPress={() => Alert.alert("Welcome!")}>
                <Text>Submit Answers</Text>
            </TouchableOpacity>*/}
            {/* 1F */}
            {/*<TouchableOpacity onPress={Login}>
                <Text>LOG IN</Text>
            </TouchableOpacity>
        </View> */}

        <InputBox label="User Name:" onChangeText={(text) => setName(text)} />
        <InputBox label="Password:" onChangeText={(text) => setPw(text)} />
            <TouchableOpacity onPress={()=>
                ToastAndroid.show('Welcome' + type + ' ' + name , ToastAndroid.SHORT)}>
                <Text>LOG IN</Text>
            </TouchableOpacity>
            <Text>{pw}</Text>
        </View>
    );
};

export default App;
