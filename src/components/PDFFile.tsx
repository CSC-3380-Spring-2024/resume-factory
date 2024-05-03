import React from "react";
import { Page, Text, Image, Document, StyleSheet } from "@react-pdf/renderer";
import { ResumeValues } from "~/pages/profile/index";

const styles = StyleSheet.create({
  Head: {},
  Education: {},
  Projects: {},
  //   Wfull: {width: "100%"},
  Body: { paddingTop: 35, paddingBottom: 65, paddingHorizontal: 35 },
});

const PDFFile: React.FC<Partial<ResumeValues>> = (props) => {
  return (
    <Document>
      <Page style={styles.Body}>
        <Text>{props.name}</Text>
        <Text>Test 2!</Text>
        <Text>{props.number}</Text>
        <Text>{props.email}</Text>
        <Text>{props.links}</Text>
        <Text>{props.skills}</Text>
      </Page>
    </Document>
  );
};

export default PDFFile;
