
import { ThemeProvider } from 'styled-components';

import type { TChildrenProps } from 'src/ts/types/children';

import theme from 'src/styles/theme';

const SCThemeProvider: React.FC<TChildrenProps> = ({ children }) => (
    <ThemeProvider theme={theme}>
        {children}
    </ThemeProvider>
);

export default SCThemeProvider;