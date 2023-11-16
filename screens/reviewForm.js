import React from "react";
import { GlobalStyles } from "../styles/GlobalStyles";
import { Formik } from "formik";
import { TextInput } from "react-native-gesture-handler";
import { Text, View } from "react-native";
import * as yup from "yup";
import Button from "./Button";

const validationIt = yup.object({
  title: yup.string().required().min(4),
  body: yup.string().required().min(5),
  rating: yup
    .string()
    .required()
    .test("1-5", "Rating should be between 1 to 5", (val) => {
      const rating = parseInt(val);
      return rating >= 1 && rating <= 5;
    }),
});

export default function ReviewForm({ addReviews }) {
  return (
    <View style={GlobalStyles.container}>
      <Formik
        initialValues={{ title: "", body: "", rating: "" }}
        validationSchema={validationIt}
        onSubmit={(values, { resetForm }) => {
          addReviews(values);
          resetForm();
          // console.log(values)
        }}
      >
        {(props) => (
          <View>
            <TextInput
              style={GlobalStyles.input}
              placeholder="Review This title"
              onChangeText={props.handleChange("title")}
              value={props.values.title}
              onBlur={props.handleBlur("title")}
            />
            {props.touched.title && props.errors.title && (
              <Text style={{ color: "red", textAlign: 'center' }}>{props.errors.title}</Text>
            )}

            <TextInput
              style={GlobalStyles.input}
              placeholder="Review This Body"
              onChangeText={props.handleChange("body")}
              value={props.values.body}
              onBlur={props.handleBlur("body")}
            />
            {props.touched.body && props.errors.body && (
              <Text style={{ color: 'red', textAlign: 'center' }}>{props.errors.body}</Text>
            )}

            <TextInput
              style={GlobalStyles.input}
              placeholder="Rate 1 - 5"
              keyboardType="numeric"
              onChangeText={props.handleChange("rating")}
              value={props.values.rating}
              onBlur={props.handleBlur("rating")}
            />
            {props.touched.rating && props.errors.rating && (
              <Text style={{ color: "red", textAlign: 'center' }}>{props.errors.rating}</Text>
            )}

            <Button text="submit" onPress={props.handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  );
}
