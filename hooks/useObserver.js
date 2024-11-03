import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

export function useObserver(ref, th) {
    const [isIntersecting, setIsIntersecting] = useState(false)
    const curPageSecIds = useSelector(
        (state) => state.pageSections.curPageSections
    )
    const pathname = usePathname()

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0]
                setIsIntersecting(entry.isIntersecting)
            },
            { threshold: th !== undefined ? th : 0.9 } // Retain conditional threshold assignment
        )

        if (ref?.current) {
            observer.observe(ref.current)
        } else if (curPageSecIds.includes(ref)) {
            const element = document.getElementById(ref)
            if (element) observer.observe(element)
        }

        return () => observer.disconnect()
    }, [pathname, ref, th, curPageSecIds])

    return { isIntersecting }
}
