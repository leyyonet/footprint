// noinspection JSUnusedGlobalSymbols,JSUnusedLocalSymbols

import {strict as assert} from "assert";
import {footprint} from "../src";
import {arr_01} from "./files";

beforeAll(() => {
    process.env.IS_TESTING = '1';
    return null;
});

describe('Footprint', () => {
    describe('Functions', () => {
        it('type', () => {
            assert.equal(footprint.get(arr_01)?.type, 'function');
        });
    });
});
