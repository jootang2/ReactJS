const root = document.querySelector('#root')

const span = React.createElement('h3', {
    onMouseEnter: () => console.log('mouse enter')
}, 'TEST')

const button = React.createElement('button', {
    onClick: () => {console.log('clicked')}
}, 'Click me')

const container = React.createElement('div', null, [span, button])

ReactDOM.render(container, root);