
import type { QueryObserverResult } from 'react-query'; 

export type TCustomQueryResult<Data> = QueryObserverResult<Data> & {
    data: Data;
};