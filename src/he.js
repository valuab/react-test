import React,{Component,Fragment} from 'react'
import HeItem from './heItem'
import Hooks from './hooks/hooks'
import Hooks4 from './hooks/hooks4/Hooks4'
import Hooks5 from './hooks/hooks5'
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
            <input value={this.state.inputValue} onChange={this.inputChange.bind(this)} 
              ref= {(input)=>{this.input = input}}
            /> <button onClick={this.addList.bind(this)}>增加</button> 
            <ul ref={(ul)=>{this.ul = ul}}>
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
            <Hooks/>
            <Hooks4/>
            <Hooks5/>
          </div>
        </div>
      </Fragment>
      
    )
  }

  inputChange(){
    this.setState({
      inputValue: this.input.value
    })
  }

  addList(){
    let {list,inputValue} = this.state
    this.setState({
      list: [...list,inputValue]
    },()=>{
      console.log(this.ul.querySelectorAll('li').length)
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