import React from "react";
import classNames from "classnames";
// styles
import useStyles from "./styles";
import {Button} from "@mui/material";
export const PrimaryButton = ({
                                  className,
                                  children,
                                  onPress,
                                  ...props
                              }) => {
    const classes = useStyles();

    return (
        <Button variant='contained'
                className={classNames(classes.btn, className)}
                style={{
                    backgroundColor: 'rgb(255,0,0)',
                    width: 'auto',
                    color: 'white',
                    fontFamily: '"Montserrat", sans-serif',
                    fontWeight: 700,
                    "&:hover": {
                        background:'rgb(255,0,0)',
                    },
                }}
                onClick={onPress}
                {...props}
        >
            {children}
        </Button>
    );
};


export const TextButton = ({children, ...props}) => {

    return (
        <Button
            style={{
                width: 'auto',
                color: 'white',
                fontFamily: '"Montserrat", sans-serif',
                fontWeight: 700,
                "&:hover": {
                    color:'rgb(255,0,0)',
                },
            }}
            variant="text"
            {...props}

        >
            {children}
        </Button>
    );
};
export const PrimaryButtonRounded = ({
                                         className,
                                         children,
                                         onClick,
                                         ...props
                                     }) => {
    const classes = useStyles();

    return (
        <Button variant='contained'
                className={classNames(classes.btnRound, className)}
                onClick={onClick}
                {...props}
        >
            {children}
        </Button>
    );
};

export const PrimaryButtonAsh = ({
                                     className,
                                     children,
                                     onPress,
                                     color,
                                     disabled,
                                     ...props
                                 }) => {
    const classes = useStyles();

    return (
        <Button variant='contained'
                style={{color: color}}
                className={classNames(classes.btnAsh, className)}
                onClick={() => onPress()}
                disabled={disabled}
                {...props}
        >
            {children}
        </Button>
    );
};

export const PrimaryOutlinedButton = ({className, children, onPress, disabled, ...props}) => {
    const classes = useStyles();

    return (
        <Button
            variant="outlined"
            className={classNames(classes.btnOutlined, className)}
            {...props}
            onClick={() => {
                onPress()
            }}
            disabled={disabled}
        >
            {children}
        </Button>
    );
};

export const PrimaryOutlinedButtonAsh = ({className, children, ...props}) => {
    var classes = useStyles();

    return (
        <Button
            variant="outlined"
            className={classNames(classes.btnOutlinedAsh, className)}
            {...props}
        >
            {children}
        </Button>
    );
};
export const IconButton = ({children, ...props}) => {

    return (
        <Button
            variant="text"
            {...props}

        >
            {children}
        </Button>
    );
};