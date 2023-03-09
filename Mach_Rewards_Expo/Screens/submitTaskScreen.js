import {Button, Pressable, ScrollView, Text, View, StlyeSheet, Picker} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DropDownPicker from "react-native-dropdown-picker";
import {useForm, Controller} from "react-hook-form";
import styles from "../Styles/styles";
import submitTaskScreenStyles from "../Styles/submitTaskScreenStyles.js";
import {Ionicons} from "@expo/vector-icons";
import * as React from "react";
import { TextInput } from "react-native-web";
import homeScreenStyles from "../Styles/homeScreenStyles";

function SubmitTaskScreen({ navigation }) {
    const [text, onChangeText] = React.useState('');
    const [number, onChangeNumber] = React.useState('');
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState(null);
    const [tasks, setTasks] = React.useState([
        {label: 'Order Team Apparel', value: 'teamApparel'},
        {label: 'Order Team Bundle', value: 'teamBundle'},
        {label: 'Write a Blog', value: 'blog'},
        {label: 'Place Mach in Zwift', value: 'zwift'},
        {label: 'Birthday', value: 'birthday'},
        {label: 'Place Mach in IG', value: 'ig'},
        {label: 'Write a Review', value: 'review'},
        {label: 'Race in Mach Kit', value: 'raceMach'},
        {label: 'Send Photo', value: 'photo'},
        {label: 'Create Social Media Post', value: 'socialPost'},
        {label: 'Refer a Friend', value: 'referFriend'},
        {label: 'Sold Unit via Commission Code', value: 'commission'},
        {label: 'Mach Highlighted in Magazine', value: 'magazine'},
        {label: 'Create a UGC Video', value: 'ugcVideo'},
        {label: 'Custom Request', value: 'customRequest'},
    ]);
    const [loading, setLoading] = React.useState(false);
    const {handleSubmit, control} = useForm();
    const onSubmit = (data) => {
        console.log(data, "data");
    };

    return (
        <ScrollView>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#ffffff' }}>
                <View style={submitTaskScreenStyles.headerBox}>
                    <Text style={submitTaskScreenStyles.headerText}>Submit Task Completion</Text>
                </View>
                <Controller
                    name="tasks"
                    defaultValue=""
                    control={control}
                    render={({field: {onChange, value}}) => (
                        <View style={submitTaskScreenStyles.dropDownTask}>
                            <DropDownPicker
                                style={submitTaskScreenStyles.selectTask}
                                open={open}
                                value={value}
                                items={tasks}
                                setOpen={setOpen}
                                setValue={setValue}
                                setItems={setTasks}
                                placeholder="Select Task"
                                placeholderStyle={submitTaskScreenStyles.taskText}
                                loading={loading}
                                activityIndicatorColor='#000000'
                                searchable={true}
                                searchPlaceholder="Search task here..."
                                onChangeItem={item => setState({
                                    task: item.value
                                })}
                                onChangeValue={onChange}
                                zIndex={1000}
                                zIndexInverse={3000}
                            />
                        </View>
                    )}
                />
                <TextInput
                    style={submitTaskScreenStyles.insertText}
                    onChangeText={onChangeText}
                    value={text}
                    placeholder="Insert Link or Text..."
                />
                <View style={submitTaskScreenStyles.uploadImageBox}>
                    <Pressable style={submitTaskScreenStyles.uploadImage} onPress={() => navigation.navigate("Home")}>
                        <Ionicons
                            name={'ios-add'}
                            size={50}
                            style={submitTaskScreenStyles.plus}
                        />
                        <Text style={submitTaskScreenStyles.uploadImage}>Upload Picture</Text>
                    </Pressable>
                </View>
                <View style={submitTaskScreenStyles.submitButtonBox}>
                    <Pressable style={submitTaskScreenStyles.submitButton} onPress={() => navigation.navigate("Home")}>
                        <Text style={submitTaskScreenStyles.submitButtonText}>Submit</Text>
                    </Pressable>
                </View>
            </View>
        </ScrollView>
    );
}

export default SubmitTaskScreen;