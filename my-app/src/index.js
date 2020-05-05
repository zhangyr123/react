import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

// function formatName(user) {
//   return user.firstName + ' ' + user.lastName
// }

// function getGreeting(user) {
//   if (user) {
//     return <h1>Hello, {formatName(user)}!</h1>
//   }
//   return <h1>Hello, Stranger.</h1>
// }

// const user = {
//   firstName: 'Harper',
//   lastName: 'Perez'
// }

// const user = null

// const element = (
//   getGreeting(user)
// )

// const element = (
//   <h1 className="greeting">
//     Hello, world!
//   </h1>
// )

// const element = React.createElement(
//   'h1',
//   {className: 'greeting'},
//   'Hello, world!'
// )

// 计时器
// function tick() {
//   const element = (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   )
//   ReactDOM.render(element, document.getElementById('root'))
// }

// setInterval(tick, 1000)

// ReactDOM.render(
//   // <React.StrictMode>
//   //   <App />
//   // </React.StrictMode>,
//   element,
//   document.getElementById('root')
// );

// const props = {
//   name: 'Bob'
// }
// function Welcome(props) {
// return <h1>Hello, {props.name}</h1>
// }
// ReactDOM.render(
//   Welcome(props),
//   document.getElementById('root')
// )


// class Welcome extends React.Component {
//   render() {
//     return <h1>Hello, {this.props.name}</h1>
//   }
// }
// 使用自定义组件
// const element = <Welcome name="zhangyr"></Welcome>
// 使用组合组件
// function App() {
//   return (
//     <div>
//       <Welcome name="Sara" />
//       <Welcome name="Cahal" />
//       <Welcome name="Edite" />
//     </div>
//   )
// }
// ReactDOM.render(
//   <App/>,
//   document.getElementById('root')
// )

// 提取组件
// function Avatar(props) {
//   return (
//     <img className="Avatar"
//       src={props.user.avatarUrl}
//       alt={props.user.name}
//     />
//   )
// }

// function UserInfo(props) {
//   return (
//     <div className="userInfo">
//       <Avatar user={props.user} />
//       <div className="UserInfo-name">
//         {props.user.name}
//       </div>
//     </div>
//   )
// }

// function formatDate(date) {
//   return date.toLocaleDateString()
// }

// function Comment(props) {
//   return (
//     <div className="Comment">
//       <UserInfo user={props.author} />
//       <div className="Comment-text">
//         {props.text}
//       </div>
//       <div className="Comment-date">
//         {formatDate(props.date)}
//       </div>
//     </div>
//   )
// }
// const comment = {
//   date: new Date(),
//   text: 'I hope you enjoy learning React!',
//   author: {
//     name: 'Hello Kitty',
//     avatarUrl: 'https://placekitten.com/g/64/64',
//   },
// };
// ReactDOM.render(
//   <Comment 
//     date={comment.date}
//     text={comment.text}
//     author={comment.author}
//   />,
//   document.getElementById('root')
// )

// 封装可复用的函数组件
// function Clock(props) {
//   return (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {props.date.toLocaleTimeString()}.</h2>
//     </div>
//   )
// }

// 封装class组件
// class Clock extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>Hello, world!</h1>
//         <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
//       </div>
//     )
//   }
// }
// class Clock extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {date: new Date()}
//   }

//   componentDidMount() {
//     // 挂载：组件已经被渲染到DOM中后运行
//     this.timerID = setInterval(
//       () => this.tick(),
//       1000
//     )
//   }

//   componentWillUnmount() {
//     // 卸载
//     clearInterval(this.timerID)
//   }

//   tick() {
//     this.setState({
//       date: new Date()
//     })
//   }

//   render() {
//     return (
//       <div>
//         <h1>Hello, world!</h1>
//         <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
//       </div>
//     )
//   }
// }

// ReactDOM.render(
//   <Clock />,
//   document.getElementById('root')
// )

// function ActionLink() {
//   function handleClick(e) {
//     e.preventDefault()
//     console.log('The link was clicked.')
//   }

//   return (
//     <a href="#" onClick={handleClick}>  
//       Click me
//     </a>
//   )
// }

// function App() {
//   return (
//     <div>
//       <Clock />
//       <Clock />
//       <Clock />
//       <ActionLink />
//     </div>
//   )
// }

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// )

// props 和 state 会异步更新,所以要放在一个函数里面
// this.setState((state, props) => ({
//   counter: state.counter + props.increment
// }))


// function tick() {
//   ReactDOM.render(
//     // <Clock date={new Date()} />,
//     <Clock />,
//     document.getElementById('root')
//   )
// }

// setInterval(tick, 1000)

// function UserGreeting(props) {
//   return <h1>Welcome back!</h1>
// }

// function GuestGreeting(props) {
//   return <h1>Please sign up.</h1>
// }

// function Greeting(props) {
//   const isLoggedIn = props.isLoggedIn
//   if(isLoggedIn) {
//     return <UserGreeting />
//   }
//   return <GuestGreeting />
// }

// function LoginButton(props) {
//   return (
//     <button onClick={props.onClick}>
//       Login
//     </button>
//   )
// }

// function LogoutButton(props) {
//   return (
//     <button onClick={props.onClick}>
//       Logout
//     </button>
//   )
// }

// class LoginControl extends React.Component {
//   constructor(props) {
//     super(props)
//     this.handleLoginClick = this.handleLoginClick.bind(this)
//     this.handleLogoutClick = this.handleLogoutClick.bind(this)
//     this.state = {isLoggedIn: false}
//   }

//   handleLoginClick() {
//     this.setState({isLoggedIn: true})
//   }

//   handleLogoutClick() {
//     this.setState({isLoggedIn: false})
//   }

//   render() {
//     const isLoggedIn = this.state.isLoggedIn
//     // let button
//     // if(isLoggedIn) {
//     //   button = <LogoutButton onClick={this.handleLogoutClick} />
//     // } else {
//     //   button = <LoginButton onClick={this.handleLoginClick} />
//     // }

//     return (
//       <div>
//         The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in
//         <Greeting isLoggedIn={isLoggedIn} />
//         {/* {button} */}
//         {isLoggedIn
//           ? <LogoutButton onClick={this.handleLogoutClick} />
//           : <LoginButton onClick={this.handleLoginClick} />
//         }
//       </div>
//     )
//   }
// }

// ReactDOM.render(
//   <LoginControl />,
//   document.getElementById('root')
// )

// function Mailbox(props) {
//   const unreadMessages = props.unreadMessages
//   return (
//     <div>
//       <h1>Hello!</h1>
//       {unreadMessages.length > 0 && 
//         <h2>
//           You have {unreadMessages.length} unread messages.
//         </h2>
//       }
//     </div>
//   )
// }

// const messages = ['React', 'Re: React', 'Re:Re: React']
// ReactDOM.render(
//   <Mailbox unreadMessages={messages} />,
//   document.getElementById('root')
// )

// function WarningBanner(props) {
//   // 返回null阻止渲染
//   if(!props.warn) {
//     return null
//   }

//   return (
//     <div className="warning">
//       Warning!
//     </div>
//   )
// }

// class Page extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {showWarning: true}
//     this.handleToggleClick = this.handleToggleClick.bind(this)
//   }

//   handleToggleClick() {
//     this.setState(state => ({
//       showWarning: !state.showWarning
//     }))
//   }

//   render() {
//     return (
//       <div>
//         <WarningBanner warn={this.state.showWarning} />
//         <button onClick={this.handleToggleClick}>
//           {this.state.showWarning ? 'Hide' : 'Show'}
//         </button>
//       </div>
//     )
//   }
// }

// ReactDOM.render(
//   <Page />,
//   document.getElementById('root')
// )

// function ListItem(props) {
//   return <li>{props.value}</li>
// }

// function NumberList(props) {
//   const numbers = props.numbers
//   const listItems = numbers.map((number, index) => 
//     // <li key={index}>{number}</li>
//     <ListItem key={index} value={number} />
//   )
//   return (
//     <ul>{listItems}</ul>
//   )
// }

// const numbers = [1, 2, 3, 4, 5]
// ReactDOM.render(
//   <NumberList numbers={numbers} />,
//   document.getElementById('root')
// )

// class NameForm extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {value: ''}

//     this.handleChange = this.handleChange.bind(this)
//     this.handleSubmit = this.handleSubmit.bind(this)
//   }

//   handleChange(event) {
//     this.setState({value: event.target.value})
//   }

//   handleSubmit(event) {
//     alert('提交的名字： ' + this.state.value)
//     // event.preventDefault()
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           名字：
//           <input type="text" value={this.state.value} onChange={this.handleChange} />
//         </label>
//         <input type="submit" value="提交" />
//       </form>
//     )
//   }
// }

// ReactDOM.render(
//   <NameForm />,
//   document.getElementById('root')
// )

class EssayForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({value: event.target.value})
  }

  handleSubmit(event) {
    alert('提交的文章：' + this.state.value)
    event.preventDefault()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          文章:
          <textarea placeholder="请撰写一篇关于你喜欢的 DOM 元素的文章" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="提交" />
      </form>
    )
  }
}

ReactDOM.render(
  <EssayForm />,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
