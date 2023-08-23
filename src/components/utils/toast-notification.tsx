import { TypographyP } from "@/components/typography/TypographyP";
import { toast } from "@/components/ui/use-toast";


  export function ShowToast(title, message, type) {
    toast({
      title: title,
      description: (
        <TypographyP
          name={message}
          color="text-lg font-medium pr-10  mr-[50px] mt-1"
        />
      ),
    });
  }
