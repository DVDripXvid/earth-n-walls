import { t } from "../translations/translation";

interface IReference {
    images: string[];
    path: string;
    id: string;
    title: string;
    text: string;
}

export const references: IReference[] = [
    {
        images: [
            "images/reference1.jpg",
            "images/reference1.jpg",
            "images/reference1.jpg",
        ],
        path: "/references",
        id: "reference1",
        title: t.references.title1,
        text: t.references.text1,
    },
    {
        images: ["images/reference2.jpg", "images/reference2.jpg"],
        path: "/references",
        id: "reference2",
        title: t.references.title1,
        text: t.references.text1,
    },
    {
        images: ["images/reference3.jpg", "images/reference3.jpg"],
        path: "/references",
        id: "reference3",
        title: t.references.title1,
        text: t.references.text1,
    },
    {
        images: ["images/reference1.jpg"],
        path: "/references",
        id: "reference4",
        title: t.references.title1,
        text: t.references.text1,
    },
    {
        images: [
            "images/reference2.jpg",
            "images/reference2.jpg",
            "images/reference2.jpg",
            "images/reference2.jpg",
        ],
        path: "/references",
        id: "reference5",
        title: t.references.title1,
        text: t.references.text1,
    },
    {
        images: ["images/reference3.jpg"],
        path: "/references",
        id: "reference6",
        title: t.references.title1,
        text: t.references.text1,
    },
];
