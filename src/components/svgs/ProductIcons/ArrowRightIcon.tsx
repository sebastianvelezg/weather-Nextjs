import { IconT } from "@/types/icon.type";

export const IconArrowRight = (props: IconT) => {
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
        d="M14.8501 34.45C14.5334 34.45 14.2167 34.3333 13.9667 34.0833C13.7343 33.8481 13.6039 33.5307 13.6039 33.2C13.6039 32.8693 13.7343 32.5519 13.9667 32.3167L24.8334 21.45C25.6334 20.65 25.6334 19.35 24.8334 18.55L13.9667 7.68334C13.7343 7.44811 13.6039 7.13072 13.6039 6.8C13.6039 6.46928 13.7343 6.1519 13.9667 5.91667C14.4501 5.43334 15.2501 5.43334 15.7334 5.91667L26.6001 16.7833C27.4501 17.6333 27.9334 18.7833 27.9334 20C27.9334 21.2167 27.4667 22.3667 26.6001 23.2167L15.7334 34.0833C15.4834 34.3167 15.1667 34.45 14.8501 34.45Z"
        fill={color}
      />
    </svg>
  );
};
