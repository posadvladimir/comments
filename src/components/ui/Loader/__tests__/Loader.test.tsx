
import { runSnapshotTest } from 'src/common/tests/snapshot';

import { LoaderSizes } from 'src/ts/enums/loader';

import Loader from '..';

describe('Loader Component', () => {
    runSnapshotTest(<Loader />);
    runSnapshotTest(<Loader size={LoaderSizes.Small} />);
    runSnapshotTest(<Loader size={LoaderSizes.Big} />);
});