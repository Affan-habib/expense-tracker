import React, { useState } from "react";
import { Button, TextInput, View, StyleSheet } from "react-native";
import { Formik } from "formik";
import { addExpense } from "../reducers/expensesSlice";
import { useDispatch } from "react-redux";
import DatePicker from "react-native-date-picker";

export default function AddExpense() {
  const dispatch = useDispatch();
  const [date, setDate] = React.useState(new Date());
  const [open, setOpen] = useState(false);
  return (
    <View>
      <Formik
        initialValues={{
          id: "255",
          title: "",
          category: "",
          date: "",
          cost: 0,
        }}
        onSubmit={(values, actions) => {
          actions.resetForm();
          dispatch(addExpense(values));
        }}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          setFieldValue,
        }) => (
          <View>
            <TextInput
              onChangeText={handleChange("title")}
              onBlur={handleBlur("title")}
              value={values.title}
              style={styles.input}
              placeholder="title"
            />
            <TextInput
              onChangeText={handleChange("category")}
              onBlur={handleBlur("category")}
              value={values.category}
              style={styles.input}
              placeholder="Category"
            />
            <TextInput
              onChangeText={handleChange("date")}
              onBlur={handleBlur("date")}
              value={values.date}
              style={styles.input}
              placeholder="Date"
            />
            <TextInput
              onChangeText={handleChange("cost")}
              onBlur={handleBlur("cost")}
              value={values.cost}
              style={styles.input}
              keyboardType="numeric"
              placeholder="Cost"
            />
            <Button title="Open" onPress={() => setOpen(true)} />
            <DatePicker mode="datetime" date={new Date} />
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
