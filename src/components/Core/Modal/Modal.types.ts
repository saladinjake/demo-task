import React, { ReactNode } from "react";

export type ModalProps = {
  showModal?: boolean;
  width?: string;
  children?: React.ReactNode;
  secondaryBtn?: React.ReactNode;
  primaryBtn?: React.ReactNode;
  title?: string;
  subtitle?: string;
  minHeight?: string;
  maxHeight?: string;
  scrollable?: boolean;
};

export type AlertProps = ModalProps & {
  handleContinue: () => void;
  handleCancel?: () => void;
  message: any;
  isLoading?: boolean;
  Icon?: any;
  singleButton?: boolean;
  buttons?: {
    confirm?: string;
    cancel?: string;
  };
};

export interface ModalMainPropsType {
  width?: string;
  minHeight?: string;
  maxHeight?: string;
  scrollable?: boolean;
}

export type ModalHeaderPropsType = {
  subtitle?: string;
};

export type SuccessProps = ModalProps & {
  handleOkay: () => void;
  handleNext?: () => void;
  singleButton?: boolean;
  message?: any;
  children?: ReactNode;
  buttons?: {
    confirm?: string;
    next?: string;
  };
};

export type ErrorProps = ModalProps & {
  handleOkay: () => void;
  handleNext?: () => void;
  message: any;
  isLoading?: boolean;
  singleButton?: boolean;
  buttons?: {
    confirm?: string;
    next?: string;
  };
};

export type DeleteProps = ErrorProps;

export type DeclinedProps = ModalProps & {
  handleTryAgain: () => void;
  handleCancel: () => void;
  message: any;
  isLoading?: boolean;
  buttons?: {
    confirm?: string;
    cancel?: string;
  };
};

export type CsvDownloadProps = {
  showModal: boolean;
  setShowModal: (value: boolean) => void;
  onDownload: () => void;
  supportEmail?: string;
};

export type IUploadFileProps = {
  showModal: boolean;
  setShowModal: (value: boolean) => void;
  onUpload?: (data) => void;
  isLoading?: boolean;
  onChange?: (value: boolean) => void;
  onRemove?: () => void;
  maxRecords?: number;
  title?: string;
  allowedHeaders: Array<string>;
};
