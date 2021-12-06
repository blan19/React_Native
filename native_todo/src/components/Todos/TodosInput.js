import React from "react";
import styled from "@emotion/native";

const TodosInput = ({ value, onSubmit, setInput }) => {
  return (
    <TodosInputContainer
      value={value}
      onSubmitEditing={onSubmit}
      onChangeText={(text) => setInput(text)}
      autoCapitalize="none"
      autoComplete={false}
      returnKeyType="done"
      maxLength={50}
      placeholder="+ Add To-Do"
    />
  );
};

export default TodosInput;

const TodosInputContainer = styled.TextInput`
  width: 100%;
  height: 50px;
  font-size: 20px;
  background-color: #f1f3f5;
  padding: 10px;
  border-radius: 10px;
  margin-top: 10px;
`;
