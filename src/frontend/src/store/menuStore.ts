/**
 * Global Store — vanilla JS, no extra dependencies.
 * Works with Astro's <script> islands via window.menuStore.
 */

export interface MenuStore {
  isOpen: boolean;
  isLoading: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
  setLoading: (value: boolean) => void;
  subscribe: (listener: (state: MenuState) => void) => () => void;
}

export interface MenuState {
  isOpen: boolean;
  isLoading: boolean;
}

function createMenuStore(): MenuStore {
  const state: MenuState = {
    isOpen: false,
    isLoading: false,
  };

  const listeners = new Set<(state: MenuState) => void>();

  function notify() {
    listeners.forEach((fn) => fn({ ...state }));
  }

  return {
    get isOpen() {
      return state.isOpen;
    },
    get isLoading() {
      return state.isLoading;
    },
    open() {
      state.isOpen = true;
      notify();
    },
    close() {
      state.isOpen = false;
      notify();
    },
    toggle() {
      state.isOpen = !state.isOpen;
      notify();
    },
    setLoading(value: boolean) {
      state.isLoading = value;
      notify();
    },
    subscribe(listener: (state: MenuState) => void) {
      listeners.add(listener);
      return () => listeners.delete(listener);
    },
  };
}

// Singleton — shared across all islands on the page
declare global {
  interface Window {
    menuStore: MenuStore;
  }
}

if (typeof window !== 'undefined' && !window.menuStore) {
  window.menuStore = createMenuStore();
}

export const menuStore =
  typeof window !== 'undefined' ? window.menuStore : createMenuStore();
