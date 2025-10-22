import { createSlice } from '@reduxjs/toolkit';

/**
 * Slice para manejar el estado de formularios
 * Gestiona datos de formularios y validaciones
 */
const formSlice = createSlice({
  name: 'form',
  initialState: {
    contactForm: {
      name: '',
      email: '',
      message: '',
    },
    errors: {},
    isSubmitting: false,
    submitSuccess: false,
  },
  reducers: {
    updateContactForm: (state, action) => {
      state.contactForm = { ...state.contactForm, ...action.payload };
    },
    setFormErrors: (state, action) => {
      state.errors = action.payload;
    },
    clearFormErrors: (state) => {
      state.errors = {};
    },
    setSubmitting: (state, action) => {
      state.isSubmitting = action.payload;
    },
    setSubmitSuccess: (state, action) => {
      state.submitSuccess = action.payload;
    },
    resetContactForm: (state) => {
      state.contactForm = {
        name: '',
        email: '',
        message: '',
      };
      state.errors = {};
      state.submitSuccess = false;
    },
  },
});

export const {
  updateContactForm,
  setFormErrors,
  clearFormErrors,
  setSubmitting,
  setSubmitSuccess,
  resetContactForm,
} = formSlice.actions;

export default formSlice.reducer;