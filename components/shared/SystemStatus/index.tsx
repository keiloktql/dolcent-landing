import React from "react";
import Image from "next/image";
import { Clock8 } from "lucide-react";
import SSUp from "@/public/assets/system-status/up.png";
import SSDown from "@/public/assets/system-status/down.png";
import SSPaused from "@/public/assets/system-status/paused.png";
import { Skeleton } from "@/components/shared/Skeleton";
import { SYSTEM_STATUS_ENUM } from "@/lib/enum";
import { UPTIME_URL } from "@/lib/config";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger
} from "@/components/shared/Tooltip";

const SystemStatus = ({ systemStatus, loading, className }) => {
  if (loading) {
    return (
      <div className={`flex hover:underline cursor-pointer ${className}`}>
        <Skeleton className="w-[15px] h-[14px] rounded-full bg-slate-400" />
        <Skeleton className="ml-2 w-[150px] h-[14px] rounded-sm bg-slate-400" />
      </div>
    );
  }

  let img = SSPaused;
  let text = "All systems checks paused.";

  if (systemStatus === SYSTEM_STATUS_ENUM.DOWN) {
    img = SSDown;
    text = "System(s) down.";
  }
  if (systemStatus === SYSTEM_STATUS_ENUM.UP) {
    img = SSUp;
    text = "All systems operational.";
  }

  return (
    <Tooltip>
      <TooltipTrigger>
        <a
          href={UPTIME_URL}
          rel="noopener noreferrer"
          target="_blank"
          className={`flex hover:underline cursor-pointer w-fit ${className}`}
          suppressHydrationWarning
        >
          <Image
            style={{ objectFit: "contain" }}
            src={img}
            alt="system status"
          />
          <p className="ml-2 text-sm font-semibold text-gray-600">{text}</p>
        </a>
      </TooltipTrigger>
      <TooltipContent className="flex flex-row items-center" side="bottom">
        <Clock8 height={16} className="text-slate-950 mr-[2px]" />
        Updated every 5 mins
      </TooltipContent>
    </Tooltip>
  );
};

export default SystemStatus;
