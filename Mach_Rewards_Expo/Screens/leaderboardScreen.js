import {Image, Text, View, StyleSheet} from "react-native";
import { DataTable } from 'react-native-paper';
import leaderboardStyles from "../Styles/leaderboardStyle";
import leaderboardStyle from "../Styles/leaderboardStyle";

function LeaderboardScreen({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <h2 style={leaderboardStyles.header}>LEADERBOARD</h2>
            <div style={leaderboardStyles.podium}>
                <div style={leaderboardStyles.outerPerson}>
                    <p style={leaderboardStyles.noMargin}>2</p>
                    <Image
                        style={leaderboardStyles.personImg}
                        source={{uri: 'https://www.williamjordan.net/images/WillSki.jpg'}}
                        resizeMode={'cover'} // cover or contain its upto you view look
                    />
                    <p>Bella</p>
                    <p>2600</p>
                </div>
                <div style={leaderboardStyles.person}>
                    <p style={leaderboardStyles.one}>1</p>
                    <Image
                        style={leaderboardStyles.personImg}
                        source={{uri: 'https://www.williamjordan.net/images/WillSki.jpg'}}
                        resizeMode={'cover'} // cover or contain its upto you view look
                    />
                    <p>Adam</p>
                    <p>2600</p>
                </div>
                <div style={leaderboardStyles.outerPerson}>
                    <p style={leaderboardStyles.noMargin}>3</p>
                    <Image
                        style={leaderboardStyles.personImg}
                        source={{uri: 'https://www.williamjordan.net/images/WillSki.jpg'}}
                        resizeMode={'cover'} // cover or contain its upto you view look
                    />
                    <p>Courtney</p>
                    <p>2600</p>
                </div>
            </div>
            <hr style={leaderboardStyles.line}/>

            <div style={leaderboardStyles.tabs}>
                <div style={leaderboardStyles.tab}>
                    <p style={leaderboardStyles.tabText}>Top</p>
                </div>
                <div style={leaderboardStyles.tab}>
                    <p style={leaderboardStyles.tabText}>Local</p>
                </div>
                <div style={leaderboardStyles.tab}>
                    <p style={leaderboardStyles.tabText}>Your Tier</p>
                </div>
            </div>
            <br/>
            <br/>
            <div style={leaderboardStyles.myTable}>
                <div style={leaderboardStyles.myRow}>
                    <text style={leaderboardStyles.rowText}>4</text>
                    <text style={leaderboardStyles.rowText}>Dan</text>
                    <text style={leaderboardStyles.rowText}>2600</text>
                </div>
                <div style={leaderboardStyles.myRow}>
                    <text style={leaderboardStyles.rowText}>5</text>
                    <text style={leaderboardStyles.rowText}> Eli</text>
                    <text style={leaderboardStyles.rowText}>2600</text>
                </div>
                <div style={leaderboardStyles.myRow}>
                    <text style={leaderboardStyles.rowText}>6</text>
                    <text style={leaderboardStyles.rowText}>Frank</text>
                    <text style={leaderboardStyles.rowText}>2600</text>
                </div>
                <div style={leaderboardStyles.myRow}>
                    <text style={leaderboardStyles.rowText}>7</text>
                    <text style={leaderboardStyles.rowText}>Grace</text>
                    <text style={leaderboardStyles.rowText}>2600</text>
                </div>
                <div style={leaderboardStyles.myRow}>
                    <text style={leaderboardStyles.rowText}>8</text>
                    <text style={leaderboardStyles.rowText}>Hank</text>
                    <text style={leaderboardStyles.rowText}>2600</text>
                </div>
                <div style={leaderboardStyles.myRow}>
                    <text style={leaderboardStyles.rowText}>9</text>
                    <text style={leaderboardStyles.rowText}>Isaac</text>
                    <text style={leaderboardStyles.rowText}>2600</text>
                </div>
                <div style={leaderboardStyles.myRow}>
                    <text style={leaderboardStyles.rowText}>10</text>
                    <text style={leaderboardStyles.rowText}>Julia</text>
                    <text style={leaderboardStyles.rowText}>2600</text>
                </div>
                <div style={leaderboardStyles.myRow}>
                    <text style={leaderboardStyles.rowText}>. . .</text>
                    <text style={leaderboardStyles.rowText}></text>
                    <text style={leaderboardStyles.rowText}></text>
                </div>
                <div style={leaderboardStyles.myRow}>
                    <text style={leaderboardStyles.rowText}>246</text>
                    <text style={leaderboardStyles.rowText}>Kevin</text>
                    <text style={leaderboardStyles.rowText}>205</text>
                </div>
                <div style={leaderboardStyles.myRow}>
                    <text style={leaderboardStyles.rowTextBold}>246</text>
                    <text style={leaderboardStyles.rowTextBold}>Will</text>
                    <text style={leaderboardStyles.rowTextBold}>200</text>
                </div>
                <div style={leaderboardStyles.myRow}>
                    <text style={leaderboardStyles.rowText}>247</text>
                    <text style={leaderboardStyles.rowText}>Leigh</text>
                    <text style={leaderboardStyles.rowText}>190</text>
                </div>
            </div>
        </View>
    );
}

export default LeaderboardScreen;