import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Ionicons, MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";

import Custom_Text from '../shared/Custom_Text';
import Fonts from "../../constants/Fonts";
import Colors from "../../constants/Colors";

export default function Custom_IconButton({
  icon,
  onPress,
  disabled,
  color,
  text,
  style,
  textStyle,
  size,
  textSize,
}) {
  if (text) {

    if (icon === "questioncircle") {
      return (
        <View style={styles.iconButtonContainer}>
          <TouchableOpacity
            onPress={onPress}
            style={[styles.text, { ...textStyle }]}
            disabled={disabled}
            activeOpacity={0.5}        
          >
            <Custom_Text
              value={text}
              size={textSize ? textSize : Fonts.size.medium}
              isBold
              color={Colors.text}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={onPress}
            style={[styles.button, { ...style }]}
            disabled={disabled}
            activeOpacity={0.5}
          >
            <AntDesign name={icon} size={size ? size : Fonts.size.h5} color={color} />
          </TouchableOpacity>        
        </View>
      )
    }

    return (
      <View style={styles.iconButtonContainer}>
        <TouchableOpacity
          onPress={onPress}
          style={[styles.text, { ...textStyle }]}
          disabled={disabled}
          activeOpacity={0.5}        
        >
          <Custom_Text
            value={text}
            size={Fonts.size.medium}
            // style={{ marginVertical: 50, marginHorizontal: 10 }}
            isBold
            color={Colors.text}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onPress}
          style={[styles.button, { ...style }]}
          disabled={disabled}
          activeOpacity={0.5}
        >
          <Ionicons name={icon} size={Fonts.size.h5} color={color} />
        </TouchableOpacity>        
      </View>
    )
  };

  if (icon === "content-copy" || icon === "qrcode") {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={[styles.button, { ...style }]}
        disabled={disabled}
        activeOpacity={0.5}
      >
        <MaterialCommunityIcons name={icon} size={size ? size : Fonts.size.h5} color={color} />
      </TouchableOpacity>
    );  
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, { ...style }]}
      disabled={disabled}
      activeOpacity={0.5}
    >
      <Ionicons name={icon} size={size ? size : Fonts.size.h5} color={color} />
    </TouchableOpacity>
  );
}

Custom_IconButton.propTypes = {
  onPress: PropTypes.func,
  style: PropTypes.shape({})
};

Custom_IconButton.defaultProps = {
  onPress: () => {},
  disabled: false,
  color: Colors.text,
  size: Fonts.size.h5,
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    height: 40,
    width: 40,
    backgroundColor: Colors.darkRed
  },
  iconButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    paddingRight: 20,
  }
});
