
import type { TLoaderProps } from './types';

import * as S from './styles';

import { LoaderSizes } from 'src/ts/enums/loader';

import { LOADER_TEST_ID } from 'src/constants/test-ids';

const Loader: React.FC<TLoaderProps> = ({ size = LoaderSizes.Small }) => (
    <S.LoaderContainer>
        <S.LoaderSpinner
            $size={size}
            data-testid={LOADER_TEST_ID}
        />
    </S.LoaderContainer>
);

export default Loader;