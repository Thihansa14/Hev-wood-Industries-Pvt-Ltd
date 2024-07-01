import React, { useState } from 'react';
import './Products.css';
import doorImage1 from './doorImage1.png'; // Replace with actual image paths
import doorImage2 from './doorImage2.png';
import doorImage3 from './doorImage3.png';
import doorImage4 from './doorImage4.png';
import doorImage5 from './doorImage5.png';
import doorImage6 from './doorImage6.png';

const doorData = [
    {
        id: 1,
        name: 'Standard Door',
        image: doorImage1,
        details: 'Standard doors are simple and versatile, suitable for any interior space.',
        specifications: 'Material: Wood, Finish: Matte, Installation: Easy'
    },
    {
        id: 2,
        name: 'Non-Standard Door',
        image: doorImage2,
        details: 'Non-standard doors are custom made to fit unique sizes and styles.',
        specifications: 'Material: Wood, Finish: Gloss, Installation: Moderate'
    },
    {
        id: 3,
        name: 'Glass Opening Door',
        image: doorImage3,
        details: 'Glass opening doors feature glass panels to let in light and create a modern look.',
        specifications: 'Material: Wood and Glass, Finish: Semi-gloss, Installation: Moderate'
    },
    {
        id: 4,
        name: 'Solid Core Door',
        image: doorImage4,
        details: 'Solid core doors provide excellent soundproofing and durability.',
        specifications: 'Material: Solid Wood, Finish: Matte, Installation: Difficult'
    },
    {
        id: 5,
        name: 'Sound Proof Door',
        image: doorImage5,
        details: 'Soundproof doors are designed to reduce noise transmission between rooms.',
        specifications: 'Material: Solid Wood, Finish: Matte, Installation: Difficult'
    },
    {
        id: 6,
        name: 'Fire Rated Door',
        image: doorImage6,
        details: 'Fire rated doors offer added protection against the spread of fire.',
        specifications: 'Material: Solid Wood, Finish: Matte, Installation: Moderate'
    }
];

const Products = () => {
    const [selectedDoor, setSelectedDoor] = useState(null);

    const handleDoorClick = (door) => {
        setSelectedDoor(door);
    };

    const handleCloseDetails = () => {
        setSelectedDoor(null);
    };

    const handleBackToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="products-container">
            <header className="products-header">
                <h1>PRODUCTS</h1>
                <p>Customize your doors with a variety of sizes, finishes, and designs. Use our interactive tool to visualize your perfect door.</p>
            </header>
            <div className="products-grid">
                {doorData.map((door) => (
                    <div key={door.id} className="product-card" onClick={() => handleDoorClick(door)}>
                        <img src={door.image} alt={door.name} className="product-image" />
                        <h2 className="product-name">{door.name}</h2>
                    </div>
                ))}
            </div>
            {selectedDoor && (
                <div className="product-details">
                    <button className="close-details" onClick={handleCloseDetails}>X</button>
                    <h2>{selectedDoor.name}</h2>
                    <p>{selectedDoor.details}</p>
                    <p><strong>Specifications:</strong> {selectedDoor.specifications}</p>
                </div>
            )}
            <div className="door-sizes">
                <h2>Standard Door Sizes</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Height</th>
                            <th>Width</th>
                            <th>Thickness</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>81”</td>
                            <td>27”</td>
                            <td>1 1/4”</td>
                        </tr>
                        <tr>
                            <td>81”</td>
                            <td>30”</td>
                            <td>1 1/4”</td>
                        </tr>
                        <tr>
                            <td>81”</td>
                            <td>33”</td>
                            <td>1 1/4”</td>
                        </tr>
                        <tr>
                            <td>81”</td>
                            <td>36”</td>
                            <td>1 1/4”</td>
                        </tr>
                        <tr>
                            <td>81”</td>
                            <td>42”</td>
                            <td>1 1/4”</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <button className="back-to-top" onClick={handleBackToTop}>↑ Back to Top</button>
        </div>
    );
};

export default Products;
