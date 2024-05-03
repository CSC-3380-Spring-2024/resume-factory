import React from "react";
import { Page, Text, Image, Document, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  Head: {},
  Education: {},
  Projects: {},
  Body: { paddingTop: 35, paddingBottom: 65, paddingHorizontal: 35 },
});

const PDFFile = () => {
  return (
    <Document>
      <Page style={styles.Body}>
        <Text> Lebron James! This is a Test</Text>
        <Text>Test 2!</Text>
      </Page>
    </Document>
  );
};

export default PDFFile;
