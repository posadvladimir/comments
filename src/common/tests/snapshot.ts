
import renderer from 'react-test-renderer';

export const runSnapshotTest = (component: React.ReactElement): void => {
    test('соотвествует снепшоту', () => {
        const tree = renderer.create(component).toJSON();

        expect(tree).toMatchSnapshot();
    });
};