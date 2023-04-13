import {Text, Image, View} from "react-native";
import aboutStyles from "../Styles/aboutStyles";

function AboutScreen({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={aboutStyles.header}>TEAM VISION</Text>
                
                <Text style={aboutStyles.p}>
                    At Mach Apparel we acknowledge your excitement and commitment to your athletic pursuits. We want to help
                    make your athletic endeavors fun and memorable! We have partnered with companies that we believe and
                    trust in to support one another. We want to make a difference in the sports world by excelling in
                    athletics, helping Mach refine apparel designs, and crafting a positive image that helps Mach promote a
                    pro-environment product. If we keep our values close to our hearts, we can help each other accomplish
                    the extraordinary and be a team of unity and fun!
                </Text>
        </View>
    );
}

export default AboutScreen;