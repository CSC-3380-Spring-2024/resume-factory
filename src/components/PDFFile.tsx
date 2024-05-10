import React from "react";
import {
  Page,
  Text,
  Image,
  Document,
  StyleSheet,
  View,
  Link,
} from "@react-pdf/renderer";
import { ResumeValues } from "~/pages/profile/index";

const styles = StyleSheet.create({
  Head: {},
  Education: {},
  Projects: {},
  //   Wfull: {width: "100%"},
  Body: { paddingTop: 35, paddingBottom: 65, paddingHorizontal: 35 },
  page: {
    padding: 20,
  },
  educationItem: {
    marginBottom: 10,
  },
  heading: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
});

const PDFFile: React.FC<Partial<ResumeValues>> = (props) => {
  return (
    <Document>
      <Page style={styles.Body}>
        <Text>{props.fileName}</Text>
        <Text>{props.name}</Text>
        <Text>{props.number}</Text>
        <Text>{props.email}</Text>
        {/* Doesn't automatically go to link in new tab, couldn't find functionality in react-pdf */}
        {/* Must manually right click "open link in new tab" */}
        <View>
          <Text>Links</Text>
          {props.links?.map((item, index) => (
            <View key={index}>
              <Link src={`https://www.${item}`}>{item}</Link>
            </View>
          ))}
        </View>
        <Text>{props.skills}</Text>
        <View>
          <Text>Education</Text>
          {props.education?.map((item, index) => (
            <View key={index}>
              <Text>Degree: {item.degree}</Text>
              <Text>School: {item.school}</Text>
              <Text>Year: {item.year}</Text>
            </View>
          ))}
        </View>
        {/* {props.education?.map((item) => (
          <Text>{item.school}</Text>
        ))}
        {props.education?.map((item) => (
          <Text>{item.year}</Text>
        ))} */}
        {/* <Text>{props.}</Text>
        <Text>{props.}</Text>
        <Text>{props.}</Text> */}
      </Page>
    </Document>
  );
};

export default PDFFile;
