export type Service = {
  id: string;
  title: string;
  description: string;
  icon: string;
  image?: string;
  iconImage?: string;
  detailedDescription: string;
  benefits: string[];
};

export const services: Service[] = [
  {
    id: 'vashikaran-specialist',
    title: 'Vashikaran Specialist',
    description: 'Ancient Vedic technique to influence and attract positive energies in relationships and life.',
    icon: '🔮',
    image: '/images/Vashikaran.jpeg',
    detailedDescription: 'Vashikaran is an ancient Vedic practice that helps in attracting positive energies and influencing situations in your favor. Our expert Astrologer Shiva Anagh uses traditional methods to help you achieve harmony in relationships, career, and personal life.',
    benefits: [
      'Resolve relationship conflicts',
      'Attract love and affection',
      'Improve family harmony',
      'Enhance personal magnetism',
      'Achieve desired outcomes ethically'
    ]
  },
  {
    id: 'black-magic-removal',
    title: 'Black Magic Removal',
    description: 'Expert removal of dark energies and black magic effects with 100% guaranteed results.',
    icon: '🛡️',
    image: '/images/Blackmagic.jpeg',
    detailedDescription: 'Black magic has been a menace since ancient times. Our experts have practiced Vedic and ancient traditions to remove black magic. No matter how powerful it is or how long ago the magic was cast upon you, we can assure you 100% that it can be resolved.',
    benefits: [
      'Complete removal of dark energies',
      'Protection from future attacks',
      'Restore peace and harmony',
      'Eliminate negative influences',
      'Guaranteed permanent solution'
    ]
  },
  {
    id: 'get-ex-love-back',
    title: 'Get Ex-Love Back',
    description: 'Reunite with your lost love through powerful astrological remedies and guidance.',
    icon: '💕',
    image: '/images/geturexloverback.jpeg',
    detailedDescription: 'Lost your true love? Our specialized astrological remedies and guidance can help you reunite with your ex-partner. Using ancient Vedic techniques and personalized solutions, we help restore broken relationships.',
    benefits: [
      'Rekindle lost romance',
      'Resolve past conflicts',
      'Strengthen emotional bonds',
      'Remove misunderstandings',
      'Create lasting reconciliation'
    ]
  },
  {
    id: 'spiritual-healing',
    title: 'Spiritual Healing',
    description: 'Holistic spiritual healing to restore balance, peace, and positive energy in your life.',
    icon: '🕉️',
    image:  '/images/SpirtualHealing.jpeg',
    detailedDescription: 'Spiritual healing addresses the root causes of physical, emotional, and mental distress. Through ancient practices and divine guidance, we help you achieve inner peace and spiritual balance.',
    benefits: [
      'Inner peace and tranquility',
      'Emotional balance',
      'Mental clarity',
      'Physical well-being',
      'Spiritual awakening'
    ]
  },
  {
    id: 'business-problems-solution',
    title: 'Job & Business Problems',
    description: 'Astrological solutions for career growth, business success, and financial prosperity.',
    icon: '💼',
    image: '/images/jobproblem.jpeg',
    detailedDescription: 'Facing challenges in your career or business? Our astrological insights and remedies help you overcome obstacles, attract opportunities, and achieve professional success.',
    benefits: [
      'Career advancement',
      'Business growth',
      'Financial stability',
      'Overcome obstacles',
      'Attract opportunities'
    ]
  },
  {
    id: 'negative-energy-removal',
    title: 'Negative Energy Removal',
    description: 'Cleanse your aura and environment from negative energies and vibrations.',
    icon: '✨',
    image: '/images/Negativeenergy.jpeg',
    detailedDescription: 'Negative energies can affect your health, relationships, and success. Our expert techniques help identify and remove these harmful influences, restoring positivity in your life.',
    benefits: [
      'Cleanse your aura',
      'Purify living spaces',
      'Restore positive vibes',
      'Improve overall well-being',
      'Protect from negativity'
    ]
  },
  {
    id: 'evil-spirit-removal',
    title: 'Evil Spirit Removal',
    description: 'Protection and removal of evil spirits and paranormal disturbances.',
    icon: '👻',
    iconImage: '/evil-spirit-icon.svg',
    image: '/images/Evilsprite.jpeg',
    detailedDescription: 'Evil spirits and paranormal activities can cause serious disturbances in life. Our powerful Vedic rituals and mantras provide complete protection and removal of such entities.',
    benefits: [
      'Complete spirit removal',
      'Home purification',
      'Personal protection',
      'Peace of mind',
      'Permanent solution'
    ]
  },
  {
    id: 'horoscope-reading',
    title: 'Horoscope Reading',
    description: 'Detailed birth chart analysis and personalized horoscope readings for life guidance.',
    icon: '📊',
    iconImage: '/horoscope-icon.svg',
    image:  '/images/Horoscope.jpeg',
    detailedDescription: 'Get comprehensive horoscope readings based on your birth chart. Understand your strengths, challenges, and life path through detailed Vedic astrology analysis.',
    benefits: [
      'Understand your destiny',
      'Career guidance',
      'Relationship compatibility',
      'Health predictions',
      'Timing of events'
    ]
  },
  {
    id: 'palm-reading',
    title: 'Palm Reading',
    description: 'Ancient palmistry to reveal your past, present, and future through hand analysis.',
    icon: '🤚',
    image: '/images/PalmReading.jpeg',
    detailedDescription: 'Palm reading is an ancient art that reveals insights about your personality, talents, and life journey. Our expert palmist provides accurate readings and guidance.',
    benefits: [
      'Know your personality',
      'Discover hidden talents',
      'Understand life patterns',
      'Career and health insights',
      'Future predictions'
    ]
  },
  {
    id: 'psychic-reading',
    title: 'Psychic Reading',
    description: 'Intuitive psychic readings to gain clarity and answers to your life questions.',
    icon: '🔍',
    image: '/images/Psychic.jpeg',
    detailedDescription: 'Connect with divine wisdom through our psychic readings. Get clarity on confusing situations, make better decisions, and understand your life purpose.',
    benefits: [
      'Gain clarity and insight',
      'Make informed decisions',
      'Understand life purpose',
      'Connect with higher self',
      'Receive divine guidance'
    ]
  }
];

export const getServiceById = (id: string): Service | undefined => {
  return services.find(service => service.id === id);
};
