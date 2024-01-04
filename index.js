const root = document.querySelector('#root')

// const Title = () => (
//     <h3 
//     id='title' 
//     onMouseEnter={() => console.log('mouse enter')}>TEST</h3>
// );
// const Button = () => (
//     <button 
//     style={{backgroundColor: 'tomato'}} 
//     onClick = {() => console.log('clicked')}>Click me</button>
// )
const span = React.createElement('h3', {
    onMouseEnter: () => console.log('mouse enter')
}, 'TEST')

const button = React.createElement('button', {
    onClick: () => {console.log('clicked')}
}, 'Click me')

// const Container = (
//     <div>
//         <Title />
//         <Button />
//     </div>
// );
const container = React.createElement('div', null, [span, button])
ReactDOM.render(App, root);