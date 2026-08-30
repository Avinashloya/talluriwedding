const weddingData = {
  title: "Talluri's Wedding Invitation",
  openingText: "We solicit your gracious presence and blessings with family & friends on this auspicious occasion of the marriage of our son",
  
  couple: {
    tagline: "Two Souls, One Sacred Bond • Two Families, Eternal Celebration",
    groom: {
      title: "Chi.",
      name: "Venkata Ramanaiah",
      relation: "Son",
      qualification: "B.Tech."
    },
    bride: {
      title: "Chi. La. Sow.",
      name: "Keerthi Priya",
      relation: "Daughter",
      qualification: "B.Tech."
    }
  },

  groomParents: {
    father: "Sri Talluri Jamalaiah",
    mother: "Smt. Ganga",
    location: "Tiruvuru, N.T.R. District"
  },

  brideParents: {
    father: "Sri Erla Rama Rao",
    mother: "Smt. Lakshmi",
    location: "Hanuman Junction"
  },

  wedding: {
    date: "2026-09-05",
    time: "23:05",
    displayDate: "Saturday, 05 September 2026",
    displayTime: "11:05 PM",
    nakshatram: "Arudhra Nakshatrayuktha",
    lagnam: "Vrishaba Lagnam"
  },

  dinner: {
    date: "2026-09-05",
    time: "19:30",
    displayDate: "Saturday, 05 September 2026",
    displayTime: "7:30 PM Onwards",
    location: "At Marriage Venue (R.K. Convention)"
  },

  venue: {
    name: "R.K. Convention",
    complex: "Ganapathi Complex",
    address: "Beside H.P. Petrol Bunk, Eluru Road",
    city: "Hanuman Junction",
    state: "Andhra Pradesh",
    country: "India",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=RK+Convention+Ganapathi+Complex+Hanuman+Junction",
    embedUrl: "https://maps.google.com/maps?q=16.634621,80.957519&z=15&output=embed"
  },

  invitedBy: [
    { title: "Sri", name: "Talluri Jamalaiah" },
    { title: "Smt.", name: "Ganga" }
  ],

  bestCompliments: [
    "Near & Dear"
  ],

  music: {
    enabled: true,
    file: "/assets/music/wedding-audio.mp3"
  },

  illustration: "/assets/illustrations/wedding-artwork.jpg",

  events: [
    {
      id: "dinner",
      icon: "🍽️",
      name: "Grand Wedding Dinner",
      date: "2026-09-05",
      time: "19:30",
      displayDate: "Saturday, 05 September 2026",
      displayTime: "7:30 PM Onwards",
      details: "Grand Wedding Dinner Feast",
      venue: "At Marriage Venue (R.K. Convention, Hanuman Junction)"
    },
    {
      id: "sumuhurtham",
      icon: "🪔",
      name: "Sumuhurtham (Marriage Ceremony)",
      date: "2026-09-05",
      time: "23:05",
      displayDate: "Saturday, 05 September 2026",
      displayTime: "11:05 PM",
      details: "Arudhra Nakshatrayuktha • Vrishaba Lagnam",
      venue: "R.K. Convention, Ganapathi Complex, Hanuman Junction"
    }
  ],

  gallery: [
    {
      id: 1,
      url: "/assets/images/photo-1.jpg",
      caption: "Keerthi Priya & Venkata Ramanaiah",
      subcaption: "A Heartfelt Moment of Togetherness"
    },
    {
      id: 2,
      url: "/assets/images/photo-2.jpg",
      caption: "Sacred Garlands & Blessings",
      subcaption: "Two Souls, One Beautiful Bond"
    },
    {
      id: 3,
      url: "/assets/images/photo-3.jpg",
      caption: "A Journey of Togetherness & Joy",
      subcaption: "Sacred Auspicious Celebrations"
    }
  ]
};

export default weddingData;

