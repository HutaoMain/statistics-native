import { View, Text, StyleSheet } from "react-native";
import React from "react";

interface MeanCalculatorProps {
  data: number[];
}

const MeanCalculator = ({ data }: MeanCalculatorProps) => {
  const mean = data.reduce((sum, num) => sum + num, 0) / data.length;

  return (
    <View>
      <Text style={styles.resultContainer}>
        Mean:{" "}
        {Number.isNaN(mean)
          ? "Please enter the data in Input box to compute mean."
          : mean}
      </Text>
      <Text style={styles.definition}>
        The Mean, also known as the average, is calculated by summing all the
        numbers in your dataset and then dividing the sum by the total number of
        data points.
      </Text>
    </View>
  );
};

export default MeanCalculator;

const styles = StyleSheet.create({
  resultContainer: {
    width: "70%",
  },
  definition: {
    width: "70%",
    marginTop: 10,
    fontStyle: "italic",
    color: "gray",
  },
});
