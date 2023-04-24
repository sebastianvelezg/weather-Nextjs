// import {IconT} from "@/types/icon.type";

export type SocialMediaT = {
    id: number;
    name: string;
    url: string;
    // icon:  (props: IconT) => JSX.Element;
    // icon:  (props: IconT) => JSX.Element;
    // icon:  JSX.Element;
    icon:  (props: any) => JSX.Element;
}