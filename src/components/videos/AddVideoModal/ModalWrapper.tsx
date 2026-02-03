import React,{type ReactNode} from "react";


const ModalWrapper: React.FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 overflow-y-auto">
            <div className="relative w-full max-w-2xl bg-slate-900 border border-white/10 rounded-2xl shadow-2xl my-8">
                {children}
            </div>
        </div>
    );
};

export default ModalWrapper;