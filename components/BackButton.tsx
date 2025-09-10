import { Tooltip } from "@mui/material";
import { Button as UiButton } from "@/components/ui/button";

function BackButton() {
    return (
        <div className="">
            <Tooltip title="Go To Home" placement="top">
                <UiButton type="button" className="bg-white text-center w-48 h-14 relative text-[#414141] text-[18px] font-medium border-4 border-white hover:cursor-pointer group">
                    <div className="bg-gray-800 rounded-xl h-12 w-1/4 grid place-items-center absolute left-0 top-0 group-hover:w-full z-10 duration-500">
                        <svg width="25px" height="25px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                            <path fill="#fff" d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z" />
                            <path fill="#fff" d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z" />
                        </svg>
                    </div>
                    <p className="translate-x-4">Go Back</p>
                </UiButton>

            </Tooltip>
        </div>
    );
}

export default BackButton;