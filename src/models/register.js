import { RegisterSum,DownloadXLS } from '../services/register';

export default {

    namespace: 'register',

    state: {
        data: {
            list: [],
            pagination: {},
        },
        loading: false,
    },
    effects: {
        *fetch({ payload }, { call, put }) {
            yield put({
                type: 'changeLoading',
                payload: true,
            });
            const response = yield call(RegisterSum, payload);
            yield put({
                type: 'save',
                payload: response,
            });
            yield put({
                type: 'changeLoading',
                payload: false,
            });
        },
        *download({ payload }, { call, put }) {
            yield put({
                type: 'changeLoading',
                payload: true,
            });
            const response = yield call(DownloadXLS, payload);
            // yield put({
            //     type: 'down',
            //     payload: true,
            // });
            yield put({
                type: 'changeLoading',
                payload: false,
            });
        },
    },
    reducers: {
        save(state, action) {
            
            // console.log("save(state, action) action.payload=" + action.payload);
            return {
                ...state,
                data: action.payload,
            };
        },
        down(state, action) {
            
            // console.log("save(state, action) action.payload=" + action.payload);
            
            return {
                ...state,
                data: action.payload,
            };
        },
        changeLoading(state, action) {
            return {
                ...state,
                loading: action.payload,
            };
        },
    },
};