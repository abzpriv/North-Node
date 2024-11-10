import React from 'react';
import styles from './LiveEvent.module.css';
import Image, { ImageProps } from 'next/image';

type EventImageSrc = ImageProps['src'] | string;

interface LiveEventProps {
  events: {
    imageSrc: EventImageSrc; 
    eventName: string;
    eventDate: string;
    eventTime: string;
  }[];
}

const LiveEvent: React.FC<LiveEventProps> = ({ events }) => {
  const duplicatedEvents = [...events, ...events];

  return (
    <div className={styles.liveEventsSection}>
      <h2 className={styles.sectionTitle}>
        Up Coming Live <span>Events</span>
      </h2>
      <p className={styles.sectionDescription}>
        &quot;Don&apos;t miss our upcoming live events! Join us for exclusive sessions with top experts in psychic readings, tarot, and astrology. Experience live interactions, get real-time insights, and connect with a vibrant community seeking clarity and guidance. Mark your calendar and be part of these transformative events that can illuminate your path forward.&quot;
      </p>

      <div className={styles.scrollingWrapper}>
        <div className={styles.eventsGrid}>
          {duplicatedEvents.map((event, index) => (
            <div key={index} className={styles.liveEventCard} >
              {event.imageSrc && (
                <Image
                  src={event.imageSrc} 
                  alt={event.eventName}
                  className={styles.eventImage}
                  width={500}  
                  height={300} 
                />
              )}
              <div className={styles.eventDetails}>
                <h3 className={styles.eventName}>{event.eventName}</h3>
                <div className={styles.eventMeta}>
                  <span className={styles.eventDate}>{event.eventDate}</span>
                  <span className={styles.eventTime}>{event.eventTime}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LiveEvent;
