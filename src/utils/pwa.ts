export async function registerServiceWorker(swUrl = '/sw.js'): Promise<boolean> {
  if (typeof window === 'undefined' || !('serviceWorker' in navigator)) {
    return false;
  }

  try {
    await navigator.serviceWorker.register(swUrl);
    return true;
  } catch {
    return false;
  }
}
