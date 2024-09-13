import { SEO } from "../components";
import { token } from "../constants/config";
import { useState, useEffect } from "react";

function Track({ name, artists }) {
  return (
    <div className="flex flex-col gap-4 ">
      <div className="bg-[#0A1C20] rounded-[10px] p-4 flex flex-col items-start mt-3">
        <h2 className="text-lg font-bold">{name}</h2>
        <p className="text-[#FFFFFF99]">by {artists.join(", ")}</p>
      </div>
    </div>
  );
}

const Spotify = () => {
  const [topTracks, setTopTracks] = useState([]);
  const [error, setError] = useState(null);

  async function fetchWebApi(endpoint, method, body) {
    const res = await fetch(`https://api.spotify.com/${endpoint}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method,
      body: JSON.stringify(body),
    });
    return await res.json();
  }

  async function getTopTracks() {
    return (
      await fetchWebApi("v1/me/top/tracks?time_range=long_term&limit=7", "GET")
    ).items;
  }

  const fetchTopTracks = async () => {
    try {
      const tracks = await getTopTracks();
      setTopTracks(tracks);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchTopTracks();
  }, []);

  return (
    <>
      <SEO title="Top Tracks" />
      <div className="max-w-md mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-4">
          Spotify Top Tracks
        </h1>
        {error ? (
          <p className="text-red-600">{error}</p>
        ) : (
          <ul>
            {topTracks.map((track) => (
              <li key={track.id}>
                <Track
                  name={track.name}
                  artists={track.artists.map((artist) => artist.name)}
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default Spotify;
