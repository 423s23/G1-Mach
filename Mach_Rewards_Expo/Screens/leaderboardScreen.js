import {Image, Text, View, StyleSheet} from "react-native";
import leaderboardStyles from "../Styles/leaderboardStyle";

function LeaderboardScreen({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={leaderboardStyles.header}>LEADERBOARD</Text>
            <div style={leaderboardStyles.podium}>
                <div style={leaderboardStyles.outerPerson}>
                    <Text style={leaderboardStyles.noMargin}>2</Text>
                    <Image
                        style={leaderboardStyles.personImg}
                        source={{uri: 'https://www.williamjordan.net/images/WillSki.jpg'}}
                        resizeMode={'cover'} // cover or contain its upto you view look
                    />
                    <Text>Bella</Text>
                    <br/>
                    <Text>2600</Text>
                </div>
                <div style={leaderboardStyles.person}>
                    <Text style={leaderboardStyles.one}>1</Text>
                    <Image
                        style={leaderboardStyles.personImg}
                        source={{uri: 'https://www.williamjordan.net/images/WillSki.jpg'}}
                        resizeMode={'cover'} // cover or contain its upto you view look
                    />
                    <Text>Adam</Text>
                    <br/>
                    <Text>2600</Text>
                </div>
                <div style={leaderboardStyles.outerPerson}>
                    <Text style={leaderboardStyles.noMargin}>3</Text>
                    <Image
                        style={leaderboardStyles.personImg}
                        source={{uri: 'https://www.williamjordan.net/images/WillSki.jpg'}}
                        resizeMode={'cover'} // cover or contain its upto you view look
                    />
                    <Text>Courtney</Text>
                    <br/>
                    <Text>2600</Text>
                </div>
            </div>
            <hr style={leaderboardStyles.line}/>

            <div style={leaderboardStyles.tabs}>
                <div style={leaderboardStyles.tab}>
                    <Text style={leaderboardStyles.tabText}>Top</Text>
                </div>
                <div style={leaderboardStyles.tab}>
                    <Text style={leaderboardStyles.tabText}>Local</Text>
                </div>
                <div style={leaderboardStyles.tab}>
                    <Text style={leaderboardStyles.tabText}>Your Tier</Text>
                </div>
            </div>
            <br/>
            <br/>
            <div style={leaderboardStyles.myTable}>
                <div style={leaderboardStyles.myRow}>
                    <Text style={leaderboardStyles.rowText}>4</Text>
                    <Text style={leaderboardStyles.rowText}>Dan</Text>
                    <Text style={leaderboardStyles.rowText}>2600</Text>
                </div>
                <div style={leaderboardStyles.myRow}>
                    <Text style={leaderboardStyles.rowText}>5</Text>
                    <Text style={leaderboardStyles.rowText}> Eli</Text>
                    <Text style={leaderboardStyles.rowText}>2600</Text>
                </div>
                <div style={leaderboardStyles.myRow}>
                    <Text style={leaderboardStyles.rowText}>6</Text>
                    <Text style={leaderboardStyles.rowText}>Frank</Text>
                    <Text style={leaderboardStyles.rowText}>2600</Text>
                </div>
                <div style={leaderboardStyles.myRow}>
                    <Text style={leaderboardStyles.rowText}>7</Text>
                    <Text style={leaderboardStyles.rowText}>Grace</Text>
                    <Text style={leaderboardStyles.rowText}>2600</Text>
                </div>
                <div style={leaderboardStyles.myRow}>
                    <Text style={leaderboardStyles.rowText}>8</Text>
                    <Text style={leaderboardStyles.rowText}>Hank</Text>
                    <Text style={leaderboardStyles.rowText}>2600</Text>
                </div>
                <div style={leaderboardStyles.myRow}>
                    <Text style={leaderboardStyles.rowText}>9</Text>
                    <Text style={leaderboardStyles.rowText}>Isaac</Text>
                    <Text style={leaderboardStyles.rowText}>2600</Text>
                </div>
                <div style={leaderboardStyles.myRow}>
                    <Text style={leaderboardStyles.rowText}>10</Text>
                    <Text style={leaderboardStyles.rowText}>Julia</Text>
                    <Text style={leaderboardStyles.rowText}>2600</Text>
                </div>
                <div style={leaderboardStyles.myRow}>
                    <Text style={leaderboardStyles.rowText}>. . .</Text>
                    <Text style={leaderboardStyles.rowText}></Text>
                    <Text style={leaderboardStyles.rowText}></Text>
                </div>
                <div style={leaderboardStyles.myRow}>
                    <Text style={leaderboardStyles.rowText}>246</Text>
                    <Text style={leaderboardStyles.rowText}>Kevin</Text>
                    <Text style={leaderboardStyles.rowText}>205</Text>
                </div>
                <div style={leaderboardStyles.myRow}>
                    <Text style={leaderboardStyles.rowTextBold}>246</Text>
                    <Text style={leaderboardStyles.rowTextBold}>Will</Text>
                    <Text style={leaderboardStyles.rowTextBold}>200</Text>
                </div>
                <div style={leaderboardStyles.myRow}>
                    <Text style={leaderboardStyles.rowText}>247</Text>
                    <Text style={leaderboardStyles.rowText}>Leigh</Text>
                    <Text style={leaderboardStyles.rowText}>190</Text>
                </div>
            </div>
        </View>
    );
}

export default LeaderboardScreen;