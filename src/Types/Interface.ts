import { ReactNode } from "react";

export interface ModalProps{
    children : ReactNode,
    onClose : () => void,
}

export interface LoginFormProps {
    onClose : () => void
}

export interface SigninSlice {
    isSigninClicked : boolean
}

export interface SigninSelector{
    signIn : SigninSlice
}

export interface ScrollRef{
    refDetails : React.RefObject<HTMLDivElement | null>
}

export interface ResAndCue{
    text:string,
    link:string
}

export interface ResAndCueButtons {
    restAndCueList:ResAndCue[]
    isShowMoreEnabled: boolean
}
