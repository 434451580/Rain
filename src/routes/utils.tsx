
import { Component, ReactNode } from 'react'
import _ from 'loadsh'
import { Routes, Route } from 'react-router-dom'
import { Button } from 'antd'
import { RoutesConfig } from '.'




export const renderRouter = (routes: RoutesConfig[]): ReactNode[] => {
    let nodes: ReactNode[] = []
    if (routes) {
        for (const route of routes) {
            const { element = null, path, index = false } = route
            if (route.children) {
                nodes.push(
                    <Route key={_.uniqueId('route_')} element={element} path={path} index={index} >
                        {renderRouter(route.children)}
                    </Route>
                )
            } else {
                nodes.push(
                    <Route key={_.uniqueId('route_')} element={element} path={path} index={index} />
                )
            }
        }
    }
    return nodes
}