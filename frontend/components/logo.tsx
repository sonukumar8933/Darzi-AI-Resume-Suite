import { cn } from '../lib/utils'

export const Logo = ({ className, uniColor }: { className?: string; uniColor?: boolean }) => {
    return (
        <img
            src="/logo.png"
            alt="Logo"
            className={cn('h-5 w-auto', className)}
        />
    )
}

export const LogoIcon = ({ className, uniColor }: { className?: string; uniColor?: boolean }) => {
    return (
        <img
            src="/logo.png"
            alt="Logo"
            className={cn('size-5', className)}
        />
    )
}

export const LogoStroke = ({ className }: { className?: string }) => {
    return (
        <img
            src="/logo.png"
            alt="Logo"
            className={cn('size-7 w-7', className)}
        />
    )
}