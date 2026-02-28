"use client"

import { Download, Loader2, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface DownloadButtonProps {
    downloadStatus: "idle" | "downloading" | "downloaded" | "complete"
    progress: number
    onClick: () => void
    className?: string
    label?: string
}

export default function DownloadButton({ 
    downloadStatus, 
    progress, 
    onClick, 
    className,
    label = "Baixar Currículo"
}: DownloadButtonProps) {
    return (
        <Button
            onClick={onClick}
            className={cn(
                "rounded-xl w-auto min-w-[160px] relative overflow-hidden select-none",
                downloadStatus === "downloading" && "bg-primary/50 hover:bg-primary/50",
                downloadStatus !== "idle" && "pointer-events-none",
                className,
            )}
            variant="default"
        >
            {downloadStatus === "idle" && (
                <>
                    <Download className="h-4 w-4" />
                    {label}
                </>
            )}
            {downloadStatus === "downloading" && (
                <div className="z-[5] flex items-center justify-center">
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    {progress}%
                </div>
            )}
            {downloadStatus === "downloaded" && (
                <>
                    <CheckCircle className="h-4 w-4" />
                    <span>Baixado</span>
                </>
            )}
            {downloadStatus === "complete" && (
                <>
                    <Download className="h-4 w-4" />
                    <span>{label}</span>
                </>
            )}
            {downloadStatus === "downloading" && (
                <div
                    className="absolute bottom-0 z-[3] h-full left-0 bg-primary inset-0 transition-all duration-200 ease-in-out"
                    style={{ width: `${progress}%` }}
                />
            )}
        </Button>
    )
}


