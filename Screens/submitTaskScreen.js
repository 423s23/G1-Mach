import {Pressable, ScrollView, Text, View, StyleSheet, TextInput} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import submitTaskScreenStyles from "../Styles/submitTaskScreenStyles.js";
import {Ionicons} from "@expo/vector-icons";
import * as React from "react";
import {initializeApp} from "firebase/app";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import {doc, getDoc, addDoc, collection, Timestamp, getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBbEsCWfDuNABFe9E44lBS1OimB-pkBQeU",
    authDomain: "machrewardsapp.firebaseapp.com",
    databaseURL: "https://machrewardsapp-default-rtdb.firebaseio.com",
    projectId: "machrewardsapp",
    storageBucket: "machrewardsapp.appspot.com",
    messagingSenderId: "311919315732",
    appId: "1:311919315732:web:2004d4f538ef63f33b9001",
    measurementId: "G-WVTXPNPTNR"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
let userCred = null;
let userData = null;
signInWithEmailAndPassword(auth, "joey.knappenberger@gmail.com", "Joey2001*")
    .then(async (userCredential) => {
        // Signed in
        userCred = userCredential.user;
        const docRef = doc(db, "users", userCred.uid);
        console.log(docRef);
        const docSnap = await getDoc(docRef);
        console.log(docSnap);
        userData = docSnap.data();
        console.log(userData);
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    });

function SubmitTaskScreen({ navigation }) {
    const [text, onChangeText] = React.useState('');
    const [number, onChangeNumber] = React.useState('');
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState(null);
    const [tasks, setTasks] = React.useState([]);

    let CurrentPoints = userData.currentPoints;
    // AvailableTasks[bool teamBundle, int blog, Timestamp zwift, Timestamp ig, bool birthday]
    let AvailableTasks = userData.availableTasks;
    let CurrentTime = Timestamp.now().toDate();
    console.log(AvailableTasks);
    
    function checkTeamApparel() {
        // Checking teamApparel
        if (CurrentPoints == 0) {
            setTasks(tasks => ([...tasks, {label: 'Order Team Apparel', value: 'teamApparel'}]));
            return;
        }
        // Checking teamBundle
        if (AvailableTasks[0]) {
            setTasks(tasks => ([...tasks, {label: 'Order Team Bundle', value: 'teamBundle'}]));
        }
        // Checking blog
        if (AvailableTasks[1] > 0) {
            setTasks(tasks => ([...tasks, {label: 'Write a Blog', value: 'blog'}]));
        }
        // Checking zwift
        const zwiftTime = AvailableTasks[2].toDate();
        zwiftTime.setFullYear(zwiftTime.getFullYear() + 1);
        if (CurrentTime > zwiftTime) {
            setTasks(tasks => ([...tasks, {label: 'Place Mach in Zwift', value: 'zwift'}]));
        }
        // Checking ig
        const igTime = AvailableTasks[3].toDate();
        igTime.setFullYear(igTime.getFullYear() + 1);
        if (CurrentTime > igTime) {
            setTasks(tasks => ([...tasks, {label: 'Place Mach in IG', value: 'ig'}]));
        }
        // Checking birthday
        if (AvailableTasks[4]) {
            setTasks(tasks => ([...tasks, {label: 'Birthday', value: 'birthday'}]));
        }

        // Adding defaults
        setTasks(tasks => ([...tasks, {label: 'Write a Review', value: 'review'}]));
        setTasks(tasks => ([...tasks, {label: 'Race in Mach Kit', value: 'raceMach'}]));
        setTasks(tasks => ([...tasks, {label: 'Send Photo', value: 'photo'}]));
        setTasks(tasks => ([...tasks, {label: 'Create Social Media Post', value: 'socialPost'}]));
        setTasks(tasks => ([...tasks, {label: 'Refer a Friend', value: 'referFriend'}]));
        setTasks(tasks => ([...tasks, {label: 'Sold Unit via Commission Code', value: 'commission'}]));
        setTasks(tasks => ([...tasks, {label: 'Mach Highlighted in Magazine', value: 'magazine'}]));
        setTasks(tasks => ([...tasks, {label: 'Create a UGC Video', value: 'ugcVideo'}]));
        setTasks(tasks => ([...tasks, {label: 'Custom Request', value: 'customRequest'}]));
    }

    React.useEffect(() => {
        checkTeamApparel();
    }, []);

    ticket = {
        comment: '',
        type: '',
    };

    async function createNewTicket(com, type) {
        const docRef = doc(db, "users", userCred.uid);
        console.log(docRef);
        const docSnap = await getDoc(docRef);
        let id = docSnap.id;

        if (com != undefined && type != undefined) {
            const ticketRef = await addDoc(collection(db, "tickets"), {
                comment: com,
                name: type,
                time: Timestamp.now(),
                state: "pending",
                uid: id,
            });
            console.log("DOCUMENT ID: ", ticketRef.id);
            navigation.navigate("Home");
        }
    }

    return (
        <ScrollView style={{backgroundColor: '#ffffff'}}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#ffffff' }}>
                <View style={submitTaskScreenStyles.backButtonBox}>
                    <Pressable onPress={() => navigation.navigate("Home")}>
                        <Text style={submitTaskScreenStyles.backButton}>{'❮'}</Text>
                    </Pressable>
                </View>
                <View style={submitTaskScreenStyles.helpButtonBox}>
                    <Pressable style={submitTaskScreenStyles.helpButton} onPress={() => navigation.navigate("SubmitTaskHelp")}>
                        <Ionicons
                            name={'ios-help-circle-outline'}
                            size={40}
                            style={submitTaskScreenStyles.helpCircle}
                        />
                    </Pressable>
                </View>
                <View style={submitTaskScreenStyles.headerBox}>
                    <Text style={submitTaskScreenStyles.headerText}>Submit Task Completion</Text>
                </View>
                <View style={submitTaskScreenStyles.dropDownTask}>
                    <DropDownPicker
                        listMode="SCROLLVIEW"
                        style={submitTaskScreenStyles.selectTask}
                        open={open}
                        value={value}
                        items={tasks}
                        setOpen={setOpen}
                        setValue={setValue}
                        setItems={setTasks}
                        onChangeValue={(value) => this.type = value}
                        placeholder="Select Task"
                        placeholderStyle={submitTaskScreenStyles.taskText}
                        searchable={true}
                        searchPlaceholder="Search task here..."
                        zIndex={1000}
                    />
                </View>
                <TextInput
                    style={submitTaskScreenStyles.insertText}
                    value={this.comment}
                    onChangeText={(text) => this.comment = text}
                    placeholder="Insert Link or Text..."
                    multiline={true}
                    maxLength={500}
                />
                <View style={submitTaskScreenStyles.submitButtonBox}>
                    <Pressable style={submitTaskScreenStyles.submitButton} onPress={() => createNewTicket(this.comment, this.type)}>
                        <Text style={submitTaskScreenStyles.submitButtonText}>Submit</Text>
                    </Pressable>
                </View>
            </View>
        </ScrollView>
    );
}

export default SubmitTaskScreen;