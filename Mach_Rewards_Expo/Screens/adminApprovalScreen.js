import {Text, View} from "react-native";
import approvalStyles from "../Styles/approvalStyles";

function AdminApprovalScreen({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <div style={approvalStyles.buttons}>
                <div style={approvalStyles.redButton}>
                    <Text style={approvalStyles.buttonText}>&#x2715;</Text>
                </div>
                <div style={approvalStyles.greenButton}>
                    <Text style={approvalStyles.buttonText}>&#x2713;</Text>
                </div>
            </div>
            <Text style={approvalStyles.task}>Race Photo:</Text>
            <div style={approvalStyles.photo}>
                <Text>Photo here</Text>
            </div>
            <Text style={approvalStyles.person}>Dan DeFrance</Text>
        </View>
    );
}

export default AdminApprovalScreen;