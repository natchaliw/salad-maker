import Image from "next/image";
import Head from "./components/Head";

export default function Home() {
  return (
    <div className="w-[1535px] bg-blue-200 py-12 pr-10 pl-0 gap-8">
      <Head/>
      <div className="bg-blue-400 flex flex-col">
        <div>
          รูป...
        </div>
        <div>
          ประเภทอาหาร
        </div>
        <div>
          อาหาร
        </div>
      </div>
    </div>
    
  );
}
