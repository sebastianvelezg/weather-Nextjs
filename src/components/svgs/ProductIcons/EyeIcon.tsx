import {IconT} from "@/types/icon.type";

export const EyeIcon = (props: IconT) => {
    const {color = "white", size = "24", className} = props;

    return (
        <svg
            className={className}
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
<path d="M12.002 16.332C9.612 16.332 7.672 14.392 7.672 12.002C7.672 9.612 9.612 7.672 12.002 7.672C14.392 7.672 16.332 9.612 16.332 12.002C16.332 14.392 14.392 16.332 12.002 16.332ZM12.002 9.172C10.442 9.172 9.172 10.442 9.172 12.002C9.172 13.562 10.442 14.832 12.002 14.832C13.562 14.832 14.832 13.562 14.832 12.002C14.832 10.442 13.562 9.172 12.002 9.172Z" fill={color}/>
<path d="M11.998 21.02C8.238 21.02 4.688 18.82 2.248 15C1.188 13.35 1.188 10.66 2.248 8.99998C4.698 5.17998 8.248 2.97998 11.998 2.97998C15.748 2.97998 19.298 5.17998 21.738 8.99998C22.798 10.65 22.798 13.34 21.738 15C19.298 18.82 15.748 21.02 11.998 21.02ZM11.998 4.47998C8.768 4.47998 5.678 6.41998 3.518 9.80998C2.768 10.98 2.768 13.02 3.518 14.19C5.678 17.58 8.768 19.52 11.998 19.52C15.228 19.52 18.318 17.58 20.478 14.19C21.228 13.02 21.228 10.98 20.478 9.80998C18.318 6.41998 15.228 4.47998 11.998 4.47998Z" fill={color}/>
</svg>

    );
};
