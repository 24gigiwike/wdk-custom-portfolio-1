import { useEffect } from 'react'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'

export function useLenis() {
    useEffect(() => {
        const lenis = new Lenis({
            autoRaf: true,
            autoToggle: true,
            anchors: true,
            allowNestedScroll: true,
            naiveDimensions: true,
            stopInertiaOnNavigate: true,
        })

        return () => {
            lenis.destroy()
        }
    }, [])
}
