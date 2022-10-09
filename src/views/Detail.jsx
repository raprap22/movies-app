import ContentDetail from "../components/ContentDetail";
import { useLocation } from "react-router-dom";
import { detailMovies } from "../actions"
import { connect } from "react-redux";
// import { render } from "@testing-library/react";
function Detail() {
    const loc = useLocation();
    const data = loc.state
    if (data !== null) {
        let url = "https://swapi.dev/api/" + loc.state.category + "/" + loc.state.id;
        fetch(url, {
            method: 'GET'
        })
            .then(response => response.json())
            .then((jsonObject) => 
            {
                detailMovies(jsonObject);
                console.log("fatal", detailMovies(jsonObject));
            });
    }
    return (
        <div className="container mt-2">
            <ContentDetail />
        </div>
    )
}

export default connect(null, { detailMovies })(Detail);