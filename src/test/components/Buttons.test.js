import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import '@testing-library/jest-dom';
import Button from '../../components/common/Button';

const theme = {
  colors: {
    primary: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    light: '#ffffff',
    accent: '#667eea',
  },
};

describe('Button Component', () => {
  /**
   * Test: Renderiza correctamente con texto
   */
  test('renders button with text', () => {
    render(
      <ThemeProvider theme={theme}>
        <Button>Click me</Button>
      </ThemeProvider>
    );
    const buttonElement = screen.getByText(/click me/i);
    expect(buttonElement).toBeInTheDocument();
  });

  /**
   * Test: Aplica variante primary correctamente
   */
  test('applies primary variant styles', () => {
    render(
      <ThemeProvider theme={theme}>
        <Button variant="primary">Primary Button</Button>
      </ThemeProvider>
    );
    const button = screen.getByText(/primary button/i);
    expect(button).toHaveStyle(`background: ${theme.colors.primary}`);
  });

  /**
   * Test: Aplica variante outline correctamente
   */
  test('applies outline variant styles', () => {
    render(
      <ThemeProvider theme={theme}>
        <Button variant="outline">Outline Button</Button>
      </ThemeProvider>
    );
    const button = screen.getByText(/outline button/i);
    expect(button).toHaveStyle('background: transparent');
  });

  /**
   * Test: Maneja eventos click correctamente
   */
  test('handles click events', () => {
    const handleClick = jest.fn();
    render(
      <ThemeProvider theme={theme}>
        <Button onClick={handleClick}>Clickable</Button>
      </ThemeProvider>
    );
    const button = screen.getByText(/clickable/i);
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  /**
   * Test: Aplica tamaños correctamente
   */
  test('applies size prop correctly', () => {
    render(
      <ThemeProvider theme={theme}>
        <Button size="large">Large Button</Button>
      </ThemeProvider>
    );
    const button = screen.getByText(/large button/i);
    expect(button).toHaveStyle('padding: 1rem 2rem');
  });
});