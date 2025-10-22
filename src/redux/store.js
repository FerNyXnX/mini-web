import { configureStore } from '@reduxjs/toolkit';
import uiReducer from './slices/uiSlice';
import formReducer from './slices/formSlice';

/**
 * Configuración del store de Redux
 * Centraliza el estado de la aplicación
 */
export const store = configureStore({
  reducer: {
    ui: uiReducer,
    form: formReducer,
  },
});