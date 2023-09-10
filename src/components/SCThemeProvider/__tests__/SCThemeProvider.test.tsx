
import { render, screen } from '@testing-library/react';

import { runSnapshotTest } from 'src/common/tests/snapshot';

import QCProvider from '..';

describe('QCProvider', () => {
    const childComponentTestText = 'Test Child';

    const component = (
        <QCProvider>
            <div>{childComponentTestText}</div>
        </QCProvider>
    );

    test('отображаются дочерние компоненты', () => {
        render(component);

        expect(screen.getByText(childComponentTestText)).toBeInTheDocument();
    });

    runSnapshotTest(component);
});