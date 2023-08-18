import { SVGProps } from "react"

export const ChevronRight = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
        <path d="M14.4301 5.92999L20.5001 12L14.4301 18.07" stroke="url(#paint0_linear_22_40)" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3.5 12H20.33" stroke="url(#paint1_linear_22_40)" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        <defs>
            <linearGradient id="paint0_linear_22_40" x1="14.4301" y1="5.92999" x2="24.1421" y2="10.786" gradientUnits="userSpaceOnUse">
                <stop stopColor="#11B07B" />
                <stop offset="1" stopColor="#3374A5" />
            </linearGradient>
            <linearGradient id="paint1_linear_22_40" x1="3.5" y1="12" x2="3.61842" y2="13.993" gradientUnits="userSpaceOnUse">
                <stop stopColor="#11B07B" />
                <stop offset="1" stopColor="#3374A5" />
            </linearGradient>
        </defs>
    </svg>
)
