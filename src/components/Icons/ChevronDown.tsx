import { SVGProps } from "react"
export const ChevronDown = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={16}
        fill="none"
        {...props}
    >
        <path
            fill="#103452"
            d="m8.472 11.472 3.999-3.999a.667.667 0 0 0-.472-1.138H4.001a.667.667 0 0 0-.471 1.138l3.999 3.999c.26.26.682.26.943 0Z"
        />
    </svg>
)
