import React, { useState, useEffect } from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";

let names = [
  "Ankit",
  "Ashwani banaras",
  "Ashwani kanpur",
  //"Devesh",
  "Om ji",
  "Suvesh"
];

let tasks = [
  "afternoon utensil",
  "dinner",
  "night  utensil",
  "lunch",
  //"dinner",
  "clean house"
];

function App() {
  const [task, setTask] = useState([]);

  useEffect(() => {
    setTask(tasks);
  }, []);

  const handleShuffle = () => {
    let array = task;
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    setTask([...array]);
  };

  return (
    <View style={styles.app}>
      <Text style={styles.title}>Random Task Generator</Text>
      <View style={{ flexDirection: "row" }}>
        <View style={{ flex: 1 }}>
          <View style={styles.headerTitle}>
            <Text>Names</Text>
          </View>
          {names.map(name => (
            <View style={styles.nameContainer}>
              <Text>{name}</Text>
            </View>
          ))}
          <View style={styles.nameContainer}>
            <Text>Devesh</Text>
          </View>
        </View>
        <View style={{ flex: 1 }}>
          <View style={styles.headerTitle}>
            <Text>Tasks</Text>
          </View>
          {task.map(name => (
            <View style={styles.nameContainer}>
              <Text>{name}</Text>
            </View>
          ))}
          <View style={styles.nameContainer}>
            <Text>roti + gas clean</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.btn} onPress={() => handleShuffle()}>
        <Text>Generate Tasks</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    padding: 20
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    padding: 10
  },
  headerTitle: {
    backgroundColor: "#d3d3d2",
    padding: 10,
    borderRadius: 5,
    textAlign: "center"
  },
  nameContainer: {
    borderColor: "#d3d3d2",
    borderWidth: 1,
    padding: 10,
    margin: 2,
    borderRadius: 5
  },
  btn: {
    backgroundColor: "skyblue",
    padding: 20,
    borderRadius: 5,
    margin: 20,
    textAlign: "center"
  }
});

export default App;
