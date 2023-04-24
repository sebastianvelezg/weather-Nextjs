import { IconT } from "@/types/icon.type";

export const IconArrowLeft = (props: IconT) => {
  const { color = "white", size = "40", className = "" } = props;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M25 34.45C24.6833 34.45 24.3667 34.3333 24.1167 34.0833L13.25 23.2167C12.4012 22.3613 11.9249 21.2051 11.9249 20C11.9249 18.7949 12.4012 17.6387 13.25 16.7833L24.1167 5.91667C24.6 5.43334 25.4 5.43334 25.8833 5.91667C26.3667 6.4 26.3667 7.2 25.8833 7.68334L15.0167 18.55C14.2167 19.35 14.2167 20.65 15.0167 21.45L25.8833 32.3167C26.3667 32.8 26.3667 33.6 25.8833 34.0833C25.6333 34.3167 25.3167 34.45 25 34.45Z"
        fill={color}
      />
    </svg>
  );
};
