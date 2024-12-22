import BasicAnimationGuide from "@/components/BasicAnimationGuide";
import CardHolder from "@/components/CardHolder";
import Settings from "@/components/Settings";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TextAniamtion from "./text-animations/TextAniamtion";

export const Main = () => {
  return (
    <div className="mx-auto text-sm w-full max-w[950px]">
      <Tabs
        className="flex flex-col justify-center items-center"
        defaultValue="basic"
      >
        <TabsList>
          <TabsTrigger value="basic">Basic</TabsTrigger>
          <TabsTrigger value="typography">Typography</TabsTrigger>
        </TabsList>
        <TabsContent value="basic" className="outline-none">
          <div className="w-full flex flex-col gap-6 pt-4">
            <BasicAnimationGuide />
            <Settings />
            <CardHolder />
          </div>
        </TabsContent>
        <TabsContent value="typography" className="outline-none">
          <div className="w-full mx-auto py-4">
            <TextAniamtion />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};
