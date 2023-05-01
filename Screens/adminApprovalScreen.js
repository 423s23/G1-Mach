import {Image, Pressable, Text, View, TextInput} from "react-native";
import approvalStyles from "../Styles/approvalStyles";
import commonStyles from "../Styles/commonStyles";
import {Ionicons} from "@expo/vector-icons";
import * as React from "react";
import {initializeApp} from "firebase/app";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import {doc, getDoc, getFirestore, collection, getDocs, updateDoc, Timestamp} from "firebase/firestore";
import refreshControl from "react-native-web/dist/exports/RefreshControl";
import {useState} from "react";
import leaderboardStyles from "../Styles/leaderboardStyle";

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
let tickets = [];
signInWithEmailAndPassword(auth, "joey.knappenberger@gmail.com", "Joey2001*")
    .then(async () => {
        //get all tickets
        const querySnapshot = await getDocs(collection(db, "tickets"));
        querySnapshot.forEach((doc) => {
            let temp = [];
            temp['ticketID'] = doc.id;
            temp['uid'] = doc.data()['uid'];
            temp['name'] = doc.data()['name'];
            temp['comment'] = doc.data()['comment'];
            if(doc.data()['state'] === "pending"){
                tickets.push(temp)
            }
        });

        //get first and last name of ticket submitters
        for (const t of tickets) {
            console.log(t);
            const docRef = doc(db, "users", t['uid']);
            const docSnap = await getDoc(docRef);
            t['firstName'] = docSnap.data()['firstName'];
            t['lastName'] = docSnap.data()['lastName'];
        }
        console.log(tickets);
    });

async function updateTicket(ticketID, userId, task, approved) {
    const docRef = doc(db, "tickets", ticketID);
    if (approved) {
        console.log("approved");
        await updateDoc(docRef, {
            state: 'approved'
        });

        const userRef = doc(db, "users", userId)
        const userSnap = await getDoc(userRef);
        let points = userSnap.data()['currentPoints'];

        const taskRef = doc(db, "tasks", task)
        const pointSnap = await getDoc(taskRef);
        points += pointSnap.data()['points'];

        let available = userSnap.data()['availableTasks'];
        console.log(available);
        switch (task) {
            case "teamBundle":
                available[0] = false;
                break;
            case "blog":
                available[1]--;
                break;
            case "zwift":
                available[2] = Timestamp.now();
                break;
            case "ig":
                available[3] = Timestamp.now();
                break;
        }

        console.log(available);

        await updateDoc(userRef, {
            currentPoints: points,
            availableTasks: available
        });

    } else {
        console.log("denied");
        await updateDoc(docRef, {
            state: 'denied'
        });
    }
}

function AdminApprovalScreen({ navigation }) {
    const [ticketCounter, setTicketCounter] = useState(0);
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={commonStyles.backButtonBox}>
                <Pressable style={commonStyles.backButton} onPress={() => navigation.navigate("Home")}>
                    <Ionicons
                        name={'ios-arrow-back-circle-outline'}
                        size={40}
                        style={commonStyles.backArrow}
                    />
                </Pressable>
            </View>


            <View>
                <Text><Text style={approvalStyles.bold}>Task: </Text>{tickets[ticketCounter]['name']}</Text>
                <Text><Text style={approvalStyles.bold}>Comment: </Text>{tickets[ticketCounter]['comment']}</Text>
                <Text><Text style={approvalStyles.bold}>Member: </Text>{tickets[ticketCounter]['firstName'] + " " + tickets[ticketCounter]['lastName']}</Text>
            </View>
            <Text>{"\n"}</Text>
            <Text>{"\n"}</Text>
            {/*Deny*/}
            <View style={approvalStyles.buttons}>
                <View style={approvalStyles.redButton} onClick= {() => {
                    if (ticketCounter + 1 < tickets.length) {
                        setTicketCounter(ticketCounter + 1)
                        updateTicket(tickets[ticketCounter]['ticketID'], tickets[ticketCounter]['uid'], tickets[ticketCounter]['name'],false)
                    }
                }
                }>
                    <Text style={approvalStyles.buttonText}>&#x2715;</Text>
                </View>
                {/*Approve*/}
                <View style={approvalStyles.greenButton} onClick= {() => {
                    if (ticketCounter + 1 < tickets.length) {
                        setTicketCounter(ticketCounter + 1)
                        updateTicket(tickets[ticketCounter]['ticketID'], tickets[ticketCounter]['uid'], tickets[ticketCounter]['name'], true)
                    }
                }
                }>
                    <Text style={approvalStyles.buttonText}>&#x2713;</Text>
                </View>
            </View>
        </View>
    );
}

export default AdminApprovalScreen;
