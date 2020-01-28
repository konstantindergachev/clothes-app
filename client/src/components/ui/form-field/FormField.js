import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import './FormField.scss';

const FormField = ({ id, formData, change }) => {
  const showError = () => {
    let errorMessage = null;

    if (formData.validation && !formData.valid) {
      errorMessage = (
        <div className="error-label">{formData.validationMessage}</div>
      );
    }
    return errorMessage;
  };

  const renderTemplate = () => {
    let formTemplate = null;
    switch (formData.element) {
      case 'input':
        formTemplate = (
          <div className="group">
            <input
              {...formData.config}
              value={formData.value}
              onBlur={(ev) => change({ ev, id, blur: true })}
              onChange={(ev) => change({ ev, id })}
              className="form-input"
            />
            {formData.config.label && (
              <div className={`${formData.value && 'shrink '}form-input-label`}>
                {formData.config.label}
              </div>
            )}
            {showError()}
          </div>
        );
        break;
      case 'textarea':
        formTemplate = (
          <div className="formBlock">
            {formData.showlabel && (
              <div className="label_inputs">{formData.config.label}</div>
            )}
            <textarea
              {...formData.config}
              value={formData.value}
              onBlur={(ev) => change({ ev, id, blur: true })}
              onChange={(ev) => change({ ev, id })}
            />
            {showError()}
          </div>
        );
        break;
      case 'select':
        formTemplate = (
          <div className="formBlock">
            {formData.showlabel && (
              <div className="label_inputs">{formData.config.label}</div>
            )}
            <select
              value={formData.value}
              onBlur={(ev) => change({ ev, id, blur: true })}
              onChange={(ev) => change({ ev, id })}
            >
              <option value="">Select one</option>
              {formData.config.options.map((item) => (
                <option key={item.key} value={item.key}>
                  {item.value}
                </option>
              ))}
            </select>
            {showError()}
          </div>
        );
        break;
      default:
        formTemplate = null;
    }

    return formTemplate;
  };

  return <Fragment>{renderTemplate()}</Fragment>;
};

FormField.propTypes = {
  id: PropTypes.string.isRequired,
  formData: PropTypes.object.isRequired,
  change: PropTypes.func.isRequired,
};

export default FormField;
