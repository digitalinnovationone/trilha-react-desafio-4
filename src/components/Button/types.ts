export interface IButtonProps {
    title: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    disableButton?: boolean;
}

export interface IButtonContainerStyled{
    disableButton?: boolean;
}