import { Component } from "react";
import "./clicker.css";
import PropTypes from 'prop-types';

class Clicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isClick: 0,
    };
  }

  amountClicker = () => {
    const { isClick } = this.state;
    const { step } = this.props;

    this.setState({
      isClick: isClick + step,
    });
  };

  render() {
    const { isClick } = this.state;
    return (
      <div>
        <p className="clickerText"> Счётчик: {isClick} </p>

        <button className="btn" onClick={this.amountClicker}>
          Добавить 
        </button>
      
      </div>
    );
  }
}

Clicker.propTypes = {
  step: PropTypes.number
  }
   
export default Clicker;
