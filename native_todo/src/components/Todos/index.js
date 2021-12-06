import React, { useState } from "react";
import styled from "@emotion/native";
import { useWindowDimensions } from "react-native";
import TodosInput from "./TodosInput";
import EnIcon from "react-native-vector-icons/Entypo";
import TodosItem from "./TodosItem";

const TestData = [
  {
    id: 0,
    content: "안녕하세요",
    done: false,
  },
  {
    id: 1,
    content: "반가워요",
    done: false,
  },
];

const Todos = () => {
  const width = useWindowDimensions().width;
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState(TestData);
  const onSubmit = () => {
    const id = new Date().getTime();
    const buffer = {
      id,
      content: input,
      done: false,
    };
    setTodos([...todos, buffer]);
    setInput("");
  };
  const onRemove = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };
  const onComplete = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };
  const renderItem = ({ item }) => (
    <TodosItem
      onRemove={onRemove}
      onComplete={onComplete}
      content={item.content}
      id={item.id}
      done={item.done}
    />
  );
  return (
    <TodosContainer width={width}>
      <TodosInput value={input} setInput={setInput} onSubmit={onSubmit} />
      <TodosEnIcon name="dots-three-vertical" />
      <TodosFlatList
        data={todos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </TodosContainer>
  );
};

export default Todos;

const TodosContainer = styled.View`
  flex: 1;
  width: ${({ width }) => width - 40}px;
  padding: 0 10px;
  align-items: center;
`;

const TodosEnIcon = styled(EnIcon)`
  font-size: 20px;
  margin: 10px 0;
`;

const TodosFlatList = styled.FlatList`
  width: 100%;
`;
