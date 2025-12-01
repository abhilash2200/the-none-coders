import { Tooltip } from "@mui/material";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";

function ArrowButton() {
  return (
    <div>
      <Tooltip title="Visit Now" placement="top">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full w-14 h-14"
          aria-label="Visit Now"
        >
          <ArrowUp className="w-6 h-6 rotate-45" />
        </Button>
      </Tooltip>
    </div>
  );
}

export default ArrowButton;
