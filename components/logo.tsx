import Image from "next/image"
import { cn } from "@/lib/utils";

const Logo = ({ centered }: { centered?: boolean }) => {
  return (
    <div className={cn("flex bg-white rounded-xl rounded-b-none p-2", centered && "justify-center")}>
      <Image
        src="/printflow-logo.png"
        alt="Logo firmy"
        width={75}
        height={75}
        priority
      />
    </div>
  );
};

export default Logo;