import { useState } from 'react';
import ExploreMenu from '../components/exploreMenu/exploreMenu.js';
import HeroSection from '../components/heroSection/HeroSection.js';
import Dishes from '../components/dishes/Dishes.js';

export default function Home() {
    const [item, setItem] = useState('All');
    return (
        <div>
            <HeroSection />
            <ExploreMenu item={item} setItem={setItem} />
            <Dishes item={item} setItem={setItem} />
        </div>
    )
}