import React, { Component } from "react";
import { StyleSheet, Text, TextInput, Alert, Button, View } from "react-native";
import { Formik } from "formik";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { addCategory } from "../reducers/categoriesSlice";
// import Categories from "./Categories";

export default function AddCategory() {
  const dispatch = useDispatch();

  return (
    <View>
      <Formik
      initialValues={{
        name: "",
      }}
      onSubmit={(values, actions) => {
        actions.resetForm();
        dispatch(addCategory(values.name));
      }}
      validationSchema={yup.object().shape({
        name: yup.string().required("Name is required."),
      })}
    >
      {({
        values,
        errors,
        setFieldTouched,
        touched,
        handleChange,
        isValid,
        handleSubmit,
      }) => (
        <View>
          <TextInput
            value={values.name}
            style={styles.customCss}
            onBlur={() => setFieldTouched("name")}
            onChangeText={handleChange("name")}
            placeholder="Category Name"
          />
          {touched.name && errors.name && (
            <Text style={{ fontSize: 11, color: "red" }}>{errors.name}</Text>
          )}
          <Button
            color="blue"
            title="Save"
            disabled={!isValid}
            onPress={handleSubmit}
          />
        </View>
      )}
    </Formik>
    {/* <Categories/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  customCss: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 12,
    borderColor: "#cccccc",
  },
});
