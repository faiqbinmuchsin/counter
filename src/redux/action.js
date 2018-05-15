import type from './type';

const increase = store => (
    store.dispatch({type: type.INCREMENT})
)

const decrease = store => (
    store.dispatch({type: type.DECREMENT})
)

export default {
    increase,
    decrease
}