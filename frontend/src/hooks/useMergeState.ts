import React from 'react'
import {mergeDeepRight} from 'ramda'

export default <T>(initialState: T) => {
    const [state, setState] = React.useState<T>(initialState)

    const mergeState = (value: Partial<T>) =>
       setState(mergeDeepRight(state, value) as any as T)

    return [state, mergeState]
}