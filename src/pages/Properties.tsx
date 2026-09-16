import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import PropertyCard from '../components/PropertyCard';
import SectionHeading from '../components/SectionHeading';
import { properties } from '../data/properties';
import Button from '../components/Button';

export default function Properties() {
  const [searchParams] = useSearchParams();
  
  const initialLocation = searchParams.get('location') || 'All Locations';
  const initialType = searchParams.get('type') || 'All Types';
  const initialBedrooms = searchParams.get('bedrooms') || 'Any';
  const initialPrice = searchParams.get('price') || 'Any';

  const [location, setLocation] = useState(initialLocation);
  const [type, setType] = useState(initialType);
  const [bedrooms, setBedrooms] = useState(initialBedrooms);
  const [price, setPrice] = useState(initialPrice);
  const [sort, setSort] = useState('Featured');

  const filteredProperties = useMemo(() => {
    let result = [...properties];

    if (location !== 'All Locations') {
      result = result.filter(p => p.location.includes(location));
    }
    
    if (type !== 'All Types') {
      result = result.filter(p => p.type.includes(type));
    }

    if (bedrooms !== 'Any') {
      const minBeds = parseInt(bedrooms.replace('+', ''));
      result = result.filter(p => p.bedrooms >= minBeds);
    }

    if (price !== 'Any') {
      result = result.filter(p => {
        if (price === 'Under $300k') return p.price < 300000;
        if (price === '$300k–$400k') return p.price >= 300000 && p.price <= 400000;
        if (price === '$400k–$500k') return p.price > 400000 && p.price <= 500000;
        if (price === '$500k+') return p.price > 500000;
        return true;
      });
    }

    // Sort
    if (sort === 'Price: Low to High') {
      result.sort((a, b) => a.price - b.price);
    } else if (sort === 'Price: High to Low') {
      result.sort((a, b) => b.price - a.price);
    } else if (sort === 'Largest Area') {
      result.sort((a, b) => b.area - a.area);
    } else {
      // Featured
      result.sort((a, b) => (a.featured === b.featured ? 0 : a.featured ? -1 : 1));
    }

    return result;
  }, [location, type, bedrooms, price, sort]);

  const clearFilters = () => {
    setLocation('All Locations');
    setType('All Types');
    setBedrooms('Any');
    setPrice('Any');
    setSort('Featured');
  };

  return (
    <PageTransition title="All Properties" description="Explore our complete collection of fictional concept residences.">
      <div className="pt-24 pb-12 px-6 lg:px-12 max-w-7xl mx-auto">
        <SectionHeading 
          eyebrow="CONCEPT LISTINGS"
          heading="ALL PROPERTIES"
          subheading="Explore our complete collection of fictional concept residences."
        />
        
        {/* Filters */}
        <div className="bg-primary/5 p-8 mb-16 rounded-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 items-end">
            <div className="flex flex-col space-y-2">
              <label className="text-xs tracking-widest text-primary/60 uppercase">Location</label>
              <select 
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full bg-transparent border-b border-primary/20 py-2 text-primary text-sm focus:outline-none focus:border-primary cursor-none"
              >
                <option>All Locations</option>
                <option>Dhaka</option>
                <option>Gulshan</option>
                <option>Banani</option>
                <option>Uttara</option>
                <option>Dhanmondi</option>
              </select>
            </div>
            
            <div className="flex flex-col space-y-2">
              <label className="text-xs tracking-widest text-primary/60 uppercase">Type</label>
              <select 
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="w-full bg-transparent border-b border-primary/20 py-2 text-primary text-sm focus:outline-none focus:border-primary cursor-none"
              >
                <option>All Types</option>
                <option>Apartment</option>
                <option>House</option>
                <option>Luxury Residence</option>
                <option>Private Residence</option>
                <option>City Apartment</option>
              </select>
            </div>
            
            <div className="flex flex-col space-y-2">
              <label className="text-xs tracking-widest text-primary/60 uppercase">Bedrooms</label>
              <select 
                value={bedrooms}
                onChange={(e) => setBedrooms(e.target.value)}
                className="w-full bg-transparent border-b border-primary/20 py-2 text-primary text-sm focus:outline-none focus:border-primary cursor-none"
              >
                <option>Any</option>
                <option>1+</option>
                <option>2+</option>
                <option>3+</option>
                <option>4+</option>
                <option>5+</option>
              </select>
            </div>
            
            <div className="flex flex-col space-y-2">
              <label className="text-xs tracking-widest text-primary/60 uppercase">Price</label>
              <select 
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="w-full bg-transparent border-b border-primary/20 py-2 text-primary text-sm focus:outline-none focus:border-primary cursor-none"
              >
                <option>Any</option>
                <option>Under $300k</option>
                <option>$300k–$400k</option>
                <option>$400k–$500k</option>
                <option>$500k+</option>
              </select>
            </div>

            <div className="flex flex-col space-y-2">
              <label className="text-xs tracking-widest text-primary/60 uppercase">Sort By</label>
              <select 
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="w-full bg-transparent border-b border-primary/20 py-2 text-primary text-sm focus:outline-none focus:border-primary cursor-none"
              >
                <option>Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Largest Area</option>
              </select>
            </div>
          </div>
          
          <div className="mt-8 flex justify-between items-center">
            <span className="text-sm text-primary/60">
              {filteredProperties.length} {filteredProperties.length === 1 ? 'property' : 'properties'} found
            </span>
            <button 
              onClick={clearFilters}
              className="text-xs tracking-widest uppercase text-primary border-b border-primary pb-1 hover:text-accent hover:border-accent transition-colors cursor-none"
            >
              CLEAR FILTERS
            </button>
          </div>
        </div>

        {/* Results */}
        {filteredProperties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8">
            {filteredProperties.map((prop, idx) => (
              <PropertyCard key={prop.id} property={prop} index={idx} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24 border border-primary/10">
            <h3 className="font-display text-2xl mb-4">No properties found</h3>
            <p className="text-primary/60 mb-8">No properties match your current filters.</p>
            <Button onClick={clearFilters} variant="outline">CLEAR FILTERS</Button>
          </div>
        )}
      </div>
    </PageTransition>
  );
}
