import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { registerUser } from '../../../redux/actions/userActions';
import Button from '../../ui/button/Button';
import FormField from '../../ui/form-field/FormField';
import {
  generateData,
  isFormValid,
  update,
} from '../../ui/form-field/formValidation';
import './Register.scss';

class Register extends React.Component {
  state = {
    formError: '',
    formSuccess: '',
    formData: {
      displayName: {
        element: 'input',
        value: '',
        config: {
          name: 'name_input',
          type: 'text',
          label: 'Введите Имя',
        },
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
        validationMessage: '',
      },
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
      confirmPassword: {
        element: 'input',
        value: '',
        config: {
          name: 'confirm_password_input',
          type: 'password',
          label: 'Подтвердите Пароль',
        },
        validation: {
          required: true,
          confirm: 'password',
        },
        valid: false,
        touched: false,
        validationMessage: '',
      },
    },
  };
  updateForm = (el) => {
    const newFormData = update(el, this.state.formData, 'register');
    this.setState({
      formError: false,
      formData: newFormData,
    });
  };
  handleSubmit = (ev) => {
    ev.preventDefault();
    const { error, registerUser } = this.props;
    const dataToSubmit = generateData(this.state.formData, 'register');
    let formIsValid = isFormValid(this.state.formData, 'register');

    if (formIsValid) {
      try {
        registerUser(
          dataToSubmit.email,
          dataToSubmit.password,
          dataToSubmit.displayName
        );

        const { formData } = { ...this.state };
        formData.displayName.value = '';
        formData.email.value = '';
        formData.password.value = '';
        formData.confirmPassword.value = '';
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
    const { formData, formError } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">Персональная информация</h2>
        <span>Зарегистрируйтесь со своим именем, email-ом и паролем</span>
        <form onSubmit={this.handleSubmit}>
          <div className="form_block_two">
            <div className="block">
              <FormField
                id={'displayName'}
                formData={formData.displayName}
                change={(el) => this.updateForm(el)}
              />
            </div>
          </div>
          <FormField
            id={'email'}
            formData={formData.email}
            change={(el) => this.updateForm(el)}
          />
          <h2>Подтвердите Пароль</h2>
          <div className="form_block_two">
            <div className="block">
              <FormField
                id={'password'}
                formData={formData.password}
                change={(el) => this.updateForm(el)}
              />
            </div>
            <div className="block">
              <FormField
                id={'confirmPassword'}
                formData={formData.confirmPassword}
                change={(el) => this.updateForm(el)}
              />
            </div>
          </div>
          {formError ? (
            <div className="error_label">Пожалуйста, проверти Ваши данные</div>
          ) : null}

          <Button type="submit" value="Регистрация" />
        </form>
      </div>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  error: PropTypes.string,
};

export default connect(null, { registerUser })(Register);
