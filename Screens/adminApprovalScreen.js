import {Pressable, Text, View} from "react-native";
import approvalStyles from "../Styles/approvalStyles";
import commonStyles from "../Styles/commonStyles";
import {Ionicons} from "@expo/vector-icons";
import * as React from "react";
import {initializeApp} from "firebase/app";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import {doc, getDoc, getFirestore, collection, getDocs} from "firebase/firestore";
import refreshControl from "react-native-web/dist/exports/RefreshControl";
import {useState} from "react";

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
            temp['uid'] = doc.data()['uid'];
            temp['name'] = doc.data()['name'];
            temp['comment'] = doc.data()['comment'];
            tickets.push(temp)
        });

        //get first and last name of ticket submitters
        for (const t of tickets) {
            const docRef = doc(db, "users", t['uid']);
            const docSnap = await getDoc(docRef);
            t['firstName'] = docSnap.data()['firstName'];
            t['lastName'] = docSnap.data()['lastName'];
        }
        console.log(tickets);
    });

function AdminApprovalScreen({ navigation }) {
    const [ticketCounter, setTicketCounter] = useState(0);
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={commonStyles.backBox}>
                <Pressable onPress={() => navigation.navigate("Home")}>
                   <Text style={commonStyles.back}>{'❮'}</Text>
                </Pressable>
            </View>
            <Text style={approvalStyles.task}>{tickets[ticketCounter]['name']}</Text>
            <div style={approvalStyles.photo}>
                <Text>{tickets[ticketCounter]['comment']}</Text>
            </div>
            <Text style={approvalStyles.person}>{tickets[ticketCounter]['firstName'] + " " + tickets[ticketCounter]['lastName']}</Text>
            {/*Deny*/}
            <div style={approvalStyles.buttons}>
                <div style={approvalStyles.redButton} onClick= {() => {
                        if (ticketCounter + 1 < tickets.length) {
                            setTicketCounter(ticketCounter + 1)
                        }
                    }
                }>
                    <Text style={approvalStyles.buttonText}>&#x2715;</Text>
                </div>
                {/*Approve*/}
                <div style={approvalStyles.greenButton} onClick= {() => {
                        if (ticketCounter + 1 < tickets.length) {
                            setTicketCounter(ticketCounter + 1)
                        }
                    }
                }>
                    <Text style={approvalStyles.buttonText}>&#x2713;</Text>
                </div>
            </div>
            <Text>Reason:</Text>
            <textarea>

            </textarea>
        </View>
    );
}

export default AdminApprovalScreen;