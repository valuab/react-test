import React, {
  Component
} from 'react';
import PropTypes from 'prop-types';

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

// 传值校验
heItem.propTypes = {
  content: PropTypes.string,
  index:PropTypes.number,
  deleteClick: PropTypes.func,
}

export default heItem;