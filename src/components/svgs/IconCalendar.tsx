import { IconT } from "@/types/icon.type";

export const IconCalendar = (props: IconT) => {
  const { color = "white", size = "16", className = "" } = props;

  return (
    <svg
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.33333 4.33337C5.05999 4.33337 4.83333 4.10671 4.83333 3.83337V1.83337C4.83333 1.56004 5.05999 1.33337 5.33333 1.33337C5.60666 1.33337 5.83333 1.56004 5.83333 1.83337V3.83337C5.83333 4.10671 5.60666 4.33337 5.33333 4.33337ZM10.6667 4.33337C10.3933 4.33337 10.1667 4.10671 10.1667 3.83337V1.83337C10.1667 1.56004 10.3933 1.33337 10.6667 1.33337C10.94 1.33337 11.1667 1.56004 11.1667 1.83337V3.83337C11.1667 4.10671 10.94 4.33337 10.6667 4.33337Z"
        fill={color}
      />
      <path
        d="M10 15.6667H6C2.25333 15.6667 1.5 13.9 1.5 11.0467V6.93337C1.5 3.77337 2.56667 2.48671 5.30667 2.33337H10.6933C13.4333 2.48671 14.5 3.77337 14.5 6.93337V11.0467C14.5 13.9 13.7467 15.6667 10 15.6667ZM5.33333 3.33337C3.46667 3.44004 2.5 4.02671 2.5 6.93337V11.0467C2.5 13.6 2.98667 14.6667 6 14.6667H10C13.0133 14.6667 13.5 13.6 13.5 11.0467V6.93337C13.5 4.03337 12.54 3.44004 10.6533 3.33337H5.33333Z"
        fill={color}
      />
      <path
        d="M13.8333 12.7346H2.16667C1.89334 12.7346 1.66667 12.508 1.66667 12.2346C1.66667 11.9613 1.89334 11.7346 2.16667 11.7346H13.8333C14.1067 11.7346 14.3333 11.9613 14.3333 12.2346C14.3333 12.508 14.1067 12.7346 13.8333 12.7346Z"
        fill={color}
      />
    </svg>
  );
};
