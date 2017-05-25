/// <reference types="mongoose" />
import { Connection } from 'mongoose';
import RequestCounterModel from './mongoose/model/requestCounter';
/**
 * パスポート発行依頼カウンターMongoDBアダプター
 *
 * @class RequestCounterMongoDBAdapter
 */
export default class RequestCounterMongoDBAdapter {
    readonly requestCounterModel: typeof RequestCounterModel;
    constructor(connection: Connection);
}
