import React, { useEffect } from 'react';
import { SignIn } from '../componentes';

export default function SigninContainer(){
    const [isOpen, SetIsOpen] = useEffect("")
    return(
        <SignIn>
            <SignIn.Overlay display={isOpen}/>
        </SignIn>
    )
}