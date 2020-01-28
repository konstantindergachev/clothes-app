import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import {
  loginUser,
  loginUserWithGoogle,
} from '../../../redux/actions/userActions';
import Button from '../../ui/button/Button';
import FormField from '../../ui/form-field/FormField';
import {
  generateData,
  isFormValid,
  update,
} from '../../ui/form-field/formValidation';
import './Login.scss';

class Login extends React.Component {
  state = {
    formError: '',
    formSuccess: '',
    formData: {
      email: {
        element: 'input',
        value: '',
        config: {
          name: 'email_input',
          type: 'email',
          label: 'Введите Email',
        },
        validation: {
          required: true,
          email: true,
        },
        valid: false,
        touched: false,
        validationMessage: '',
      },
      password: {
        element: 'input',
        value: '',
        config: {
          name: 'password_input',
          type: 'password',
          label: 'Введите Пароль',
        },
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
        validationMessage: '',
      },
    },
  };
  static getDerivedStateFromProps(props, state) {
    if (state.formError === '') {
      return {
        formError: props.error,
      };
    }
    return null;
  }
  updateForm = (el) => {
    const newFormData = update(el, this.state.formData, 'login');
    this.setState({
      formError: false,
      formData: newFormData,
    });
  };
  handleSubmit = (ev) => {
    ev.preventDefault();
    const { loginUser, error } = this.props;
    const dataToSubmit = generateData(this.state.formData, 'login');
    let formIsValid = isFormValid(this.state.formData, 'login');

    if (formIsValid) {
      try {
        loginUser(
          dataToSubmit.email,
          dataToSubmit.password,
          dataToSubmit.displyName
        );
        const { formData } = { ...this.state };
        formData.email.value = '';
        formData.password.value = '';
        this.setState({ formData });
      } catch (err) {
        console.log('err: ', err);
      }
    } else {
      this.setState({
        formError: error,
      });
    }
  };
  render() {
    const { loginUserWithGoogle, error } = this.props;
    const { formData } = this.state;
    return (
      <div className="sign-in">
        <h2 className="title">У меня уже есть аккаунт</h2>
        <span>Войдите, используя свой email и пароль</span>
        <form onSubmit={this.handleSubmit}>
          <FormField
            id={'email'}
            formData={formData.email}
            change={(el) => this.updateForm(el)}
          />

          <FormField
            id={'password'}
            formData={formData.password}
            change={(el) => this.updateForm(el)}
          />

          {error ? (
            <div className="error-label error-label__common">{error}</div>
          ) : null}
          <div className="signin-btns">
            <Button type="submit" value="Войти" />
            <Button
              type="button"
              classname="google-auth-btn"
              value="Войти с Google"
              func={loginUserWithGoogle}
            />
          </div>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  loginUserWithGoogle: PropTypes.func.isRequired,
  error: PropTypes.string,
};

const mapStateToProps = (state) => ({
  error: state.user.error,
});

export default connect(mapStateToProps, { loginUser, loginUserWithGoogle })(
  Login
);
