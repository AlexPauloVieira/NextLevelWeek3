import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

import successImg from "../../images/success.png";

const Success = () => {
  const navigation = useNavigation();
  function handleGoToMap() {
    navigation.navigate("OrphanagesMap");
  }

  return (
    <View style={styles.container}>
      <Image source={successImg} style={styles.successImgStyle} />
      <Text style={styles.cheering}>Ebaaaaa!</Text>
      <Text style={styles.paragraph}>
        O seu cadastro deu certo, que legal ter vocês com a gente!!!
      </Text>
      <RectButton style={styles.rectButton} onPress={handleGoToMap}>
        <Text style={styles.buttonText}>Ver Mapa</Text>
      </RectButton>
    </View>
  );
};

export default Success;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#37c77f",
    justifyContent: "center",
    alignItems: "center",
  },
  successImgStyle: {
    width: "60%",
    height: 300,
  },
  cheering: {
    fontFamily: "Nunito_800ExtraBold",
    fontSize: 40,
    lineHeight: 45,
    textAlign: "center",
    color: "#fff",
    marginTop: 40,
  },
  paragraph: {
    fontFamily: "Nunito_600SemiBold",
    fontSize: 20,
    lineHeight: 30,
    textAlign: "center",
    color: "#fff",
  },
  rectButton: {
    marginTop: 20,
    width: 120,
    height: 56,
    backgroundColor: "#19C06D",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
