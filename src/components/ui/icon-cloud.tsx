"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import { useTheme } from "next-themes"
import {
    Cloud,
    fetchSimpleIcons,
    ICloud,
    renderSimpleIcon,
    SimpleIcon,
} from "react-icon-cloud"

export const cloudProps: Omit<ICloud, "children"> = {
    containerProps: {
        style: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            paddingTop: 40,
        },
    },
    options: {
        reverse: true,
        depth: 1,
        wheelZoom: false,
        imageScale: 2,
        activeCursor: "default",
        tooltip: "native",
        initial: [0.1, -0.1],
        clickToFront: 500,
        tooltipDelay: 0,
        outlineColour: "#0000",
        maxSpeed: 0.02,
        minSpeed: 0.01,
    },
}

export type DynamicCloudProps = {
    iconSlugs: string[]
    onIconClick?: (slug: string) => void
}

type IconData = Awaited<ReturnType<typeof fetchSimpleIcons>>

// Track mouse to distinguish click vs drag
let mouseDownPos = { x: 0, y: 0 }

export function IconCloud({ iconSlugs, onIconClick }: DynamicCloudProps) {
    const [data, setData] = useState<IconData | null>(null)
    const { theme } = useTheme()

    useEffect(() => {
        fetchSimpleIcons({ slugs: iconSlugs }).then(setData)
    }, [iconSlugs])

    const renderedIcons = useMemo(() => {
        if (!data) return null

        return Object.values(data.simpleIcons).map((icon) => {
            const bgHex = (theme || "light") === "light" ? "#f3f2ef" : "#080510"
            const fallbackHex = (theme || "light") === "light" ? "#6e6e73" : "#ffffff"
            const minContrastRatio = (theme || "light") === "dark" ? 3 : 1.2

            return renderSimpleIcon({
                icon,
                bgHex,
                fallbackHex,
                minContrastRatio,
                size: 42,
                aProps: {
                    href: undefined,
                    target: undefined,
                    rel: undefined,
                    onClick: (e: any) => {
                        e.preventDefault()
                    },
                    onMouseDown: (e: any) => {
                        mouseDownPos = { x: e.clientX, y: e.clientY }
                    },
                    onMouseUp: (e: any) => {
                        // Only trigger if mouse barely moved (not a drag)
                        const dx = Math.abs(e.clientX - mouseDownPos.x)
                        const dy = Math.abs(e.clientY - mouseDownPos.y)
                        if (dx < 5 && dy < 5) {
                            onIconClick?.(icon.slug)
                        }
                    },
                },
            })
        })
    }, [data, theme, onIconClick])

    return (
        // @ts-ignore
        <Cloud {...cloudProps}>
            <>{renderedIcons}</>
        </Cloud>
    )
}
