import React from 'react'
import './App.css'
import TableBox from './Table/index'
import {Input, Button} from 'antd';
import {Provider} from 'react-redux'
import {store} from './Store/index'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      newVal: ''
    }
  }

  uninstall;

  componentWillMount() {
    this.uninstall = store.subscribe(App.listen);
  }

  changeInputValue(e) {
    e.persist();
    this.setState({
      newVal: e.target.value
    })
  }

  add() {
    store.dispatch({
      type:'R2_ADD',
      data:this.state.newVal
    })
  }

  dis() {
    store.dispatch({
      type: 'ADD',
      value: 3
    });

    store.dispatch({
      type: 'SHOW'
    });
    console.log(store.getState());

    this.uninstall()
  }

  static listen() {
    console.log(store.getState().reducer2);
  }

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Button type='danger' onClick={() => this.dis()}>Redux.dispatch</Button>
          <Input onInput={this.changeInputValue.bind(this)} value={this.state.newVal}/>
          <Button type="primary" onClick={() => this.add()}>Click</Button>
          <TableBox data={this.state.data}/>
        </div>
      </Provider>
    )
  }
}

export default App
