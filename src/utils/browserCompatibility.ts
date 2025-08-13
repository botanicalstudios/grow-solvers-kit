// Browser compatibility utilities
export const BrowserCompat = {
  // Check if browser supports CSS custom properties
  supportsCustomProperties: () => {
    return window.CSS && CSS.supports && CSS.supports('color', 'var(--test)');
  },

  // Check if browser supports CSS Grid
  supportsGrid: () => {
    return window.CSS && CSS.supports && CSS.supports('display', 'grid');
  },

  // Check if browser supports backdrop-filter
  supportsBackdropFilter: () => {
    return window.CSS && CSS.supports && 
           (CSS.supports('backdrop-filter', 'blur(1px)') || 
            CSS.supports('-webkit-backdrop-filter', 'blur(1px)'));
  },

  // Check if browser supports smooth scrolling
  supportsSmoothScroll: () => {
    return 'scrollBehavior' in document.documentElement.style;
  },

  // Detect browser type
  getBrowser: () => {
    const userAgent = navigator.userAgent;
    
    if (userAgent.includes('Firefox')) return 'firefox';
    if (userAgent.includes('Safari') && !userAgent.includes('Chrome')) return 'safari';
    if (userAgent.includes('Chrome') && !userAgent.includes('Edge')) return 'chrome';
    if (userAgent.includes('Edge')) return 'edge';
    if (userAgent.includes('Opera') || userAgent.includes('OPR')) return 'opera';
    if (userAgent.includes('Brave')) return 'brave';
    
    return 'unknown';
  },

  // Initialize browser-specific optimizations
  init: () => {
    const browser = BrowserCompat.getBrowser();
    document.documentElement.setAttribute('data-browser', browser);

    // Add fallback classes for unsupported features
    if (!BrowserCompat.supportsCustomProperties()) {
      document.documentElement.classList.add('no-custom-properties');
    }
    
    if (!BrowserCompat.supportsGrid()) {
      document.documentElement.classList.add('no-grid');
    }
    
    if (!BrowserCompat.supportsBackdropFilter()) {
      document.documentElement.classList.add('no-backdrop-filter');
    }

    // Safari-specific fixes
    if (browser === 'safari') {
      // Fix for Safari's 100vh issue on mobile
      const setViewportHeight = () => {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
      };
      
      setViewportHeight();
      window.addEventListener('resize', setViewportHeight);
      window.addEventListener('orientationchange', setViewportHeight);
    }

    // Firefox-specific optimizations
    if (browser === 'firefox') {
      document.documentElement.classList.add('firefox-optimized');
    }

    // IE/Edge legacy support
    if (browser === 'edge' || navigator.userAgent.includes('Trident')) {
      document.documentElement.classList.add('legacy-edge');
      
      // Polyfill for IE/Edge missing features
      if (!NodeList.prototype.forEach) {
        NodeList.prototype.forEach = function(callback: (value: Node, index: number, list: NodeList) => void, thisArg?: any) {
          for (let i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this);
          }
        };
      }
    }
  }
};

// Smooth scroll polyfill for older browsers
export const smoothScrollPolyfill = () => {
  if (!BrowserCompat.supportsSmoothScroll()) {
    const scrollTo = (element: Element, to: number, duration: number) => {
      const start = element.scrollTop;
      const change = to - start;
      const startTime = performance.now();

      const animateScroll = (currentTime: number) => {
        const timeElapsed = currentTime - startTime;
        const run = easeInOutQuad(timeElapsed, start, change, duration);
        element.scrollTop = run;
        
        if (timeElapsed < duration) {
          requestAnimationFrame(animateScroll);
        }
      };

      const easeInOutQuad = (t: number, b: number, c: number, d: number) => {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
      };

      requestAnimationFrame(animateScroll);
    };

    // Override native scrollTo for smooth behavior
    const originalScrollTo = window.scrollTo;
    window.scrollTo = function(x: number | ScrollToOptions, y?: number) {
      if (typeof x === 'object' && x.behavior === 'smooth') {
        scrollTo(document.documentElement, x.top || 0, 300);
      } else {
        originalScrollTo.call(this, x as number, y || 0);
      }
    };
  }
};

// Initialize on DOM ready
if (typeof window !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      BrowserCompat.init();
      smoothScrollPolyfill();
    });
  } else {
    BrowserCompat.init();
    smoothScrollPolyfill();
  }
}