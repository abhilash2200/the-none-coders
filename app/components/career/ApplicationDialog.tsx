"use client";

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";
import ApplicationForm from "./ApplictionForm";

interface ApplicationDialogProps {
    open: boolean;
    onClose: () => void;
    jobId?: number;
    jobTitle?: string;
    jobNumber?: string;
    location?: string;
}

export default function ApplicationDialog({
    open,
    onClose,
    jobId,
    jobTitle,
    jobNumber,
    location,
}: ApplicationDialogProps) {
    return (
        <Dialog open={open} onOpenChange={(isOpen) => !isOpen && onClose()}>
            <DialogContent className="max-w-2xl rounded-2xl p-6">
                {/* Header with Close button */}
                <DialogHeader className="flex justify-between items-center">
                    <DialogTitle>Apply for {jobTitle}</DialogTitle>
                </DialogHeader>

                <DialogDescription className="sr-only">
                    Application form for {jobTitle}
                </DialogDescription>

                {/* Application Form */}
                <ApplicationForm
                    jobId={jobId}
                    jobTitle={jobTitle}
                    jobNumber={jobNumber}
                    location={location}
                    onClose={onClose}
                />
            </DialogContent>
        </Dialog>
    );
}
