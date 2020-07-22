export const checkValidity = (value, rules, touched) => {
    let isValid = true;

    if (rules.required && touched) {
        isValid = value.trim() !== '' && isValid;
    }

    if (rules.minLength && touched) {
        isValid = value.length >= rules.minLength && isValid;
    }

    if (rules.maxLength && touched) {
        isValid = value.length <= rules.maxLength && isValid;
    }
    return isValid;
}

