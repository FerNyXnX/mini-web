import { createSlice } from '@reduxjs/toolkit';

/**
 * Slice para manejar el estado de la UI
 * Controla elementos como menús, modales, temas, etc.
 */
const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    menuOpen: false,
    theme: 'dark',
    loading: false,
    notification: null,
  },
  reducers: {
    toggleMenu: (state) => {
      state.menuOpen = !state.menuOpen;
    },
    setMenuOpen: (state, action) => {
      state.menuOpen = action.payload;
    },
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    showNotification: (state, action) => {
      state.notification = action.payload;
    },
    hideNotification: (state) => {
      state.notification = null;
    },
  },
});

export const { 
  toggleMenu, 
  setMenuOpen, 
  setTheme, 
  setLoading, 
  showNotification, 
  hideNotification 
} = uiSlice.actions;

export default uiSlice.reducer;