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
    // console.log(categories[0].items[0])
    return (
        <>
            <ul className="category">
            {categories.map(category => (
                <div className="item-container">
                    <div className="category-name">{category.name}</div>
                    {/* <ul>
                        {category.items.map(item => (
                            <li><a href="#">{item}</a></li>
                        ))}
                    </ul> */}
                </div>
            ))}
            </ul>
        </>
    )
}