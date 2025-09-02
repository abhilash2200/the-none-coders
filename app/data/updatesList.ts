export interface UpdateListItem {
  slug: string;
  title: string;
  description: string;
  image: string;
  date: string;
  info: string;
}

export const updatesList: UpdateListItem[] = [
  {
    slug: "mobile-app-development-creating-dreams-in-ones-hand",
    title: "Mobile App Development: Creating Dreams in One's Hand",
    description: "A mobile app is not an icon on a phone. It is a connector between individuals and the things they cherish.",
    image: "/assets/img/updates/mob-dev.jpg",
    date: "2025-08-22",
    info:"Mobile App Development",
  },
  {
    slug: "ott-platform-development-keeping-entertainment-even-closer-than-before",
    title: "OTT Platform Development: Keeping Entertainment Even Closer Than Before",
    description: "OTT stands for Over-The-Top. It's a service that streams videos, movies, music, or live events over the internet. No satellite.",
    image: "/assets/img/updates/ott-dev.jpg",
    date: "2025-08-20",
    info:"OTT Platform Development",
  },
  {
    slug: "crm-development-the-pulse-of-successful-growing-businesses",
    title: "CRM Development: The Pulse of Successful Growing Businesses",
    description: "CRM stands for Customer Relationship Management. In other words, it is software that stores all customer information in one location.",
    image: "/assets/img/updates/crm-dev.jpg",
    date: "2025-08-18",
    info:"CRM Development",
  },
];
