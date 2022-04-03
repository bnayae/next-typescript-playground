import React from 'react'

export enum Kind {
    a,
    b
}

interface IAProps  {
    name: string;
    kind: Kind.a;
}

interface IBProps  {
    id: number;
    kind: Kind.b;
}

type AorB = IAProps | IBProps;

interface ICommonProps  {
    bold?: boolean;
}

type IProps = ICommonProps & AorB;

export const Comp = ({bold, ...props}: IProps) => {
    const style = {fontWeight: bold ? 600 : 400};
    if(props.kind === Kind.a) {  return (<div style={style}>Comp A: {props.name}</div>)    }
    return (<div style={style}>Comp B: {props.id}</div>)
}