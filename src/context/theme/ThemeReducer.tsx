import {Theme} from '@react-navigation/native';

type ThemeAction = {type: 'set_light_theme'} | {type: 'set_dark_theme'};

export interface ThemeState extends Theme {
  currentTheme: 'light' | 'dark';
  dividerColor: string;
  activeColor: string;
  drawerBG: string;
}

export const lightTheme: ThemeState = {
  currentTheme: 'light',
  dark: false,
  dividerColor: 'rgba(0,0,0,0.7)',
  activeColor: '',
  drawerBG: '',
  colors: {
    primary: '#3F3F77',
    background: 'white',
    card: 'black',
    text: 'black',
    border: 'black',
    notification: 'teal',
  },
};
export const darkTheme: ThemeState = {
  currentTheme: 'dark',
  dark: true,
  dividerColor: 'rgba(255,255,255,0.7)',
  activeColor: '#1d1746',
  drawerBG: '#181818',
  colors: {
    primary: '#3F3F77',
    background: 'black',
    card: 'white',
    text: 'white',
    border: 'white',
    notification: 'teal',
  },
};

export const themeReducer = (
  state: ThemeState,
  action: ThemeAction,
): ThemeState => {
  switch (action.type) {
    case 'set_light_theme':
      return {...lightTheme};
    case 'set_dark_theme': {
      return {...darkTheme};
    }
    default:
      return state;
  }
};
