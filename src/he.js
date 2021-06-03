import React,{Component,Fragment} from 'react'
import HeItem from './heItem'
class he extends Component {
  constructor(props){
    super(props)
    this.state = {
      inputValue:'shuju',
      list:['头部','背部']
    }
  }

  render(){
    return(
      <Fragment>
        {/* 小 demo */}
        <div>
          <div>
            <input value={this.state.inputValue} onChange={this.inputChange.bind(this)} /> <button onClick={this.addList.bind(this)}>增加</button> 
            <ul>
              {
                this.state.list.map((item,index) => {
                  return (
                    <HeItem 
                      key={item + index}
                      content={item}
                      index={index}
                      deleteItem={this.deleteItem.bind(this)}
                    />
                  )
                })
              }
            </ul>
          </div>
        </div>
      </Fragment>
      
    )
  }

  inputChange(e){
    this.setState({
      inputValue: e.target.value
    })
  }

  addList(){
    let {list,inputValue} = this.state
    this.setState({
      list: [...list,inputValue]
    })
  }

  deleteItem(e){
    let {list} = this.state
    list.splice(e,1)
    this.setState({
      list: [...list]
    })
  }
}

export default he