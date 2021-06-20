import React from 'react'
import { TODO } from '../types'

type TodoFormProps = {
  handleSubmit: (todo: TODO, callback: Function) => void;
}

class TodoForm extends React.Component<TodoFormProps, TODO> {
  state: TODO = {
    id: 0,
    title: "",
    content: ""
  }

  handleSubmit = () => {
    this.props.handleSubmit(this.state, () => {
      this.setState({
        id: this.state.id + 1,
        title: "",
        content: ""
      })
    })
  }

  render() {
    return (
      <div className="TodoForm">
        <h3>Create a new TODO</h3>
        <div>
          <input
            placeholder='title'
            value={this.state.title}
            onChange={(e: React.FormEvent<HTMLInputElement>) =>
              this.setState({ title: e.currentTarget.value })} />
        </div>
        <div>
          <input
            placeholder='content'
            value={this.state.content}
            onChange={(e: React.FormEvent<HTMLInputElement>) =>
              this.setState({ content: e.currentTarget.value })} />
        </div>
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    )
  }
}



export default TodoForm
