const validate = (valuesSD) => {
  let errorsSD = {}
  if (!valuesSD.firstName) {
    errorsSD.firstName = "First name is required"
  }
  if (!valuesSD.lastName) {
    errorsSD.lastName = "Last name is required"
  }
  if (!valuesSD.email) {
    errorsSD.email = "Email is required"
  } else if (!/\S+@\S+\.\S+/.test(valuesSD.email)) {
    errorsSD.email = "Email address is invalid";
  }
  if (!valuesSD.addressOne) {
    errorsSD.addressOne = "Address is required"
  }
  if (!valuesSD.city) {
    errorsSD.city = "City is required"
  }
  if (!valuesSD.state) {
    errorsSD.state = "State is required"
  }
  if (!valuesSD.zipcode) {
    errorsSD.zipcode = "Zipcode is required"
  } else if (valuesSD.zipcode.length < 5){
    errorsSD.zipcode = "Zipcode is invalid"
  }
  return errorsSD
}

export default validate
