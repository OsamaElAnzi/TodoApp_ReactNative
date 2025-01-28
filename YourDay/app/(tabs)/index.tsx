import { StyleSheet, View, Pressable, Text, Modal, Alert } from "react-native";
import React, {useState} from "react";
import { ThemedText } from "@/components/ThemedText";

import AntDesign from "@expo/vector-icons/AntDesign";

export default function HomeScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <View style={styles.title}>
        <ThemedText type="title">Your Day</ThemedText>
      </View>
      <View style={styles.mainContainer}>
        <Pressable style={styles.button} onPress={() => setModalVisible(true)}>
          <AntDesign name="plus" size={24} color="black" />
        </Pressable>
      </View>
      <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
        <View style={styles.modalText}>
          <Text>Modal Content</Text>
          <Pressable
          onPress={() => {
            setModalVisible(!modalVisible);
          }}>
              <Text>Close</Text>
            </Pressable>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    flexDirection: "column",
    alignItems: "center",
    paddingVertical: 36,
    gap: 8,
  },
  mainContainer: {
    flex: 1,
    paddingHorizontal: 16,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  button: {
    backgroundColor: "lightblue",
    padding: 20,
    borderRadius: 10,
  },
  modalText: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    elevation: 2,
  }
});
