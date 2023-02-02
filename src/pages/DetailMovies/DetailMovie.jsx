// import axios from 'axios';
// import { useEffect, useState } from 'react';
// import HeaderMainOverview from './components/Header/_index';
// import Cast from './components/Contents/Cast';
// import Collection from './components/Contents/Collection';
// import Media from './components/Contents/Media';
// import NavbarOverview from './components/Contents/NavbarOverview';
// import Recommendations from './components/Contents/Recommendations';
// import classNames from 'classnames/bind';
// import styles from './DetailMovie.module.scss';
// import SocialOverview from './components/Contents/SocialOverview';

// const cx = classNames.bind(styles);

// function DetailMovies() {
//     let local = window.localStorage.getItem('idMovies');

//     const dataLocal = JSON.parse(local);
//     const idMovies = Number(dataLocal);
//     const [isDetailsMovies, setIsDetailsMovies] = useState([]);
//     const [isAPIMovieCast, setIsAPIMovieCast] = useState([]);

//     useEffect(() => {
//         axios
//             .get(
//                 `https://api.themoviedb.org/3/movie/${idMovies}?api_key=e9e9d8da18ae29fc430845952232787c&append_to_response=videos`,
//             )
//             .then(function (response) {
//                 setIsDetailsMovies(response.data);
//             })
//             .catch(function (error) {
//                 console.log(error);
//             });
//         axios
//             .get(`http://api.themoviedb.org/3/movie/${idMovies}/casts?api_key=e9e9d8da18ae29fc430845952232787c`)
//             .then(function (response) {
//                 setIsAPIMovieCast(response.data);
//             })
//             .catch(function (error) {
//                 console.log(error);
//             });
//         // eslint-disable-next-line react-hooks/exhaustive-deps
//     }, []);

//     return (
//         <div>
//             <NavbarOverview />
//             {isDetailsMovies.length === 0 && isAPIMovieCast.length === 0 ? (
//                 ''
//             ) : (
//                 <HeaderMainOverview listData={isDetailsMovies} listCast={isAPIMovieCast} />
//             )}
//             <div>
//                 <div
//                     className={cx('contents')}
//                 >
//                     <div >
//                         <div>
//                             {isAPIMovieCast.length === 0 ? '' : <Cast listData={isAPIMovieCast} />}
//                             <SocialOverview />
//                             <Media />
//                             <Collection />
//                             <Recommendations />
//                         </div>
//                     </div>
                   
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default DetailMovies;
