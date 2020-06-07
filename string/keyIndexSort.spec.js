import { keyIndexSort } from './keyIndexSort';

describe('keyIndexSort', () => {
    it('should sort by key', () => {
        expect(keyIndexSort([
            { name: 'A', key: 1 },
            { name: 'B', key: 2 },
            { name: 'C', key: 3 },
            { name: 'D', key: 1 },
            { name: 'F', key: 3 },
            { name: 'A2', key: 1 },
            { name: 'A3', key: 4 },
            { name: 'A4', key: 2 },
            { name: 'A5', key: 2 },
            { name: 'A6', key: 1 },
            { name: 'A7', key: 3 },
            { name: 'A8', key: 1 },
            { name: 'A3', key: 4 },
        ], 4)).toMatchSnapshot();
    });
});
