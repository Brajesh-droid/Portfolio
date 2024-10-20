import ShinyButton from "@/components/ui/shiny-button";
import Link from "next/link";
export function ShinyButtonDemo() {
  return (
    <div className="flex absolute z-10 top-[35%] ">
      <Link
        href="https://drive.google.com/file/d/1Zc8DIRazK-ly95zhDPY6RxLwKNHx-lF7/view"
        passHref
      >
        <ShinyButton>See My Resume</ShinyButton>
      </Link>
    </div>
  );
}
export default ShinyButtonDemo;
