
import { render, screen } from '@testing-library/react';

import { runSnapshotTest } from 'src/common/tests/snapshot';

import SCThemeProvider from '..';

describe('SCThemeProvider', () => {
    const childComponentTestText = 'Test Child';

    const component = (
        <SCThemeProvider>
            <div>{childComponentTestText}</div>
        </SCThemeProvider>
    );

    test('отображаются дочерние компоненты', () => {
        render(component);

        expect(screen.getByText(childComponentTestText)).toBeInTheDocument();
    });

    runSnapshotTest(component);
});