
import type { TButtonProps } from './types';

import { BUTTON_TEST_ID } from 'src/constants/test-ids';

import * as S from './styles';

import Loader from 'src/components/ui/Loader';

const Button: React.FC<TButtonProps> = ({
    onClick,
    disabled,
    text,
    isLoading = false,
}) => (
    <S.Button
        onClick={onClick}
        disabled={disabled}
        data-testid={BUTTON_TEST_ID}
    >
        <S.ButtonText>
            {text}
        </S.ButtonText>

        {isLoading && <Loader />}
    </S.Button>
);

export default Button;