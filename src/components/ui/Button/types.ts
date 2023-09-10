
export type TButtonProps = {
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    disabled: boolean;
    text: string | number;
    isLoading?: boolean;
}