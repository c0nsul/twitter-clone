import React from 'react';
import {Dialog, DialogContent, DialogTitle, IconButton, Typography} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/CloseOutlined";
import {useStylesSignIn} from "../../pages/Signin";

interface ModalBlockProps {
    title: string;
    children: React.ReactNode;
    classes: ReturnType<typeof useStylesSignIn>;
    visible?: boolean;
    onClose: () => void;
}

export const ModalBlock: React.FC<ModalBlockProps> = (
    {
        title,
        visible = false,
        onClose,
        children
    }): React.ReactElement | null => {

    if (!visible){
        return null;
    }

    return (
        <Dialog open={visible} onClose={onClose}>
            <DialogTitle id="form-dialog-title">
                <IconButton
                    onClick={onClose}
                    color="secondary"
                    aria-label="close"
                >
                    <CloseIcon
                        style={{fontSize: 26}} color="primary"
                    />

                </IconButton>
                <Typography variant="h6" gutterBottom>
                    {title}
                </Typography>
            </DialogTitle>
            <DialogContent>
                {children}
            </DialogContent>
        </Dialog>
    );
};




