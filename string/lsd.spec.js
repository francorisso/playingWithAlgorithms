import { lsd } from './lsd';

describe('lsd', () => {
    it('should sort!', () => {
        expect(lsd([
            'HOLA',
            'HOLC',
            'HOLB',
            'ADSA',
            'ADSB',
            'HZLL',
        ], 4)).toMatchSnapshot();
    });
});
