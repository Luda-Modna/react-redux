import { type } from '@testing-library/user-event/dist/type';
import React from 'react';
import { connect } from 'react-redux';

function Counter (props) {
  const { count, step, incrementCount, decrementCount, setNewStep } = props;

  const decCount = () => {
    decrementCount();
  };

  const incCount = () => {
    incrementCount();
  };

  const stepChangeHandler = ({ target: { value } }) => {
    setNewStep(Number(value));
  };

  return (
    <div>
      Count: {count}
      <button onClick={decCount}>-</button>
      <button onClick={incCount}>+</button>
      <input type='number' value={step} onChange={stepChangeHandler} />
    </div>
  );
}

const mapStateToProps = state => {
  return state;
};

const mapDispathToProps = dispatch => {
  return {
    incrementCount: () => {
      dispatch({ type: 'increment' });
    },
    decrementCount: () => {
      dispatch({ type: 'decrement' });
    },
    setNewStep: value => {
      dispatch({ type: 'setStep', value });
    },
  };
};

const withAccessToStore = connect(mapStateToProps, mapDispathToProps);

export default withAccessToStore(Counter);
