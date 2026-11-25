import realAuthService from './authService';
import mockAuthService from './authService.mock';

const authService =
  import.meta.env.PUBLIC_USE_MOCK_AUTH === 'true' ? mockAuthService : realAuthService;

export default authService;
