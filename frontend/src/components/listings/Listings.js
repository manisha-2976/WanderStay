import { useState, useEffect } from 'react'
import { Link, useSearchParams } from "react-router-dom";
import { useSearch } from "../../context/SearchContext";
import "./Listings.css"


export const Listings = () => {
  const [searchParams] = useSearchParams();

  const [loading, setLoading] = useState(false);
  const [allListings, setAllListings] = useState([]);
  const [error, setError] = useState("");

  const { getSearchCache, setSearchCache } = useSearch();

  const query = searchParams.get("query") || "";
  const guests = searchParams.get("guests") || 0;
  const startDate = searchParams.get("startDate");
  const endDate = searchParams.get("endDate");
  const searchKey = searchParams.toString();

  useEffect(() => {
    const fetchData = async () => {

      let cacheKey = "all";

      if (query || startDate || guests) {
        cacheKey = JSON.stringify({ query, startDate, endDate, guests });
      }

      // cache check
      const cached = getSearchCache(cacheKey);
      if (cached) {
        setAllListings(cached);
        return;
      }

      try {
        setLoading(true);
        setError("");

        let listings;

        if (query || startDate || guests) {
          const response = await fetch(
            `${process.env.REACT_APP_API_URL}/api/ai-search`,
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ query, startDate, endDate, guests })
            }
          );

          if (!response.ok) throw new Error();

          const data = await response.json();
          listings = data.listings;

        } else {
          const response = await fetch(process.env.REACT_APP_API_URL);

          if (!response.ok) throw new Error();

          listings = await response.json();
        }

        setAllListings(listings);
        setSearchCache(cacheKey, listings);

      } catch {
        setAllListings([]);
        setError("Unable to load listings. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [searchKey, query, startDate, endDate, guests, getSearchCache, setSearchCache]);


  if (loading) {
    return (
      <div className="row">
        {Array(10).fill().map((_, i) => (
          <div className="col-6 col-md-3 mb-4" key={i}>
            <div className="listing-skeleton listing-skeleton-image" />
            <div className="listing-skeleton listing-skeleton-line" />
            <div className="listing-skeleton listing-skeleton-line listing-skeleton-line-short" />
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return <h4 className="text-center mt-4 text-danger">{error}</h4>;
  }

  if (!loading && allListings.length === 0) {
    return <h4 className="text-center mt-4">No listings found</h4>;
  }


  return (
    <div className='listing-container p-5 pt-2'>
      <h3>Listings</h3>
      <div className='row row-cols-lg-4 row-cols-md-3 row-cols-2'>
        {allListings.map((listing, index) => {
           const isPriorityImage = index === 0

          return (
            <Link key={listing._id}
              to={`/listing/${listing._id}`} style={{ textDecoration: "none" }} >
              <div className="card listing-card">
                <img
                  className='listing-img'
                  src={listing?.image}
                  loading={isPriorityImage ? "eager" : "lazy"}
                  fetchPriority={isPriorityImage ? "high" : undefined}
                  decoding="async"
                  alt={listing?.title || "Listing"}
                />
                <div className="card-body">
                  <p className="card-text"><b>{listing?.title}, {listing?.city}</b> <br /> &#8377;{listing?.price?.toLocaleString("en-IN")}/night</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  )
}

