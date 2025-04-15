import { useState,useEffect } from 'react'
import MainNavbar from './components/common/Navbar'
import { Container } from 'react-bootstrap'
import MoviesCard from './components/common/MoviesCard'
import{ Row ,Col} from 'react-bootstrap'
import movies from './components/sample_data/movies.js'
import SearchBar from './components/common/SearchBar'
import { Spinner } from 'react-bootstrap'

function App() {
  //state management
  const [allMovies,setAllMovies] = useState([]);
  const [filteredMovies,setFilteredMovies] = useState([]);
  const [searchTerm,setSearchTerm] = useState('');
  const [isLoading,setIsLoading] = useState(true);
  
  //simulate loading data (like from an API)
  useEffect(() => {
      const timer=setTimeout(()=>{
      setAllMovies(movies);
      setFilteredMovies(movies);
      setIsLoading(false);
      },1500);//1.5 delay to simulate network request
     
      return () => clearTimeout(timer);
  
  },[]);
  
  //search functionality

  useEffect(() => {
    const results=allMovies.filter(movie=>
      movie.title.toLowerCase().includes(searchTerm.toLowerCase()) 
    );
    setFilteredMovies(results);

    },[searchTerm,allMovies]);
  
    //search bar handlers
  const handleSearchChange=(term)=>{
    setSearchTerm(term);
  };
  const handleSearchSubmit=(e)=>{
    e.preventDefault();
  };
  
  return (

    
    <div className='app'>
      <MainNavbar />
      <Container className="py-4">
        <h1 className="text-center mb-4">Movie Explorer</h1>
        
        <SearchBar 
          searchTerm={searchTerm}
          onSearchChange={handleSearchChange}
          onSearchSubmit={handleSearchSubmit}
        />

        {isLoading ? (
          <div className="text-center">
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
            <p>Loading movies...</p>
          </div>
        ) : (
          <Row xs={1} md={2} lg={3} className="g-4">
            {filteredMovies.length > 0 ? (
              filteredMovies.map((movie) => (
                <Col key={movie.id}>
                  <MoviesCard movie={movie} />
                </Col>
              ))
            ) : (
              <Col className="text-center">
                <p>No movies found matching "{searchTerm}"</p>
              </Col>
            )}
          </Row>
        )}

      <Row xs={1} md={2} lg={3} className="g-4">
          {movies.map((movie) => (
            <Col key={movie.id}>
              <MoviesCard movie={movie} />
            </Col>
          ))}
        </Row>
      </Container>
      
    </div>
      
  );
}

export default App
