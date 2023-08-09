import React from 'react'
import ReactDOM from "react-dom";

const AnimationLoading = () => {
    return (
        <>
        {ReactDOM.createPortal(
            <div className='w-full h-[100vh] backdrop-blur-sm bg-white/20 inset-0 gap-y-5 overflow-y-auto flex justify-center items-center flex-col absolute top-0'>
                <span className='custom-loader block z-50 w-full'></span>
                <span className='font-bold tracking-wider text-xl text-[#766DF4]'>Loading...</span>
            </div>,
            document.getElementById("animation-root")
        )}
        </>

    )
}

export default AnimationLoading