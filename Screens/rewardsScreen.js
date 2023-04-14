import {AppRegistry, Image, Button, Pressable, ScrollView, Text, View, StyleSheet, Alert, Modal} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import styles from "../Styles/rewardsPageStyles";
import {Ionicons} from "@expo/vector-icons";
import React, {useState} from 'react';

function RewardsScreen({ navigation }) {
    
    const [modalVisibleWater, setModalVisibleWater] = useState(false);
    const [modalVisibleSticker, setModalVisibleSticker] = useState(false);
    const [modalVisibleTattoo, setModalVisibleTattoo] = useState(false);
    const [modalVisibleSock, setModalVisibleSock] = useState(false);
    const [modalVisibleHat, setModalVisibleHat] = useState(false);
    const [modalVisibleCoffee, setModalVisibleCoffee] = useState(false);
    const [modalVisibleBeanie, setModalVisibleBeanie] = useState(false);
    const [modalVisibleShirt, setModalVisibleShirt] = useState(false);
    const [modalVisibleHoodie, setModalVisibleHoodie] = useState(false);
    const [modalVisibleTowel, setModalVisibleTowel] = useState(false);
    const [modalVisibleGloves, setModalVisibleGloves] = useState(false);
    const [modalVisibleBase, setModalVisibleBase] = useState(false);
    const [modalVisibleGilet, setModalVisibleGilet] = useState(false);
    const [modalVisibleJacket, setModalVisibleJacket] = useState(false);
    const [modalVisibleShoes, setModalVisibleShoes] = useState(false);
    const [modalVisibleShorts, setModalVisibleShorts] = useState(false);
    const [modalVisibleJersey, setModalVisibleJersey] = useState(false);
    const [modalVisibleSwimwear, setModalVisibleSwimwear] = useState(false);
    const [modalVisibleCreditOne, setModalVisibleCreditOne] = useState(false);
    const [modalVisibleMystery, setModalVisibleMystery] = useState(false);
    const [modalVisibleTeamShirt, setModalVisibleTeamShirt] = useState(false);
    const [modalVisibleTeamSuit, setModalVisibleTeamSuit] = useState(false);
    const [modalVisibleNYBibs, setModalVisibleNYBibs] = useState(false);
    const [modalVisibleSuit, setModalVisibleSuit] = useState(false);
    const [modalVisibleKit, setModalVisibleKit] = useState(false);
    const [modalVisibleTriBag, setModalVisibleTriBag] = useState(false);
    const [modalVisibleCRWShirt, setModalVisibleCRWShirt] = useState(false);
    const [modalVisibleCTSuit, setModalVisibleCTSuit] = useState(false);
    const [modalVisibleUSAT, setModalVisibleUSAT] = useState(false);
    const [modalVisibleRaceEntry, setModalVisibleRaceEntry] = useState(false);
    const [modalVisibleRTRace, setModalVisibleRTRace] = useState(false);
    const [modalVisiblePros, setModalVisiblePros] = useState(false);
    const [modalVisibleDITL, setModalVisibleDITL] = useState(false);
    const [modalVisibleWC, setModalVisibleWC] = useState(false);
    const [modalVisibleLife, setModalVisibleLife] = useState(false);
    return (
       
        <View>
        <View style = {styles.headerBlock}>
        <Text style={styles.headerContent}>MACH REWARDS</Text> 
        </View>
        <View style={styles.backButtonBox}>
                        <Pressable style={styles.backButton} onPress={() => navigation.navigate("Home")}>
                            <Ionicons
                                name={'ios-arrow-back-circle-outline'}
                                size={40}
                                style={styles.backArrow}
                            />
                        </Pressable>
                    </View>
        <ScrollView>
            <View style={{flex: 1, alignItems: 'center'}}>
                <Text style={styles.tierTitle}> Mach Badass</Text>
                <Text style={styles.divider}></Text> 
<Modal
        animationType="slide"
        transparent={true}
        visible={modalVisibleWater}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisibleWater(!modalVisibleWater);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Recieve a MACH Branded Water Bottle</Text>
            <Pressable
              style={[styles.backButton, styles.buttonClose]}
              onPress={() => setModalVisibleWater(!modalVisibleWater)}>
              <Text style={styles.textStyle}>Hide Pop-up</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisibleWater(true)}>
        <Text style={styles.textStyle}>Water Bottle</Text>
      </Pressable>
//<Text style={styles.pointVal> </Text>
                
<Modal
        animationType="slide"
        transparent={true}
        visible={modalVisibleSticker}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisibleSticker(!modalVisibleSticker);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Recieve a set of MACH Stickers!</Text>
            <Pressable
              style={[styles.backButton, styles.buttonClose]}
              onPress={() => setModalVisibleSticker(!modalVisibleSticker)}>
              <Text style={styles.textStyle}>Hide Pop-up</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisibleSticker(true)}>
        <Text style={styles.textStyle}>Stickers</Text>
      </Pressable>
<Modal
        animationType="slide"
        transparent={true}
        visible={modalVisibleTattoo}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisibleTattoo(!modalVisibleTattoo);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Recieve a custom Temporary MACH Tattoo!</Text>
            <Pressable
              style={[styles.backButton, styles.buttonClose]}
              onPress={() => setModalVisibleTattoo(!modalVisibleTattoo)}>
              <Text style={styles.textStyle}>Hide Pop-up</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisibleTattoo(true)}>
        <Text style={styles.textStyle}>Tattoo</Text>
      </Pressable>
<Modal
        animationType="slide"
        transparent={true}
        visible={modalVisibleSock}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisibleSock(!modalVisibleSock);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Recieve a set of socks!</Text>
            <Pressable
              style={[styles.backButton, styles.buttonClose]}
              onPress={() => setModalVisibleSock(!modalVisibleSock)}>
              <Text style={styles.textStyle}>Hide Pop-up</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisibleSock(true)}>
        <Text style={styles.textStyle}>Socks</Text>
      </Pressable>
<Modal
        animationType="slide"
        transparent={true}
        visible={modalVisibleHat}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisibleHat(!modalVisibleHat);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Recieve a MACH Branded Hat</Text>
            <Pressable
              style={[styles.backButton, styles.buttonClose]}
              onPress={() => setModalVisibleHat(!modalVisibleHat)}>
              <Text style={styles.textStyle}>Hide Pop-up</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisibleHat(true)}>
        <Text style={styles.textStyle}>Hat</Text>
      </Pressable>
<Modal
        animationType="slide"
        transparent={true}
        visible={modalVisibleCoffee}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisibleCoffee(!modalVisibleCoffee);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Recieve a MACH Branded Coffee Cup</Text>
            <Pressable
              style={[styles.backButton, styles.buttonClose]}
              onPress={() => setModalVisibleCoffee(!modalVisibleCoffee)}>
              <Text style={styles.textStyle}>Hide Pop-up</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisibleCoffee(true)}>
        <Text style={styles.textStyle}>Coffee Mug</Text>
      </Pressable>
<Modal
        animationType="slide"
        transparent={true}
        visible={modalVisibleBeanie}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisibleBeanie(!modalVisibleBeanie);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Recieve a MACH Beanie</Text>
            <Pressable
              style={[styles.backButton, styles.buttonClose]}
              onPress={() => setModalVisibleBeanie(!modalVisibleBeanie)}>
              <Text style={styles.textStyle}>Hide Pop-up</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisibleBeanie(true)}>
        <Text style={styles.textStyle}>Beanie</Text>
      </Pressable>
<Modal
        animationType="slide"
        transparent={true}
        visible={modalVisibleShirt}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisibleShirt(!modalVisibleShirt);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Recieve a MACH T-Shirt</Text>
            <Pressable
              style={[styles.backButton, styles.buttonClose]}
              onPress={() => setModalVisibleShirt(!modalVisibleShirt)}>
              <Text style={styles.textStyle}>Hide Pop-up</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisibleShirt(true)}>
        <Text style={styles.textStyle}>T-Shirt</Text>
      </Pressable>
<Modal
        animationType="slide"
        transparent={true}
        visible={modalVisibleHoodie}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisibleHoodie(!modalVisibleHoodie);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Recieve a MACH Hoodie</Text>
            <Pressable
              style={[styles.backButton, styles.buttonClose]}
              onPress={() => setModalVisibleHoodie(!modalVisibleHoodie)}>
              <Text style={styles.textStyle}>Hide Pop-up</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisibleHoodie(true)}>
        <Text style={styles.textStyle}>Hoodie</Text>
      </Pressable>
<Modal
        animationType="slide"
        transparent={true}
        visible={modalVisibleTowel}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisibleTowel(!modalVisibleTowel);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Recieve a Team MACH Transition Towel</Text>
            <Pressable
              style={[styles.backButton, styles.buttonClose]}
              onPress={() => setModalVisibleTowel(!modalVisibleTowel)}>
              <Text style={styles.textStyle}>Hide Pop-up</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisibleTowel(true)}>
        <Text style={styles.textStyle}>Transition Towel</Text>
      </Pressable>
                <Text style={styles.tierTitle}> Mach Star</Text>
                <Text style={styles.divider}></Text> 
<Modal
        animationType="slide"
        transparent={true}
        visible={modalVisibleGloves}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisibleGloves(!modalVisibleGloves);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Recieve a set of MACH Gloves</Text>
            <Pressable
              style={[styles.backButton, styles.buttonClose]}
              onPress={() => setModalVisibleGloves(!modalVisibleGloves)}>
              <Text style={styles.textStyle}>Hide Pop-up</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisibleGloves(true)}>
        <Text style={styles.textStyle}>Mach Gloves</Text>
      </Pressable>
<Modal
        animationType="slide"
        transparent={true}
        visible={modalVisibleBase}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisibleBase(!modalVisibleBase);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Recieve a MACH Base Layer</Text>
            <Pressable
              style={[styles.backButton, styles.buttonClose]}
              onPress={() => setModalVisibleBase(!modalVisibleBase)}>
              <Text style={styles.textStyle}>Hide Pop-up</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisibleBase(true)}>
        <Text style={styles.textStyle}>Base Layer</Text>
      </Pressable>
<Modal
        animationType="slide"
        transparent={true}
        visible={modalVisibleGilet}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisibleGilet(!modalVisibleGilet);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Recieve a MACH Gilet</Text>
            <Pressable
              style={[styles.backButton, styles.buttonClose]}
              onPress={() => setModalVisibleGilet(!modalVisibleGilet)}>
              <Text style={styles.textStyle}>Hide Pop-up</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisibleGilet(true)}>
        <Text style={styles.textStyle}>Gilet</Text>
      </Pressable>
<Modal
        animationType="slide"
        transparent={true}
        visible={modalVisibleJacket}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisibleJacket(!modalVisibleJacket);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Recieve a MACH Cycling Jacket</Text>
            <Pressable
              style={[styles.backButton, styles.buttonClose]}
              onPress={() => setModalVisibleJacket(!modalVisibleJacket)}>
              <Text style={styles.textStyle}>Hide Pop-up</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisibleJacket(true)}>
        <Text style={styles.textStyle}>Cycling Jacket</Text>
      </Pressable>
<Modal
        animationType="slide"
        transparent={true}
        visible={modalVisibleShoes}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisibleShoes(!modalVisibleShoes);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Recieve a pair of MACH Running Shoes</Text>
            <Pressable
              style={[styles.backButton, styles.buttonClose]}
              onPress={() => setModalVisibleShoes(!modalVisibleShoes)}>
              <Text style={styles.textStyle}>Hide Pop-up</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisibleShoes(true)}>
        <Text style={styles.textStyle}>Running Shoes</Text>
      </Pressable>
<Modal
        animationType="slide"
        transparent={true}
        visible={modalVisibleShorts}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisibleShorts(!modalVisibleShorts);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Recieve a pair of MACH Triathalon Shorts</Text>
            <Pressable
              style={[styles.backButton, styles.buttonClose]}
              onPress={() => setModalVisibleShorts(!modalVisibleShorts)}>
              <Text style={styles.textStyle}>Hide Pop-up</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisibleShorts(true)}>
        <Text style={styles.textStyle}>Tri-Shorts</Text>
      </Pressable>
<Modal
        animationType="slide"
        transparent={true}
        visible={modalVisibleJersey}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisibleJersey(!modalVisibleJersey);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Recieve a MACH Triathalon Jersey</Text>
            <Pressable
              style={[styles.backButton, styles.buttonClose]}
              onPress={() => setModalVisibleJersey(!modalVisibleJersey)}>
              <Text style={styles.textStyle}>Hide Pop-up</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisibleJersey(true)}>
        <Text style={styles.textStyle}>Tri-Jersey</Text>
      </Pressable>
<Modal
        animationType="slide"
        transparent={true}
        visible={modalVisibleSwimwear}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisibleSwimwear(!modalVisibleSwimwear);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Recieve a set of MACH Swimwear</Text>
            <Pressable
              style={[styles.backButton, styles.buttonClose]}
              onPress={() => setModalVisibleSwimwear(!modalVisibleSwimwear)}>
              <Text style={styles.textStyle}>Hide Pop-up</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisibleSwimwear(true)}>
        <Text style={styles.textStyle}>Swimwear</Text>
      </Pressable>
                <Text style={styles.tierTitle}> Mach Icon</Text>
                <Text style={styles.divider}></Text>
<Modal
        animationType="slide"
        transparent={true}
        visible={modalVisibleCreditOne}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisibleCreditOne(!modalVisibleCreditOne);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Recieve $150 In Store Credit for anything and everything MACH Apparel</Text>
            <Pressable
              style={[styles.backButton, styles.buttonClose]}
              onPress={() => setModalVisibleCreditOne(!modalVisibleCreditOne)}>
              <Text style={styles.textStyle}>Hide Pop-up</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisibleCreditOne(true)}>
        <Text style={styles.textStyle}>$150 Store Credit</Text>
      </Pressable>
<Modal
        animationType="slide"
        transparent={true}
        visible={modalVisibleMystery}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisibleMystery(!modalVisibleMystery);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>A Mystery Package sent to you directly from MACH HQ</Text>
            <Pressable
              style={[styles.backButton, styles.buttonClose]}
              onPress={() => setModalVisibleMystery(!modalVisibleMystery)}>
              <Text style={styles.textStyle}>Hide Pop-up</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisibleMystery(true)}>
        <Text style={styles.textStyle}>Mystery Reward</Text>
      </Pressable>
<Modal
        animationType="slide"
        transparent={true}
        visible={modalVisibleTeamShirt}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisibleTeamShirt(!modalVisibleTeamShirt);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Recieve a NEW 2024 MACH Team Shirt</Text>
            <Pressable
              style={[styles.backButton, styles.buttonClose]}
              onPress={() => setModalVisibleTeamShirt(!modalVisibleTeamShirt)}>
              <Text style={styles.textStyle}>Hide Pop-up</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisibleTeamShirt(true)}>
        <Text style={styles.textStyle}>2024 Team Shirt</Text>
      </Pressable>
<Modal
        animationType="slide"
        transparent={true}
        visible={modalVisibleTeamSuit}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisibleTeamSuit(!modalVisibleTeamSuit);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Recieve a Team MACH Triathalon Suit</Text>
            <Pressable
              style={[styles.backButton, styles.buttonClose]}
              onPress={() => setModalVisibleTeamSuit(!modalVisibleTeamSuit)}>
              <Text style={styles.textStyle}>Hide Pop-up</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisibleTeamSuit(true)}>
        <Text style={styles.textStyle}>Team Tri-Suit</Text>
      </Pressable>
<Modal
        animationType="slide"
        transparent={true}
        visible={modalVisibleNYBibs}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisibleNYBibs(!modalVisibleNYBibs);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Recieve a NEW set of 2024 Cycling Bibs</Text>
            <Pressable
              style={[styles.backButton, styles.buttonClose]}
              onPress={() => setModalVisibleNYBibs(!modalVisibleNYBibs)}>
              <Text style={styles.textStyle}>Hide Pop-up</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisibleNYBibs(true)}>
        <Text style={styles.textStyle}>2024 Cycling Bibs</Text>
      </Pressable>
<Modal
        animationType="slide"
        transparent={true}
        visible={modalVisibleSuit}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisibleSuit(!modalVisibleSuit);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Recieve a Triathalon Suit</Text>
            <Pressable
              style={[styles.backButton, styles.buttonClose]}
              onPress={() => setModalVisibleSuit(!modalVisibleSuit)}>
              <Text style={styles.textStyle}>Hide Pop-up</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisibleSuit(true)}>
        <Text style={styles.textStyle}>Tri-Suit</Text>
      </Pressable>
<Modal
        animationType="slide"
        transparent={true}
        visible={modalVisibleKit}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisibleKit(!modalVisibleKit);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Recieve a full Cycling Kit from MACH Apparel</Text>
            <Pressable
              style={[styles.backButton, styles.buttonClose]}
              onPress={() => setModalVisibleKit(!modalVisibleKit)}>
              <Text style={styles.textStyle}>Hide Pop-up</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisibleKit(true)}>
        <Text style={styles.textStyle}>Cycling Kit</Text>
      </Pressable>
                <Text style={styles.tierTitle}> Mach Hero</Text>
                <Text style={styles.divider}></Text> 
<Modal
        animationType="slide"
        transparent={true}
        visible={modalVisibleTriBag}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisibleTriBag(!modalVisibleTriBag);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Recieve a TEAM MACH Triathalon Bag</Text>
            <Pressable
              style={[styles.backButton, styles.buttonClose]}
              onPress={() => setModalVisibleTriBag(!modalVisibleTriBag)}>
              <Text style={styles.textStyle}>Hide Pop-up</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisibleTriBag(true)}>
        <Text style={styles.textStyle}>Team Tri-Bag</Text>
      </Pressable>
<Modal
        animationType="slide"
        transparent={true}
        visible={modalVisibleCRWShirt}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisibleCRWShirt(!modalVisibleCRWShirt);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Recieve a Custom Made Race Week Shirt just for you straight from MACH Apparel</Text>
            <Pressable
              style={[styles.backButton, styles.buttonClose]}
              onPress={() => setModalVisibleCRWShirt(!modalVisibleCRWShirt)}>
              <Text style={styles.textStyle}>Hide Pop-up</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisibleCRWShirt(true)}>
        <Text style={styles.textStyle}>Custom Race Week Shirt</Text>
      </Pressable>
<Modal
        animationType="slide"
        transparent={true}
        visible={modalVisibleCTSuit}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisibleCTSuit(!modalVisibleCTSuit);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Recieve a FULL CUSTOM Triathalong straight from MACH Apparel</Text>
            <Pressable
              style={[styles.backButton, styles.buttonClose]}
              onPress={() => setModalVisibleCTSuit(!modalVisibleCTSuit)}>
              <Text style={styles.textStyle}>Hide Pop-up</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisibleCTSuit(true)}>
        <Text style={styles.textStyle}>Custom Tri Suit</Text>
      </Pressable>
<Modal
        animationType="slide"
        transparent={true}
        visible={modalVisibleUSAT}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisibleUSAT(!modalVisibleUSAT);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>MACH will provide a full USAT Membership</Text>
            <Pressable
              style={[styles.backButton, styles.buttonClose]}
              onPress={() => setModalVisibleUSAT(!modalVisibleUSAT)}>
              <Text style={styles.textStyle}>Hide Pop-up</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisibleUSAT(true)}>
        <Text style={styles.textStyle}>USAT Membership</Text>
      </Pressable>
<Modal
        animationType="slide"
        transparent={true}
        visible={modalVisibleRaceEntry}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisibleRaceEntry(!modalVisibleRaceEntry);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>MACH will sponsor you for 3 full Race Entries</Text>
            <Pressable
              style={[styles.backButton, styles.buttonClose]}
              onPress={() => setModalVisibleRaceEntry(!modalVisibleRaceEntry)}>
              <Text style={styles.textStyle}>Hide Pop-up</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisibleRaceEntry(true)}>
        <Text style={styles.textStyle}>3 Race Entries</Text>
      </Pressable>
<Modal
        animationType="slide"
        transparent={true}
        visible={modalVisibleRTRace}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisibleRTRace(!modalVisibleRTRace);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>MACH will pay for ONE ROUND TRIP to any NORTH AMERICAN RACE </Text>
            <Pressable
              style={[styles.backButton, styles.buttonClose]}
              onPress={() => setModalVisibleRTRace(!modalVisibleRTRace)}>
              <Text style={styles.textStyle}>Hide Pop-up</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisibleRTRace(true)}>
        <Text style={styles.textStyle}>Round Trip Race</Text>
      </Pressable>
                <Text style={styles.tierTitle}> Mach Legend</Text>
                <Text style={styles.divider}></Text> 
<Modal
        animationType="slide"
        transparent={true}
        visible={modalVisiblePros}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisiblePros(!modalVisiblePros);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Win a trip to train with PROFESSIONAL TRIATHELETES!</Text>
            <Pressable
              style={[styles.backButton, styles.buttonClose]}
              onPress={() => setModalVisiblePros(!modalVisiblePros)}>
              <Text style={styles.textStyle}>Hide Pop-up</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisiblePros(true)}>
        <Text style={styles.textStyle}>Training with the Pros</Text>
      </Pressable>
<Modal
        animationType="slide"
        transparent={true}
        visible={modalVisibleMystery}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisibleMystery(!modalVisibleMystery);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>A Mystery Reward straight from MACH HQ</Text>
            <Pressable
              style={[styles.backButton, styles.buttonClose]}
              onPress={() => setModalVisibleMystery(!modalVisibleMystery)}>
              <Text style={styles.textStyle}>Hide Pop-up</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisibleMystery(true)}>
        <Text style={styles.textStyle}>Mystery Reward</Text>
      </Pressable>
<Modal
        animationType="slide"
        transparent={true}
        visible={modalVisibleDITL}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisibleDITL(!modalVisibleDITL);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>MACH will send a videographer to you to film a full Day in the Life segment all about you!</Text>
            <Pressable
              style={[styles.backButton, styles.buttonClose]}
              onPress={() => setModalVisibleDITL(!modalVisibleDITL)}>
              <Text style={styles.textStyle}>Hide Pop-up</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisibleDITL(true)}>
        <Text style={styles.textStyle}>Day in the Life</Text>
      </Pressable>
<Modal
        animationType="slide"
        transparent={true}
        visible={modalVisibleWC}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisibleWC(!modalVisibleWC);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Win a trip to Kona, Hawaii for the World Championships</Text>
            <Pressable
              style={[styles.backButton, styles.buttonClose]}
              onPress={() => setModalVisibleWC(!modalVisibleWC)}>
              <Text style={styles.textStyle}>Hide Pop-up</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisibleWC(true)}>
        <Text style={styles.textStyle}>World Championship</Text>
      </Pressable>
<Text style={styles.tierTitle}> Mach PINNACLE</Text>
                <Text style={styles.divider}></Text> 
<Modal
        animationType="slide"
        transparent={true}
        visible={modalVisibleLife}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisibleLife(!modalVisibleLife);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>You made it to the top! You have earned a FREE TEAM BUNDLE for LIFE from MACH Apparel!</Text>
            <Pressable
              style={[styles.backButton, styles.buttonClose]}
              onPress={() => setModalVisibleLife(!modalVisibleLife)}>
              <Text style={styles.textStyle}>Hide Pop-up</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisibleLife(true)}>
        <Text style={styles.textStyle}>Free Team Bundle FOR LIFE</Text>
      </Pressable>
                <Text style={styles.footer}></Text>
        </View>
        </ScrollView>
      </View>
    );
}

export default RewardsScreen;
