/**
 * @jest-environment jsdom
 */
import { pushToHistory } from '../scripts/router.js';

describe('pushToHistory function', () => {
    test('settings case', () => {
        let newState = pushToHistory('settings', 0);
        expect(newState.length).toBe(history.length);
        expect(newState.state).toEqual({ page: 'settings' });
    });

    test('entry case', () => {
        let newState = pushToHistory('entry', 2);
        expect(newState.length).toBe(history.length);
        expect(newState.state).toEqual({ page: 'entry2' });
    });

    test('default case', () => {
        let newState = pushToHistory('', 0);
        expect(newState.length).toBe(history.length);
        expect(newState.state).toEqual({});
    });
});


