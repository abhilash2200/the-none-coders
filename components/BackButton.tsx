import { Tooltip } from "@mui/material";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

function BackButton() {
    const router = useRouter();

    return (
        <div>
            <Tooltip title="Go To Home" placement="top">
                <Button
                    onClick={() => router.push("/")}
                    variant="secondary"
                    size="lg"
                    leftIcon={<ArrowLeft className="w-5 h-5" />}
                    className="group"
                >
                    <span className="relative inline-block overflow-hidden">
                        <span className="block transition-transform duration-300 group-hover:-translate-x-2">
                            Go Back
                        </span>
                    </span>
                </Button>
            </Tooltip>
        </div>
    );
}

export default BackButton;
