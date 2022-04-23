import React, { Component } from "react";
import { StyleSheet, Text, TextInput, Alert, Button, View } from "react-native";
import { Formik } from "formik";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { addCategory } from "../reducers/categoriesSlice";

export default function AddExpense() {
  const dispatch = useDispatch();

  return (
    <View style={styles.mainWrapper}>
      <Formik
        initialValues={{
          title: "",
        }}
        onSubmit={(values, actions) => {
          actions.resetForm();
          dispatch(addCategory(values.title));
        }}
        validationSchema={yup.object().shape({
          title: yup.string().required("Name is required."),
          cost: yup.number().required("Cost is required."),
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
              value={values.title}
              style={styles.customCss}
              onBlur={() => setFieldTouched("title")}
              onChangeText={handleChange("title")}
              placeholder="Expense Title"
            />
            {touched.title && errors.title && (
              <Text style={{ fontSize: 11, color: "red" }}>{errors.title}</Text>
            )}
            <TextInput
              value={values.cost}
              style={styles.customCss}
              onBlur={() => setFieldTouched("cost")}
              onChangeText={handleChange("cost")}
              placeholder="Expense Cost"
            />
            {touched.cost && errors.cost && (
              <Text style={{ fontSize: 11, color: "red" }}>{errors.cost}</Text>
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
  mainWrapper: {
    padding: 40,
  },
});
