import React from "react";
import { Button, TextInput, View, StyleSheet } from "react-native";
import { Formik } from "formik";

export default function AddExpense() {
  return (
    <View>
      <Formik
        initialValues={{ title: "" }}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View>
            <TextInput
              onChangeText={handleChange("title")}
              onBlur={handleBlur("title")}
              value={values.title}
              style={styles.input}
            />
            <TextInput
              onChangeText={handleChange("cost")}
              onBlur={handleBlur("cost")}
              value={values.cost}
              style={styles.input}
              keyboardType="numeric"
            />
            <TextInput
              onChangeText={handleChange("category")}
              onBlur={handleBlur("category")}
              value={values.category}
              style={styles.input}
            />
            
            <Button onPress={handleSubmit} title="Submit" />
          </View>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
