import {ButtonIconWrapper} from "./ButtonIcon.styled";

interface Props {
    src?: JSX.Element;
    iconText: string;
    iconWidth: string;
    backgroundColor: string;
    borderColor: string;
    color: string;
    width?: string;
    height?: string;
    onClick?: () => void;
    RIcon?: boolean;
    hoverColor: string;
    hoverBGColor: string;
    hoverBorderColor: string;
}

export const ButtonIconMolecule = (props: Props) => {
    const {
        iconText,
        src,
        iconWidth,
        backgroundColor,
        borderColor,
        color,
        width = "fit-content",
        height = "",
        onClick,
        RIcon,
        hoverColor,
        hoverBGColor,
        hoverBorderColor,
    } = props;

    return (
        <ButtonIconWrapper
            backgroundColor={`${backgroundColor}`}
            borderColor={`${borderColor}`}
            color={`${color}`}
            onClick={onClick}
            hoverColor={hoverColor}
            hoverBGColor={hoverBGColor}
            hoverBorderColor={hoverBorderColor}
            // onClick={ () => console.log('clicked')}
        >
            {
                !RIcon && src
            }
            {iconText}
            {
                RIcon && src
            }
        </ButtonIconWrapper>
    );
};
