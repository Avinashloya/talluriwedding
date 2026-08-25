const weddingData = {
  title: "Bommana's Wedding Invitation",
  openingText: "We solicit your gracious presence and blessings with family & friends on this auspicious occasion of the marriage of our only son",
  
  couple: {
    tagline: "Two Souls, One Sacred Bond • Two Families, Eternal Celebration",
    groom: {
      title: "Chi.",
      name: "Nagaraju",
      relation: "Only Son",
      qualification: ""
    },
    bride: {
      title: "Chi. La. Sow.",
      name: "Geetha Sai Pravallika",
      relation: "Eldest Daughter",
      qualification: ""
    }
  },

  groomParents: {
    father: "Sri Bommana Gumpaswamy",
    mother: "Smt. Ganga",
    location: "Gudivada"
  },

  brideParents: {
    father: "Sri Utla Ganesh Babu",
    mother: "Smt. Naga Shyamala",
    location: "Gudivada"
  },

  wedding: {
    date: "2026-09-04",
    time: "21:43",
    displayDate: "Friday, 04 September 2026",
    displayTime: "9:43 PM",
    nakshatram: "Rohini Nakshatrayuktha",
    lagnam: "Vrushabha Lagnam"
  },

  dinner: {
    date: "2026-09-04",
    time: "19:30",
    displayDate: "Friday, 04 September 2026",
    displayTime: "7:30 PM",
    location: "At Marriage Venue"
  },

  venue: {
    name: "GVR Grand A/C Function Hall",
    address: "Opp. Vikas Rainbow School, Satyanarayanapuram",
    city: "Gudivada",
    state: "Andhra Pradesh",
    country: "India",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=GVR+Grand+AC+Function+Hall+Satyanarayanapuram+Gudivada",
    embedUrl: "https://maps.google.com/maps?q=16.4418,80.9926&z=15&output=embed"
  },

  invitedBy: [
    { title: "Sri", name: "Bommana Gumpaswamy" },
    { title: "Smt.", name: "Ganga" }
  ],

  bestCompliments: [
    "B. Veerabhadra",
    "Dhanalakshmi",
    "B. Sarveshwara Rao",
    "Sunitha",
    "Near & Dear"
  ],

  music: {
    enabled: true,
    file: "/assets/music/pelli.mp3"
  },

  illustration: "/assets/illustrations/wedding-artwork.jpg",

  events: [
    {
      id: "dinner",
      icon: "🍽️",
      name: "Grand Wedding Dinner",
      date: "2026-09-04",
      time: "19:30",
      displayDate: "Friday, 04 September 2026",
      displayTime: "7:30 PM Onwards",
      details: "Feast & Festive Dinner Gathering",
      venue: "At Marriage Venue (GVR Grand A/C Function Hall)"
    },
    {
      id: "sumuhurtham",
      icon: "🪔",
      name: "Sumuhurtham (Marriage Ceremony)",
      date: "2026-09-04",
      time: "21:43",
      displayDate: "Friday, 04 September 2026",
      displayTime: "9:43 PM",
      details: "Rohini Nakshatrayuktha • Vrushabha Lagnam",
      venue: "GVR Grand A/C Function Hall, Gudivada"
    }
  ],

  gallery: [
    {
      id: 1,
      url: "/assets/images/photo-1.jpg",
      caption: "Nagaraju & Geetha Sai Pravallika",
      subcaption: "A Heartfelt Moment of Togetherness"
    },
    {
      id: 2,
      url: "/assets/images/photo-2.jpg",
      caption: "Two Souls, One Bond",
      subcaption: "Chi. Nagaraju & Chi. La. Sow. Geetha Sai Pravallika"
    },
    {
      id: 3,
      url: "/assets/images/photo-3.jpg",
      caption: "Garlanded in Love",
      subcaption: "Sacred Auspicious Celebrations"
    }
  ]
};

export default weddingData;
