import type { experimental_extendTheme } from '@mui/material/styles';
import '@pigmentcss/react/theme';

declare module '@pigmentcss/react/theme' {
  export interface ThemeArgs {
    theme: ReturnType<typeof experimental_extendTheme> & {
      applyDarkStyles<T>(obj: T): Record<string, T>;
    };
  }
}

declare module '@mui/material' {
  interface Palette {
    Slider: Record<string, string>;
  }
  interface PaletteColor {
    mainChannel: string;
  }
}
