import {IconT} from "@/types/icon.type";


export const IconRectangle5 = (props: IconT) => {
    // const {color = 'green'} = props;
    const {color = "white", size = "17", className} = props;

    return (
        <svg
            className={className}
            width="5"
            // height={size}
            height="158"
            viewBox="0 0 5 158"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect x="0.5" width="4" height="158" fill="#D9D9D9"/>
        </svg>
    );
};
