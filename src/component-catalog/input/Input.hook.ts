import { useState } from 'react';

export function usePasswordToggle() {
  const [showPassword, setShowPassword] = useState(false);

  return {
    showPassword,
    togglePassword: () => setShowPassword((prev) => !prev),
  };
}