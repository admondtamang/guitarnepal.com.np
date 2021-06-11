import { AntDesign } from "react-native-vector-icons";
import React from "react";
import { StyleSheet, Image, Text } from "react-native";
import { IconButton, List, Title, Subheading } from "react-native-paper";
import styled from "styled-components";
import { DECREASE_CART, INCREASE_CART, REMOVE_FROM_CART } from "../../redux/cart/cartSlice";
import { useDispatch } from "react-redux";
import { Toast } from "native-base";
export default function CartItem({ item }) {
    const dispatch = useDispatch();

    function handleDelete() {
        dispatch(REMOVE_FROM_CART(item));
        Toast.show({
            text: "Wrong password!",
            buttonText: "Okay",
            type: "danger",
        });
    }
    return (
        <Container>
            <Image source={{ uri: item?.images[0]?.src }} style={styles.cartImage} />
            <Description>
                <Subheading numberOfLines={2} style={{ fontWeight: "bold" }}>
                    {item.name}
                </Subheading>
                <Price>Rs. {item.price}</Price>
                <QuantityContainer>
                    <IconButton icon="plus" size={18} onPress={() => dispatch(INCREASE_CART(item))} />
                    <Subheading>{item.quantity}</Subheading>
                    <IconButton icon="minus" size={18} onPress={() => dispatch(DECREASE_CART(item))} />
                </QuantityContainer>
                <DeleteButton icon="delete" color="red" size={18} onPress={handleDelete} />
            </Description>
        </Container>
    );
}

const DeleteButton = styled(IconButton)`
    position: absolute;
    bottom: 5;
    right: 10;
`;

const QuantityContainer = styled.View`
    display: flex;
    align-items: center;
    flex-direction: row;
    max-width: 100px;
    /* background-color: lightblue; */
    border-radius: 20;
    justify-content: flex-start;
`;
const Container = styled.View`
    display: flex;
    border-radius: 5;
    justify-content: space-between;
    flex-direction: row;
    padding: 10px;
    background-color: aliceblue;
`;
const Description = styled.View`
    flex-grow: 1;
    margin-left: 10px;
`;

const Price = styled(Subheading)`
    color: grey;
    text-align: left;
`;

const styles = StyleSheet.create({
    cartImage: {
        width: 85,
        height: 90,
        marginBottom: 5,
        borderRadius: 10,
    },
});
