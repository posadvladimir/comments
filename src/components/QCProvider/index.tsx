
import { QueryClient, QueryClientProvider } from 'react-query'

import type { TChildrenProps } from 'src/ts/types/children';

const queryClient = new QueryClient();

const QCProvider: React.FC<TChildrenProps> = ({ children }) => (
    <QueryClientProvider client={queryClient}>
        {children}
    </QueryClientProvider>
);

export default QCProvider;