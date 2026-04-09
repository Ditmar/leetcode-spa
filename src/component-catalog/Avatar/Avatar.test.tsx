import { render, screen } from '@testing-library/react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Avatar from './Avatar';
import { AVATAR_SIZES } from './Avatar.constants';

// Mock theme for MUI styles provider
const theme = createTheme();

const renderWithTheme = (ui: React.ReactElement) => {
  return render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);
};

describe('Avatar Component Unit Tests', () => {
  
  /**
   * 1. Rendering Test: Verifies that initials are displayed correctly.
   * Based on requirements for initials like "JD" or "AB"[cite: 22, 23].
   */
  it('should render the provided initials', () => {
    renderWithTheme(<Avatar>JD</Avatar>);
    const element = screen.getByText('JD');
    expect(element).toBeInTheDocument();
  });

  /**
   * 2. Style Verification: Checks size mapping from constants.
   * Based on CSS sizes: sm(32px), md(40px), lg(48px), xl(64px)[cite: 20, 21].
   */
  it('should apply correct dimensions for size "xl"', () => {
    renderWithTheme(<Avatar size="xl">XL</Avatar>);
    const avatar = screen.getByText('XL').parentElement;
    expect(avatar).toHaveStyle({
      width: `${AVATAR_SIZES.xl.width}px`,
      height: `${AVATAR_SIZES.xl.height}px`
    });
  });

  /**
   * 3. Custom Variants: Verifies background colors for specific personas.
   * "JD" (Blue: #3B82F6) and "AB" (Green: #10B981)[cite: 22, 23].
   */
  it('should apply primary color for "primary" variant', () => {
    const { container } = renderWithTheme(<Avatar customVariant="primary">JD</Avatar>);
    const avatarElement = container.firstChild;
    // Check background color hex or rgb
    expect(avatarElement).toHaveStyle('background-color: #3B82F6');
  });

  /**
   * 4. Accessibility Test: Ensures the component is readable by screen readers.
   */
  it('should have correct accessibility attributes when provided', () => {
    renderWithTheme(<Avatar aria-label="User profile">SM</Avatar>);
    const avatar = screen.getByLabelText('User profile');
    expect(avatar).toBeInTheDocument();
  });

  /**
   * 5. Default State: Checks that it falls back to 'md' size if none is provided.
   */
  it('should render with default "md" size when no size prop is passed', () => {
    renderWithTheme(<Avatar>MD</Avatar>);
    const avatar = screen.getByText('MD').parentElement;
    expect(avatar).toHaveStyle({
      width: '40px',
      height: '40px'
    });
  });
});