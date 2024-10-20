import Ripple from "@/components/ui/ripple";

export function RippleDemo() {
  return (
    <div className="flex  absolute  h-screen w-screen flex-col items-center justify-center overflow-hidden rounded-lg  bg-background md:shadow-xl">
      <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-white">

      </p>
      <Ripple />
    </div>
  );
}
export default RippleDemo;