import { useState, useEffect } from 'react'

const useForm = (callback, validate) => {

  const [valuesSD, setValuesSD] = useState({});
  const [errorsSD, setErrorsSD] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect() => {
    if (Object.keys(errorsSD).length === 0 && isSubmitting) {
      callback()
    }
  }, [errorsSD])

  const handleSubmit = () => {
    setErrorsSD(validate(valuesSD))
    setIsSubmitting(true)
  }

  const handleChange = (event) => {
    event.persist();
    setValuesSD(valuesSD => ({...valuesSD, [event.target.name]: event.target.value}))
  }

  return {
    valuesSD,
    errorsSD,
    handleSubmit,
    handleChange,
  }
}

export default useForm;
