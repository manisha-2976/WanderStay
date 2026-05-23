import { useState, useEffect } from 'react'
import axios from "axios";
import { Link, useSearchParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useSearch } from "../../context/SearchContext";
import "./Listings.css"


export const Listings = () => {
  const [searchParams] = useSearchParams();

  const [loading, setLoading] = useState(false);
  const [allListings, setAllListings] = useState([]);

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

        let res;

        if (query || startDate || guests) {
          res = await axios.post(
            `${process.env.REACT_APP_API_URL}/api/ai-search`,
            { query, startDate, endDate, guests }
          );
          setAllListings(res.data.listings);
          setSearchCache(cacheKey, res.data.listings);

        } else {
          res = await axios.get(`${process.env.REACT_APP_API_URL}`);
          setAllListings(res.data);
          setSearchCache("all", res.data);
        }

      } catch (err) {
        console.log(err);
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
            <Skeleton height={200} />
            <Skeleton height={20} style={{ marginTop: "10px" }} />
            <Skeleton width="50%" />
          </div>
        ))}
      </div>
    );
  }

  if (!loading && allListings.length === 0) {
    return <h4 className="text-center mt-4">No listings found</h4>;
  }


  return (
    <div className='listing-container p-5 pt-2'>
      <h3>Listings</h3>
      <div className='row row-cols-lg-4 row-cols-md-3 row-cols-2'>
        {allListings.map((listing, index) => {

          return (
            <Link key={listing._id}
              to={`/listing/${listing._id}`} style={{ textDecoration: "none" }} >
              <div className="card listing-card">
                <img src={listing?.image} className="card-img-top listing-img" alt="listing img" />
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

