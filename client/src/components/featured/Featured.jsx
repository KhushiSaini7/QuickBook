import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {
  const { data, loading, error } = useFetch(
    "/hotels/countByCity?cities=Jaipur,Hyderabad,Mumbai"
  );

  return (
    <div className="featured">
      {loading ? (
        "Loading please wait"
      ) : (
        <>
          <div className="featuredItem">
            <img
              src="https://wallpapercave.com/dwp2x/wp2395231.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Jaipur</h1>
              <h2>{data[0]} Properties</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="https://e0.pxfuel.com/wallpapers/1001/521/desktop-wallpaper-charminar-hyderabad-and.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Hyderabad</h1>
              <h2>{data[1]} Properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://wallpapercave.com/dwp2x/wp3768681.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Mumbai</h1>
              <h2>{data[2]} Properties</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;