"use client";

import { PropsWithChildren } from "react";
import type { ModalProps } from "./models/types";
import { X as CloseIcon } from "lucide-react";

export default function Modal(props: PropsWithChildren<ModalProps>) {
  const { title, open, onClose, children } = props;

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center p-4 z-20">
      <div className="bg-white rounded-xl overflow-hidden shadow-lg max-w-md w-full p-6 max-sm:p-4 flex flex-col gap-4">
        <div className="flex gap-4 justify-between items-start">
          <h1 className="font-semibold text-lg">{title}</h1>
          <button
            onClick={onClose}
            data-testid="close-button"
            className="hover:bg-red-100 rounded-md p-1"
          >
            <CloseIcon color="red" />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}
