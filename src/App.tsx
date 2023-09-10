
import AppWrapper from './styles/appWrapper';
import Global from './styles/global';

import CommentsPage from './pages/CommentsPage';
import SCThemeProvider from './components/SCThemeProvider';
import QCProvider from './components/QCProvider';

export default function App() {
    return (
        <QCProvider>
            <SCThemeProvider>
                <Global />
                <AppWrapper>
                    <CommentsPage />
                </AppWrapper>
            </SCThemeProvider>
        </QCProvider>
    );
}