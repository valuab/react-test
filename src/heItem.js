import React, {
  Component
} from 'react';

class heItem extends Component {
  state = {}

  constructor(props){
    super(props)
    this.deleteClick = this.deleteClick.bind(this)
  }

  render() {
    return (
      <li onClick={this.deleteClick}>{this.props.content}</li>
    );
  }

  deleteClick(e){
    // 父子组件方法传递
    this.props.deleteItem(this.props.index)
  }
}

export default heItem;