import React from "react";
import { connect } from "react-redux";
import { Todo, fetchTodos } from "../actions";
import { StoreState } from "../reducers";

interface AppProps {
  todos: Todo[];
  fetchTodos(): any;
}
export class _App extends React.Component<AppProps> {
  return() {
    <div>
      <h1>Hello there!</h1>
    </div>;
  }
}

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
  return { todos: todos };
};

export const Work = connect(mapStateToProps, { fetchTodos })(_App);
