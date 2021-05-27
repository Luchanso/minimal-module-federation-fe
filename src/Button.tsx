import * as React from "react";

export type Props = {
    test?: string;
};

const Button = ({ test }: Props) => <button>App 2 Button {test}</button>;

export default Button;
