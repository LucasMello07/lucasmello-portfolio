"use client"

import { useEffect, useMemo, useState } from "react"
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

export const renderCustomIcon = (icon: SimpleIcon, theme: string) => {
    const bgHex = theme === "light" ? "#f3f2ef" : "#080510"
    const fallbackHex = theme === "light" ? "#6e6e73" : "#ffffff"

    // AQUI O AJUSTE: Mudamos de 2 para 3
    // Isso diz: "Se o contraste não for EXCELENTE (3), use a cor branca".
    // Isso resolve o GitHub sumindo no fundo escuro.
    const minContrastRatio = theme === "dark" ? 3 : 1.2

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
            onClick: (e: any) => e.preventDefault(),
        },
    })
}

export type DynamicCloudProps = {
    iconSlugs: string[]
    onIconClick?: (slug: string) => void
}

type IconData = Awaited<ReturnType<typeof fetchSimpleIcons>>

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
                    onMouseUp: (e: any) => {
                        // Only fire if it wasn't a drag (small movement threshold)
                        onIconClick?.(icon.slug)
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