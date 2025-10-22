import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';
import '@testing-library/jest-dom';
import App from '../../App';

describe('App Integration Tests', () => {
  /**
   * Test: Renderiza la aplicación sin errores
   */
  test('renders app without crashing', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(screen.getByText(/DevSaaS Pro/i)).toBeInTheDocument();
  });

  /**
   * Test: Navegación funciona correctamente
   */
  test('navigation menu toggles on mobile', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    
    // Simular viewport móvil
    window.innerWidth = 500;
    const menuToggle = screen.getByRole('button', { name: /menu/i });
    fireEvent.click(menuToggle);
    
    expect(screen.getByText(/Servicios/i)).toBeVisible();
  });

  /**
   * Test: Formulario de contacto envía datos
   */
  test('contact form submits data', async () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    const nameInput = screen.getByPlaceholderText(/nombre completo/i);
    const emailInput = screen.getByPlaceholderText(/tu@email.com/i);
    const messageInput = screen.getByPlaceholderText(/cuéntanos sobre tu proyecto/i);
    const submitButton = screen.getByText(/Enviar Mensaje/i);

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
    fireEvent.change(messageInput, { target: { value: 'Test message' } });
    
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(nameInput.value).toBe('');
    });
  });

  /**
   * Test: Scroll suave a secciones
   */
  test('smooth scroll to sections works', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    const servicesLink = screen.getByText(/Servicios/i);
    fireEvent.click(servicesLink);

    const servicesSection = screen.getByText(/Nuestros Servicios/i);
    expect(servicesSection).toBeInTheDocument();
  });

  /**
   * Test: Renderiza todas las secciones principales
   */
  test('renders all main sections', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(screen.getByText(/Transformamos Ideas/i)).toBeInTheDocument();
    expect(screen.getByText(/Nuestros Servicios/i)).toBeInTheDocument();
    expect(screen.getByText(/Planes y Precios/i)).toBeInTheDocument();
    expect(screen.getByText(/Lo Que Dicen Nuestros Clientes/i)).toBeInTheDocument();
    expect(screen.getByText(/Contáctanos/i)).toBeInTheDocument();
  });
});