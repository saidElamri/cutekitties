import { useState, useEffect } from 'react';
import { Download } from 'lucide-react';
import { Button } from './Button';

export const InstallPwa = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);

  useEffect(() => {
    const handler = (e: any) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    window.addEventListener('beforeinstallprompt', handler);

    return () => {
      window.removeEventListener('beforeinstallprompt', handler);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    
    if (outcome === 'accepted') {
      setDeferredPrompt(null);
    }
  };

  if (!deferredPrompt) return null;

  return (
    <Button 
      onClick={handleInstallClick}
      variant="primary"
      size="sm"
      className="gap-2 animate-bounce"
    >
      <Download size={16} />
      Install App
    </Button>
  );
};
