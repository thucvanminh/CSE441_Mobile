// components/ProductItem.tsx
import React from "react";
import { StyleSheet } from "react-native";
import { Card, Text, Button } from "react-native-paper";

type ProductProps = {
    name: string;
    price: number;
    description: string;
    thumbnail: string;
};

const ProductItem = ({ name, price, description, thumbnail }: ProductProps) => {
    return (
        <Card style={styles.card}>
            {thumbnail && <Card.Cover source={{ uri: thumbnail }} />}
            <Card.Title title={name} subtitle={`$${price}`} />
            <Card.Content>
                <Text numberOfLines={2}>{description}</Text>
            </Card.Content>
            <Card.Actions>
                <Button onPress={() => {}}>Detail</Button>
                <Button onPress={() => {}}>Delete</Button>
            </Card.Actions>
        </Card>
    );
};

const styles = StyleSheet.create({
    card: {
        marginBottom: 10,
    },
});

export default ProductItem;
