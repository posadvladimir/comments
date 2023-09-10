
import type { ITheme } from 'src/interfaces/styled';

declare module 'styled-components' {
    export interface DefaultTheme extends ITheme {}
}