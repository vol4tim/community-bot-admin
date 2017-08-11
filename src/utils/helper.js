import Promise from 'bluebird'
import _ from 'lodash'

export const promiseFor = Promise.method((condition, action, value) => {
  if (!condition(value)) return value;
  return action(value).then(promiseFor.bind(null, condition, action));
});

export const validate = (values, props) => {
  const errors = {};
  _.each(props.fields, (item) => {
    if (item.required && !values[item.name]) {
      errors[item.name] = 'required'
    } else {
      let isError
      switch (item.validation) {
        case 'uint':
          isError = _.isNumber(values[item.name] * 1) && !_.isNaN(values[item.name] * 1) ? false : 'no number'
          break;
        default:
          isError = false
      }
      if (isError) {
        errors[item.name] = isError
      }
    }
  })
  return errors
}

export const timeConverter = (timestamp) => {
  const a = new Date(timestamp * 1000);
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const year = a.getFullYear();
  const month = months[a.getMonth()];
  const date = a.getDate();
  const hour = a.getHours();
  const min = a.getMinutes();
  const sec = a.getSeconds();
  const time = date + ' ' + month + ' ' + year + ' ' +
    ((hour < 10) ? '0' + hour : hour) + ':' +
    ((min < 10) ? '0' + min : min) + ':' +
    ((sec < 10) ? '0' + sec : sec);
  return time;
}
