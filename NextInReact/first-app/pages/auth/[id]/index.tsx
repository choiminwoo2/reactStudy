import { PropsWithChildren, ReactNode } from "react";
import { NextRouter, Router, useRouter } from 'next/router';
import { ParsedUrlQuery } from "querystring";
interface contentProps {
    content: string;
}

const IdPage = ({children, content='저기요'} : PropsWithChildren<contentProps>) =>{
    const params  = useRouter();
    console.log(params);
    const {id}= params.query;
    return <div>
        {children}
        {content}
        {id}
    </div>
}

export default IdPage;