import React, { useState } from 'react';
import { Calendar as CalendarIcon, Download, ExternalLink, Check } from 'lucide-react';
import weddingData from '../data/weddingData';
import './AddToCalendar.css';

const AddToCalendar = () => {
  const [copied, setCopied] = useState(false);
  const { groom, bride } = weddingData.couple;
  const { wedding, venue, invitedBy } = weddingData;

  const eventTitle = `Wedding: ${groom.title} ${groom.name} & ${bride.title} ${bride.name}`;
  const eventDetails = `We solicit your gracious presence on the wedding of ${groom.title} ${groom.name} with ${bride.title} ${bride.name}. 
Sumuhurtham: ${wedding.displayTime} (${wedding.nakshatram} • ${wedding.lagnam}). 
Dinner: ${weddingData.dinner.displayTime}. 
Invited By: ${invitedBy.map(h => `${h.title} ${h.name}`).join(' & ')}.`;
  const eventLocation = `${venue.name}, ${venue.address}, ${venue.city}, ${venue.state}`;

  // Google Calendar URL Generator (September 05, 2026)
  const getGoogleCalendarUrl = () => {
    const startTime = "20260905T140000Z"; 
    const endTime = "20260905T193000Z";

    const url = new URL("https://calendar.google.com/calendar/render");
    url.searchParams.append("action", "TEMPLATE");
    url.searchParams.append("text", eventTitle);
    url.searchParams.append("dates", `${startTime}/${endTime}`);
    url.searchParams.append("details", eventDetails);
    url.searchParams.append("location", eventLocation);
    
    return url.toString();
  };

  // Download ICS iCalendar file
  const downloadIcsFile = () => {
    const icsData = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Talluri Wedding Invitation//EN
CALSCALE:GREGORIAN
METHOD:PUBLISH
BEGIN:VEVENT
SUMMARY:${eventTitle}
DESCRIPTION:${eventDetails.replace(/\n/g, '\\n')}
LOCATION:${eventLocation}
DTSTART:20260905T140000Z
DTEND:20260905T193000Z
STATUS:CONFIRMED
SEQUENCE:0
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsData], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', `${groom.name}_${bride.name}_Wedding.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="add-calendar-container">
      <div className="calendar-box font-serif">
        <div className="calendar-header-badge">
          <CalendarIcon size={16} />
          <span>REMINDER</span>
        </div>
        <h3 className="calendar-heading gold-text">Save The Auspicious Date</h3>
        <p className="calendar-subtext">Add this sacred occasion directly to your personal calendar</p>

        <div className="calendar-buttons-row">
          <a 
            href={getGoogleCalendarUrl()} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-gold calendar-btn"
          >
            <ExternalLink size={16} />
            <span>Google Calendar</span>
          </a>

          <button onClick={downloadIcsFile} className="btn-outline-gold calendar-btn">
            {copied ? <Check size={16} color="#4ade80" /> : <Download size={16} />}
            <span>{copied ? "Calendar Saved!" : "Apple / Outlook (.ics)"}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddToCalendar;
