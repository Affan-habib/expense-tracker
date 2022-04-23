import React from "react";
import { Button, TextInput, View, StyleSheet } from "react-native";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { addCategory } from "../reducers/categoriesSlice";
export default function AddCategory() {
  const dispatch = useDispatch();

  return (
    <View>
      <Formik
        initialValues={{ title: "" }}
        onSubmit={(values) => dispatch(addCategory(values.title))}
      >
        {({ handleChange, handleBlur, handleSubmit,isSubmitting, values }) => (
          <View>
            <TextInput
              onChangeText={handleChange("title")}
              onBlur={handleBlur("title")}
              value={values.title}
              style={styles.input}
              placeholder="Enter Expense Category"
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
