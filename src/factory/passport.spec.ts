/**
 * 許可証ファクトリーテスト
 * @ignore
 */

import * as assert from 'assert';

import * as errors from './errors';
import * as PassportFactory from './passport';

let TEST_CREATE_PARAMS: any;

describe('factory.passport.create()', () => {
    beforeEach(() => {
        TEST_CREATE_PARAMS = {
            scope: 'scope',
            iat: 1511059610,
            exp: 1511059910,
            iss: 'issuer',
            aud: 'audience',
            issueUnit: {
                identifier: 'scope:1508227500',
                validFrom: 1508227500,
                validThrough: 1508227800,
                numberOfRequests: 2
            }
        };
    });

    it('作成できる', () => {
        assert.doesNotThrow(() => {
            PassportFactory.create(TEST_CREATE_PARAMS);
        });
    });

    it('発行日時が数字でなければArgumentError', () => {
        assert.throws(
            () => {
                TEST_CREATE_PARAMS.iat = '1511059610';
                PassportFactory.create(TEST_CREATE_PARAMS);
            },
            (err: any) => {
                assert(err instanceof errors.Argument);

                return true;
            }
        );
    });

    it('期限が数字でなければArgumentError', () => {
        assert.throws(
            () => {
                TEST_CREATE_PARAMS.exp = '1511059610';
                PassportFactory.create(TEST_CREATE_PARAMS);
            },
            (err: any) => {
                assert(err instanceof errors.Argument);

                return true;
            }
        );
    });

    it('スコープが空であればArgumentNullError', () => {
        assert.throws(
            () => {
                const params = { ...TEST_CREATE_PARAMS, ...{ scope: '' } };
                PassportFactory.create(params);
            },
            (err: any) => {
                assert(err instanceof errors.ArgumentNull);

                return true;
            }
        );
    });

    it('発行者が空であればArgumentNullError', () => {
        assert.throws(
            () => {
                const params = { ...TEST_CREATE_PARAMS, ...{ iss: '' } };
                PassportFactory.create(params);
            },
            (err: any) => {
                assert(err instanceof errors.ArgumentNull);

                return true;
            }
        );
    });

    it('発行単位がオブジェクトでなければArgumentError', () => {
        assert.throws(
            () => {
                TEST_CREATE_PARAMS.issueUnit = null;
                PassportFactory.create(TEST_CREATE_PARAMS);
            },
            (err: any) => {
                assert(err instanceof errors.Argument);

                return true;
            }
        );
    });

    it('識別子が空であればArgumentNullError', () => {
        assert.throws(
            () => {
                TEST_CREATE_PARAMS.issueUnit.identifier = '';
                PassportFactory.create(TEST_CREATE_PARAMS);
            },
            (err: any) => {
                assert(err instanceof errors.ArgumentNull);

                return true;
            }
        );
    });

    it('リクエスト数が数字でなければArgumentError', () => {
        assert.throws(
            () => {
                TEST_CREATE_PARAMS.issueUnit.numberOfRequests = '1';
                PassportFactory.create(TEST_CREATE_PARAMS);
            },
            (err: any) => {
                assert(err instanceof errors.Argument);

                return true;
            }
        );
    });
});
