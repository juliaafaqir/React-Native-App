import React, { setState, useState, useEffect } from "react";
import { TextInput, StyleSheet, View, Text, StatusBar } from "react-native";
import io from "socket.io-client";

import colors from "../config/colors";

const socket = io("http://192.168.1.17:3000");

export default function MessagesScreen() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  
  useEffect(() => {
    const socket = io("http://192.168.1.17:3000");
    socket.on("chat message", (msg) => {
      setMessages([...messages, msg]);
    });
  }, []);

  const submitChatMessage = () => {
    socket.emit("chat message", message);
    setMessage("");
  };

  const chatMessages = messages.map((chatMessage) => (
    <Text>{chatMessage}</Text>
  ));

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        autoCorrect={false}
        value={message}
        onSubmitEditing={submitChatMessage}
        onChangeText={(message) => {
          setMessage(message);
        }}
      />
      {chatMessages}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  input: {
    height: 40,
    width: "80%",
    borderWidth: 2,
  },
});
