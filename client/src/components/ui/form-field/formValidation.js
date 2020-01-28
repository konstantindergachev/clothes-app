export const validate = (el, formData = []) => {
  let error = [ true, '' ];
  if (el.validation.email) {
    const valid = /^\w+[\w-.]*@\w+((-\w+)|(\w*)).[a-z]{2,3}$/.test(el.value);
    const message = `${!valid ? 'Email должен быть валидным' : ''}`;
    error = !valid ? [ valid, message ] : error;
  }

  if (el.validation.confirm) {
    const valid = el.value.trim() === formData[el.validation.confirm].value;
    const message = `${!valid ? 'Пароли не совпадают' : ''}`;
    error = !valid ? [ valid, message ] : error;
  }

  if (el.validation.required) {
    const valid = el.value.trim() !== '';
    const message = `${!valid ? 'Поле необходимо заполнить' : ''}`;
    error = !valid ? [ valid, message ] : error;
  }

  if (el.validation.newPassword) {
    const notValid =
      el.value.trim() === formData[el.validation.newPassword].value;
    let message = '';
    if (notValid) {
      message = 'Пароль точно такой же';
      error = [ !notValid, message ];
    } else {
      return error;
    }
    // error = notValid ? [ !notValid, message ] : error;
  }
  return error;
};

export const update = (el, formData, formName) => {
  const newFormData = {
    ...formData,
  };

  const newElement = {
    ...newFormData[el.id],
  };
  newElement.value = el.ev.target.value;
  if (el.blur) {
    let validData = validate(newElement, formData);

    newElement.valid = validData[0];
    newElement.validationMessage = validData[1];
  }

  newElement.touched = el.blur;
  newFormData[el.id] = newElement;
  return newFormData;
};

export const generateData = (formData, formName) => {
  let dataToSubmit = {};

  for (let key in formData) {
    dataToSubmit[key] = formData[key].value;
  }

  return dataToSubmit;
};

export const isFormValid = (formData, formName) => {
  let formIsValid = true;

  for (let key in formData) {
    formIsValid = formData[key].valid && formIsValid;
  }

  return formIsValid;
};

export const populateOptionFileds = (formData, data = [], field) => {
  const newArray = [];
  const newFormData = { ...formData };

  data.forEach((item) => newArray.push({ key: item._id, value: item.name }));
  newFormData[field].config.options = newArray;
  return newFormData;
};

export const populateFields = (formData, field) => {
  for (let key in formData) {
    formData[key].value = field[key];
    formData[key].valid = true;
    formData[key].touched = true;
    formData[key].validationMessage = '';
  }
  return formData;
};

export const resetFileds = (formData, formName) => {
  const newFormData = { ...formData };

  for (let key in newFormData) {
    newFormData[key].value = [];
    newFormData[key].valid = false;
    newFormData[key].touched = false;
    newFormData[key].validationMessage = '';
  }
  return newFormData;
};
