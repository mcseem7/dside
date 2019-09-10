import React from 'react'

export default ({data, value}) => {
    const VisibleComponent = data[value]
    return  [
                <VisibleComponent key={value}/>,
                <div style={{display:'none'}}>
                        {
                            data.map(
                                (Component, index) =>
                                    index !== value ? <Component key={index}/> : null
                            )
                        }
                </div>,
            ]
}
