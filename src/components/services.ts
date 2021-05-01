import { t } from "../translations/translation";
import image from "../../static/images/video.jpg";

interface IService {
    path: string;
    image: string;
    id: string;
    title: string;
    text: string;
    description: string;
}

export const services: IService[] = [
    {
        path: "/services",
        image: image,
        id: "serv1",
        title: t.services.title1,
        text: t.services.text1,
        description: t.services.description1,
    },
    {
        path: "/services",
        image: image,
        id: "serv2",
        title: t.services.title1,
        text: t.services.text1,
        description: t.services.description1,
    },
    {
        path: "/services",
        image: image,
        id: "serv3",
        title: t.services.title1,
        text: t.services.text1,
        description: t.services.description1,
    },
    {
        path: "/services",
        image: image,
        id: "serv4",
        title: t.services.title1,
        text: t.services.text1,
        description: t.services.description1,
    },
    {
        path: "/services",
        image: image,
        id: "serv5",
        title: t.services.title1,
        text: t.services.text1,
        description: t.services.description1,
    },
];
