import { validURL, getBaseUrl } from './utils';

const validUrl = 'http://instagram.com/gilsonterra';
const validBaseUrl = 'http://instagram.com';
const invalidUrl = 'http://invalid';

describe('Valid URL', () => {
    it('should it a valid url', () => {
        expect(validURL(validUrl)).toBe(true);
    });

    it('should it a invalid url', () => {
        expect(validURL(invalidUrl)).toBe(false);
    });
});

describe('Get base Url', () => {
    it('should get a base url', () => {
        expect(getBaseUrl(validUrl)).toBe(validBaseUrl);
    });
});

