import React from "react"
export function childrenWithProps(props, childType) {
    return React.Children.map(props.children, child => {
        if (child.type == childType) {
            return React.cloneElement(child, {
                ...props, ...child.props
            })
        } else{
            return child
        } 
    })
}