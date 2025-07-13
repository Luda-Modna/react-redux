import React from 'react';
import { connect } from 'react-redux';
import { changeTheme } from '../../store/slices/themeSlice';

function ThemeSwitcher ({ isLight, setNewTheme }) {
  const themeChangeHandler = () => {
    setNewTheme(!isLight);
  };

  return (
    <button onClick={themeChangeHandler}>
      {isLight ? 'Set Dark' : 'Set Light'}
    </button>
  );
}

const mapStateToProps = state => {
  return state.theme;
};

const mapDispathToProps = dispatch => {
  return { setNewTheme: value => dispatch(changeTheme(value)) };
};

export default connect(mapStateToProps, mapDispathToProps)(ThemeSwitcher);
