var Counter = React.createClass({
    getInitialState: function() {
        return {
            counter: 0,
            // counter2: 0
        };
    },

    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        });
    },

    getDefaultProps: function() {
         console.log('ustaw domyślne właściwości na obiekt z jakimiś danymi');
    },

    componentWillMount: function() {
         console.log('komponent zostanie zamontowany po czym coś tam się stanie, nie mam pomysłu');
    },

    componentDidMount: function() {
         console.log('komponent wywołany po momencie wywołania metody render, widnieje na stronie w drzewie DOM, na razie brak pomysłu na wykorzystanie');
    },

    componentWillReceiveProps: function() {
         console.log('przekazanie komponentowi nowych propów, dokumentacja reacta wskazuje, że używanie go nie jest zalecane i zostanie wkrótce zastąpione');
    },

    shouldComponentUpdate: function() {
        console.log('metoda wywoływana w momencie, gdy zwróci wartość true i zaisntnieje potrzeba zaktualizowania komponentu, co by to miało być, nie ma pomysłu');
        return true;
    },

    componentWillUpdate: function() {
         console.log('zaktualizowanie komponentu');
    },

    componentDidUpdate: function() {
         console.log('metoda wywoływana od razu w momencie aktualizacji');
    },

    componentWIllUnmount: function() {
         console.log('metoda wywoływana bezpośrednio przed odmontowaniem komponentu, służy do czyszczenia, inwalidacji liczników, itp, realnego pomysłu brak');
    },

    render: function() {
        return React.createElement('div', {},
                React.createElement('button', {onClick: this.decrement}, '-'),
                React.createElement('span', {}, this.state.counter),
                React.createElement('button', {onClick: this.increment}, '+'),
        )
    }
});

var element = React.createElement('div', {}, 
    React.createElement(Counter), 
    React.createElement(Counter), 
    React.createElement(Counter)
);

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