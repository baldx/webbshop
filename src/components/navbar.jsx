import { useState } from "react";

const categories = [
    {
        name: 'Jewelry',
        items: ['Necklaces', 'Earrings', 'Bracelets', 'Rings', 'Anklets', 'Jewelry Sets', 'Brooches', 'Charms', 'Pendants', 'Chokers', 'Body Jewelry', 'Toe Rings']
    },
    {
        name: 'Purses',
        items: ['Handbags', 'Tote Bags', 'Clutches', 'Crossbody Bags', 'Backpacks', 'Wallets & Pouches', 'Shoulder Bags', 'Messenger Bags', 'Fanny Packs', 'Bucket Bags', 'Hobo Bags', 'Satchels']
    },
    {
        name: 'Scarves',
        items: ['Silk Scarves', 'Cashmere Scarves', 'Pashminas', 'Lightweight Scarves', 'Infinity Scarves', 'Shawls & Wraps', 'Bandanas', 'Square Scarves', 'Tie Scarves', 'Snoods', 'Ponchos', 'Stoles']
    },
    {
        name: 'Hats',
        items: ['Sun Hats', 'Beanies', 'Headbands', 'Hair Clips', 'Fascinators', 'Hair Ties & Scrunchies', 'Hair Pins', 'Hair Combs', 'Hair Bands', 'Hair Extensions', 'Hair Wraps', 'Turban Headbands']
    },
    {
        name: 'Eyewear',
        items: ['Sunglasses', 'Reading Glasses', 'Blue Light Glasses', 'Fashion Eyeglasses', 'Polarized Sunglasses', 'Aviator Glasses', 'Round Sunglasses', 'Cat Eye Sunglasses', 'Oversized Sunglasses', 'Sport Sunglasses', 'Wayfarer Sunglasses', 'Rectangle Sunglasses']
    },
    {
        name: 'Belts',
        items: ['Leather Belts', 'Fabric Belts', 'Waist Belts', 'Chain Belts', 'Belt Buckles', 'Belt Bags', 'Suspenders', 'Belt Pouches', 'Belt Chains', 'Belt Extenders', 'Belt Holsters', 'Belt Accessories']
    },
    {
        name: 'Timepieces',
        items: ['Analog Watches', 'Digital Watches', 'Smartwatches', 'Chronograph Watches', 'Fashion Watches', 'Luxury Watches', 'Sport Watches', 'Dress Watches', 'Mechanical Watches', 'Automatic Watches', 'Skeleton Watches', 'Pocket Watches']
    }
];



export default function NavBarItems () {
    
    const [showSubcategories, setShowSubcategories] = useState(null);

    const handleMouseEnter = (categoryName) => {
        setShowSubcategories(categoryName);
    };

    const handleMouseLeave = () => {
        setShowSubcategories(null);
    };
    	

    const displayItems = () => {
        return (
            <>

            </>
        )
    }

    return (
        <>
            {categories.map(category => (
                <ul
                    key={category.name}
                    onMouseEnter={() => handleMouseEnter(category.name)}
                    onMouseLeave={handleMouseLeave}
                    style={{ position: 'relative' }}
                >
                    <h2>{category.name}</h2>
                    {showSubcategories === category.name && (
                        <div style={{ position: 'absolute', top: '100%', left: 0, backgroundColor: 'white', padding: '5px', border: '1px solid #ccc' }}>
                            {category.items.map(item => (
                                <div key={item}>{item}</div>
                            ))}
                        </div>
                    )}
                </ul> 
            ))}
        </>
    )
}