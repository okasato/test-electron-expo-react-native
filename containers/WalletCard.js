import React from "react";
import { Image, StyleSheet, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Custom_Text from "../components/shared/Custom_Text";
import Fonts from "../constants/Fonts";
import Colors from "../constants/Colors";
import Images from "../constants/Images";

export default function WalletCard({
  navigation,
  nickname,
  totalBalance,
  tokenizedAssets,
  defaultCurrency
}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate({
            routeName: "WalletScreen",
            key: "WalletName",
            params: {
              navigation,
              totalBalance,
              tokenizedAssets,
              defaultCurrency,
              xrpBalance: "21.00",
              soloBalance: "0.00",
              nickname
            }
          });
        }}
        style={styles.upperStyle}
      >
        <View
          style={{ flexDirection: "row", marginHorizontal: 12, marginTop: 15 }}
        >
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <View
              style={{
                backgroundColor: Colors.lighterGray,
                height: 24,
                width: 24,
                borderRadius: 12
              }}
            />
          </View>
          <View
            style={{
              flex: 8,
              justifyContent: "center",
              alignItems: "flex-start",
              paddingLeft: 12
            }}
          >
            <Custom_Text value={nickname} size={Fonts.size.medium} isBold />
          </View>
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Ionicons name="ios-arrow-forward" size={16} color={Colors.text} />
          </View>
        </View>
        <View style={{ flexDirection: "row", marginTop: 5 }}>
          <View
            style={{
              flex: 1,
              paddingLeft: 47
            }}
          >
            <Custom_Text
              value="Total Balance:"
              size={Fonts.size.small}
              color={Colors.lighterGray}
              isBold
            />
            <Custom_Text
              value="Toknized Assets:"
              size={Fonts.size.small}
              color={Colors.lighterGray}
              isBold
            />
          </View>
          <View
            style={{
              flex: 1
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <View style={{ marginRight: 5 }}>
                <Custom_Text
                  value={`${totalBalance}`}
                  size={Fonts.size.small}
                  isBold
                />
              </View>
              <View>
                <Custom_Text
                  value={`${defaultCurrency.toUpperCase()}`}
                  size={Fonts.size.small}
                  color={Colors.lighterGray}
                  isBold
                />
              </View>
            </View>
            <Custom_Text
              value={`${tokenizedAssets}`}
              size={Fonts.size.small}
              isBold
            />
          </View>
        </View>
      </TouchableOpacity>
      <View style={styles.lowerStyle}>
        <View style={{ flexDirection: "row" }}>
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Image source={Images.xrp} style={styles.walletCardImg} />
            <View style={{ flexDirection: "row", paddingTop: 5 }}>
              <View style={{ marginRight: 5 }}>
                <Custom_Text value={`21.00`} size={Fonts.size.normal} isBold />
              </View>
              <View>
                <Custom_Text
                  value="XRP"
                  size={Fonts.size.normal}
                  color={Colors.lighterGray}
                  isBold
                />
              </View>
            </View>
          </View>
          <View
            style={{ width: 1, height: 88, backgroundColor: Colors.gray }}
          />
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Image source={Images.solo} style={styles.walletCardImg} />
            <View style={{ flexDirection: "row", paddingTop: 5 }}>
              <View style={{ marginRight: 5 }}>
                <Custom_Text value={`100.00`} size={Fonts.size.normal} isBold />
              </View>
              <View>
                <Custom_Text
                  value="SOLO"
                  size={Fonts.size.normal}
                  color={Colors.lighterGray}
                  isBold
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 176
  },
  upperStyle: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    height: 88,
    backgroundColor: Colors.gray
  },
  lowerStyle: {
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    height: 88,
    backgroundColor: Colors.headerBackground,
    justifyContent: "center"
  },
  walletCardImg: {
    height: 32,
    width: 32
  }
});
