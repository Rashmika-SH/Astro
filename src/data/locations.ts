export interface Location {
    id: string;
    name: string;
    description: string;
    address: string;
    phone: string;
    email: string;
}

export const locations: Location[] = [
    {
        id: 'sydney',
        name: 'Sydney',
        description: 'Serving the Sydney community with expert astrological services and spiritual guidance.',
        address: 'Sydney, New South Wales',
        phone: '+61 405 911 434',
        email: 'shivaanagh@gmail.com'
    },
    {
        id: 'brisbane',
        name: 'Brisbane',
        description: 'Providing comprehensive astrology services to Brisbane and surrounding areas.',
        address: 'Brisbane, Queensland',
        phone: '+61 405 911 434',
        email: 'shivaanagh@gmail.com'
    },
    {
        id: 'melbourne',
        name: 'Melbourne',
        description: 'Expert astrology consultations available for Melbourne residents.',
        address: 'Melbourne, Victoria',
        phone: '+61 405 911 434',
        email: 'shivaanagh@gmail.com'
    }
];

export const getLocationById = (id: string): Location | undefined => {
    return locations.find(location => location.id === id);
};
