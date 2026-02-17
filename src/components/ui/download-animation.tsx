import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download } from 'lucide-react';

interface DownloadButtonProps {
  onDownload?: () => void;
  downloadUrl?: string;
  fileName?: string;
  label?: string;
}

export const DownloadButton = ({ 
  onDownload, 
  downloadUrl = "/curriculo.pdf",
  fileName = "curriculo.pdf",
  label = "Baixar Currículo"
}: DownloadButtonProps) => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownloadClick = () => {
    if (isDownloading) return;

    setIsDownloading(true);
    
    // Trigger download
    if (downloadUrl) {
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
    
    onDownload?.();

    // Simulate download animation
    setTimeout(() => {
      setIsDownloading(false);
    }, 3500);
  };

  return (
    <motion.button
      onClick={handleDownloadClick}
      className={`relative inline-flex items-center gap-2 overflow-hidden transition-all glow
        ${isDownloading ? 'cursor-wait' : 'cursor-pointer'}`}
      animate={{
        width: isDownloading ? 48 : 'auto',
        borderRadius: isDownloading ? '9999px' : '0.5rem'
      }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
      style={{ 
        minWidth: isDownloading ? '48px' : 'auto', 
        height: 48,
        paddingLeft: isDownloading ? 0 : '1.5rem',
        paddingRight: isDownloading ? 0 : '1.5rem',
        backgroundColor: isDownloading ? 'hsl(var(--primary))' : 'hsl(var(--primary))',
      }}
      disabled={isDownloading}
    >
        {/* Progress fill background */}
        <motion.div
          className="absolute inset-0 bg-primary/80"
          initial={{ height: '0%' }}
          animate={isDownloading ? { height: '100%' } : { height: '0%' }}
          transition={{ duration: 3, ease: 'easeInOut' }}
          style={{ zIndex: 1 }}
        />

        {/* Download icon */}
        <motion.div
          className="relative z-20 flex items-center justify-center"
          animate={isDownloading ? {
            rotate: 180,
            scale: [0.95, 1, 0.95],
          } : {}}
          transition={{
            duration: isDownloading ? 1 : 0.4,
            times: isDownloading ? [0, 0.7, 1] : undefined
          }}
        >
          <AnimatePresence mode="wait">
            {!isDownloading ? (
              <motion.div
                key="icon"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Download className="w-4 h-4 text-primary-foreground" />
              </motion.div>
            ) : (
              <motion.div
                key="spinner"
                className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full"
                initial={{ opacity: 0, rotate: 0 }}
                animate={{ opacity: 1, rotate: 360 }}
                exit={{ opacity: 0 }}
                transition={{ 
                  rotate: { duration: 1, repeat: Infinity, ease: 'linear' },
                  opacity: { duration: 0.2 }
                }}
              />
            )}
          </AnimatePresence>
        </motion.div>

        {/* Download label */}
        <AnimatePresence>
          {!isDownloading && (
            <motion.span
              className="text-primary-foreground text-base font-semibold select-none z-10"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              {label}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
  );
};

