import ShinyButton from "@/components/ui/shiny-button";
import Link from 'next/link';
export function ShinyButtonDemo() {
  return (
    <div className="flex absolute z-10 top-[35%] ">
      <Link href="google.com" passHref>
        <ShinyButton>See My Resume</ShinyButton>
      </Link>
    </div>
  );
  
}
export default ShinyButtonDemo;