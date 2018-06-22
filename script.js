var Counter = React.createClass({
    getInitialState: function() {
        return {
            counter: 0,
            counter2: 0
        };
    },

    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    decrement: function() {
        this.setState({
            counter2: this.state.counter2 - 1
        });
    },

    render: function() {
        return React.createElement('div', {},
                React.createElement('button', {onClick: this.decrement}, 'Licznik ' + this.state.counter2),
                React.createElement('button', {onClick: this.increment}, 'Licznik ' + this.state.counter),
        )
    }
});

var element = React.createElement(Counter);
ReactDOM.render(element, document.getElementById('app'));

// var CounterMinus = React.createClass({
//     getInitialState: function() {
//         return {
//             counter: 0
//         };
//     },

//     decrement: function() {
//         this.setState({
//             counter: this.state.counter - 1
//         });
//     },

//     render: function() {
//         return React.createElement('div', {onClick: this.decrement}, 
//                 React.createElement('button', {}, 'Licznik ' + this.state.counter),
//         )
//     }
// });


// var counterApp = React.createClass({
//     render: function() {
//         return (
//             React.createElement('div', {className: 'counterWrapper'}, 
//                 React.createElement(Counter),
//                 React.createElement(CounterMinus)
//             )
//         );
//     }
// });

// var element = React.createElement(counterApp);
// ReactDOM.render(element, document.getElementById('app'));