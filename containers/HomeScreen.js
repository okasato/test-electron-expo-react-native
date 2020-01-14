import * as WebBrowser from "expo-web-browser";
import React, { useState } from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View
} from "react-native";

import Custom_Text from "../components/shared/Custom_Text";
import Custom_Header from "../components/shared/Custom_Header";
import Custom_HeaderTitle from "../components/shared/Custom_HeaderTitle";
import Custom_HeaderButton from "../components/shared/Custom_HeaderButton";
import Custom_Button from "../components/shared/Custom_Button";
import Custom_IconButton from "../components/shared/Custom_IconButton";
import Custom_RadioButton from "../components/shared/Custom_RadioButton";
import Custom_Modal from "../components/shared/Custom_Modal";
import Custom_TextInput from "../components/shared/Custom_TextInput";
import Fonts from "../constants/Fonts";
import Colors from "../constants/Colors";
import Images from "../constants/Images";

export default function HomeScreen({ navigation }) {
  const [pressed, setPressed] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [textValue, onChangeText] = useState("");
  console.log("navigation is", navigation)
  return (
    <View style={styles.container}>
      <Custom_Header
        left={
          <Custom_HeaderButton
            onPress={() => {
              console.log("Press!!");
            }}
            type="icon"
            icon="md-arrow-back"
            iconColor={Colors.text}
          />
        }
        center={<Custom_HeaderTitle text="Enable Face ID" />}
        right={
          <Custom_HeaderButton
            onPress={() => {
              console.log("Press!!");
            }}
            type="icon"
            icon="md-settings"
            iconColor={Colors.text}
          />
        }
      />
      <ScrollView>

        <View style={{ marginVertical: 30 }}>
          <Custom_TextInput
            value={textValue}
            onChangeText={text => {
              onChangeText(text);
            }}
            label="Wallet Nickname"
            keyboardType="default"
            returnKeyType="done"
          />
        </View>

        <View>
          <Custom_Text
            value="This is custom text component."
            size={Fonts.size.medium}
            style={{ marginVertical: 50, marginHorizontal: 10 }}
            isBold
            color={Colors.text}
          />
        </View>
        <View
          style={{
            height: 90,
            width: 90,
            borderRadius: 45,
            backgroundColor: Colors.headerBackground,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image source={Images.face} style={{ height: 40, width: 40, tintColor: Colors.text }} />
        </View>
        <View style={styles.addWalletContainer}>
          <Custom_Button
            text="Add Wallet"
            onPress={() => {
              console.log("Press Add Wallet");
              setModalVisible(true);
            }}
            style={{ height: 40, width: 100 }}
          />
        </View>
        <View>
          <Custom_Button
            text="Next"
            onPress={() => {
              console.log("Press and go to LinksScreen");
              navigation.navigate({
                routeName: "LinksScreen",
                key: "LinksScreen",
              });
            }}
            style={{ height: 40, width: 80 }}
            icon="ios-arrow-forward"
          />
        </View>
        <View style={styles.buttonsContainer}>
          <View style={styles.leftButtonContainer}>
            <Custom_Button
              text="RECEIVE"
              onPress={() => {
                console.log("Press RECEIVE");
              }}
              size={Fonts.size.large}
              style={{
                height: 40,
                backgroundColor: Colors.headerBackground,
                borderWidth: 0.5,
                borderColor: Colors.text
              }}
            />
          </View>
          <View style={styles.rightButtonContainer}>
            <Custom_Button
              text="SEND"
              onPress={() => {
                console.log("Press SEND");
              }}
              size={Fonts.size.large}
              style={{ height: 40 }}
            />
          </View>
        </View>
        <View style={styles.iconButtonContainer}>
          <Custom_IconButton
            icon="md-add"
            color={Colors.text}
            text="Create New Wallet"
          />
        </View>
        <View style={styles.iconButtonContainer}>
          <Custom_IconButton
            icon="md-download"
            color={Colors.text}
            text="I Already Have A Wallet"
          />
        </View>
        <View style={styles.iconButtonContainer}>
          <Custom_IconButton
            icon="ios-arrow-down"
            color={Colors.text}
            style={{ height: 48, width: 48, borderRadius: 24 }}
          />
        </View>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flex: 8 }}>
            <Custom_Text
              value="I have written down my passphrase, and I understand that without it I will not have access to my wallet sshould I lose it."
            />
          </View>
          <View style={{ flex: 2 }}>
            <Custom_RadioButton
              pressed={pressed}
              onPress={() => (!pressed ? setPressed(true) : setPressed(false))}
            />
          </View>
        </View>
      </ScrollView>
      <Custom_Modal
        modalVisible={modalVisible}
        onClose={() => setModalVisible(false)}
      />
      {/* <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
      </ScrollView>   */}
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null
};

function DevelopmentModeNotice() {
  if (__DEV__) {
    const learnMoreButton = (
      <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
        Learn more
      </Text>
    );

    return (
      <Text style={styles.developmentModeText}>
        Development mode is enabled: your app will be slower but you can use
        useful development tools. {learnMoreButton}
      </Text>
    );
  } else {
    return (
      <Text style={styles.developmentModeText}>
        You are not in development mode: your app will run at full speed.
      </Text>
    );
  }
}

function handleLearnMorePress() {
  WebBrowser.openBrowserAsync(
    "https://docs.expo.io/versions/latest/workflow/development-mode/"
  );
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    "https://docs.expo.io/versions/latest/workflow/up-and-running/#cant-see-your-changes"
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background
  },
  addWalletContainer: {
    justifyContent: "center",
    alignItems: "center"
  },
  buttonsContainer: {
    flexDirection: "row",
    marginVertical: 10
  },
  leftButtonContainer: {
    flex: 1,
    marginHorizontal: 15
  },
  rightButtonContainer: {
    flex: 1,
    marginHorizontal: 15
  },
  iconButtonContainer: {
    justifyContent: "center",
    alignItems: "flex-end",
    marginHorizontal: 15,
    marginVertical: 10
  },
  developmentModeText: {
    marginBottom: 20,
    color: "rgba(0,0,0,0.4)",
    fontSize: 14,
    lineHeight: 19,
    textAlign: "center"
  },
  contentContainer: {
    paddingTop: 30
  },
  welcomeContainer: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: "contain",
    marginTop: 3,
    marginLeft: -10
  },
  getStartedContainer: {
    alignItems: "center",
    marginHorizontal: 50
  },
  homeScreenFilename: {
    marginVertical: 7
  },
  codeHighlightText: {
    color: "rgba(96,100,109, 0.8)"
  },
  codeHighlightContainer: {
    backgroundColor: "rgba(0,0,0,0.05)",
    borderRadius: 3,
    paddingHorizontal: 4
  },
  getStartedText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    lineHeight: 24,
    textAlign: "center"
  },
  tabBarInfoContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3
      },
      android: {
        elevation: 20
      }
    }),
    alignItems: "center",
    backgroundColor: "#fbfbfb",
    paddingVertical: 20
  },
  tabBarInfoText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    textAlign: "center"
  },
  navigationFilename: {
    marginTop: 5
  },
  helpContainer: {
    marginTop: 15,
    alignItems: "center"
  },
  helpLink: {
    paddingVertical: 15
  },
  helpLinkText: {
    fontSize: 14,
    color: "#2e78b7"
  }
});
