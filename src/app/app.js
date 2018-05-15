import React, {Component} from 'react';
import PropTypes from 'prop-types'

class App extends Component {
    render(){
        const {
            value, onIncrement, onDecrement
        } = this.props;
        return(
            <div>
                Value : {value}
                <button onClick={onIncrement}>
                    +
                </button>
                <button onClick={onDecrement}>
                    -
                </button>
            </div>
        );
    }
}

App.propTypes = {
    value: PropTypes.number.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired
}

export default App;