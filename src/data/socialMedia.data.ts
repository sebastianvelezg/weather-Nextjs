import {SocialMediaT} from "@/types/socialMedia.type";
import {IconWhatsapp} from "@/components/svgs/IconWhatsapp";
import {IconInstagram} from "@/components/svgs/instagram";
import {FacebookIcon} from "@/components/svgs/FacebookIcon";
import {IconLinkedin} from "@/components/svgs/linkedin-in";
import {YoutubeIcon} from "@/components/svgs/YoutubeIcon";
import {IconTwitter} from "@/components/svgs/twitter";


export const socialMediaData: SocialMediaT[] = [
    {
        id: 1,
        name: "Whatsapp",
        url: "https://api.whatsapp.com/send?phone=573015309191",
        icon: IconWhatsapp,
    },
    {
        id: 2,
        name: "Instagram",
        url: "https://www.instagram.com/Digitalaw.Legaltech/",
        icon: IconInstagram,
    },
    {
        id: 3,
        name: "Facebook",
        url: "https://play.decentraland.org/?position=-94,-58",
        icon: FacebookIcon,
    },
    {
        id: 4,
        name: "LinkedIn",
        url: "https://www.linkedin.com/company/digitalaw-legaltech/",
        icon: IconLinkedin,
    },
    {
        id: 5,
        name: "Youtube",
        url: "https://www.youtube.com/channel/UC1MEndp3gGqq0wEv0WznQyg?view_as=subscriber",
        icon: YoutubeIcon,
    },
    {
        id: 6,
        name: "Twitter",
        url: "https://twitter.com/LawDigita",
        icon: IconTwitter,
    },
];
