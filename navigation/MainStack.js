import React from "react";
import { createStackNavigator } from "react-navigation-stack";

import { handleTransition } from "./Transitions";
import HomeScreen from "../containers/HomeScreen";
import LinksScreen from "../containers/LinksScreen";
import SettingsScreen from "../containers/SettingsScreen";
import WalletsScreen from "../containers/WalletsScreen";
import AddWalletScreen from "../containers/AddWalletScreen";
import CreateNewWalletScreen from "../containers/CreateNewWalletScreen";
import YourRecoveryPhraseScreen from "../containers/YourRecoveryPhraseScreen";
import ImportExistingWalletScreen from "../containers/ImportExistingWalletScreen";
import WalletScreen from "../containers/WalletScreen";
import CreatePinScreen from "../containers/CreatePinScreen";
import UnlockScreen from "../containers/UnlockScreen";
import SetupUnlockScreen from "../containers/SetupUnlockScreen";
import ReceiveScreen from "../containers/ReceiveScreen";
import SendScreen from "../containers/SendScreen";
import ActivateWalletScreen from "../containers/ActivateWalletScreen";
import RecoveryPhraseTestScreen from "../containers/RecoveryPhraseTestScreen";
import ChangeWalletNicknameScreen from "../containers/ChangeWalletNicknameScreen";

const MainStack = createStackNavigator(
  {
    // HomeScreen: HomeScreen,
    HomeScreen: ({ navigation, screenProps }) => {
      console.log(screenProps.isPinCreated);
      if (!screenProps.userIdentityConfirmed) {
        if (!screenProps.isPinCreated) {
          return (
            <CreatePinScreen
              screenProps={{
                rootNavigation: navigation
              }}
            />
          );
        } else {
          return (
            <UnlockScreen
              screenProps={{
                rootNavigation: navigation
              }}
            />
          );
        }
      } else {
        return <HomeScreen screenProps={{ rootNavigation: navigation }} />;
      }
    },
    LinksScreen: LinksScreen,
    SettingsScreen: SettingsScreen,
    WalletsScreen: WalletsScreen,
    WalletScreen: WalletScreen,
    AddWalletScreen: AddWalletScreen,
    CreateNewWalletScreen: CreateNewWalletScreen,
    YourRecoveryPhraseScreen: YourRecoveryPhraseScreen,
    ImportExistingWalletScreen: ImportExistingWalletScreen,
    SetupUnlockScreen: SetupUnlockScreen,
    CreatePinScreen: CreatePinScreen,
    ReceiveScreen: ReceiveScreen,
    ActivateWalletScreen: ActivateWalletScreen,
    SendScreen: SendScreen,
    RecoveryPhraseTestScreen: RecoveryPhraseTestScreen,
    ChangeWalletNicknameScreen: ChangeWalletNicknameScreen
  },
  {
    headerMode: "none",
    initialRouteName: "WalletsScreen",
    transitionConfig: nav => handleTransition(nav)
  }
);

export default MainStack;
