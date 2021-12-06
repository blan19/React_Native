import React from "react";
import styled from "@emotion/native";
import IoIcon from "react-native-vector-icons/Ionicons";
import AnIcon from "react-native-vector-icons/AntDesign";

const TodosItem = ({ content, id, onRemove, onComplete, done }) => {
  return (
    <TodosItemContainer>
      <TodosoItemText done={done}>{content}</TodosoItemText>
      <TodosItemDone onPress={() => onComplete(id)} name="checkcircle" />
      <TodosItemRemove onPress={() => onRemove(id)} name="remove-circle" />
    </TodosItemContainer>
  );
};

export default TodosItem;

const TodosItemContainer = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 50px;
  background-color: #f1f3f5;
  padding: 10px;
  border-radius: 10px;
  margin-top: 10px;
`;

const TodosoItemText = styled.Text`
  flex: 1;
  font-size: 20px;
  text-decoration-line: ${({ done }) => done && "line-through"};
`;

const TodosItemRemove = styled(IoIcon)`
  padding-left: 10px;
  font-size: 25px;
  color: #212529;
`;

const TodosItemDone = styled(AnIcon)`
  padding-left: 10px;
  font-size: 20px;
  color: #212529;
`;
