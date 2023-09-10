
import { ERROR_TEST_ID } from 'src/constants/test-ids';

import * as S from './styles';

const ErrorMessage: React.FC = () => (
    <S.ErrorWrapper data-testid={ERROR_TEST_ID}>Произошла ошибка при загрузке данных</S.ErrorWrapper>
);

export default ErrorMessage;