import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { useSelector } from "react-redux";

const cart = () => {
  const cart = useSelector((state) => state.cart.cart);
  const total = cart
    ?.map((item) => item.item.price * item.item.quantity)
    .reduce((prev, curr) => prev + curr, 0);
  return (
    <ScrollView>
      <View
        style={{
          backgroundColor: "#0066b2",
          padding: 12,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontSize: 16, fontWeight: "500", color: "white" }}>
          Basket Total
        </Text>

        <View>
          <Text style={{ fontSize: 16, fontWeight: "500", color: "white" }}>
            Rs {total}
          </Text>
          <Text style={{ fontSize: 16, fontWeight: "500", color: "white" }}>
            for {cart.length} items
          </Text>
        </View>
      </View>

      <Text style={{ padding: 10 }}>Cart Items </Text>

      <View style={{ marginHorizontal: 12 }}>
        {cart?.map((item, index) => (
          <Pressable key={index}>
            <View>
              <Image
                style={{ width: 40, height: 40 }}
                source={{ uri: item?.item?.image }}
              />
            </View>

            <View>
              <Text>{item?.item.name}</Text>
              <Text>{item?.item.price * item?.item.quantity}</Text>
            </View>
          </Pressable>
        ))}
      </View>
    </ScrollView>
  );
};

export default cart;

const styles = StyleSheet.create({});
