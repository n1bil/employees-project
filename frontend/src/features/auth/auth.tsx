import { ReactNode } from "react";
import { useCurrentQuery } from "../../app/services/auth";

type Props = {
    children: ReactNode;
}

export const Auth = ({children}: Props) => {
    const { isLoading } = useCurrentQuery();

    if (isLoading) {
        return <span>Loading...</span>
    }
    
  return children
}