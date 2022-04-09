import React, { createContext, PropsWithChildren, useContext, useState } from "react";
import { SketchConfig, Store } from "./types";
import { Sketches } from './sketches'


const storeContext = createContext<Store>({ } as Store)


export const StoreProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
    const { Provider } = storeContext

    const [ selectedSketch, setSelectedSketch ] = useState<SketchConfig | null>(null)
    const store: Store = {
        sketches: Sketches,
        selectedSketch,
        selectSketch: (id: string) => {
            setSelectedSketch(null)
            const sketch = Sketches.find(({ id: sketchId }) => sketchId === id) ?? null
            setSelectedSketch(sketch)
        }
    }
    return (
        <Provider value={store}>
            {children}
        </Provider>
    )
}
export const useStore = (): Store =>  useContext(storeContext)


