import { readable } from 'svelte/store';

export const isSmall = createReadableForMinWidth(450);

export const isMedium = createReadableForMinWidth(600);

export const isLarge = createReadableForMinWidth(900);

function createReadableForMinWidth(minWidth: number) {
  return readable(false, (set => {
    return createMediaQueryListener(`(min-width: ${minWidth}px)`, set);
  }));
}

function createMediaQueryListener(query: string, notify: (value: boolean) => void) {
  if (window) {
    const queryResult = window.matchMedia(query);
    const listener = (ev: MediaQueryListEvent) => { notify(ev.matches) };
    queryResult.addEventListener('change', listener);
    notify(queryResult.matches);
    return () => queryResult.removeEventListener('change', listener);
  }
}