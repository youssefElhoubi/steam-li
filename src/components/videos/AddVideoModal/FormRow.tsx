import React , {type ReactNode} from "react";

const FormRow: React.FC<{ children: ReactNode }> = ({ children }) => (
    <div className="space-y-2">{children}</div>
);

export default FormRow;
