
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { LOADER_TEST_ID, BUTTON_TEST_ID } from 'src/constants/test-ids';

import { runSnapshotTest } from 'src/common/tests/snapshot';

import SCThemeProvider from 'src/components/SCThemeProvider';
import Button from '..';

const onClickMock = jest.fn();

const getButtonComponent = ({
    disabled = false,
    isLoading = false,
}) => (
    <SCThemeProvider>
        <Button
            onClick={onClickMock}
            disabled={disabled}
            text="Click me"
            isLoading={isLoading}
        />
    </SCThemeProvider>
);

const renderButton = ({
    disabled = false,
    isLoading = false,
}): void => {
    render(getButtonComponent({ disabled, isLoading }));
};

describe('Button', () => {
    test('вызывается функция onClick при клике на кнопку', () => {
        renderButton({});
    
        const button = screen.getByTestId(BUTTON_TEST_ID);
        userEvent.click(button);
    
        expect(onClickMock).toHaveBeenCalledTimes(1);
    });

    test('отображается лоадер при isLoading равном true', () => {
        renderButton({ isLoading: true });

        expect(screen.getByTestId(LOADER_TEST_ID)).toBeInTheDocument();
    });

    test('блокируется кнопка при disabled равном true', () => {
        renderButton({ disabled: true });

        expect(screen.getByTestId(BUTTON_TEST_ID)).toBeDisabled();
    });

    runSnapshotTest(getButtonComponent({}));
});