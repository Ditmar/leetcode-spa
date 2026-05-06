import { useState, useCallback } from 'react';

export function usePasswordToggle() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = useCallback(() => {
    setShowPassword((prev) => !prev);
  }, []);

  return {
    showPassword,
    togglePassword,
  };
}
