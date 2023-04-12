import {Pressable, Text, View} from "react-native";
import approvalStyles from "../Styles/approvalStyles";
import commonStyles from "../Styles/commonStyles";
import {Ionicons} from "@expo/vector-icons";
import * as React from "react";

function AdminApprovalScreen({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={commonStyles.backBox}>
                <Pressable onPress={() => navigation.navigate("Home")}>
                   <Text style={commonStyles.back}>{'❮'}</Text>
                </Pressable>
            </View>
            <Text style={approvalStyles.task}>Race Photo:</Text>
            <div style={approvalStyles.photo}>
                <Text>Photo here</Text>
            </div>
            <Text style={approvalStyles.person}>Dan DeFrance</Text>
            <div style={approvalStyles.buttons}>
                <div style={approvalStyles.redButton}>
                    <Text style={approvalStyles.buttonText}>&#x2715;</Text>
                </div>
                <div style={approvalStyles.greenButton}>
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