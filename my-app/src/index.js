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

function UserGreeting(props) {
  return <h1>Welcome back!</h1>
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if(isLoggedIn) {
    return <UserGreeting />
  }
  return <GuestGreeting />
}

ReactDOM.render(
  <Greeting isLoggedIn={false} />,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
