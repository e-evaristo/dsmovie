import axios from 'axios';
import Pagination from 'components/Pagination/index';
import { BASE_URL } from 'utils/requests';
import MovieCard from '../../components/MovieCard/index';

export default function Listing() {
    axios.get(`${BASE_URL}/movies?size=12&page=0`)
        .then(response => {
            console.log(response);
        });
    return (        
        <>
            <Pagination />
            <div className="container">
                <div className="row">
                    
                    <div className="col-sm-6 col-lg-4 col-xl-3">
                        <MovieCard />
                    </div>

                    <div className="col-sm-6 col-lg-4 col-xl-3">
                        <MovieCard />
                    </div>

                    <div className="col-sm-6 col-lg-4 col-xl-3">
                        <MovieCard />
                    </div>

                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>

                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>

                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>

                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>

                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>

                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>

                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    
                </div>
            </div>
        </>
    );
}